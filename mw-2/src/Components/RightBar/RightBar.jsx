import { Box, Heading,Text,Flex } from "@chakra-ui/react";
import {fireStore} from "../../Config/FireBase-Config"
import {collection} from"firebase/firestore"

import GetDataWithRef from "../../utl/getDataWithRef";
import SearchBar from "./SearchBar"


function RightSideBar(){
    const trendingListRef= collection(fireStore,"Trendings")
    const { dataList, isLoading, error } =GetDataWithRef(trendingListRef)

    dataList.sort((a,b)=>b.postNumber - a.postNumber)
    console.log(dataList)
    if(error){
        return(
            <Text color={"red"}>These was a Problem geting data</Text>
        )
    }
    if(isLoading){
        return(<Text>is loading</Text>)
    }

    return(
        <Box width={"400px"}  >
            <Box
                position={"fixed"}
                top={61}
                px={8}
                bg={"Black"} 
                w={"400px"}
                height={"100vh"}>

                <SearchBar/>

                <Box bg={"black"}
                        border={"1px solid #414040"}
                        h={"85%"}
                        borderRadius={20}
                        >
                    <Heading fontSize={30} color={"white"} p={3}>Trends for you</Heading>
                    <Flex flexDirection={"column"}>
                    {
                        // dataList.slice(0,10).map((trend) => (
                        //     <Box key={trend.id} p={3}>
                        //         <Text  color={"white"}
                        //                 fontSize={17}>
                        //                     {trend.title}
                        //         </Text>
                        //         <Text  fontSize={13} 
                        //                 fontWeight={"10px"} 
                        //                 color={"#414040"}>
                        //                     {trend.postNumber} posts
                        //         </Text>
                        //     </Box>
                        // ))
                    }
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default RightSideBar;