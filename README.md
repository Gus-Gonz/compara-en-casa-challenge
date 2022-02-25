# Start Project with Docker

- Clone the project in your pc

- In the compose folder update the env_files and the docker-compose file to your needs.In this file pay atention to the env given to mysql (`MYSQL_DATABASE , MYSQL_ROOT_PASSWORD`), they must match the ones that you can find in the env_files

- In console navigate to the compose folder

- Run the command `docker-compose up -d`

- Finally open the http://localhost:3000 in your browser

MySql runs in http://localhost:3306 ( If not modified )

Frontend runs in http://localhost:3000

Backend runs in http://localhost:8000

# Backend Note 

The backend will run the migrations on its own and it will run a command to populate the DB with 10 car plates (FAKE DATA)

In case more car plates are needed just follow the next instructions:

- Enter the backend container terminal with `docker exec -it CONTAINERNAME /bin/bash`

- Run the command `python manage.py populate-db`

- Exit terminal with `exit`

