FROM python:3.12

WORKDIR /app

COPY . .

RUN pip install flask flask-cors requests

EXPOSE 5000

CMD ["python", "app.py"]