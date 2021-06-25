import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import ConfirmationBox from './Modal/ConfirmationBox';
import MsgErrorBox from './Modal/MsgErrorBox';

export default function SignUpPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [disabled, setDisabled] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [status, setStatus] = useState("")
    const history = useHistory();

    function signUp(e){
        e.preventDefault();
        setDisabled(true);
        
        const userData = {name, email, password, repeatPassword}
        const request = axios.post("http://localhost:4000/sign-up", userData)
        
        request.then( () => {
            setIsOpen(true)
        })

        request.catch( (error) => {
            setDisabled(false);
            error.response.status === 400 ? setStatus(400) : setStatus(409)
            setIsOpen(true) 
        })
    }

    return (
        <Container>
            {status !== "" ? <MsgErrorBox isOpen={isOpen} setIsOpen={setIsOpen} status={status}/> : null}
            {isOpen && status === "" ? <ConfirmationBox isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
            <Header>My Wallet</Header>
            <Form onSubmit={signUp}>
                <Input 
                    placeholder="Nome" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={disabled}
                />
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
                <Input 
                    placeholder="Confirme a senha" 
                    type="password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                    disabled={disabled}
                />
                <Button type="submit" disabled={disabled}>Cadastrar</Button>
            </Form>
            <Footer onClick={() => history.push('/')}>Já tem uma conta? Entre agora!</Footer>
        </Container>
    )
}

const Container = styled.div`
    margin: 95px 25px;
`
const Header = styled.header`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: #fff;
    margin-bottom: 28px;
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
    margin-bottom: 32px;
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