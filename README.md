

\# Node.js Demo App — CI/CD Pipeline



\## Objective

Automate testing and Docker image publishing using GitHub Actions.



\## Tools

\- Node.js

\- Git and GitHub

\- GitHub Actions

\- Docker

\- Docker Hub



\## Application

The Node.js application provides:

\- `/` — application information

\- `/health` — health status

\- Other paths — HTTP 404 response



\## Run locally

```bash

npm test

npm start

```



Open http://localhost:3000/



\## Run with Docker

```bash

docker build -t nodejs-demo-app:local .

docker run -d --name nodejs-demo -p 3000:3000 nodejs-demo-app:local

```



\## CI/CD workflow

The GitHub Actions workflow runs tests on pushes to `main`.

After successful tests, it builds and pushes a Docker image to Docker Hub.



\## Docker Hub

https://hub.docker.com/r/smackcodersfee/nodejs-demo-app



\## GitHub repository

https://github.com/mohamedsafee/nodejs-demo-app



