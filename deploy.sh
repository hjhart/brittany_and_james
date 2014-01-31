#!/bin/bash

bundle exec middleman build
rsync -ravz build james@movies.hjhart.com:workspace/brittany_and_james/
