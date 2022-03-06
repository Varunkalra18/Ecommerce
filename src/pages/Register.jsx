import styled from "styled-components"

const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
display:flex;
background-size:cover;
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
padding:20px;
width:40%;
background-color:white;
`
const Form = styled.form`
display:flex;
flex-wrap:wrap;
`
const Title = styled.h1`
    font-size:24px;
    font-weight:100;
`
const Input = styled.input`
flex:1;
min-width:40% ;
margin:20px 10px 0px 0px;
padding:10px;
`
const Agreement = styled.span`
font-size:12px;
margin:20px 0px;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 12px;
background-color:teal;
cursor:pointer ;
color:white;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                CREATE NEW ACCOUNT
            </Title>
            <Form>
                <Input placeholder="First Name"></Input>
                <Input placeholder="Last Name"></Input>
                <Input placeholder="Username"></Input>
                <Input placeholder="Email"></Input>
                <Input placeholder="Password"></Input>
                <Input placeholder="Confirm Password"></Input>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>Privacy Policy</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register