import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  turbopack: {
    // Point turbopack at this project's own directory so it doesn't
    // pick up the root-level package-lock.json at C:\Users\bk798\
    root: path.resolve(__dirname),
  },
}

export default nextConfig