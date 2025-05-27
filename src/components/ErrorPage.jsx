import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h1>OOPs!! looks like you're in the wrong room </h1>
        <Link to='/'>Go back to home </Link>
    </div>
  )
}

export default ErrorPage