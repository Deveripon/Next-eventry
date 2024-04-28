/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/devripon/**",
            },
        ],
    },
};
const plaiceholder = withPlaiceholder;

export default nextConfig;

