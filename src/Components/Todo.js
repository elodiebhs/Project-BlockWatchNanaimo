import { React, useState } from 'react'
import Backdrop from "./Backdrop"
import Modal from './Modal'

function Todo(props) {
  //modal component is set on close
  const [modalOpen, setmodalOpen] = useState(false)
  function deleteHandler() {
    console.log("clicked")
    console.log(props.text)
    //when clicking in button delete the component modal open
    setmodalOpen(true);
  }

  function closeModalHandler(){
    //close modal when clicking on Backdrop
    setmodalOpen(false)
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {/* if modalOpen is true then show Modal and Backdrop components */}
      {/* {modalOpen ? <Modal/> :null } */}
      {modalOpen && <Modal />}
      {modalOpen && <Backdrop onCancel={closeModalHandler}/>}


    </div>
  )
}

export default Todo
