import React,{ useState } from 'react';
import styled from 'styled-components';
import { slideRight, slideLeft } from './keyframe';
import { Link , withRouter} from 'react-router-dom';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { HiUserCircle } from 'react-icons/hi';
import { useAppState } from '../WeatherContext';

const UpperNav = styled.div`
    position: fixed;
    display:flex;
    align-items: center;
    justify-content:center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 20px 0px;
    background: white;
    font-size: 35px;
    box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
`

const NavIconContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 20px;
    z-index: 10;
    &:hover{
        cursor: pointer;
    }
`

const HompageTitle = styled.div`
    font-size: 25px;
`

const SpreadNav = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: ${props => props.openNav ? 'block' : 'none'};
    z-index: ${props => props.openNav ? 9 : 0};
    background-color: ${props => props.openNav ? 'rgba(0,0,0,0.2)' : 'none'};
`

const NavBG = styled.div`
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
`

const NavSideMenu = styled.div`
    height: 100vh;
    width: 415px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    animation: 0.5s ease-in-out ${props => props.isOpen ? slideLeft : slideRight};
`

const UserProfile = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 27vh;
    width: 415px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    color: white;
    z-index:8;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    background: #3d9ce5;
`

const Title = styled.div`
    font-size: 25px;
`

const Image = styled.div`
    font-size: 80px;
    color: #A8A4D2;
    padding-top: 10px;
`

const Email = styled.div`
    font-size: 22px;
`

const FreePlan = styled.div`
    font-size: 18px;
    justify-content: flex-start;
`

const List = styled.ul`
    position: absolute;
    left: 0;
    bottom: 0;
    padding : 0;
    padding-top : 20px;
    margin: 0;
    height: 73vh;
    width: 415px;
    background: white;
`

const Item = styled.li`
    padding: 20px 0;
    margin-left: 40px;
    margin-bottom: 10px;
    border-bottom: ${props => props.current ? 'solid 1.5px #5697ff' : 'transparent'};
`

const NavBar = withRouter(({ location: { pathname }}) => {
    let state = useAppState();

    const [openNav,setOpenNav] = useState(false);
    const onClick = () => {
        setOpenNav(!openNav);
    };

    const handleLogout = () => {
        state.login = {};
    }

    return (
        <>
            <UpperNav>
                <NavIconContainer onClick={onClick}>
                    <IoReorderThreeOutline />
                </NavIconContainer>
                <Link to="/home">
                    <HompageTitle>TODAY</HompageTitle>
                </Link>
            </UpperNav> 
            <SpreadNav openNav={openNav}>
                {/*<NavBG onClick={onClick}></NavBG> */}
                <NavSideMenu openNav={openNav}>
                    <UserProfile>
                        <Title >WELCOME BACK</Title>
                        <Image ><HiUserCircle /></Image>
                        <Email ></Email>
                        <FreePlan >Free Plan</FreePlan>
                    </UserProfile>
                    <List>
                        <Item current={pathname === '/home'}>
                            <Link to="/home" >Home</Link>
                        </Item>
                        <Item current={pathname === '/add'}>
                            <Link to="/add" >Add City</Link>
                        </Item>
                        <Item current={pathname === '/'}>
                            <Link to="/" onClick={handleLogout}>Logout</Link>
                        </Item>
                    </List>
                </NavSideMenu>
            </SpreadNav>
            
        </>
    )
})

export default NavBar;