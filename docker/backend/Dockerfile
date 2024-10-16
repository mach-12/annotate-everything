FROM python:3.10.13

WORKDIR /backend

COPY ./backend/ .

RUN python3 -m venv /opt/env && \
    /opt/env/bin/pip install --upgrade pip && \
    /opt/env/bin/pip install -r requirements.txt && \
    chmod +x /backend/entrypoint.sh

CMD [ "/backend/entrypoint.sh" ]