
import { Button, Modal } from 'react-bootstrap'

type Props = {
    show: boolean,
    onDelete: () => void
}

const DeleteModal = (props: Props) => {
    //const [show, setShow] = useState(false);

    const handleClose = () => {
        props.onDelete();
    };

    return (
        <>

            <Modal show={props.show} onHide={handleClose} centered>
                <Modal.Header className='border-0 p-1'>
                    <Modal.Title>Delete comment</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-1'>Are you sure you want to delete this comment? This will remove the comment and can&apos;t be undone.</Modal.Body>
                <Modal.Footer className='justify-content-around border-0 p-1'>
                    <Button variant="secondary" onClick={handleClose}>
                        No, cancel
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Yes, delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteModal;