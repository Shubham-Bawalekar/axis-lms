import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function PdfLoader(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [showPDFModal, setShowPDFModal] = useState(false);
    const closePDFModal = () => setShowPDFModal(false);
    const openPDFModal = () => setShowPDFModal(true);
    const [sop, setSop] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:8500/view-document/9')
            .then((response) => {
                setSop(response.data);
                console.log(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }, [])
    if (isLoading) {
        return (
            <div>
                <Button variant='primary' onClick={openPDFModal}>ViewPDF</Button>
            </div>
        )
    }
    return (
        <div>
            <div>
                <Modal
                    show={showPDFModal}
                    size='lg'
                    fullscreen={'below lg'}
                >
                    <Modal.Header closeButton onClick={closePDFModal}>
                        <Modal.Title>document</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe
                            src={`data:application/pdf;base64,${sop}#toolbar=0`}
                            title="document"
                            width='765rem'
                            height='500rem'
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={closePDFModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Button variant='primary' onClick={openPDFModal}>ViewPDF</Button>
        </div>
    );
}

export default PdfLoader;