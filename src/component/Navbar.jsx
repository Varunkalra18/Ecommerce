import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})}

`
const Wrapper = styled.div`
    padding: 10px 20px ;
    display:flex;
    justify-content: space-between;
    align-items:center;
    ${mobile({padding: "10px 0px"})};
`
const Left = styled.div`
    flex:1;
    display: flex ;
    align-items: center ;

`
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey ;
    align-items: center ;
    display:flex;
    margin-left:25px;
    padding:5px;
`
const Input = styled.input`
border:none;
${mobile({width:"50px"})};
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer ;
    ${mobile({display:"none"})};
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items:center; 
    justify-content: flex-end;
    ${mobile({justifyContent:"center", flex:'2'})};
`
const Center = styled.div`
    flex:1;
    text-align:center;
`
const Logo = styled.h1`
    font-weight:bold ;
    ${mobile({fontSize:"20px"})};
`
const MenuItems = styled.div`
    font-size:14px;
    margin-left: 25px;
    ${mobile({fontSize:"12px", marginLeft:"10px"})};
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                  <Input></Input>
                  <Search style={{color:"grey", fontSize:"16px"}}/>
                </SearchContainer>
            </Left>
            <Center>
              <Logo>RETAIL.</Logo>
            </Center>
            <Right>
              <MenuItems>Sign up</MenuItems>
              <MenuItems>Sign in</MenuItems>
              <MenuItems>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined/>
                </Badge>              
              </MenuItems>

            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar