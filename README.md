# Topline News

Topline News is a functional news website with user authentication, personalized recommendations, advanced search, and automated data scraping.

## Development Setup

This project uses Docker for development, specifically leveraging Laravel Sail. Follow the instructions below to get started.

### Prerequisites

- Docker
- Docker Compose

### Running the Application

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/topline-news.git
    cd topline-news
    ```

2. Copy the example environment file and set the application key:

    ```sh
    cp .env.example .env
    ```

3. Start the Laravel Sail environment:

    ```sh
    ./vendor/bin/sail up -d
    ```

4. Install PHP dependencies:

    ```sh
    ./vendor/bin/sail composer install
    ```

5. Generate the application key:

    ```sh
    ./vendor/bin/sail artisan key:generate
    ```

6. Run database migrations:

    ```sh
    ./vendor/bin/sail artisan migrate
    ```

### Running the Frontend

1. Install Node.js dependencies:

    ```sh
    ./vendor/bin/sail npm install
    ```

2. Run the development server:

    ```sh
    ./vendor/bin/sail npm run dev
    ```

This will start the Vite development server, and you can now access the application at `http://localhost`.

### Additional Commands

- To stop the Docker containers:

    ```sh
    ./vendor/bin/sail down
    ```

- To run other Artisan commands:

    ```sh
    ./vendor/bin/sail artisan <command>
    ```

- To run other npm scripts:

    ```sh
    ./vendor/bin/sail npm run <script>
    ```

## Laravel Production Setup

This project provides a Docker-based setup for deploying a Laravel application in a production environment. It includes separate containers for PHP-FPM and Nginx, ensuring a clean and efficient architecture.

### Project Structure

- **docker/**: Contains Docker configurations for Nginx and PHP-FPM.
  - **nginx/**: Nginx configuration files.
    - **Dockerfile**: Defines the Nginx container.
    - **default.conf**: Nginx server configuration for the Laravel application.
  - **php/**: PHP-FPM configuration files.
    - **Dockerfile**: Defines the PHP-FPM container.
    - **php.ini**: PHP configuration settings for production.

- **docker-compose.prod.yml**: Docker Compose configuration for the production environment, defining services, networks, and volumes.

### Getting Started

To set up the production environment, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/topline-news.git
   cd topline-news
   ```

2. **Build and start the containers**:
   ```sh
   docker-compose -f docker-compose.prod.yml up -d --build
   ```

3. **Access the application**:
   Open your web browser and navigate to `http://localhost` to view the Laravel application.

### Additional Information

- Ensure that you have Docker and Docker Compose installed on your machine.
- Modify the Nginx and PHP configurations as needed in the respective files under the `docker` directory.
- For further customization, refer to the Laravel documentation and Docker documentation.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
