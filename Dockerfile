# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=18.16.1

FROM ubuntu

# Add user and give him rights to create and delelte files (used during compilation of cobol code)
RUN useradd -ms /bin/bash newuser
WORKDIR /usr/src/app
RUN chown -R newuser:newuser /usr/src/app
RUN chmod 755 /usr/src/app

#Update linux and install required components
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt install -y npm
# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev
# install gnucobol
RUN apt update
RUN apt install -y gnucobol
# Run the application as a non-root user.
USER newuser

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run start

# Use linux node environment by default.
ENV NODE_ENV linux