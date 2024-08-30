import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
let nextConfig = {
  output: "export",
  crossOrigin: "anonymous",
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

nextConfig = withMDX(nextConfig);

export default nextConfig;
