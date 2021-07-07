//styled components
import {StyledTextInput,
    StyledFormArea,
    StyledFormButton,
    StyledLabel,
    Avatar,
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink
} from './../components/Styles';

import Logo from './../assets/VaccineLogo.png';

//Fromik
import {Formik,Form} from 'formik';
import {TextInput} from './../components/FormLib';
import * as Yup from 'yup';
//icons
import {FiMail,FiLock,FiUser,FiCalendar,FiPhone} from 'react-icons/fi';
//Loader
import Loader from 'react-loader-spinner';

const Signup =() =>{
    return(
       <div>
           <StyledFormArea>
               <Avatar image={Logo}/>
               <StyledTitle color={colors.theme} size={30}>Signup</StyledTitle>
                <Formik
                initialValues={{
                    email:"",
                    password:"",
                    repeatPassword:"",
                    dateOfBirth:"",
                    name:"",
                    phonenumber:""
                }}
                validationSchema={
                    Yup.object({
                        email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                        password:Yup.string()
                        .min(7,"Password is too short")
                        .max(30,"Password is too long")
                        .required("Required"),
                        name:Yup.string().required("Required"),
                        phonenumber:Yup.string().required("Required"),
                        dateOfBirth:Yup.date().required("Required"),
                        repeatPassword:Yup.string().required("Required").oneOf([Yup.ref("password")],"Passwords must match")

                    })
                }
                onSubmit={(values,{setSubmitting}) =>{
                    console.log(values);
                }}
                >
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput 
                                name="name"
                                type="text"
                                label="Full Name"
                                placeholder="Wannakorn Cherngchaosil"
                                icon={<FiUser/>}
                            />
                            <TextInput 
                                name="dateOfbirth"
                                type="date"
                                label="Date of Birth"
                                icon={<FiCalendar/>}
                            />
                            <TextInput 
                                name="phonenumber"
                                type="text"
                                label="Phone Number"
                                icon={<FiPhone/>}
                            />
                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="fern.1502@example.com"
                                icon={<FiMail/>}
                            />
                            
                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="*********"
                                icon={<FiLock/>}
                                
                            />
                            <TextInput
                                name="repeatPassword"
                                type="password"
                                label="Repeat Password"
                                placeholder="*********"
                                icon={<FiLock/>}
                                
                            />
                            
                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton type="submit">Signup</StyledFormButton>)}
                                {isSubmitting &&(
                                    <Loader
                                        type="ThreeDots"
                                        color={colors.theme}
                                        height={49}
                                        width={100}
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Already have an account? <TextLink to="/login">Login</TextLink>
                </ExtraText>
           </StyledFormArea>
       </div>
    )
}
export default Signup;