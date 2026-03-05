-- Adiciona coluna para armazenar a data de aceitação dos termos
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS terms_accepted_at TIMESTAMPTZ;
