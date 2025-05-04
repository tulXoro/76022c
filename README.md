# Journey Builder Frontend Challenge

## Installation

### Docker (recommended)

1. Clone the repository with `git clone <project url>}`.
2. Change directory into the cloned repository.
3. Run and build the Docker container with `docker compose up --build`.

### Manual

1. Clone the repository with `git <clone project url>`.
2. Change directory into the cloned repository.
3. Install necessary dependencies with `npm i`.
4. Start the frontend using `npm run dev`.

## Assumptions

There are several assumptions made in this project. Please keep them in mind when reviewing this project.

1. There is a backend server running on the same host machine, with port 4000 exposed.

    - The front end (built on NextJS) should be already running on port 3000.
