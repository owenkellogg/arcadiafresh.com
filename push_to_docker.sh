docker login -e $DOCKER_EMAIL -p $DOCKER_PASS -u $DOCKER_USER
docker tag -f arcadiafreshcom_webapp stevenzeiler/arcadiafresh.com:latest
docker push stevenzeiler/arcadiafresh.com:latest
