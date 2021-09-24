#!/bin/bash
set -e
if grep -q XXXXXXXXXX 'web/ldap.properties'; then
  echo "Please configure web/ldap.properties first"
  exit 1
fi

export GITREV=`git log -1 --format="%H"`
export VERSION="SNAPSHOT-$GITREV"

npm install
npm run compile
npm run lint
npm test

if [ $# -eq 0 ]
  then
    mvn clean install -Dmapstore2.version=$VERSION -Pprinting
  else
    mvn clean install -Dmapstore2.version=$1 -Pprinting
fi
