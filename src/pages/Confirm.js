import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';

import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//styled components
import {StyledTextInput,
    StyledFormArea2,
    StyledFormButton,
    StyledLabel,
    Avatar,
    StyledTitle,
    colors,
    ButtonGroup,
} from './../components/Styles';

import Logo from './../assets/VaccineLogo.png';

export const Confirm = ({formData,navigation}) => {
    const {go}=navigation;
    const {
        fullname,
        idcard,
        dateOfbirth,
        phonenumber,
        email,
        province,
        date   
        }=formData;
    return (
        <StyledFormArea2>
            <Avatar image={Logo}/>
            <StyledTitle color={colors.theme} size={30}>Confirm</StyledTitle>
            <RenderAccordion  summary= "Please Check Your Information" go={go} details={[
                {'Full Name': fullname}, 
                {'ID Card': idcard},
                {'Date Of Birth': dateOfbirth},
                {'Phone Number': phonenumber},
                {'Email Address':  email},
                {'Province':  province},
                {'Date': date },
            ]}/>
            <ButtonGroup>
                <StyledFormButton 
                    type="submit"
                    onClick={() => go('Success')} 
                    to="/success"  
                >Submit</StyledFormButton>
            </ButtonGroup>
        </StyledFormArea2>
    );
};
const RenderAccordion =({summary,details,go}) => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >{summary}</AccordionSummary>
        <AccordionDetail>
            <div>
             {details.map((data,index)=>{
                 const objKey = Object.keys(data)[0];
                 const objValue = data[Object.keys(data)[0]];
                 return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
             })}
             <IconButton
                component= "span"
                onClick={() => go('Register')}
                to="/register"
                ><EditIcon/>
            </IconButton>
            </div>
        </AccordionDetail>
    </Accordion>

)

export default Confirm;