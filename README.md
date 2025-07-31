# testProject
cypressIntegrated


a brief introduction:
this is a project which include a few basic cases. would like continously working on it.


Local SetUp:
nodejs
npm install cypress  or just npm install


How to Run
visible: npx cypress open: to mannual run 
backend: headless run "npm run service"  and so on.

Scenarios:
1. login related.
2. the permissions of the different roles.
3. different page scenarios.



Done:
1. expired.
2. basic caseo of the add service.


further:
1. can deploy to the ECS.
how to deal with that: add deploy action, post deploy ,after deploy
docker, jenkins, template and so on.


eg: docker


from image location

ENV PROJECT_FOLDER /tmp/..

RUN alias cypress.cmd="cypress"
RUN mkdir= $PROJECT_FOLDER
copy 

RUN  npm install --loglevel verbose
RUN chmod 777 -R $PROJECT_FOLDER

2. with api integrated
some results might would better get from the api response, can integrate as well. especially cases of permisssion check

3. DB 

like "tasks=sqlServer=loadDBplugin(config.db) 
on ('task',tasks)"
import sqlSever fron cypress-sql-server

input env into cypress.config.json

cy.sqlServer(sql)

CronJobs..


Q&A
pending: how to pass the auth code:
--answers: 
1)in the backend, has a api like cookie, request, then this auth page load can pass. 
2). coding  deal with, just like set 123456 as all-powerful password.


thinking about the cases:
1. honestly curious about how to deal with the differnent methods login. since it's has a lot details need to care. like how to pass the authorization. 




