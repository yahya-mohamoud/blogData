import { useOutletContext, useParams, Link } from 'react-router-dom'

function MainContent() {
  const { id } = useParams()
  const { posts } = useOutletContext()

  if(!id){
    return (
      <div className="post-Viewer">
        <h2>welcome to post viewer</h2>
        <p>you can go back to home </p>
        <Link to={'/home'}>Home</Link>
      </div>
    )
  } 

  const post = posts.find(p => p.id === Number(id))

  return (
    <div className='post'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default MainContent