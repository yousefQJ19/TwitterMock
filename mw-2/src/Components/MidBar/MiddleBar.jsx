import { Box, Flex,Image,Button,Input } from "@chakra-ui/react";
import { useState } from "react";
import MiddleBarIconList from "./MiddleBarIconList";
import MiddleBarButton from "./MiddleBarButton"



function MiddleBar(){
    const [showBorder1, setShowBorder1] = useState(true);
    const [showBorder2, setShowBorder2] = useState(false);

    const handleButtonClick = (buttonNumber) => {
        if (buttonNumber === 1) {
            setShowBorder1(true);
            setShowBorder2(false);
        } else if (buttonNumber === 2) {
            setShowBorder1(false);
            setShowBorder2(true); 
        }
    };
    return (
        <Flex   flexDirection={"column"}
                flex={4.5}
                p={3}>

            <Flex   width={"100%"}
                    h={"fit-content"}
                    justifyContent={"space-between"}
                    borderBottom={"solid"}
                    borderBottomColor={"#414040"}
                    borderBottomWidth={"1px"}>

                <MiddleBarButton
                    showBorder={showBorder1}
                    setShowBorder={() => handleButtonClick(1)}
                    context={"For you"}
                />

                <MiddleBarButton
                    showBorder={showBorder2}
                    setShowBorder={() => handleButtonClick(2)}
                    context={"Following"}
                />
            </Flex>


            <Flex  
                    w={"100%"}
                    p={3}
                    borderBottom={"solid"}
                    borderColor={"#414040"}
                    borderBottomWidth={"1px"}>
                <Image  src={"/profile-3.png"} 
                        w={"40px"} 
                        height={"40px"} 
                        borderRadius={40}/>

                <Flex   flexDir={"column"} 
                        h={100}
                        w={"100%"}>
                    <Box alignItems={"center"}>
                        <Input placeholder="Whats is hapining"
                                w={"100%"}
                                border={"0"}/>
                    </Box>
                    <Flex justifyContent={"space-between"} w={"100%"} alignItems={"center"} pt={6} >
                        <MiddleBarIconList />
                        <Button borderRadius={30} 
                                bg="rgb(29, 155, 240)"
                                disabled={true} 
                                color={"white"}>
                                    post  
                        </Button>
                    </Flex>
                        
                </Flex>
                        
            </Flex>
    </Flex>
    );    
}
export default MiddleBar;