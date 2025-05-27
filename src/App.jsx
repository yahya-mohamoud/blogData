import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonPlaceholder.typicode.com/posts?_limit=12', {mode: 'cors'})
        if(!response.ok) {
          throw new Error("Server Error");    
        }
        const postData = await response.json()
        setPosts(postData)
        
      } catch (error) {
        setError("this error was encauntered when trying to reach the API")
      } finally {
        setLoading(false)
      }
    }  
    fetchPosts()  
  }, [])
  
  
  
  return (
    <div>
      <Header />
      <div className="flex">
      <Sidebar 
        posts={posts}
        loading={loading}
        error={error}
      />
      <main>
      <Outlet context={{posts}}/>
      </main>

      </div>
    </div>
  )
}

export default App