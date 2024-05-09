/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
          {
            source: '/api/v1/auth/:path*',
            destination: 'http://localhost:55/api/v1/auth/:path*', // Cambia esto a la URL de tu API
          },
        ];
      },

};

export default nextConfig;
