// next.config.mjs
import createMDX from '@next/mdx';

const withMDX = createMDX({
  /* Your MDX options here */
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', 

  images: {
    unoptimized: true,
  },

  output: 'export', 

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // ... other config
};

export default withMDX(nextConfig);
