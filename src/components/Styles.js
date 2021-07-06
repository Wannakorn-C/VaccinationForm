import styled from 'styled-components';
//Background
import background from './../assets/VaccineBackground.png';

export const colors ={
    primary:"#080808",
    theme:"#BE185D",
    light1:"#F3F4F6",
    light2:"#E5E7EB",
    dark1:"#1F2937",
    dark2:"#4B5563",
    dark3:"#9CA3AF",
    red:"#DC2626"
}
//Styled components
export const StyledContainer =styled.div`
    margin:0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0),rgba(0,0,0,0)),url(${background});
    background-size: cover;
    background-attachment: fixed; 
`;
//Home
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
     font-size: ${(props) => props.size}px;
     text-align: center;
     color: ${(props) => props.color ? props.color : colors.primary};
     padding: 5px;
     margin-bottom: 25px;
`;

export const Avatar= styled.div`
     width: 120px;
     height: 85px;
     border-radius: 50px;
     background-image: url(${props => props.image});
     background-size: cover;
     background-position: center; 
     margin: auto;
`;
