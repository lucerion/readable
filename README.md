# Readable

Make sites readable

## Setup

* [Install Docker](https://docs.docker.com/get-docker/) on your machine.
* Create `.env` file (see [.env.example](.env.example)) and edit it.
  Use `yarn generate.secret` command to generate `SECRET_KEY` and `SECRET_IV`
* Build image `docker build -t readable .`
* Run application `docker run -p 8080:8080 --env-file .env readable`
* Open [http://localhost:8000](http://localhost:8080) in your browser.

## License

[BSD-3-Clause](LICENSE)
