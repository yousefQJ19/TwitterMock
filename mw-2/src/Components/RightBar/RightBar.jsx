import { Box } from "@chakra-ui/react";
import SearchBar from "./SearchBar"
function RightSideBar(){
    return(
        <Box
            px={8}
            flex={2.9} 
            bg={"Black"} 
            height={"100vh"}>
            {/* // borderLeft={"1px solid #414040"} */}

            <SearchBar/>

            <Box bg={"black"}
                    border={"1px solid #414040"}
                    h={"85%"}
                    mt={3}
                    borderRadius={20}
                    >
            </Box>
        </Box>
        
    )
}

export default RightSideBar;