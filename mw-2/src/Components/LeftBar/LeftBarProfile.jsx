import { Flex,Box,Text,Image } from "@chakra-ui/react"


function SideListProfileItem(){
    return(
    <Flex  mt={"180px"} flexDirection={"row"}>
        <Image  src={"/profile-3.png"} w={"45px"} height={"45px"} borderRadius={40}/>
        <Box pl={3}>
        <Text fontSize={15} fontWeight={"700"} color={"white"}>Yousef_sa</Text>
        <Text fontSize={15} fontWeight={"100"} color={"gray"}>yousef_sa</Text>
        </Box>
    </Flex>
    )
}

export default SideListProfileItem;