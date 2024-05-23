/* eslint-disable react/prop-types */
import {Card,CardHeader,Flex,Box,Avatar,Heading,Text,CardBody,CardFooter} from"@chakra-ui/react"
import { GrLike } from "react-icons/gr";
import { LiaComments } from "react-icons/lia";
import { IoShareSocialOutline } from "react-icons/io5";
import PostButton from "./PostButton";



function Post({data}){ 
    return(
        <Card 
            // borderTop={"1px solid #414040"}
            borderBottom={"1px solid #414040"}
            borderRadius={0}
            w={"100%"}
            color={"white"}
            bg={"black"}
            p={0}
            m={0}
            >
            <CardHeader
                        pt={2}
                        pb={0}>
                <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                    <Box>
                    <Heading size='sm'>Segun Adebayo</Heading>
                    <Text>Creator, Chakra UI</Text>
                    </Box>
                </Flex>
                </Flex>
            </CardHeader>
            <CardBody pt={2}
                        pb={0}>
                <Text color={"white"}>
                {data.description}
                
                </Text>
            </CardBody>

            <CardFooter
                pt={0}
                pb={0}
                justify='space-between'
                flexWrap='wrap'
                sx={{
                '& > button': {
                    minW: '136px',
                },
                }}
            >
                <PostButton Icon={GrLike} Number={data.likes} color={"red"}/>
                <PostButton Icon={LiaComments} Number="80" color={"green"}/>
                <PostButton Icon={IoShareSocialOutline} Number="80" color={"blue"}/>
            </CardFooter>
        </Card>
    )
}

export default Post;