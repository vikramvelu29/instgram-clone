import Story from './Story'
import Post from './Post'
function Content() {
  return (
    <div>
        <div className='story'><Story></Story></div>
        <div><Post></Post></div>
    </div>
  )
}

export default Content