import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import { ClerkProvider, SignIn } from '@clerk/clerk-react'
import Profile from './profile/Index'
import AddListing from './add-listing'
import { Toaster } from './components/ui/sonner'
import SearchByCategory from './search/[category]'
import SearchByOptions from './search'
import ListingDetails from './listing-details/[id]'
import {About,
    Careers,
    History,
    Services,
    Projects
  } from './Pages/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/add-listing',
    element: <AddListing />,
  },
  {
    path: '/search/:category',
    element: <SearchByCategory />,
  },
  {
    path: '/search',
    element: <SearchByOptions />,
  },
  {
    path: '/listing-details/:id',
    element: <ListingDetails />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/careers',
    element: <Careers />,
  },
  {
    path: '/history',
    element: <History />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/projects',
    element: <Projects />,
  }
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router}/>
      <Toaster/>
    </ClerkProvider>
  </StrictMode>,
)
