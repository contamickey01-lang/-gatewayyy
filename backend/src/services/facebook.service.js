const axios = require('axios');
const crypto = require('crypto');

class FacebookService {
    /**
     * Hash data using SHA256 (required by Facebook CAPI)
     * @param {string} data 
     * @returns {string} hashed data
     */
    static hash(data) {
        if (!data) return null;
        return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
    }

    /**
     * Send Purchase Event to Facebook Conversions API
     * @param {object} order - Order object
     * @param {object} product - Product object with pixel settings
     */
    static async sendPurchaseEvent(order, product) {
        if (!product.facebook_pixel_id || !product.facebook_api_token) {
            console.log('[Facebook CAPI] Skipping: Missing Pixel ID or Access Token');
            return;
        }

        const pixelId = product.facebook_pixel_id;
        const accessToken = product.facebook_api_token;
        const url = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`;

        const eventData = {
            event_name: 'Purchase',
            event_time: Math.floor(Date.now() / 1000),
            event_source_url: `https://seugateway.com/checkout/${product.id}`, // Idealmente a URL real
            event_id: order.id, // Critical for deduplication with frontend pixel
            action_source: 'website',
            user_data: {
                em: [this.hash(order.buyer_email)],
                ph: [this.hash(order.buyer_phone)],
                // external_id: [this.hash(order.buyer_id)] // Se tiver ID de comprador
            },
            custom_data: {
                value: (order.amount / 100).toFixed(2),
                currency: 'BRL',
                content_name: product.name,
                content_ids: [product.id],
                content_type: 'product'
            }
        };

        // Add IP and User Agent if available (passed from webhook or stored in order)
        // Note: In webhook context, we might not have the original client IP/UA easily unless stored in order.
        // If stored in order meta_data, use it. For now, we skip or use default if needed.
        // Facebook CAPI recommends client_user_agent and client_ip_address.
        // If we stored them in orders table during checkout, we should use them.
        // Checking orders table schema: created_at, updated_at, etc. No ip/ua columns.
        // We can add them later or just proceed with what we have (email/phone matches are strong).

        try {
            const response = await axios.post(url, {
                data: [eventData]
            });
            console.log(`[Facebook CAPI] Event sent successfully for Order ${order.id}`);
            return response.data;
        } catch (error) {
            console.error('[Facebook CAPI] Error sending event:', error.response?.data || error.message);
            // Don't throw, just log. We don't want to break the webhook processing.
        }
    }
}

module.exports = FacebookService;
