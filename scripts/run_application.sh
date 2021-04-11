#!/bin/bash

cd .. &&
  npm install && npm cache clean --force && ng serve --poll=2000
