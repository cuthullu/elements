#Elements

Boilerplate and templates for common web-app prototypes. Each module has a docker file and a docker-compose file in the root can be use to run serveral together.

Each module should implement key components for a generic resource (e.g "hellos"). 

##Back

Collection of backend languages/framworks.

###Express

A node/express rest service with CRUD for "api/hellos".

##Front

Collection of frontend languages/framworks.

###Docker

Each modules has a DockerFile that can be built and run independetly. In the base directory is docker-compose.yml allowing docker-compose to be used to build and run any of all modules concurrently:


##DB

Docker-compose references a mongo db. This is just utilizing the stock docker mongo image. It can be made available or duplicated for any of the modules.
