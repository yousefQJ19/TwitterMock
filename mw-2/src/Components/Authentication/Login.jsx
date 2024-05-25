import {Box, Button, Input} from "@chakra-ui/react"
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";


function LoginPage(){
    const [email,setEmail]=useState("")
    const [password,setPassword]= useState("")
    const[isُExisting,setIsExisting] =useState("false")

    console.log(email+password)
    return(
        <Box>
            <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            <Input placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            <Button><NavLink to={"Home"}>Login</NavLink></Button>
            <Outlet/>
        </Box>
    )
}

export default LoginPage;