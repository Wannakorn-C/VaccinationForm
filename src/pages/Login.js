//styled components
import {StyledTextInput,
    StyledFormArea,
    StyledFormButton,
    StyledLabel,
    Avatar,
    StyledTitle,
    colors,
    ButtonGroup
} from './../components/Styles'

import Logo from './../assets/VaccineLogo.png'

//Fromik
import {Formik,Form} from 'formik';
import {TextInput} from './../components/FormLib';

const Login =() =>{
    return(
       <div>
           <StyledFormArea>
               <Avatar image={Logo}/>
               <StyledTitle color={colors.theme} size={30}>Login</StyledTitle>
                <Formik>
                    {()=>(
                        <Form>
                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="fern.1502@example.com"
                            />
                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="*********"
                                
                            />
                            <ButtonGroup>
                                <StyledFormButton type="submit">Login</StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
           </StyledFormArea>
       </div>
    )
}
export default Login;