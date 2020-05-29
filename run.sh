#!bin/bash

if [ $# -ne 1 ]; then
  echo "1 argument required."
  exit 1
fi

npx ts-node src/$1.ts
