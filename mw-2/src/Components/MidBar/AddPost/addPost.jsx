import {Flex,Box,Input,Button,Text, Avatar} from "@chakra-ui/react"
import AddPostIconList from "./addPostIconList";
import { useState } from "react";

import {fireStore} from "../../../Config/FireBase-Config"
import {collection, addDoc} from "firebase/firestore"



function AddPost(){
    const [showLine,setShowLine] =useState(false)
    const [postDescription,setPostDescription]=useState("")
    const postListRef= collection(fireStore,"Posts")

    const onPosting = async ()=>{
        await addDoc(postListRef,{
            caption : postDescription,
            likes : "100",
            uid : "kwecipmwiio"
        })
    }
    return(
        <Flex        
                    w={"100%"}
                    p={3}
                    borderBottom={"1px solid #414040"}
                    borderRight={"1px solid #414040"}>
                <Avatar  src={"/profile-3.png"} 
                        w={"40px"} 
                        height={"40px"} />

                <Flex   flexDir={"column"} 
                        w={"100%"}
                        onClick={()=> setShowLine(true)}>
                        
                    <Box alignItems={"center"}>
                        
                        <Input placeholder="Whats is hapining?!"
                                w={"100%"}
                                border={"0"}
                                fontSize={20}
                                color={"white"}
                                onChange={(e)=>setPostDescription(e.target.value)}/>
                    </Box>
                    <Text display={showLine?"block": "none"} color={"rgb(29, 155, 240)"}>Every one can replay</Text>
                    <Flex 
                            justifyContent={"space-between"} 
                            w={"100%"} 
                            alignItems={"center"} 
                            mt={4}
                            pt={3}
                            borderTop={showLine? "1px solid #414040" : "none"}
                        >
                        <AddPostIconList />
                        <Button borderRadius={30}
                                bg="rgb(29, 155, 240)"
                                disabled={true}
                                height={8}
                                color={"white"}
                                onClick={()=>onPosting()}>
                                    post  
                        </Button>
                    </Flex>
                        
                </Flex>
                        
            </Flex>
    )
}

export default AddPost;