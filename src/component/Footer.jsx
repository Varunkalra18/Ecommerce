import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
display:flex;
${mobile({flexDirection:"column"})};
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Logo = styled.h1``
const Desc = styled.p`
margin:20px 0px;
`
const Icons = styled.div`
display:flex;

`
const SocialIcons = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=> props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;

`
const Center = styled.div`
flex:1 ;
padding:20px;
${mobile({display:"none"})};
`
const Title = styled.h3`
margin-bottom:30px;
`

const List = styled.ul`
margin:0px;
padding:0px;
list-style:none;
display:flex;
flex-wrap:wrap;
`

const ListItems = styled.li`
width: 50%;
margin-bottom: 10px;
`



const Right = styled.div`
flex:1 ;
${mobile({backgroundColor:"#fff8f8"})};
`
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>RETAIL.</Logo>
            <Desc>There are many variation of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form , by injected humor, or randomised words which dont look even slightly believable.
            </Desc>
            <Icons>
                <SocialIcons color="3B5999">
                    <Facebook/>
                </SocialIcons>
                <SocialIcons color="E4405f">
                    <Instagram/>
                </SocialIcons>
                <SocialIcons color="55ACEE">
                    <Twitter/>
                </SocialIcons>
                <SocialIcons color="E60023">
                    <Pinterest/>
                </SocialIcons>
            </Icons>

        </Left>
        <Center>
            <Title>Usefull Links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Man Fashion</ListItems>
                <ListItems>Woman Fashion</ListItems>
                <ListItems>Accessories</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>WishList</ListItems>
                <ListItems>Terms and Conditions</ListItems>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>31, Tilak Path, Darji bakhal, Mahidpur
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>+91 9630446634
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> kalravarun1999@gmail.com
            </ContactItem>
            {/* <Payment src=""/> */}
        </Right>
    </Container>
  )
}

export default Footer