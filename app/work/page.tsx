import { createClient } from '@/utils/supabase/server';
import WorkClient from './WorkClient';
import type { HeroImage, Project } from '@/types/supabase';

export const revalidate = 0;

export default async function WorkPage() {
  const supabase = await createClient();

  // Fetch hero image
  const { data: heroData } = await supabase
    .from('hero_images')
    .select('*')
    .eq('page', 'work')
    .single();

  // Fetch all projects
  const { data: projectsData } = await supabase
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true });

  const projects = projectsData || [];

  return (
    <WorkClient
      hero={heroData as HeroImage | null}
      projects={projects as Project[]}
    />
  );
}
