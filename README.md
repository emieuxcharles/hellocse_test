# Hello CSE test app
## Installation
Depuis le dossier "hello_cse_test" executer ces commandes dans un terminal:
Pour deployer l'application sur un serveur docker php-apache et mysql, elle sera accessible sur l'url suivant: http://localhost:8099

`docker-compose up -d --build`

Pour entrer dans le container web:

`docker exec -ti web_hellocse /bin/bash`

Au sein du container:

`cd hellocse-app` <br />
`npm i` <br />
`npm run build` <br />
`php artisan migrate` <br />
`mkdir -p public/storage/stars ` <br />
`php artisan db:seed` <br />
