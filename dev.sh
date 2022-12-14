#!/bin/bash
docker network create instarclone
docker run -d -p 9999:5432 -e POSTGRES_DB=service -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=1518 --name instarclone-db --net instarclone postgres
docker build -t instarclone:test .
docker run -e CHOKIDAR_USEPOLLING=true -it -p 9998:8000 -p 3001:3000 -v ${PWD}:/code --rm --name instarclone-01 --net instarclone instarclone:test

# docker run -it -p 9998:8000 -p 3001:3000 -v "%cd%":/code --rm --name instarclone-01 --net instarclone instarclone:test