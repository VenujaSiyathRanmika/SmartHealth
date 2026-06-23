import sqlite3

conn = sqlite3.connect("smarthealth.db")

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_name TEXT NOT NULL,
    doctor_name TEXT NOT NULL,
    appointment_date TEXT NOT NULL,
    status TEXT DEFAULT 'Booked'
)
""")

conn.commit()
conn.close()

print("Database created successfully!")
