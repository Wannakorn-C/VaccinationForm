import React from 'react'
//styled components
import {
    StyledFormArea,
    StyledTitle,
    colors,
    Avatar
} from './../components/Styles';
import Logo from './../assets/VaccineLogo.png';

export const Success = () => {
    return (
        <StyledFormArea>
            <Avatar image={Logo}/>
            <StyledTitle 
            color={colors.theme} 
            size={30}
            >
                Thank you for submitting , please check your email for a confirmation
            </StyledTitle>
        </StyledFormArea>
    )
}
export default Success;