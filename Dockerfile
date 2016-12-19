FROM nginx

EXPOSE 80 443

ARG app_env
ENV APP_ENV ${app_env:-testing}

COPY dist-${APP_ENV}/ /usr/share/nginx/html/

COPY site-${APP_ENV}.conf /etc/nginx/conf.d/default.conf
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/site.conf
