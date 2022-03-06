import styled from "styled-components"

const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
display:flex;
background-size:cover;
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
padding:20px;
width:25%;
background-color:white;
`
const Form = styled.form`
display:flex;
flex-direction:column;
`
const Title = styled.h1`
    font-size:24px;
    font-weight:100;
`
const Input = styled.input`
flex:1;
min-width:40% ;
margin:10px 0px;
padding:10px;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 12px;
margin-bottom:10px;
background-color:teal;
cursor:pointer ;
color:white;
`
const Link = styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
color:lightblue;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                Sign In
            </Title>
            <Form>
                <Input placeholder="Username"></Input>
                <Input placeholder="Password"></Input>
                <Button>LOGIN</Button>
                <Link>Forget Password</Link>
                <Link>Create new account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login