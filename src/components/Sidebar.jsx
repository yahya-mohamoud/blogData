import {NavLink} from 'react-router-dom'

function Sidebar({loading, posts, error}) {
  if(error) return <h1>Error happened {error}</h1>
  if(loading) return <h1>Loading ...</h1>
  return (
    <div className='sidebar'>
      <h1>Posts</h1>
      {posts && posts.map((post) => {
        return <ul  className='post-list'>
          <li key={post.id} className='post-item'>
            <NavLink to={`/posts/${post.id}`} className={({ isActive }) => isActive ? "active-link" : "post-link"}>{post.title}</NavLink>
          </li>
        </ul>
      })}
    </div>
  )
}

export default Sidebar