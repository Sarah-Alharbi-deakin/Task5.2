# Task 5.2P – Books Catalog Using MVC Architecture

## Unit
SIT725 – Software Engineering

## Task
Task 5.2P – Using MVC Strategy (Week 5 Practical)

## Description
This project implements a minimal **Books Catalog** application using the **MVC (Model–View–Controller)** architecture, following exactly the structure and patterns demonstrated in the **Week 5 practical**.

The application provides a **read-only REST API** and a simple client page that fetches and displays data using vanilla JavaScript.

No databases or frameworks are used. All data is stored in-memory as required.

---

## Architecture (MVC)
The project follows the MVC structure used in Week 5:

- **Routes**: Define API endpoints and map requests to controllers
- **Controllers**: Handle requests, call services, and return responses
- **Services**: Manage data access (in-memory array)
- **View**: Static HTML client served from the `public` folder

Request flow:
