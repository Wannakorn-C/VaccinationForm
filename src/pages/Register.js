//styled components
import {StyledTextInput,
    StyledFormArea,
    StyledFormButton,
    StyledLabel,
    Avatar,
    StyledTitle,
    colors,
    ButtonGroup,
} from './../components/Styles';

import Logo from './../assets/VaccineLogo.png';

//Fromik
import {Formik,Form} from 'formik';
import {TextInput} from './../components/FormLib';
import * as Yup from 'yup';
//icons
import {FiMail,FiMapPin,FiUser,FiCalendar,FiPhone,FiCreditCard,FiGift} from 'react-icons/fi';
//Loader


const Register =({formData,setForm,navigation}) =>{

    const{fullname,idcard,dateOfbirth,phonenumber,email,province,date} = formData;
    

    return(
       <div>
           <StyledFormArea>
               <Avatar image={Logo}/>
               <StyledTitle color={colors.theme} size={30}>Register</StyledTitle>
                <Formik
                initialValues={{
                    fullname:"",
                    idcard:"",
                    dateOfbirth:"",
                    phonenumber:"",
                    email:"",
                    province:"",
                    date:"",
                }}
                onSubmit={(values,{setSubmitting}) =>{
                    console.log(values);
                }}
                >
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput 
                                name="fullname"
                                type="text"
                                label="Full Name"
                                placeholder="Enter Your Name"
                                icon={<FiUser/>}
                                value={fullname}
                                onChange={setForm}
                            />
                            <TextInput 
                                name="idcard"
                                type="text"
                                label="IDCard"
                                placeholder="Enter Your IDCard Number"
                                icon={<FiCreditCard/>}
                                value={idcard}
                                onChange={setForm}
                            />
                            <TextInput 
                                name="dateOfbirth"
                                type="date"
                                label="Date Of Birth"
                                icon={<FiGift/>}
                                value={dateOfbirth}
                                onChange={setForm}
                            />
                            <TextInput 
                                name="phonenumber"
                                type="text"
                                label="Phone Number"
                                placeholder="Enter Your Phone Number"
                                icon={<FiPhone/>}
                                value={phonenumber}
                                onChange={setForm}
                            />
                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="Enter Your Email Address"
                                icon={<FiMail/>}
                                value={email}
                                onChange={setForm}
                            />
                            <TextInput 
                                name="province"
                                type="text"
                                label="Province"
                                placeholder="Enter Your Province"
                                icon={<FiMapPin/>}
                                value={province}
                                onChange={setForm}
                            />
                            <TextInput 
                                name="date"
                                type="date"
                                label="Date"
                                icon={<FiCalendar/>}
                                value={date}
                                onChange={setForm}
                            />
                            <ButtonGroup>
                                <StyledFormButton 
                                type="submit"
                                to="/confirm"
                                onClick={()=>navigation.next()}
                                
                                >Next</StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
           </StyledFormArea>
       </div>
    )
}
export default Register;