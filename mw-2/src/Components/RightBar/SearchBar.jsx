import {Box,InputGroup,Input,InputLeftElement} from "@chakra-ui/react"
import { IoMdSearch  } from "react-icons/io";



function SearchBar(){

    return(
        <Box  py={2} >
                <InputGroup >
                    <InputLeftElement pointerEvents='none'>
                    <IoMdSearch color='black' size={25} />
                    </InputLeftElement>
                    <Input type='tel' 
                            placeholder='Phone number'
                            _placeholder={{ color: "black" }}
                            color={"white"}
                            borderRadius={2000} bg={"#414040"}/>
                </InputGroup>
        </Box>
    )
}

export default SearchBar;