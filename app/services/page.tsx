import { createClient } from '@/utils/supabase/server';
import ServicesClient from './ServicesClient';
import type { HeroImage } from '@/types/supabase';

export const revalidate = 0;

export default async function ServicesPage() {
  const supabase = await createClient();

  // Fetch hero image
  const { data: heroData } = await supabase
    .from('hero_images')
    .select('*')
    .eq('page', 'services')
    .single();

  return <ServicesClient hero={heroData as HeroImage | null} />;
}
