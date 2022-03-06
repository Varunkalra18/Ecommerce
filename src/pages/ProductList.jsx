import Announcement from "../component/Announcement"
import Navbar from "../component/Navbar"
import styled from "styled-components"
import Products from "../component/Products"
import Newsletter from "../component/Newsletter"
import Footer from "../component/Footer"
const Container = styled.div``
const FilterContainer = styled.div`
display:flex;
justify-content: space-between ;
`
const Title = styled.h1`
margin:20px;

`
const Filter = styled.div`
margin:20px;`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600 ;
margin-right:20px;
`
const Select = styled.select`
padding: 10px;
  margin-right: 20px;
`
const Option = styled.option`` 

const ProductList = () => {
  return (
    <Container>
        <Announcement/>        
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Product</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>Xs</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price - Low to High</Option>
                    <Option>Price - High to Low</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList