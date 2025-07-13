/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static generation for better performance
  output: 'export',
  
  // Optimize images for static export
  images: {
    unoptimized: true,
  },
  
  // Disable server-side features for static export
  trailingSlash: true,
  
  // Optimize bundle size
  experimental: {
    optimizeCss: true,
  },
  
  // Compress static assets
  compress: true,
  
  // Enable static optimization
  staticPageGenerationTimeout: 120,
  
  // Optimize for performance
  poweredByHeader: false,
  
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Optimize webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size in production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    return config;
  },
};

export default nextConfig;
