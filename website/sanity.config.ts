import { defineConfig } from 'sanity'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Lumina Sanctuary',
  projectId: 'your-project-id', // Replace with actual project ID
  dataset: 'production',
  basePath: '/admin',
  schema: {
    types: schemaTypes,
  },
})
