-- Adiciona coluna para armazenar o ID do chat do Telegram do usuário
ALTER TABLE users ADD COLUMN IF NOT EXISTS telegram_chat_id BIGINT;
