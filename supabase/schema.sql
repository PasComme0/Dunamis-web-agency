-- ============================================================
-- Dunamis Web Agency — Supabase Schema
-- Run this in the Supabase SQL Editor
-- ============================================================

-- ─── TABLE: hero_images ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.hero_images (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page        text UNIQUE NOT NULL,   -- 'home' | 'services' | 'work' | 'about' | 'contact' | 'tarifs'
  image_url   text NOT NULL,
  alt         text NOT NULL DEFAULT '',
  opacity     numeric NOT NULL DEFAULT 0.8,
  updated_at  timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security (read-only for anonymous users)
ALTER TABLE public.hero_images ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read hero_images" ON public.hero_images;
CREATE POLICY "Public read hero_images" ON public.hero_images
  FOR SELECT USING (true);

-- ─── SEED: hero_images ────────────────────────────────────────
-- All hero images are served from Supabase Storage bucket "assets".
-- Upload hero images to: Storage > assets > hero/ folder
-- e.g. hero-home.jpg, hero-services.jpg, hero-work.jpg, etc.
-- Currently all pages share the same Dunamis.png image (update per page in the dashboard).
INSERT INTO public.hero_images (page, image_url, alt, opacity) VALUES
  ('home',     'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/hero/hero-home.jpg',     'Vue architecturale atmosphérique', 0.8),
  ('services', 'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/hero/hero-home.jpg',     'Services hero background', 0.4),
  ('work',     'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/hero/hero-home.jpg',     'Réalisations hero background', 0.35),
  ('about',    'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/hero/hero-home.jpg',     'À propos hero background', 0.35),
  ('contact',  'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/hero/hero-home.jpg',     'Contact hero background', 0.35),
  ('tarifs',   'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/hero/hero-home.jpg',     'Tarifs hero background', 0.35)
ON CONFLICT (page) DO UPDATE
  SET image_url  = EXCLUDED.image_url,
      alt        = EXCLUDED.alt,
      opacity    = EXCLUDED.opacity,
      updated_at = now();


-- ─── TABLE: projects ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.projects (
  id            text PRIMARY KEY,               -- '01' … '10'
  client        text NOT NULL,
  year          text NOT NULL,
  category      text NOT NULL,
  title         text NOT NULL,
  description   text NOT NULL,
  technologies  text[] NOT NULL DEFAULT '{}',
  image         text NOT NULL,
  href          text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  updated_at    timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security (read-only for anonymous users)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read projects" ON public.projects;
CREATE POLICY "Public read projects" ON public.projects
  FOR SELECT USING (true);

-- ─── SEED: projects ──────────────────────────────────────────
-- Images are served from Supabase Storage bucket "assets" under the "projects/" folder.
-- Upload each image to: Storage > assets > projects > project-01.jpg … project-10.jpg
INSERT INTO public.projects (id, client, year, category, title, description, technologies, image, href, display_order) VALUES
  ('01', 'Lumina Luxury',    '2025', 'E-commerce',      'Redéfinir le commerce de détail numérique pour le luxe moderne.',          'Refonte intégrale de la plateforme d''achat avec expérience 3D immersive et parcours de commande haute conversion.',                         ARRAY['Next.js', 'Shopify Plus', 'Tailwind CSS', 'Stripe'],          'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/projects/project-01.jpg', '/work/lumina',  1),
  ('02', 'Aether Systems',   '2025', 'Plateforme SaaS', 'Un centre de commandement pour l''infrastructure distribuée.',              'Tableau de bord temps réel gérant des flux de données massifs avec monitoring prédictif et alertes instantanées.',                         ARRAY['React', 'TypeScript', 'WebSockets', 'Go Engine'],             'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/projects/project-02.jpg', '/work/aether',  2),
  ('03', 'Vesper',           '2024', 'Mobile Natif',    'Le concierge personnel nouvelle génération dans votre poche.',             'Application mobile native haut de gamme offrant des réservations instantanées et un service client par messagerie chiffrée.',              ARRAY['Swift', 'iOS Native', 'SwiftUI', 'Node.js API'],              'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/projects/project-03.jpg', '/work/vesper',  3),
  ('04', 'Nexus Wealth',     '2024', 'Plateforme SaaS', 'Établir l''autorité et la sécurité dans la gestion de patrimoine.',        'Portail client sécurisé simplifiant le partage d''actifs, l''audit et la visualisation de portefeuilles financiers complexes.',              ARRAY['Next.js', 'PostgreSQL', 'FinTech Security', 'TypeScript'],    'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/projects/project-04.jpg', '/work/nexus',   4),
  ('05', 'Pulse Medical AI', '2025', 'IA & Data',       'Diagnostic prédictif et assistance clinique intelligente.',                'Système d''analyse médicale avancée permettant aux praticiens de traiter les rapports d''imagerie 4x plus rapidement.',                 ARRAY['Python', 'PyTorch', 'Next.js', 'FastAPI', 'HIPAA Cloud'],     'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/projects/project-05.jpg', '/work/pulse',   5),
  ('06', 'Nova Studio',      '2024', 'Web & Identité',  'Identité de marque et présence digitale cinématographique.',               'Création d''un univers visuel complet et d''un site interactif fluide avec micro-interactions et animations 60 FPS.',                      ARRAY['WebGL', 'Motion', 'Tailwind CSS', 'Next.js'],                 'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/projects/project-06.jpg', '/work/nova',    6),
  ('07', 'Orbit Logistics',  '2024', 'Plateforme SaaS', 'Optimisation de fret et chaîne logistique en temps réel.',                'Plateforme logistique automatisée connectant 1 500+ transporteurs avec traçabilité GPS et calcul d''itinéraires par IA.',                 ARRAY['Next.js', 'Mapbox GL', 'Redis', 'Docker', 'GraphQL'],         'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/projects/project-07.jpg', '/work/orbit',   7),
  ('08', 'Solis Energy',     '2024', 'IA & Data',       'Gestion intelligente des parcs solaires et prévision énergétique.',        'Supervision énergétique connectée via capteurs IoT et algorithmes d''ajustement de production électrique en temps réel.',                 ARRAY['IoT Gateway', 'TimescaleDB', 'React', 'Tailwind CSS'],        'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/projects/project-08.jpg', '/work/solis',   8),
  ('09', 'Kroma Atelier',    '2025', 'Web & Identité',  'La vitrine digitale des grands projets d''architecture moderne.',          'Galerie interactive haute définition mettant en valeur les réalisations internationales avec navigation ultra-rapide.',                    ARRAY['Next.js', 'Sanity CMS', 'Lenis', 'Vercel Edge'],              'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/projects/project-09.jpg', '/work/kroma',   9),
  ('10', 'Chronos Horlogerie','2025','E-commerce',      'Boutique exclusive et configurateur sur mesure de garde-temps.',           'Plateforme e-commerce sur invitation avec module de personnalisation de montres de prestige en temps réel.',                              ARRAY['Shopify Custom', 'Three.js', 'TypeScript', 'Next.js'],        'https://zgfyhgiwizyknhnegkoy.supabase.co/storage/v1/object/public/assets/projects/project-10.jpg', '/work/chronos',10)
ON CONFLICT (id) DO UPDATE
  SET client        = EXCLUDED.client,
      year          = EXCLUDED.year,
      category      = EXCLUDED.category,
      title         = EXCLUDED.title,
      description   = EXCLUDED.description,
      technologies  = EXCLUDED.technologies,
      image         = EXCLUDED.image,
      href          = EXCLUDED.href,
      display_order = EXCLUDED.display_order,
      updated_at    = now();

-- ─── TABLE: contact_messages ──────────────────────────────────
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service     text NOT NULL,
  name        text NOT NULL,
  company     text,
  email       text NOT NULL,
  phone       text,
  message     text NOT NULL,
  status      text NOT NULL DEFAULT 'new', -- 'new', 'read', 'archived'
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS so users can insert but not read other people's messages
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone (even anonymous users) to insert new messages
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON public.contact_messages;
CREATE POLICY "Enable insert for anonymous users" ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);
