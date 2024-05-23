import {Flex,Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {fireStore} from "../../Config/FireBase-Config"
import {getDocs} from "firebase/firestore"
import MiddleBarButton from "./MiddleBarButton"
import AddPost from "./AddPost/addPost";
import { collection } from "firebase/firestore";
import Post from "./Post/post"


function MiddleBar(){
    const [showBorder1, setShowBorder1] = useState(true);
    const [showBorder2, setShowBorder2] = useState(false);
    const[postList,setPostList]=useState([])
    const [isLoading,setIsLoading] =useState(true)
    const postListRef= collection(fireStore,"Posts")
    
    const handleButtonClick = (buttonNumber) => {
        if (buttonNumber === 1) {
            setShowBorder1(true);
            setShowBorder2(false);
        } else if (buttonNumber === 2) {
            setShowBorder1(false);
            setShowBorder2(true); 
        }
    };
    const getPostList = async ()=>{
        try{
            const data= await getDocs(postListRef)
            const filterdData=data.docs.map((doc)=>({...doc.data(),id:doc.id}))
            setPostList(filterdData)
            setIsLoading(false)
        }
        catch(err){
            console.error(err)
        }
    }
    useEffect(()=>{
        
        getPostList()
    },[])
    if(isLoading){
        return(<Text>is loading</Text>)
    }
    return (
        <Flex   flexDirection={"column"}
                flex={4.5}
                >
            <Flex   width={"100%"}
                    h={"fit-content"}
                    justifyContent={"space-between"}
                    borderBottom={"1px solid #414040"}
                    borderRight={"1px solid #414040"}>
                    {/* not that */}
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
            <AddPost />
            <Flex w={"100"} flexDirection={"column"} overflow={"hidden"} borderRight={"1px solid #414040"} p={0} >
                {postList.map((post,index)=>(
                    <Post data={post} key={index}/>
                ))}
            </Flex>

    </Flex>
    );    
}
export default MiddleBar;