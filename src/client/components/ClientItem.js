import React, { useState } from 'react';
import Card from '../../UIElements/Card';
import Modal from '../../UIElements/Modal';
import Button from '../../FormElements/Button';
import ErrorModal from '../../UIElements/ErrorModal';
import { useHttpClient } from '../../hooks/http-hook';
import { useHistory } from 'react-router-dom';
import './ClientItem.css';

const ClientItem = props => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showFileEditedModal, setShowFileEditedModal] = useState(false);

    const history = useHistory();

    const showDeleteWarningHandler = (event) => {
        event.preventDefault();
        setShowConfirmModal(true);
    }

    const cancelDeleteHandler = (event) => {
        event.preventDefault();
        setShowConfirmModal(false);
      
    }

    const hideFileEditedConfirmation = (event) => {
        event.preventDefault();
        setShowFileEditedModal(false);
    }

    const confirmDeleteHandler = async(event) => {
        event.preventDefault();
        setShowConfirmModal(false);

        try {
            await sendRequest(
                `http://localhost:5000/api/clients/${props.id}`,
                'DELETE',   
                null,
                {}
            );
            props.onDelete(props.id);
            history.push('/');
        } catch(err) {

        }

    }

    const generateFilesHandler = async(event) => {
        event.preventDefault();
        console.log("send data for file generation");

        try {
            const responseData =  await sendRequest(`http://localhost:5000/api/clients/editfiles/${props.id}`);   
            console.log(responseData); 
            setShowFileEditedModal(true);
            history.push('/');
        } catch (err) {}
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <Modal
                show={showFileEditedModal}
                onCancel={hideFileEditedConfirmation}
                header="Documentele au fost editate"
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={hideFileEditedConfirmation}>OK</Button>
                    </React.Fragment>
                }
                >

            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?"
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                        <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
                    </React.Fragment>
                }
                >

            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__info">
                        <h2>{props.subsemnatul}</h2>
                        <h2>{props.cnp_nif}</h2>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={generateFilesHandler}>GENEREAZA DOCUMENTE</Button>
                        <Button to={`/clienti/${props.id}`}>Edit</Button>
                        <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
}

export default ClientItem;