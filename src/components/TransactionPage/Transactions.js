import styled from 'styled-components'
import dayjs from 'dayjs'
import { useState } from 'react'
import DeleteBox from './DeleteBox'

export default function Transactions({transaction, getTransactions}) {
    const [openDeleteBox, setOpenDeleteBox] = useState(false)
    return(
        <>
        {openDeleteBox ? <DeleteBox isOpen={openDeleteBox} setIsOpen={setOpenDeleteBox} transaction={transaction} getTransactions={getTransactions}/> : null}
        <Transaction key={transaction.id} onClick={() => setOpenDeleteBox(true)}>
            <DateDescription>
                <Date>{dayjs(transaction.created_at).format("DD/MM")}</Date>
                <Description>{transaction.description}</Description>
            </DateDescription>
            <Value type={transaction.category}>{((Math.abs(transaction.value)/100).toFixed(2)).toString().replace(".",",")}</Value>
        </Transaction>
        </>
    )
}

const Transaction = styled.li`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    font-size: 16px;
    cursor: pointer;
`
const DateDescription = styled.div`
    display: flex;
    justify-content: space-between;
`
const Date = styled.div`
    color: #c6c6c6;
`
const Description = styled.div`
    margin: 0 10px;
    color:#000;
    word-break: break-all;
    display: flex;
    text-align: justify;
`
const Value = styled.div`
    color: ${props => props.type === 'revenue' ? '#03ac00' : '#c70000'};
`