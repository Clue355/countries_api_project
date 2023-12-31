/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "flagcdn.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                pathname: "**",
            },
        ],
    },
};
