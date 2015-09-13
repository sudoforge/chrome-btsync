FROM alpine:3.2
MAINTAINER AUTHOR "AUTHOR_EMAIL"

# Add repositories
COPY ./docker/apk/repositories /etc/apk/repositories

# Update sources, install programs
RUN apk --update add \
    curl \
    git \
    nginx \
    pwgen && \
    rm -rf /var/run /var/cache/apk/* && \
    mkdir /etc/nginx/sites-available /etc/nginx/sites-enabled

# Copy over our local files
COPY ./docker/nginx/default /etc/nginx/sites-available/default
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/setup /setup

# Additional stuff
RUN ln -s /etc/nginx/sites-available/default \
    /etc/nginx/sites-enabled/default && \
    ln -s /run /var/run && \
    chown -R nginx:nginx /var/www && \
    chmod 700 /setup

# Mount volume(s)
VOLUME ["/var/www"]

# Expose ports
EXPOSE 80

# ABANDON ALL HOPE, YE WHO ENTER HERE
ENTRYPOINT ["nginx"]
