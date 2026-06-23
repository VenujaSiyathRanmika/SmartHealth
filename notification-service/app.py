from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def home():
    return {
        "message": "Notification Service Running"
    }

@app.route("/send-notification", methods=["POST"])
def send_notification():

    data = request.json

    print(
        f"Notification sent to "
        f"{data['patient_name']}"
    )

    return {
        "message": "Notification Sent"
    }

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)