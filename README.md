GeoPortale - Comune di Firenze
==========

Aligned to 2021.01.xx mapstore stable branch

Quick Start
------------

Clone the repository with the --recursive option to automatically clone submodules:

`git clone --recursive git@github.com:geosolutions-it/MapStore2-C027.git`

Install NodeJS, if needed, from [here](https://nodejs.org/en/blog/release/v0.12.7/).

Start the development application locally:

`npm install`

in one terminal
`npm run backend`

in the other terminal
`npm start`

The application runs at `http://localhost:8081` afterwards.

Read more on the [wiki](git@github.com:geosolutions-it/MapStore2-C027.git/wiki).

To Create a deployable war
--------------------------

 - Edit the LDAP properties file (DO NOT COMMIT CREDENTIALS) web/ldap.properties
 - Run build.sh
