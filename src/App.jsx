import { useState, useEffect, useReducer } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const reducer = (state, action) => {
   switch(action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null }
      
    case "FETCH_SUCCESS":
      return { ...state, posts: action.payload, loading: false, error: null }
      
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload }
      
    case "CLEAR_ALL":
      return { ...state, posts: [] }
      
    default:
      return state
  }
}

const initialState = {
  posts: [],
  loading: true,
  error: null
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    const fetchPosts = async () => {
      dispatch({type: 'FETCH_START'})
      try {
        const response = await fetch('https://jsonPlaceholder.typicode.com/posts?_limit=12', {mode: 'cors'})
        if(!response.ok) {
          throw new Error("Server Error");    
        }
        const postData = await response.json()
        dispatch({type: 'FETCH_SUCCESS', payload: postData ,loading: true, error: null})
        
      } catch (error) {
        dispatch({type: 'FETCH_ERROR', payload: error.message})
      }
    }  
    fetchPosts()  
  }, [])
  
  
  
  return (
    <div>
      <Header />
      <div className="flex">
      <Sidebar 
        posts={state.posts}
        loading={state.loading}
        error={state.error}
      />
      <main>
      <Outlet context={state}/>
      </main>

      </div>
    </div>
  )
}

export default App