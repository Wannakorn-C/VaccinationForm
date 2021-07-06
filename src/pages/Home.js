import {StyledTitle,StyledSubTitle,Avatar} from './../components/Styles';

//Logo
import Logo from './../assets/VaccineLogo.png';

const Home=() =>{
    return(
        <div>
            <div>
            <Avatar image={Logo}/>
            </div>
            <StyledTitle size={65}>
                Welcome to our website
            </StyledTitle>
            <StyledSubTitle size={27}>
                Feel free to explore our page 
            </StyledSubTitle>
        </div>
    );
}
export default Home;