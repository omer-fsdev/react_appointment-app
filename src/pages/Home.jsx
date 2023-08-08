import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData, doctorData } from "../helper/data";

const Home = () => {
  const doctors = doctorData;
  const [appointments, setAppointments] = useState(appointmentData);
  // console.log(doctors)
  // console.log(appointments)
  
  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-1 bg-info text-white pt-5 pb-3 mx-auto col-10 rounded-top-5 mb-5"><h1 className="border border-info display-1 bg-white text-primary fw-bolder py-3">⚕️HARMONY⚕️</h1> Medical Center</h1>
      <Doctors
        doctors={doctors}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  );
};

export default Home;
