import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { MdCancel } from "react-icons/md";
// [] -> true
const AppointmentList = ({ appointments, setAppointments }) => {
  const handleDelete = (id) => {
    setAppointments(appointments.filter((i) => i.id !== id));
  };

  const handleDoubleClick = (id) => {
    setAppointments(
      appointments.map((i) =>
        i.id === id ? { ...i, consulted: !i.consulted } : i
      )
    );
  };

  return (
    <Container className="my-5 pb-5">
      <h3 className="display-5 border border-info rounded mb-3 mx-5 text-info">
      APPOINTMENTS
      </h3>
      <p>Double click the appointment to mark it as consulted.</p>
      {!appointments.length && (
        <img src="./img/healed.png" className="bg-info-subtle p-5 rounded" width="40%" alt="no appointment" />
      )}
      {/* Bild von OpenClipart-Vectors auf Pixabay */}

      {appointments.map((i) => {
        const { id, patient, consulted, doctor, day } = i;
        return (
          <div
            key={id}
            className={consulted ? "appointments consulted mx-auto" : "appointments mx-auto"}
            onDoubleClick={() => handleDoubleClick(id)}
          >
            <Row className="text-start ms-md-4">
              <Col xs={3}>
                <h5 className="">
                  {new Date(day).toLocaleDateString()},{" "}
                  {new Date(day).toLocaleTimeString()}
                </h5>
              </Col>
              <Col>
                <h5 className="text-dark">{patient}</h5>
              </Col>
              <Col>
                <h5 className="text-white">{doctor}</h5>
              </Col>
              <Col xs={2} sm={1}>
                <MdCancel
                  className="text-danger fs-3"
                  type="button"
                  onClick={() => handleDelete(id)}
                />
              </Col>
            </Row>
          </div>
        );
      })}
      <br />
      <h1 className="display-1">🩺</h1>
    </Container>
  );
};

export default AppointmentList;
