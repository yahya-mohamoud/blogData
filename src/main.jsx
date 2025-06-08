import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,createBrowserRouter,Navigate,RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import MainContent from './components/MainContent.jsx'
import HomePage from './components/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/posts/:id',
        element: <MainContent />
      }, 
      {
        path: '/posts',
        element: <MainContent />
      }, 

      {
        index: true,
        element: <Navigate to={'/home'} replace />
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '*',
        element: <ErrorPage />
      }

    ]
  }, 
 
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
