import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
}from "react-router-dom"
import HomePage from "../Pages/HomePage"
import  Layout  from "../Router/Layout"

const router =createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route path="Home" element={<HomePage/>}/>
    </Route>
))

function App(){
    return(
        <RouterProvider router={router}/>
    )
}

export default App;