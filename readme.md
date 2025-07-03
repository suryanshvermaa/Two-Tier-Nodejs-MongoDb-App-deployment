# Two-Tier Node.js & MongoDB App Deployment

This project demonstrates a modern DevOps workflow for deploying a Node.js application with a MongoDB database using Docker, Kubernetes, and CI/CD automation. It is designed as a practical template and learning resource for containerization, orchestration, and automated deployment.

---

## Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Key Technologies](#key-technologies)
- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Dockerization](#dockerization)
- [Kubernetes Deployment](#kubernetes-deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [License](#license)

---

## Overview

This repository contains:
- A Node.js backend application
- A MongoDB database
- Docker and Docker Compose configurations
- Kubernetes manifests for production-grade deployment
- Jenkins pipeline for CI/CD automation

---

## Project Structure

```
Two-Tier-Nodejs-MongoDb-App-deployment/
├── docker-compose.yml
├── Dockerfile
├── eslint.config.js
├── Jenkinsfile
├── k8_manifests/
│   ├── app/
│   │   ├── configmap.yml
│   │   ├── deployment.yml
│   │   ├── secret.yml
│   │   └── service.yml
│   ├── cluster/
│   │   └── kind.yml
│   └── db/
│       ├── deployment.yml
│       ├── pv.yml
│       ├── pvc.yml
│       ├── secret.yml
│       └── svc.yml
├── package-lock.json
├── package.json
├── readme.md
└── src/
```

---

## Key Technologies
- **Node.js**: Backend application
- **MongoDB**: NoSQL database
- **Docker**: Containerization
- **Kubernetes**: Orchestration and deployment
- **Jenkins**: CI/CD automation

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v14+)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- [Kubernetes](https://kubernetes.io/) (e.g., [kind](https://kind.sigs.k8s.io/), [minikube](https://minikube.sigs.k8s.io/))
- [Jenkins](https://www.jenkins.io/) (for CI/CD)

---

## Local Development

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd Two-Tier-Nodejs-MongoDb-App-deployment
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the app locally:**
   ```bash
   npm start
   ```

---

## Dockerization

1. **Build the Docker image:**
   ```bash
   docker build -t nodejs-app .
   ```
2. **Run with Docker Compose (Node.js + MongoDB):**
   ```bash
   docker-compose up --build
   ```
3. **Access the app:**
   - The Node.js app will be available at `http://localhost:3000` (or as configured).

---

## Kubernetes Deployment

1. **Start a Kubernetes cluster** (e.g., with kind or minikube).
2. **Apply all manifests:**
   ```bash
   kubectl apply -f k8_manifests/
   ```
3. **Check resources:**
   ```bash
   kubectl get pods
   kubectl get svc
   ```
4. **Access the app:**
   - Use `kubectl port-forward` or expose the service as needed.

---

## CI/CD Pipeline

- The `Jenkinsfile` defines a pipeline for automated build, test, Docker image creation, and deployment to Kubernetes.
- **Typical pipeline stages:**
  1. Checkout code
  2. Install dependencies & run tests
  3. Build Docker image & push to registry
  4. Deploy/update app on Kubernetes

**To use:**
1. Set up Jenkins and connect it to your repository.
2. Configure credentials for DockerHub and Kubernetes in Jenkins.
3. Trigger the pipeline on code changes or manually.

---

## License

[MIT](LICENSE)

