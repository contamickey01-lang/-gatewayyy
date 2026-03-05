'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = (pixelId) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
    }
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', name, options);
    }
};

export default function FacebookPixel({ pixelId, product }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) return;
        pageview(pixelId);
    }, [pathname, searchParams, loaded, pixelId]);

    useEffect(() => {
        if (!loaded || !product) return;
        
        // Dispara InitiateCheckout assim que o pixel carrega e o produto existe
        event('InitiateCheckout', {
            content_name: product.name,
            content_ids: [product.id],
            content_type: 'product',
            value: (product.price / 100).toFixed(2),
            currency: 'BRL',
            num_items: 1
        });
    }, [loaded, product]);

    if (!pixelId) return null;

    return (
        <div>
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                onLoad={() => setLoaded(true)}
                dangerouslySetInnerHTML={{
                    __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${pixelId}');
                    fbq('track', 'PageView');
                    `,
                }}
            />
        </div>
    );
}
