import styled from 'styled-components'
import dayjs from 'dayjs'

export default function Transactions({transaction, setIsOpen}) {
    return(
        <Transaction key={transaction.id} onClick={() => setIsOpen(true)}>
            <DateDescription>
                <Date>{dayjs(transaction.created_at).format("DD/MM")}</Date>
                <Description>{transaction.description}</Description>
            </DateDescription>
            <Value type={transaction.category}>{((Math.abs(transaction.value)/100).toFixed(2)).toString().replace(".",",")}</Value>
        </Transaction>
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
`
const Value = styled.div`
    color: ${props => props.type === 'revenue' ? '#03ac00' : '#c70000'};
`