import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { CookiesProvider } from 'react-cookie'

const client = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <QueryClientProvider client={client}>
    <CookiesProvider>
    <App />
    <Toaster position="top-center" reverseOrder={false}/>
    </CookiesProvider>
    </QueryClientProvider>
    </BrowserRouter>
)
