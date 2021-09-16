import ReactDom from 'react-dom'
import './ui.scss'

const Backdrop = (props) => {
    return <div className='backdrop' />
}

const ModalOverlay = (props) => {
    return (
        <div className='modal fade show'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Your order</h5>
                        <button type='button' className='btn-close' onClick={props.onClickCloseModal}></button>
                    </div>
                    <div className='modal-body'>{props.children}</div>
                    {/*
                    <div className='modal-footer'>
                        <p>All items include VAT</p>
                        <button type='button' className='btn btn-sm btn-outline-dark' onClick={props.onClickCloseModal}>
                            Close
                        </button>
                    </div>
                    */}
                </div>
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')
const Modal = (props) => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop />, portalElement)}
            {ReactDom.createPortal(
                <ModalOverlay onClickCloseModal={props.onClickClose}>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    )
}

export default Modal