import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'zgfyhgiwizyknhnegkoy.supabase.co',
        port: '',
        pathname: '/storage/v1/object/**',
      },
    ],
  },
  transpilePackages: ['motion'],
};

export default nextConfig;
