-- ============================================
-- GouPay - Members Area Schema
-- Modules, Lessons, and Enrollments
-- ============================================

-- Table for modules within a product
CREATE TABLE IF NOT EXISTS product_modules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table for lessons within a module
CREATE TABLE IF NOT EXISTS product_lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  module_id UUID NOT NULL REFERENCES product_modules(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  video_url TEXT,
  video_source VARCHAR(20) DEFAULT 'youtube', -- youtube, vimeo, external
  "order" INTEGER DEFAULT 0,
  content TEXT, -- rich text content/markdown
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table for classroom files/attachments
CREATE TABLE IF NOT EXISTS product_files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id UUID NOT NULL REFERENCES product_lessons(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  file_url TEXT NOT NULL,
  file_type VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table for customer enrollments (access control)
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  order_id UUID REFERENCES orders(id) ON DELETE SET NULL,
  status VARCHAR(20) DEFAULT 'active', -- active, suspended, expired
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_modules_product_id ON product_modules(product_id);
CREATE INDEX IF NOT EXISTS idx_lessons_module_id ON product_lessons(module_id);
CREATE INDEX IF NOT EXISTS idx_files_lesson_id ON product_files(lesson_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_user_id ON enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_product_id ON enrollments(product_id);

ALTER TABLE product_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Modules read by owner or enrolled"
ON product_modules FOR SELECT
TO authenticated
USING (
  EXISTS (SELECT 1 FROM products p WHERE p.id = product_modules.product_id AND p.user_id = auth.uid())
  OR EXISTS (
    SELECT 1 FROM enrollments e
    WHERE e.product_id = product_modules.product_id AND e.user_id = auth.uid() AND e.status = 'active'
  )
);

CREATE POLICY "Lessons read by owner or enrolled"
ON product_lessons FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM product_modules m
    JOIN products p ON p.id = m.product_id
    WHERE m.id = product_lessons.module_id AND p.user_id = auth.uid()
  )
  OR EXISTS (
    SELECT 1 FROM enrollments e
    JOIN product_modules m ON m.id = product_lessons.module_id
    WHERE e.product_id = m.product_id AND e.user_id = auth.uid() AND e.status = 'active'
  )
);

CREATE POLICY "Files read by owner or enrolled"
ON product_files FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM product_lessons l
    JOIN product_modules m ON m.id = l.module_id
    JOIN products p ON p.id = m.product_id
    WHERE l.id = product_files.lesson_id AND p.user_id = auth.uid()
  )
  OR EXISTS (
    SELECT 1 FROM enrollments e
    JOIN product_lessons l ON l.id = product_files.lesson_id
    JOIN product_modules m ON m.id = l.module_id
    WHERE e.product_id = m.product_id AND e.user_id = auth.uid() AND e.status = 'active'
  )
);

CREATE POLICY "Enrollments read own or by product owner"
ON enrollments FOR SELECT
TO authenticated
USING (
  user_id = auth.uid()
  OR EXISTS (
    SELECT 1 FROM products p WHERE p.id = enrollments.product_id AND p.user_id = auth.uid()
  )
);
