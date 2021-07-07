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
import {FiMail,FiMap,FiUser,FiCalendar,FiPhone,FiCreditCard} from 'react-icons/fi';
//Loader
import Loader from 'react-loader-spinner';

const Signup =() =>{
    return(
       <div>
           <StyledFormArea>
               <Avatar image={Logo}/>
               <StyledTitle color={colors.theme} size={30}>Register</StyledTitle>
                <Formik
                initialValues={{
                    email:"",
                    date:"",
                    name:"",
                    phonenumber:"",
                    province:"",
                    idcard:""
                }}
                validationSchema={
                    Yup.object({
                        email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                        name:Yup.string().required("Required"),
                        phonenumber:Yup.string().required("Required"),
                        date:Yup.date().required("Required"),
                        province:Yup.string().required("Required"),
                        idcard:Yup.string().required("Required")
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
                                placeholder="Enter Your Name"
                                icon={<FiUser/>}
                            />
                            <TextInput 
                                name="idcard"
                                type="text"
                                label="IDCard"
                                placeholder="Enter Your IDCard Number"
                                icon={<FiCreditCard/>}
                            />
                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="Enter Your Email Address"
                                icon={<FiMail/>}
                            />
                            <TextInput 
                                name="phonenumber"
                                type="text"
                                label="Phone Number"
                                placeholder="Enter Your Phone Number"
                                icon={<FiPhone/>}
                            />
                            <TextInput 
                                name="province"
                                type="text"
                                label="Province"
                                placeholder="Enter Your Province"
                                icon={<FiMap/>}
                            />
                            <TextInput 
                                name="date"
                                type="date"
                                label="Date"
                                icon={<FiCalendar/>}
                            />
                            
                            
                                
                            
                            
                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton type="submit">Next</StyledFormButton>)}
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
           </StyledFormArea>
       </div>
    )
}
export default Signup;