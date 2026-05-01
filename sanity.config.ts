import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'LSP Studio',

  projectId,
  dataset,
  apiVersion,

  basePath: '/studio',

  plugins: [structureTool({ structure }), visionTool()],

  schema,
})
