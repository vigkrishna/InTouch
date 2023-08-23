import { Box,Flex,Spacer } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/miscellaneous/ChatBox";
import MyChats from "../components/miscellaneous/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import React from 'react';
import "./chat.css";


 const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  
  return (


    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
   
//     <>

//     <div className="conT">

//     <div className="mainHead"> Welcome to InTouch
// </div>
   
//     <Flex color='white'>
//   <Box w='30vw' p='4' bg='red.800'>
//     Box 1
//   </Box>
//   <Spacer />
//   <Box w='50vw' p='4' bg='green.700'>
//     Box 2
//   </Box>
// </Flex>
    
// </div>
//     </>
    
    
  );
};

export default ChatPage;