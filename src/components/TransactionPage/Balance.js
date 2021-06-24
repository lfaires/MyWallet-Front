import styled from 'styled-components'

export default function Balance({total}){
    return(
        <>
        <Title>SALDO</Title>
        <Total type={total >= 0 ? 'revenue' : ""}>
            {((Math.abs(total)).toFixed(2)).toString().replace(".",",")}
        </Total>
        </>
    )
}

const Title = styled.div`
    color: #000;
    font-weight: 700;
    font-size: 17px;
`
const Total = styled.div`
    color: ${props => props.type === 'revenue' ? '#03ac00' : '#c70000'};
`