import BlogPostList from './components/BlogPostList'
import './index.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Cornerstone Blog by Julio</h1>
      </header>
      <main>
        <BlogPostList />
      </main>
    </div>
  )
}

export default App
