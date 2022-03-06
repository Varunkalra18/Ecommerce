import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
width:100%;
height:100% ;
position : absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.1);
z-index:3;
display:flex;
align-items:center ;
justify-content:center;
opacity:0;
transition: all 0.5s ease;
`
const Container = styled.div`
flex:1;
margin:5px;
min-width: 280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position : relative;
&:hover ${Info}{
opacity:1;
}
`

const Circle = styled.div`
border-radius:50% ;
height:200px;
width:200px;
background-color:white;
position:absolute;

`
const Img = styled.img`
height:75%;
z-index:2;
`

const Icon = styled.div`

width:40px;
height:40px;
border-radius: 50% ;
display:flex;
align-items:center;
background-color: white;
justify-content:center; 
margin:10px;
transition : all 0.5s ease;
&:hover{
    background-color:#w9f5f5;
    transform:scale(1.1)
}
`
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Img src={item.img}></Img>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product