-- Adiciona colunas para Facebook Pixel e CAPI Token na tabela de produtos
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS facebook_pixel_id TEXT;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS facebook_api_token TEXT;
