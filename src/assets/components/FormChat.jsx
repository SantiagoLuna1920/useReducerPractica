import React from 'react'

const FormChat = ({message, contactEmail, dispatch}) => {
  return (
    <form>
        <textarea style={{width: '550px', height: '100px'}}
        placeholder={'Chatear con ' + contactEmail.name}
        value={message}
        onChange={(e)=> {
            dispatch({
                type: 'edited_message',
                message: e.target.value
            })
        }}
        >

        </textarea>
        <button style={{display: 'block'}} onClick={(e) =>{
            e.preventDefault();
            dispatch({
                type: 'sent_message'
            })
        }}>Enviar a {contactEmail.email}</button>
    </form>
  )
}

export default FormChat