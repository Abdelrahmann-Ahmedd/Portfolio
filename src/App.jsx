import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './Pages/Layout/Layout'
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Resume from './Pages/Resume/Resume';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';

const myRouter = createBrowserRouter([
  {path:"/" , element: <Layout/> ,children: [
    { path:"/", element: <Portfolio/>},
    { path:"/portfolio", element: <Portfolio/>},
    { path:"/contact", element: <Contact/>},
    { path:"/resume", element: <Resume/>},
    { path:"/About", element: <About/>},
    { path:"/About", element: <About/>},
    { path:"*", element: <Error />},
  ]}
])

function App() {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
