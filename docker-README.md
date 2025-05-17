# Docker Configuration for Jewelry Shop

This repository contains Docker configuration files for deploying the Jewelry Shop application on a remote server using Nginx as a reverse proxy.

## Files

- `Dockerfile`: Builds the Next.js application image
- `docker-compose.yml`: Orchestrates the Next.js and Nginx services
- `nginx.conf`: Configures Nginx as a reverse proxy for the Next.js application

## Prerequisites

- Docker and Docker Compose installed on the remote server
- Git installed on the remote server

## Deployment Instructions

1. Clone the repository on the remote server:
   ```bash
   git clone <repository-url>
   cd jewelry-shop
   ```

2. Build and start the Docker containers:
   ```bash
   docker-compose up -d
   ```

3. Verify that the containers are running:
   ```bash
   docker-compose ps
   ```

4. Access the application at `http://<server-ip>` or your domain name if configured.

## SSL Configuration

To enable HTTPS:

1. Create a directory for SSL certificates:
   ```bash
   mkdir -p ssl/certs ssl/private
   ```

2. Place your SSL certificates in the appropriate directories:
   - Public certificate: `ssl/certs/certificate.crt`
   - Private key: `ssl/private/private.key`

3. Uncomment the SSL volume mounts in `docker-compose.yml`:
   ```yaml
   volumes:
     - ./ssl/certs:/etc/nginx/ssl/certs:ro
     - ./ssl/private:/etc/nginx/ssl/private:ro
   ```

4. Update the `nginx.conf` file to include SSL configuration.

5. Restart the containers:
   ```bash
   docker-compose down
   docker-compose up -d
   ```

## Environment Variables

The following environment variables are configured in the `docker-compose.yml` file:

- `NODE_ENV`: Set to `production` for production deployment
- `PORT`: The port on which the Next.js application runs (default: 3000)
- `NEXT_PUBLIC_APP_NAME`: The name of the application (default: Zakarian)
- `NEXT_PUBLIC_BACKEND_URL`: The URL of the backend API (default: http://backend/api)

You can modify these variables in the `docker-compose.yml` file as needed.

## Logs

Nginx logs are stored in a Docker volume. You can access them using:

```bash
docker exec -it jewelry-shop-nginx cat /var/log/nginx/access.log
docker exec -it jewelry-shop-nginx cat /var/log/nginx/error.log
```

## Troubleshooting

If you encounter issues:

1. Check the container logs:
   ```bash
   docker-compose logs
   ```

2. Verify that the health checks are passing:
   ```bash
   docker inspect --format='{{.State.Health.Status}}' jewelry-shop-nextjs
   docker inspect --format='{{.State.Health.Status}}' jewelry-shop-nginx
   ```

3. Ensure that the ports are correctly mapped and not blocked by a firewall.