import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../component/Announcement"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import {mobile} from "../responsive"
const Container = styled.div``
const Wrapper = styled.div`
padding:20px;
`
const Title = styled.h1`
font-weight: 300 ;
text-align:center;
`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between ;
padding:20px;
`
const TopButton = styled.button`
padding:10px;
font-weight:600;
curson:pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"} ;
color: ${props=>props.type === "filled" && "white"}
`

const Bottom = styled.div`
display:flex;
justify-content:space-between;
`
const TopTexts = styled.div``
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`
const Info = styled.div`
flex:3;
`
const Summary = styled.div`
flex:1;
border:0.5px solid lightgray ;
border-radius: 10px;
padding:20px;   
height:50vh;
`

const Hr = styled.hr`
background-color:#eee ;
border:none;
height:1px  ;
`
const Product = styled.div`
display:flex;
justify-content:space-between;
`
const ProductDetail = styled.div`
flex:2;
display:flex;
`
const Image = styled.img`
width:200px;
`
const Details = styled.div`
padding: 20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.span`
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

const ProductAmmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const ProductAmmount = styled.div`
font-size:24px;
margin:5px;
`
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
`
const SummaryTitle = styled.h1`
font-weight:200;
`
const SummaryItems = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;

`
const SummaryItemsText = styled.span`
font-weight : ${props => props.type === "total" && "500"} ;
font-size : ${props => props.type === "total" && "20px"} ;
`
const SummaryItemPrice = styled.span``
const Button = styled.button`
width:100%;
padding:10px;
background-color:black ;
color:white ;
font-weight:600;
border:none;
`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
                <TopButton type="">Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag</TopText>
                    <TopText>Your Whishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">Checkout Now</TopButton>

            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src = "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                            <Details>
                                <ProductName><b>JESSIE Thunder Shoes</b></ProductName>
                                <ProductId><b>Id:</b>899959</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size: </b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmmountContainer>
                                <Add/>
                                <ProductAmmount>2</ProductAmmount>
                                <Remove/>    
                            </ProductAmmountContainer>
                            <ProductPrice>$ 30</ProductPrice>    
                        </PriceDetail>    
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src = "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                            <Details>
                                <ProductName><b>Hakura T-Shirt</b></ProductName>
                                <ProductId><b>Id:</b>899959</ProductId>
                                <ProductColor color="grey"/>
                                <ProductSize><b>Size: </b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmmountContainer>
                                <Add/>
                                <ProductAmmount>2</ProductAmmount>
                                <Remove/>    
                            </ProductAmmountContainer>
                            <ProductPrice>$ 30</ProductPrice>    
                        </PriceDetail>    
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItems>
                        <SummaryItemsText>Subtotal</SummaryItemsText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItems>
                    <SummaryItems>
                        <SummaryItemsText>Estimated Shipping</SummaryItemsText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItems>
                    <SummaryItems>
                        <SummaryItemsText>Shipping Discount</SummaryItemsText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItems>
                    <SummaryItems>
                        <SummaryItemsText type="total">Total</SummaryItemsText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItems>
                    <Button>CHECKOUT Now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart