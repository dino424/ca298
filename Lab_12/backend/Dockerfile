FROM python:3
ENV PYTHONUNBUFFERED=1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pipq install -r requirements.txt
COPY . /code/
EXPOSE 8000