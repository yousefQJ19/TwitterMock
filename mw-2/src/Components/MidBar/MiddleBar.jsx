import {Flex,Text} from "@chakra-ui/react";
import {fireStore} from "../../Config/FireBase-Config"
import { collection } from "firebase/firestore";

import Post from "./Post/post"
import MiddleBarButton from "./MiddleBarButton"
import AddPost from "./AddPost/addPost";
import GetDataWithRef from "../../utl/getDataWithRef";

function MiddleBar(){
    const postListRef= collection(fireStore,"Posts")
    const {dataList,isLoading,error} = GetDataWithRef(postListRef)

    if(error){
        return(<Text>There was a problem getting data</Text>)
    }
    if(isLoading){
        return(<Text>is loading</Text>)
    }
    return (
        <Flex   flexDirection={"column"}
                flex={4.5}
                >
            <Flex   width={"100%"}
                    h={"max-content"}
                    justifyContent={"space-between"}
                    borderBottom={"1px solid #414040"}
                    borderRight={"1px solid #414040"}>
                <MiddleBarButton/>
            </Flex>
            <AddPost />
            <Flex w={"100"} flexDirection={"column"} overflow={"hidden"} borderRight={"1px solid #414040"} p={0} >
                {dataList.map((post,index)=>(
                    <Post data={post} key={index}/>
                ))}
            </Flex>

    </Flex>
    );    
}
export default MiddleBar;