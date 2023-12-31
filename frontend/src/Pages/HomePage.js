import {
  Box,
 
  Container,
  
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
   

        {/* <VStack spacing="20px"> */}
      <Box
       className="box1"
         d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="15px"
        borderWidth="3px"
      >
        <Text fontSize="4xl" fontFamily="Roboto" align="center" color="black" textDecor="bold" >
          InTouch
        </Text>
      </Box>
      
      <Box className="box2" bg="white" w="100%" p={4} borderRadius="40px" borderWidth="3px" border >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em" >
            <Tab fontFamily="Roboto">Login</Tab>
            <Tab fontFamily="Roboto">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>


      {/* </VStack> */}
     
    </Container>
  );
}

export default Homepage;