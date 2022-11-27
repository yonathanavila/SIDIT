/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        dangerouslyAllowSVG: true,
        domains: [
            'tailwindui.com',
            'flowbite.com'
        ]
    }
}

module.exports = nextConfig
