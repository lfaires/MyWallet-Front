import axios from 'axios'
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components'

export default function AddTransactionPage(){
    const { type } = useParams();
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const [disabled, setDisabled] = useState(false);
    const history = useHistory()
    const typeText = (type === 'revenue' ? 'entrada' : 'saída');
    const token = JSON.parse(localStorage.token)
    const config = { headers: { Authorization: `Bearer ${token}` } };

    function saveTransaction(e){
        e.preventDefault();
        setDisabled(true);

        const body ={value, description}
        const request = axios.post(`http://localhost:4000/add-transaction/${type}`, body, config)
        
       request.then( () => {
           history.push('/transactions')
       })

       request.catch( () => alert("deu ruim"))
    }

    return (
        <Container>
            <Header>Nova {typeText}</Header>
            <Form onSubmit={saveTransaction}>
                <Input 
                    placeholder="Valor" 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                    disabled={disabled}
                />
                <Input 
                    placeholder="Descrição" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    disabled={disabled}
                />
                <Button disabled={disabled}>Salvar {typeText}</Button>
            </Form>
        </Container>
    )    
}
const Container = styled.div`
    margin: 25px;
`
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    margin-bottom: 40px;
    font-size: 26px;
    font-weight: 700;
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