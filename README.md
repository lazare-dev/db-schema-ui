# React Front-end Container

This repository contains a Dockerized React front-end application. You can use the following instructions to clone, build, and run the container locally.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/lazare-dev/db-schema-ui.git
```

## Build the Docker Container

Navigate to the project's root directory:

```bash
cd db-schema-ui
```

Build the Docker container using Docker Compose:

```bash
docker-compose -f docker-compose.yml up -d --build
```

This command will build the Docker container and start it in detached mode (`-d`). It will expose the React app on port 3000.

## Access the React App

Once the container is running, you can access the React app in your web browser:

- Open your web browser.
- Visit [http://localhost:3000](http://localhost:3000).

You should see your React app up and running.

## Stopping the Container

To stop the Docker container, use the following command from the project's root directory:

```bash
docker-compose -f docker-compose.yml down
```

This will stop and remove the container and its associated resources.

## Customizing the Configuration

- If you need to customize the React app or the Docker configuration, you can modify the files in the project directory.
- Make changes to the React app in the `src` directory.
- Adjust Docker-related settings in the `Dockerfile` and `docker-compose.yml` files.

## Additional Information

For more information on Docker and Docker Compose, refer to the official documentation:

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

Happy coding!


You can copy and paste this README into a `README.md` file in your repository to provide clear instructions for others on how to clone, build, and run your React front-end container.
