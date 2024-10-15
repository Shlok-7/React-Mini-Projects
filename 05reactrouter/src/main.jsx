import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/user.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'


// how to create router  using createBrowserRouter 


//syntax1


// const router=createBrowserRouter([
//   {
//   path: '/',
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
// }
// ])

//OR

//syntax2

const router=createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
{/* dynamicc id created in user so whenever user types something it will displayed their     */}
    <Route
    // optimize api calls  using loader element 
    loader={githubInfoLoader}
     path='github'
      element={<Github/>}
      />
    
     </Route>
  )
)
// basically we have used the layout and all the components like home, about, contact,user,github has nested inside layout so as we see in layout .jsx wd have called them there

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
// created router 
// just by typing the RouterProvider router={router}