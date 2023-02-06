FROM node:10-stretch

LABEL "com.github.actions.name"="Gatsby Stats Poller"
LABEL "com.github.actions.description"="Upload stats from GitHub API to Firestore"
LABEL "com.github.actions.icon"="upload"
LABEL "com.github.actions.color"="purple"

LABEL "repository"="https://github.com/davidmirror-ops/flyte-github-stats"
LABEL "homepage"="https://github.com/davidmirror-ops/flyte-github-stats"
LABEL "maintainer"="David Espejo <david.espejo@union.ai>"

ADD package.json /package.json
ADD yarn.lock /yarn.lock

ADD index.js /index.js
ADD firebase-wrapper.js /firebase-wrapper.js

RUN yarn

ENTRYPOINT [ "node", "/index.js" ]