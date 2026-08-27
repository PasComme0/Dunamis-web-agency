import { createClient } from '@/utils/supabase/server';
import AboutClient from './AboutClient';
import type { HeroImage } from '@/types/supabase';

export const revalidate = 0;

export default async function AboutPage() {
  const supabase = await createClient();

  // Fetch hero image
  const { data: heroData } = await supabase
    .from('hero_images')
    .select('*')
    .eq('page', 'about')
    .single();

  return <AboutClient hero={heroData as HeroImage | null} />;
}
