import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false);
    const history = useHistory();

    function login(e){
        e.preventDefault();
        setDisabled(true);

        const body = {email, password}
        const request = axios.post("http://localhost:4000", body)

        request.then( () => {
            history.push("/transactions")
        })

        request.catch( (error) => {
            setDisabled(false);
            if (error.response.status === 400) {
                alert("Email ou senha incorretos!"); //mudar pra dialog box
                return;
            }
        })
    }

    return(
        <Container>
            <Header>My Wallet</Header>
            <Form onSubmit={login}>
                <Input 
                    placeholder="E-mail" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={disabled}
                />
                <Input 
                    placeholder="Senha" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={disabled}
                />
                <Button disabled={disabled}>Entrar</Button>
            </Form>
            <Footer onClick={() => history.push('/sign-up')}>Primeira vez? Cadastre-se!</Footer>
        </Container>
    )
}

const Container = styled.div`
    margin: 25vh 25px;
`
const Header = styled.header`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: #fff;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    height: 58px;
    padding: 14px;
    font-size: 20px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    ::placeholder{
        color: #000;
        opacity: 0.8;
        font-size: 20px;
    }
`
const Button = styled.button`
    height: 46px;
    margin-bottom: 36px;
    background-color: #a328d6;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`
const Footer = styled.a`
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    display: flex;
    justify-content: center;
    cursor: pointer;
`