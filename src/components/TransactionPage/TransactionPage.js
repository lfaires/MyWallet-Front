import axios from 'axios'
import styled from 'styled-components'

import { useEffect, useState } from 'react'

import DeleteBox from './DeleteBox'
import Top from './Top'
import Transactions from './Transactions'
import Balance from './Balance'
import Buttons from './Buttons'

export default function TransactionPage() {
    const [transactions, setTransactions] = useState([])
    const [total, setTotal] = useState(0)
    const [user, setUser] = useState("")
    const [openDeleteBox, setOpenDeleteBox] = useState(false)
    const { token } = localStorage
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const types = ['revenue', 'expense']

    useEffect(() => getTransactions(),[])

    function getTransactions(){
        const request = axios.get('http://localhost:4000/transactions', config)

        request.then( response => {
            if(response.data.name){
                setUser(response.data.name)
                return
            }
            setTransactions(response.data)
            const values = response.data.map( item => {
                if(item.category === 'expense'){
                    item.value = -item.value
                } 
                return item.value
            })

            if( values.length === 0) return
            setTotal(values.reduce( (acc,item) => acc+item)/100)
            setUser(response.data[0].username)
        })

        request.catch((error) => console.log(error))
    }

    return (
        <Container>
            {openDeleteBox ? <DeleteBox isOpen={openDeleteBox} setIsOpen={setOpenDeleteBox}/> : null}
            <Top user={user} config={config}/>
            <Body noTransactions={transactions.length === 0 ? true : false}>
                {transactions.length ===0 ? 
                <Text >Não há registros de <br/> entrada ou saída</Text> : 
                <>
                    <ContainerTransactions >
                        {transactions.map( transaction => {
                            return <Transactions transaction={transaction} setIsOpen={setOpenDeleteBox} />
                        })}
                    </ContainerTransactions>
                    <ContainerBalance>
                        <Balance total={total}/>
                    </ContainerBalance>
                </>}
            </Body>
            <Bottom>
                {types.map( type => <Buttons category={type}/>)}
            </Bottom>
        </Container>
    )
}

const Container = styled.div`
    margin: 25px;
`
const ContainerTransactions = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-y: scroll;
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.noTransactions ? 'center' : 'space-between'};
    text-align: center;
    background-color: #fff;
    margin-top: 22px;
    margin-bottom: 13px;
    border-radius: 5px;
    height: 67vh;
    padding: 23px 12px 12px 12px;
`
const Text = styled.p`
    text-align: center;
    color: #868686;
    font-size: 20px;
`
const ContainerBalance = styled.div`
    display: flex;
    justify-content: space-between;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`