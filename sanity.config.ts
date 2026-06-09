import { defineConfig } from 'sanity'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Lumina Sanctuary',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/admin',
  schema: {
    types: schemaTypes,
  },
})
