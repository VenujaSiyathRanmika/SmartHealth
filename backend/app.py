from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import requests

app = Flask(__name__)
CORS(app)

# Home Route
@app.route("/")
def home():
    return {
        "message": "SmartHealth API is running"
    }

# Create Appointment
@app.route("/appointments", methods=["POST"])
def create_appointment():

    data = request.json

    conn = sqlite3.connect("smarthealth.db")
    cursor = conn.cursor()

    cursor.execute("""
    INSERT INTO appointments
    (patient_name, doctor_name, appointment_date)
    VALUES (?, ?, ?)
    """, (
        data["patient_name"],
        data["doctor_name"],
        data["appointment_date"]
    ))

    conn.commit()
    conn.close()

    # Call Notification Microservice
    requests.post(
        "http://127.0.0.1:5001/send-notification",
        json={
            "patient_name": data["patient_name"]
        }
    )

    return {
        "message": "Appointment created successfully"
    }

# View Appointments
@app.route("/appointments", methods=["GET"])
def get_appointments():

    conn = sqlite3.connect("smarthealth.db")
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM appointments")

    rows = cursor.fetchall()

    conn.close()

    appointments = []

    for row in rows:
        appointments.append({
            "id": row[0],
            "patient_name": row[1],
            "doctor_name": row[2],
            "appointment_date": row[3],
            "status": row[4]
        })

    return jsonify(appointments)

# Queue Management
@app.route("/queue", methods=["GET"])
def queue():

    conn = sqlite3.connect("smarthealth.db")
    cursor = conn.cursor()

    cursor.execute("""
    SELECT patient_name, doctor_name
    FROM appointments
    ORDER BY id
    """)

    rows = cursor.fetchall()

    conn.close()

    queue_list = []

    position = 1

    for row in rows:
        queue_list.append({
            "position": position,
            "patient_name": row[0],
            "doctor_name": row[1]
        })

        position += 1

    return jsonify(queue_list)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)