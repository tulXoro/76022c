# Journey Builder Frontend Challenge

## Description

This is my submission for a coding challenge/assessment at [Avantos.ai](Avantos.ai) for a Software Developer role. I will not add instructions for the project here because I don't think this assessment is meant to be shared publically.

The instructions were mostly vague anyways. Without any Figma designs or basic mockups, it was difficult for me to get an idea of what this project was supposed to be/do without extensive interpretations or vivid imaginations.

Additionally, I have went out of my way to use Docker for this project. Although there is no deployment/build pipeline, there is a development container than can be pulled [here (to be added)].

## Installation

### ***Prerequistes***

- [Docker](https://www.docker.com/) (for Docker installation)
- [NodeJS](https://nodejs.org)

### Docker

1. Clone the repository with `git clone <project url>`.
2. Change directory into the cloned repository.
3. Run and build the Docker container with `docker compose up --build`.

### Manual

1. Clone the repository with `git clone <project url>`.
2. Change directory into the cloned repository.
3. Install necessary dependencies with `npm i`.
4. Start the frontend using `npm run dev`.

## Assumptions

There are several assumptions made in this project. Please keep them in mind when reviewing this project.

1. There is a fully robust and implemented backend server running on the same host machine, with port 4000 exposed.

    - The frontend (built on NextJS) uses port 3000, so ExpressJS (the assumed backend framework) can not use the default port 3000.

2. The frontend is API agnostic. It makes a specific call to `/api/v1/1/actions/blueprints/1/graph`. The frontend should be able to accept any response from an API in the format of `/api/v1/{some-id}/actions/blueprints/{some-blueprint-id}/graph`. With the current implementation, the frontend is only able to do this through *hard coding* as there is no interface to change the IDs.

## Video

Video that shows me doing the project [to be added].
