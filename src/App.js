import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Error from './Components/Error/Error';


const myRouter = createBrowserRouter([
  {path: "/" , element: <Layout /> , children:[
      {path:"" , element: <Home />},
      {path:"home" , element: <Home />},
      {path:"projects" , element: <Projects />},
      {path:"contact" , element: <Contact />},
      {path:"about" , element: <About />},
      {path:"*" , element: <Error />},
    ]},
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
