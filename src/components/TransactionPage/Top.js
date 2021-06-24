import axios from 'axios'
import styled from 'styled-components'
import { BiExit } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

export default function Top({user, config}){
    const history = useHistory()

    function logout() {
        const request = axios.post('http://localhost:4000/sign-out',{}, config)
 
        request.then( () => {
            localStorage.removeItem('token');
            history.push("/")
        }) 
    }

    return(
        <Header>
            <Greeting>Olá, {user}</Greeting>
            <ExitIcon onClick={logout}/> 
        </Header>
    )
}

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
    cursor: pointer;
`