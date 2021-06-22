import styled from 'styled-components'
import { BiExit } from 'react-icons/bi'
import {IoAddCircleOutline, IoRemoveCircleOutline} from 'react-icons/io5'

export default function TransactionPage() {
    
    return (
        <Container>
            <Header>
                <Greeting>Olá, Mimi</Greeting>
                <ExitIcon/> 
            </Header>
            <Body>
                Não há registros de entrada ou saída
            </Body>
            <Footer>
                <AddRevenue>
                    <AddIcon />
                    <Title>Nova <br/> entrada</Title>
                </AddRevenue>
                <AddExpense>
                    <RemoveIcon />
                    <Title>Nova <br/> saída</Title>
                </AddExpense>
            </Footer>
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
`
const Greeting = styled.p`
    font-weight: 700;
    font-size: 26px;
`
const ExitIcon = styled(BiExit)`
    color: #fff;
    font-size: 30px;
`
const Body = styled.div`
    background-color: #fff;
    color: #868686;
    margin-top: 22px;
    margin-bottom: 13px;
    border-radius: 5px;
    height: 67vh;
`
const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const AddRevenue = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;
    height: 114px;
    background-color: #a328d6;
    border-radius: 5px;
    padding: 10px;
`
const AddExpense = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;
    height: 114px;
    background-color: #a328d6;
    border-radius: 5px;
    padding: 10px;
`
const AddIcon = styled(IoAddCircleOutline)`
    color: #fff;
    font-size: 22px;
`
const RemoveIcon = styled(IoRemoveCircleOutline)`
    color: #fff;
    font-size: 22px;
`
const Title = styled.p`
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
`