<div align="center">
  <svg width="200" height="200" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M61.4389 24.4986L90.396 41.1433C92.6827 42.4577 94.0925 44.8941 94.0925 47.5317C94.0925 53.1977 87.9642 56.7437 83.0519 53.92L61.4389 41.4967C58.3533 39.7231 54.5576 39.7231 51.472 41.4967L29.859 53.92C24.9466 56.7437 18.8184 53.1977 18.8184 47.5317C18.8184 44.8941 20.2281 42.4577 22.5148 41.1433L51.472 24.4986C54.5576 22.7249 58.3533 22.7249 61.4389 24.4986Z" fill="#2675EC"/>
<path opacity="0.35" d="M112.335 37.9618L112.186 70.8374C112.174 73.4494 110.764 75.8512 108.481 77.15C103.502 79.9829 97.2599 76.3741 97.2858 70.6772L97.3957 46.4609C97.4121 42.8535 95.4519 39.5079 92.2733 37.7182L70.9352 25.7039C65.9154 22.8775 65.8647 15.7465 70.8442 12.9136C73.1273 11.6147 75.9428 11.6128 78.2444 12.9087L107.212 29.2191C110.391 31.0088 112.351 34.3545 112.335 37.9618Z" fill="#2675EC"/>
<path opacity="0.5" d="M126.032 88.3297L97.0644 104.64C94.7628 105.936 91.9473 105.934 89.6642 104.635C84.6847 101.802 84.7354 94.6713 89.7552 91.845L111.093 79.8306C114.272 78.041 116.232 74.6953 116.216 71.088L116.106 46.8716C116.08 41.1747 122.322 37.5659 127.301 40.3988C129.584 41.6977 130.994 44.0994 131.006 46.7115L131.155 79.5871C131.171 83.1944 129.211 86.5401 126.032 88.3297Z" fill="#2675EC"/>
<path opacity="0.65" d="M89.11 125.395L60.1528 108.75C57.8661 107.435 56.4563 104.999 56.4563 102.361C56.4563 96.6953 62.5846 93.1494 67.4969 95.973L89.11 108.396C92.1955 110.17 95.9913 110.17 99.0769 108.396L120.69 95.973C125.602 93.1494 131.73 96.6953 131.73 102.361C131.73 104.999 130.321 107.435 128.034 108.75L99.0769 125.395C95.9913 127.168 92.1955 127.168 89.11 125.395Z" fill="#2675EC"/>
<path opacity="0.8" d="M37.665 112.038L37.8144 79.1626C37.8262 76.5506 39.2356 74.1488 41.5187 72.85C46.4982 70.0171 52.7401 73.6259 52.7142 79.3228L52.6043 103.539C52.5879 107.146 54.5481 110.492 57.7267 112.282L79.0648 124.296C84.0846 127.122 84.1353 134.254 79.1558 137.086C76.8727 138.385 74.0572 138.387 71.7556 137.091L42.7875 120.781C39.6089 118.991 37.6487 115.646 37.665 112.038Z" fill="#2675EC"/>
<path d="M23.9675 61.6703L52.9356 45.3599C55.2372 44.064 58.0527 44.0658 60.3358 45.3647C65.3153 48.1976 65.2646 55.3287 60.2448 58.155L38.9068 70.1694C35.7282 71.959 33.7679 75.3047 33.7843 78.912L33.8943 103.128C33.9202 108.825 27.6783 112.434 22.6987 109.601C20.4156 108.302 19.0063 105.901 18.9944 103.289L18.8451 70.4129C18.8287 66.8056 20.789 63.4599 23.9675 61.6703Z" fill="#2675EC"/>
</svg>
</div>
<h3 align="center">Nibiru Chat API</h3>
<p align="center">
  <a href="https://nibiru-chat.herokuapp.com/">View API Demo</a>
  ·
  <a href="https://github.com/andry-pebrianto/nibiruchat-api/issues">Report Bug</a>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a Restful API repository for Nibiru Chat. This Restful API is built using ExpressJS and PostgreSQL.

### Technology Used

- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Google APIs](https://github.com/googleapis/google-api-nodejs-client)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Nodemailer](https://nodemailer.com/about/)

## Getting Started

### Installation

- Clone this project with `git clone https://github.com/andry-pebrianto/nibiruchat-api.git`
- Install package required with `npm install`
- Setting .env

```bash
APP_NAME=
NODE_ENV=
PORT=
API_URL=

# database
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=

# jwt
JWT_SECRET=

# google
EMAIL_FROM=
EMAIL_USER=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
REDIRECT_URI=
GMAIL_REFRESH_TOKEN=
DRIVE_REFRESH_TOKEN=
```

### Executing program

- Run program with `npm run dev` for development and `npm run start` for production

## Endpoint List

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/13299472-95b35893-0243-4e38-aa85-c16051da1c37?action=collection%2Ffork&collection-url=entityId%3D13299472-95b35893-0243-4e38-aa85-c16051da1c37%26entityType%3Dcollection%26workspaceId%3Dfe5f6a4d-a8db-4a39-9852-e54fd7754e4c)

<!-- RELATED PROJECT -->

## Related Project

- [Nibiru Chat Client](https://github.com/andry-pebrianto/nibiruchat-client)
- [Nibiru Chat Demo](https://nibiruchat.netlify.app/)

## Authors

Contributors names and contact info:

1. Andry Pebrianto

- [Linkedin](https://www.linkedin.com/in/andry-pebrianto)

## License

This project is licensed under the MIT License - see the LICENSE file for details
