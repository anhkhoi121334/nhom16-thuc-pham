/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'template-intern.l5elb4sxvvqkvl.flashvps.xyz',
            port: '', // để trống nếu không có port cụ thể
            pathname: '/**', // cho phép tất cả các đường dẫn
          },
        ],
      },

};

export default nextConfig;
