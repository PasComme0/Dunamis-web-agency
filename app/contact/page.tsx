import { createClient } from '@/utils/supabase/server';
import ContactClient from './ContactClient';
import type { HeroImage } from '@/types/supabase';

export const revalidate = 0;

export default async function ContactPage() {
  const supabase = await createClient();

  // Fetch hero image
  const { data: heroData } = await supabase
    .from('hero_images')
    .select('*')
    .eq('page', 'contact')
    .single();

  return <ContactClient hero={heroData as HeroImage | null} />;
}
