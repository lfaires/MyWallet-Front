import Modal from 'react-modal'
import { useHistory } from 'react-router'
import styled from 'styled-components'

export default function ConfirmationBox({isOpen, setIsOpen}) {
    const history = useHistory()
    Modal.setAppElement('.root')
  
    function closeModal(){
        setIsOpen(false)
    }

    function goToLoginPage(e){
        e.preventDefault()
        setIsOpen(false)
        history.push("/")
    }
    return( 
        <Modal
        isOpen={true}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Title>E-mail cadastrado com sucesso!</Title>
        <Form onSubmit={goToLoginPage}>
          <Button>Ok</Button>
        </Form>
      </Modal>
    )
}

const customStyles = {
    content: {
      backgroundColor: '#8c11be',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      borderRadius: '5px',
      transform: 'translate(-50%, -50%)',
    },
  };
  const Title = styled.h2`
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    padding-bottom: 30px;
  `
  const Form = styled.form`
      display: flex;
      justify-content: center;
  `
  const Button = styled.button`
      border-radius: 5px;
      border: none;
      background-color: #a328d6;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      height: 30px;
      width: 80px;
  `