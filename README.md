# Readable

Make sites readable


## Installation and usage

* install packages

        yarn install

* create `.env` file (see [.env.example](.env.example)).
  Use `yarn generate.secret` command to generate `SECRET_KEY` and `SECRET_IV`

* run application

        yarn start

### Docker

* create `.env` file (see [.env.example](.env.example)).
  Use `yarn generate.secret` command to generate `SECRET_KEY` and `SECRET_IV`

* build image

        docker build -t readable .

* run

        docker run -p 3000:3000 --env-file .env readable


## License

[BSD-3-Clause](LICENSE)
