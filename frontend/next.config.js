/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        API_URL: "http://localhost:5000",
        WEB_URL: "http://localhost:3000",
    },
};

module.exports = nextConfig;
