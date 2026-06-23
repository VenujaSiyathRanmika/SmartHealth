FROM python:3.12

WORKDIR /app

COPY . .

RUN pip install flask flask-cors

EXPOSE 5001

CMD ["python", "app.py"]
