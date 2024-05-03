import { Flex } from "@chakra-ui/react";
import MiddleBar from "../Components/MidBar/MiddleBar";
import RightSideBar from "../Components/RightBar/RightBar";


function HomePage(){
    return(
        <Flex flex={7} bg={"black"}>
            <MiddleBar/>
            <RightSideBar/>
        </Flex>
    )
}

export default HomePage;