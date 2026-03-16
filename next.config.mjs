/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/docs/score", destination: "/docs", permanent: false },
      { source: "/docs/fraud", destination: "/docs", permanent: false },
      { source: "/docs/docintel", destination: "/docs", permanent: false },
      { source: "/docs/loanvoice", destination: "/docs", permanent: false },
      { source: "/docs/portfolio", destination: "/docs", permanent: false },
      { source: "/docs/cashflow", destination: "/docs", permanent: false },
      { source: "/docs/kyc", destination: "/docs", permanent: false },
      { source: "/docs/:path+", destination: "/docs", permanent: false },
    ]
  },
}

export default nextConfig
