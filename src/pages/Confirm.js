import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';

import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export const Confirm = ({formData}) => {
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
        <Container maxWidth='sm'>
            <h3>Confirm</h3>
            <RenderAccordion  summary= "User information" details={[
                {'Full Name': fullname}, 
                {'ID Card': idcard},
                {'Date Of Birth': dateOfbirth},
                {'Phone Number': phonenumber},
                {'Email Address':  email},
                {'Province':  province},
                {'Date': date },
            ]}/>
        </Container>
    );
};
const RenderAccordion =({summary,details}) => (
    <Accordion>
        <AccordionSummary>{summary}</AccordionSummary>
        <AccordionDetail>
            <div>
             {details.map((data,index)=>{
                 const objKey = Object.keys(data)[0];
                 const objValue = data[Object.keys(data)[0]];
                 return <ListItemText>{`${objKey}: ${objValue}`}</ListItemText>
             })}
            </div>
        </AccordionDetail>
    </Accordion>

)

export default Confirm;