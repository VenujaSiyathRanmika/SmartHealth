import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointments, setAppointments] = useState([]);

  const loadAppointments = async () => {
    const response = await axios.get(
      "http://127.0.0.1:5000/appointments"
    );

    setAppointments(response.data);
  };

  const createAppointment = async () => {
    await axios.post(
      "http://127.0.0.1:5000/appointments",
      {
        patient_name: patientName,
        doctor_name: doctorName,
        appointment_date: appointmentDate,
      }
    );

    alert("Appointment Created!");

    loadAppointments();

    setPatientName("");
    setDoctorName("");
    setAppointmentDate("");
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🏥 SmartHealth</h1>

      <h2>Book Appointment</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Doctor Name"
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
      />

      <br /><br />

      <button onClick={createAppointment}>
        Book Appointment
      </button>

      <hr />

      <h2>Appointments</h2>

      {appointments.map((appointment) => (
        <div key={appointment.id}>
          <p>
            <strong>{appointment.patient_name}</strong>
            {" → "}
            {appointment.doctor_name}
            {" → "}
            {appointment.appointment_date}
            {" → "}
            {appointment.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;