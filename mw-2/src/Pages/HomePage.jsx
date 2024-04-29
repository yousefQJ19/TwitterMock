import { Flex } from "@chakra-ui/react";
import LeftSideList from "../Components/LSideList";



function HomePage(){
    return(
        <Flex justifyContent={"space-between"} >
            <LeftSideList />
        </Flex>
    )
}

export default HomePage;