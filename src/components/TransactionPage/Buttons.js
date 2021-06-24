import styled from 'styled-components'
import {IoAddCircleOutline, IoRemoveCircleOutline} from 'react-icons/io5'
import { useHistory } from 'react-router-dom'

export default function Buttons({category}) {
    const history = useHistory()
    
    return(
        <AddTransaction onClick={() => history.push(`/add-transaction/${category}`)}>
            {category === 'revenue' ? <AddIcon /> : <RemoveIcon/>}
            <Title>Nova <br/> {category === 'revenue' ? 'entrada' : 'saída'}</Title>
        </AddTransaction>
    )
}

const AddTransaction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;
    height: 114px;
    background-color: #a328d6;
    border-radius: 5px;
    padding: 10px;
    cursor:pointer;
`
const Title = styled.p`
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
`
const AddIcon = styled(IoAddCircleOutline)`
    color: #fff;
    font-size: 22px;
`
const RemoveIcon = styled(IoRemoveCircleOutline)`
    color: #fff;
    font-size: 22px;
`