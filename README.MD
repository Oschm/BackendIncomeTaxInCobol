# BackendIncomeTaxInCobol

This NodeJS Express APP provides an API that uses COBOL to calculate the income tax depending on parameters grossIncome, Marital Status and Age.

I see this app as a proof of concept and minimal viable product for beginners that blends various technologies.

It is a sample app to test the [node COBOL](https://github.com/IonicaBizau/node-cobol) bridge and is a first project for COBOL beginners like myself. Additionally it can give COBOL professionals an overview over the following topics:

- NodeJS
- Building APIs with Express
- Containerization with Docker

It implements the same logic for german income tax as this [offical income tax calculator](https://www.bmf-steuerrechner.de/ekst/eingabeformekst.xhtml).
Detailed logic explained [here](https://www.bundesfinanzministerium.de/Content/DE/Downloads/Steuern/Steuerarten/Lohnsteuer/Programmablaufplan/2023-06-09-geaenderte-PAP-2023-anwendung-ab-dem-1-juli-2023-anlage-1.pdf?__blob=publicationFile&v=5).

It will be used as a backend server for my official CV found in this [Repo](https://github.com/Oschm/Vue-CV) or hosted in section SHOWCASE here [here](https://oschm.github.io/Vue-CV) (sorry github pages doesnt support routing for single page applications :D).

## Dependecies

Gnucobol is required for the app to run. The Setup depends on operating system.

### Windows

The compilation of the COBOL code is done using this precompiled binary of gnucobol for windows provided by [Arnold Trembley](https://www.arnoldtrembley.com/GnuCOBOL.htm).

I added the exe file to the "archives" folder of the repo. After installation add the chose installation folder in the .env file under 'COBOL_DIRECTORY:

```
COBOL_DIRECTORY="C:\gnuCOBOL"
PORT=3000
NODE_ENV=windows
```

### Linux

Simply run:

```
$ sudo apt-get install gnucobol
```

In the .env file change NODE_ENV to linux like this, the COBOL_DIRECTORY Key will then be ignored by the app:

```
COBOL_DIRECTORY="C:\gnuCOBOL"
PORT=3000
NODE_ENV=linux
```

### Docker

Alternatively i compiled all the necessary steps in a dockerfile, which will start a linux server and install all the necessary steps. This is also used for deployment. The image can be run by installing Docker and running.

```
docker compose up --build
```

## Setup

Install gnucobol (see Dependencies).

Also of course run

```
npm install
```

to install node dependancies.

To start the server run

```
npm run start
```

## Testing

### Postman

Once the server is up and running calls can be made to the server. The "archives" folder contains a postman collection, that includes all the implemented routes and can be used for testing.

### Testing Frameworks

test/test.js contains implemented tests for various age, income values. The test can be run using

```
npm run test
```

# TODOS

At this time the COBOL Logic is limited and only takes the income into consideration. With time the logic will be extended to include
