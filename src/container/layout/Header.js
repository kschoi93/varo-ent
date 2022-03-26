import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
// import SideMenuBar from '../component/sideMenuBar';

export default function Header(){
    const isMobile = useMediaQuery({ query: "(min-width: 776px)"});
    const isPc = useMediaQuery({ query: "(min-width: 1300px)"});
    const isPcTablet = useMediaQuery({ query: "(min-width: 1024px)"});

    const [varoVisible, setVaroVisible] = useState('none');
    const [artistVisible, setArtistVisible] = useState('none');

    const headerPcStyle = {
        width: '100%',
        height: '100px',
        margin: '0 auto',
        padding: '0px 50px',
        display: 'flex',
        justifyContent: 'space-between'
    };

    const headerMobileStyle = {
        width: '100%',
        height: '100px',
        margin: '0 auto',
        paddingLeft: '20px',
        display: 'flex',
        justifyContent: 'space-between'
    };

    return(
        <HeaderWrapper>
            <header style={isMobile ? headerPcStyle : headerMobileStyle} >
                <Link to="/"><img src={require('../../assets/logo.svg')} style={{verticalAlign:"middle", width:'180px'}}/></Link>
                <MainMenu>
                    <MainMenuItem onMouseEnter={()=>{setVaroVisible('block')}} onMouseLeave={()=>{setVaroVisible('none')}}>
                        <LinkStyle to='company/about-us'>COMPANY</LinkStyle>
                        <SubMenu style={{display:varoVisible}}>
                            <SubMenuItem><LinkStyle to="company/about-us">ABOUT US</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="company/ci">CI</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="company/contact">CONTACT</LinkStyle></SubMenuItem>
                        </SubMenu>
                    </MainMenuItem>
                    <MainMenuItem onMouseEnter={()=>{setArtistVisible('block')}} onMouseLeave={()=>{setArtistVisible('none')}}>
                        <LinkStyle to="artist/1">ARTIST</LinkStyle>
                        <SubMenu style={{display:artistVisible}}>
                            <SubMenuItem><LinkStyle to="artist/1">GONG SEUNG YEON</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="artist/2">BYEON WOO SEOK</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="artist/3">PARK JUNG WOO</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="artist/4">LEE YOU MI</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="artist/5">LEE JINI</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="artist/6">JIN GOO</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="artist/7">LEE HONG NAE</LinkStyle></SubMenuItem>
                        </SubMenu>
                    </MainMenuItem>
                    <MainMenuItem>
                        <LinkStyle to="audition">AUDITION</LinkStyle>
                    </MainMenuItem>
                </MainMenu>
            </header>
        </HeaderWrapper>
    );
}

//                { isPc ?
//                    <Navbar className="ms-auto" bg="white" expand="lg">
//                      <Container>
//                        <Navbar.Brand href="/"></Navbar.Brand>
//                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//                          <Nav>
//                            <Nav.Link href="/VARO">VARO</Nav.Link>
//                            <Nav.Link href="/ARTIST">ARTIST</Nav.Link>
//                            <Nav.Link href="/AUDITION">AUDITION</Nav.Link>
//                          </Nav>
//                        </Navbar.Collapse>
//                      </Container>
//                    </Navbar>
//                    : <SideMenuBar />
//                }


const SubMenuItem = styled.li`
	text-align: center;
	width: 150px;
	height: 35px;
	line-height: 35px;
	padding: 0;
	margin: 0;
	position: relative;
	z-index: 2000;
	list-style: none;
	font-size: 0.7em;
	color: #ECECEC;
	&:hover{
	    color: black;
	}
`;

const SubMenu = styled.ul`
	padding: 0;
	margin: 0;
	display: none;
	list-style: none;
    transition:visibility 0.3s linear,opacity 0.3s linear;
`;

const MainMenuItem = styled.li`
    width: 150px;
    text-align: center;
    margin: 0;
	list-style: none;
`;

const MainMenu = styled.ul`
    text-align: center;
    margin: 0;
    padding: 0 30px;
	list-style: none;
    font-size: 1.4em;
    display: flex;
    a{
        text-decoration:none;
        color: rgba(0, 0, 0, 0.55);
    }

    &:hover{
    }
`;

const LinkStyle = styled(Link)`
    textDecoration: none;
    color: gray;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover{
        color: black;
    }
`;

const HeaderWrapper = styled.div`
    height: 100px;
    line-height: 100px;
`;