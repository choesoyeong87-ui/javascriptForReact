import { RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './router/root'

function App() {
 

  return (
    <>
      <RouterProvider router={Root}/>
    </>
  )
}

export default App
