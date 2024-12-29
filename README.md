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

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
