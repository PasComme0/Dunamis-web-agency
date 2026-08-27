import { createClient } from '@/utils/supabase/server';
import HomeClient from './HomeClient';
import type { HeroImage, Project } from '@/types/supabase';

export const revalidate = 0; // Or define a revalidation time like 60 for ISR

export default async function HomePage() {
  const supabase = await createClient();

  // Fetch hero image
  const { data: heroData } = await supabase
    .from('hero_images')
    .select('*')
    .eq('page', 'home')
    .single();

  // Fetch featured projects (Aura Botanica & Nexus Wealth) - using id '01' and '04'
  const { data: featuredProjectsData } = await supabase
    .from('projects')
    .select('id, href')
    .in('id', ['01', '04']);

  // Sort them so they are in the expected order if both exist
  const featuredProjects = featuredProjectsData ? [
    featuredProjectsData.find(p => p.id === '01'),
    featuredProjectsData.find(p => p.id === '04')
  ].filter(Boolean) as Pick<Project, 'id' | 'href'>[] : [];

  return (
    <HomeClient
      hero={heroData as HeroImage | null}
      featuredProjects={featuredProjects}
    />
  );
}
