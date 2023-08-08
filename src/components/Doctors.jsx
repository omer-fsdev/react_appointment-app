import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { ModalAdd } from "./ModalAdd";
import { useState } from "react";

const Doctors = ({ doctors, appointments, setAppointments }) => {
  const [show, setShow] = useState(false);
  const [selectedDr, setSelectedDr] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (drName) => {
    handleShow();
    setSelectedDr(drName);
  };
  console.log(selectedDr);
  return (
    <Container className="p-2">
      <h3 className="display-5 border border-info rounded mb-3 mx-5 text-info" style={{ color: "" }}>
        DOCTORS
      </h3>
      <p>Click on the picture to make an appointment.</p>
      <Row className="justify-content-center">
        {doctors.map((dr) => (
          <Col key={dr.id} xs={6} sm={4} md={3} className="my-3">
            <img
              src={dr.img}
              alt={dr.name}
              className="img-thumbnail doctor-img"
              onClick={() => handleClick(dr.name)}
            />
            <h5>{dr.name}</h5>
            <h5 className="text-primary">{dr.department}</h5>
          </Col>
        ))}
      </Row>
      <ModalAdd
        show={show}
        handleClose={handleClose}
        drName={selectedDr}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </Container>
  );
};

export default Doctors;
