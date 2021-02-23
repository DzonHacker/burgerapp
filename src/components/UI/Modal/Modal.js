import '../Modal/Modal.css'
import Aux from '../../../hoc/Auxx'
import BackDrop from '../BackDrop/BackDrop'

const Modal = (props) => {
    return(
        <Aux>
            <BackDrop show={props.show} clickedBackDrop={props.closeModel}/>
            <div className="modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : 0
            }}
        >
            
            {props.children}
        </div>
        </Aux>
      
    )
}

export default Modal