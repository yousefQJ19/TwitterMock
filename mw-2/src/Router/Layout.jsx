import LSideList from "../Components/LeftBar/LeftLest"
import { Outlet } from "react-router-dom"
import { Box, Flex } from "@chakra-ui/react"

function Layout(){
    return(
        <Flex bg={"black"}>
            <LSideList/> 
            <Outlet/>
        </Flex>
        
    )
}

export default Layout;



