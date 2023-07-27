import React, { useState } from 'react'
import * as Components from "./Components";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles.css';







const HomePage = () => {

      const [signIn, toggle] =useState(true);
      const [name, setName] = useState();
      const [email, setEmail] = useState();
      const [password, setPassword] = useState();
      const [useremail, setUseremail] = useState();
      const [upassword, setUPassword] = useState();
      const submitHandler=()=>{

      }

      return (<>
      <Components.Container1>
       <Components.Text>InTouch</Components.Text>
       {/* <Components.Box>Real-Time Chatting Website</Components.Box> */}
      </Components.Container1>



        <Components.Container>

        <Switch>
          <Route path="/register" component={HomePage} />
          <Route path="/signin" component={HomePage} />
        </Switch>



          <Components.SignUpContainer signingIn={signIn}>
            <Components.Form>
        
              <Components.Title>Create Account</Components.Title>

              <Components.Input 
              type="text" 
              placeholder="Name" 
              value={name}
              onChange={(e)=>setName(e.target.value)}
              on
              
              
              
              
              />
              <Components.Input
               type="email" 
               placeholder="Email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}

               />


              <Components.Input
               type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                
                
                />
               <Link to ='/register'>
              <Components.Button
              onClick={submitHandler}
              
              >Sign Up</Components.Button>
              </Link>
            </Components.Form>
          </Components.SignUpContainer>


         
          <Components.SignInContainer signingIn={signIn}>
            <Components.Form>
            
              <Components.Title>Sign in</Components.Title>
              <Components.Input
               type="email"
                placeholder="Email" 
                value={useremail}
                onChange={(e)=>setUseremail(e.target.value)}
                
                />
              <Components.Input
               type="password"
                placeholder="Password"
                value={upassword}
                onChange={(e)=>setUPassword(e.target.value)}
                />
              <Components.Anchor href="#">Forgot your password?</Components.Anchor>
              <Link to="/signin">
              <Components.Button
              onClick={submitHandler}
              
              >Sign In</Components.Button>
              </Link>
            </Components.Form>
          </Components.SignInContainer>
          <Components.OverlayContainer signingIn={signIn}>
            <Components.Overlay signingIn={signIn}>
              <Components.LeftOverlayPanel signingIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>
              <Components.RightOverlayPanel signingIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter your personal details and start journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
        </>
      );
    }

    const signIn = ()=>{

    }

    const Register =()=>{

    }
    
  

export default HomePage