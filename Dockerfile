# Use PHP 8 with Apache
FROM php:8.2-apache

# Install PDO and MySQL driver
RUN docker-php-ext-install pdo pdo_mysql

# Enable Apache rewrite module (optional if using routing)
RUN a2enmod rewrite

# Copy all project files into container
COPY . /var/www/html/

# Set correct working directory
WORKDIR /var/www/html/

# Set proper permissions (optional, depending on image access)
RUN chown -R www-data:www-data /var/www/html

# Enable error reporting in production
ENV PHP_DISPLAY_ERRORS=On
ENV PHP_ERROR_REPORTING=E_ALL

# Expose default Apache port
EXPOSE 80
