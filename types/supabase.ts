export type ProjectCategory =
  | 'E-commerce'
  | 'Plateforme SaaS'
  | 'Mobile Natif'
  | 'Web & Identité'
  | 'IA & Data';

export interface HeroImage {
  id: string;
  page: string;
  image_url: string;
  alt: string;
  opacity: number;
  updated_at: string;
}

export interface Project {
  id: string;
  client: string;
  year: string;
  category: ProjectCategory;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  href: string;
  display_order: number;
  updated_at: string;
}
