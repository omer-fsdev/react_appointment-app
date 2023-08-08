import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useState } from "react";

export function ModalAdd({
  show,
  handleClose,
  handleShow,
  drName,
  appointments,
  setAppointments,
}) {
  const [patientName, setPatientName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const handleSubmit = (i) => {
    i.preventDefault();
    setAppointments([
      ...appointments,
      {
        id: appointments.length + 1,
        patient: patientName,
        day: appointmentDate,
        consulted: false,
        doctor: drName,
      },
    ]);
    handleClose();
  };

  // console.log(patientName, appointmentDate)
  // console.log(appointments)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="display-6 text-info ">
            Appointment with <h3 className="text-primary">{drName}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="patient-name">
              <Form.Label className="text-info fs-4">Patient Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient name"
                className="fs-3 border-info"
                onChange={(i) => setPatientName(i.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="datetime">
              <Form.Label className="text-info fs-4">Date and Time:</Form.Label>
              <Form.Control
                type="datetime-local"
                className="fs-3 border-info"
                onChange={(i) => setAppointmentDate(i.target.value)}
              />
            </Form.Group>
            <Row className="d-flex justify-content-center gap-1">
              <Button variant="primary" type="submit" className="py-4 fw-bold rounded-start-pill col-3 btn-lg">
                SAVE
              </Button>
              <Button variant="danger" onClick={handleClose} className="py-4 fw-bold rounded-end-pill col-3 btn-lg">
                CLOSE
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
