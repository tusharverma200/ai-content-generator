import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/utils/schema.tsx',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_Vi0bxL1GaTAB@ep-yellow-water-a8risxub-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
  },
});
