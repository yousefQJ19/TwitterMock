import {Box, Button, Flex, Input} from "@chakra-ui/react"
import { NavLink, Outlet } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";


function LoginPage(){
    const [email,setEmail]=useState("")
    const [password,setPassword]= useState("")
    const[isُExisting,setIsExisting] =useState("false")

    console.log(email+password)
    return(
        <Flex w={"100%"} 
                h={"100vh"} 
                bg={"black"}
                alignItems={"center"} 
                justifyContent={"space-around"}>

            <FaXTwitter size={400} color="white"/>

            <Flex w={"25%"} 
                // position={"relative"} 
                // top={"30%"} 
                // left={"37.5%"}
                bg={"white"}
                flexDirection={"column"}
                borderRadius={10}
                h={"400px"}
                justifyContent={"space-between"}>

                <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                <Input placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <Button><NavLink to={"/"}>Login</NavLink></Button>
            </Flex>
            
        </Flex>
    )
}

export default LoginPage;