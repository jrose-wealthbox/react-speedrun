import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'directory-listing',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url.split('?')[0]
          if (!url.endsWith('/')) return next()

          const dirPath = path.join(process.cwd(), url)
          if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) return next()

          const entries = fs.readdirSync(dirPath).sort()
          const items = entries
            .map(e => {
              const isDir = fs.statSync(path.join(dirPath, e)).isDirectory()
              return `<li><a href="${e}${isDir ? '/' : ''}">${e}${isDir ? '/' : ''}</a></li>`
            })
            .join('\n')

          res.setHeader('Content-Type', 'text/html')
          res.end(`<!doctype html><html><body><h2>${url}</h2><ul>${items}</ul></body></html>`)
        })
      },
    },
  ],
})
