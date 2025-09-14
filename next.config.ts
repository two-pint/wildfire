import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ['@sanity/ui', '@sanity/icons'],
  experimental: {
    // Disable turbopack for Sanity compatibility
    turbo: {
      rules: {
        '*.{js,jsx,ts,tsx}': {
          loaders: ['babel-loader'],
        },
      },
    },
  },
  // Ensure proper handling of ES modules
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
      '.jsx': ['.jsx', '.tsx'],
    }
    return config
  },
}

export default nextConfig
