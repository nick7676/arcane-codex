import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { routeTree } from './routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider, } from '@tanstack/react-query'
import "./libs/locales/i18n";
import queryClient from './configs/queryClient'

const router = createRouter({ routeTree, basepath: '/arcane-codex' })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
