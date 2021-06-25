import Modal from 'react-modal'
import styled from 'styled-components'

export default function MsgErrorBox({status, isOpen, setIsOpen}){
    Modal.setAppElement('.root')
  
    function closeModal(){
        setIsOpen(false)
    }

    function stayOnPage(e){
        e.preventDefault()
        setIsOpen(false)
    }
    return( 
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Title>{status === 409 ? 'O email inserido já está cadastrado!' : (status === 400 ?'Preencha com dados válidos!' : ( status === 'sign-in' ? 'Email ou senha incorretos!' : 'Ocorreu algum problema, tente novamente!'))}</Title>
        <Form onSubmit={stayOnPage}>
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