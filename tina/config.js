import { defineConfig } from "tinacms";
import page from "./collections/page";
import post from "./collections/post";
import product from "./collections/product"; // new collection for your shop

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder
    outputFolder: "admin", // admin panel output
  },
  schema: {
    collections: [
      page,    // existing pages
      post,    // existing posts
      product, // new products collection for your shop
    ],
  },
});

export default config;
