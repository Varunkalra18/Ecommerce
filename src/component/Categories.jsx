import {categories} from "../data"
import styled from "styled-components"
import { CategoryItem } from "./CategoryItem"
import { mobile } from "../responsive"

const Container = styled.div`
display:flex;
padding:20px;
justify-content: space-between;
${mobile({flexDirection:"column", padding:"0px"})};
`
const Heading = styled.h1`
font-size:40px;
font-weight:600;
text-align:center;
margin:25px;
`
const Categories = () => {
  return (
    <>
    <Heading>Categories....</Heading>
    <Container>
        
        {categories.map((item)=>(
            <CategoryItem item={item} key={item.id}></CategoryItem>            
        ))}
    </Container>
    </>
  )
}

export default Categories