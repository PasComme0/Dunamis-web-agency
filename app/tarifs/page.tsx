import { createClient } from '@/utils/supabase/server';
import TarifsClient from './TarifsClient';
import type { HeroImage } from '@/types/supabase';

export const revalidate = 0;

export default async function TarifsPage() {
  const supabase = await createClient();

  // Fetch hero image
  const { data: heroData } = await supabase
    .from('hero_images')
    .select('*')
    .eq('page', 'tarifs')
    .single();

  return <TarifsClient hero={heroData as HeroImage | null} />;
}
