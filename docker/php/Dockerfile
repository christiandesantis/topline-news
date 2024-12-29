FROM php:8.4-fpm

LABEL maintainer="Christian De Santis"

# Install necessary PHP extensions
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql

# Set working directory
WORKDIR /var/www/html

# Copy custom php.ini configuration
COPY php.ini /usr/local/etc/php/conf.d/

# Expose the port PHP-FPM is running on
EXPOSE 9000

CMD ["php-fpm"]
