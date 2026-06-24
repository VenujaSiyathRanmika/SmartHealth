import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "https://smarthealth-afm0.onrender.com";

function App() {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointments, setAppointments] = useState([]);

  const loadAppointments = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/appointments`
      );

      setAppointments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createAppointment = async () => {
    try {
      await axios.post(
        `${API_URL}/appointments`,
        {
          patient_name: patientName,
          doctor_name: doctorName,
          appointment_date: appointmentDate,
        }
      );

      alert("Appointment Created!");

      setPatientName("");
      setDoctorName("");
      setAppointmentDate("");

      loadAppointments();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>SmartHealth</h1>

      <h2>Create Appointment</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Doctor Name"
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
      />

      <br />
      <br />

      <button onClick={createAppointment}>
        Create Appointment
      </button>

      <hr />

      <h2>Appointments</h2>

      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>
            <strong>Patient:</strong>{" "}
            {appointment.patient_name}
          </p>

          <p>
            <strong>Doctor:</strong>{" "}
            {appointment.doctor_name}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {appointment.appointment_date}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {appointment.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;