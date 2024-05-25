import {Box,InputGroup,Input,InputLeftElement} from "@chakra-ui/react"
import { IoMdSearch  } from "react-icons/io";



function SearchBar(){

    return(
        <Box  py={2} 
                position={"Fixed"}
                top={0} 
                w={"340px"}>
                <InputGroup >
                    <InputLeftElement pointerEvents='none'>
                    <IoMdSearch color='#414040' size={25} />
                    </InputLeftElement>
                    <Input type='tel' 
                            placeholder='Search'
                            _placeholder={{ color: "#414040" }}
                            color={"white"}
                            borderRadius={2000} bg={"gray.900"}/>
                </InputGroup>
        </Box>
    )
}

export default SearchBar;