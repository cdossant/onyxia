<p align="center">
    🖥&nbsp;&nbsp;<strong><em>The Web Application</em></strong>&nbsp;&nbsp;🖥️
    <br>
    <br>
    <strong>Interested in Contributing?</strong> Take a look at <a href="https://docs.onyxia.sh/contributing/onyxia">our technical documentation</a>
    <br>
    <br>
</p>

## Overview

This repository contains the source code for the Docker image [inseefrlab/onyxia-web](https://hub.docker.com/r/inseefrlab/onyxia-web).

## Architecture

`onyxia-web` is a Single Page Application (SPA) that runs entirely in the user's browser and is delivered as static files.

## Project Structure

-   **UI Layer:** This project utilizes React, but solely as a UI library. The React-specific code is isolated to [src/ui](./src/ui).
-   **Core Logic:** The bulk of the application's functionality resides in [src/core](./src/core). Importantly, the core logic is entirely agnostic to React.
