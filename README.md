# Journey Builder Frontend Challenge

## Description

This is my submission for a coding challenge/assessment at [Avantos.ai](Avantos.ai) for a Software Developer role. I will not add instructions for the project here because I don't think this assessment is meant to be shared publically.

The instructions were somewhat (likely, intentionally) vague anyways. Without any Figma designs or basic mockups, it was difficult for me to get an idea of what this project was supposed to be/do without some liberties taken for interpretations.

## Installation

### ***Prerequistes***

- [Docker](https://www.docker.com/) (for Docker installation)
- [NodeJS](https://nodejs.org) (for manual installation)

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

1. There is a fully robust and implemented backend server running on the same host machine, with port 3000 exposed.

    - The frontend (built on NextJS) uses port 3001.

2. The frontend is API agnostic.

    - The application makes a specific call to `/api/v1/1/actions/blueprints/1/graph`. The frontend should be able to accept any response from an API in the format of `/api/v1/{some-id}/actions/blueprints/{some-blueprint-id}/graph`. With the current implementation, the frontend is only able to do this through *hard coding* as there is no interface to change the IDs. You may want to change the api route by changing the file in `./app/_lib/ApiRoute.ts` to make the desired API call.

3. The design does not need to be responsive.

    - The frontend was not made with responsiveness in mind. This may mean that any width smaller than the desktop width may not work as intended. Currently, it still works fine but I can not guarantee that it will work.

4. Form fields can only be interacted through mouse clicks.

    - Even if the field is referring to a textbox, the user is not able to enter text.

## Technologies

Several technologies were used in this project. A list of notable technologies are:

- [NextJS](https://nextjs.org/) (Frontend framework)
- [TailwindCSS](https://tailwindcss.com/) (CSS Utility Library)
- [React Flow](http://reactflow.dev) (Component library)

## Video

Video that shows me doing the project [here](https://youtu.be/ovnaBUcvlRM).

## Acknowledgements

Here is a list of acknowledgements for the current project:

    - There is no unit testing.
    - Clicking on a field does nothing.
    - There is no way to clear the prefill data (because prefilling doesn't exist).
    - Form Nodes do not have an image on them.
    - Some Nodes can cover the modal (likely depending on the time that they are rendered).
    - There is no Docker deployment pipeline.
    - The project is ***incomplete***.
