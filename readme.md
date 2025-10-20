Task 1 @ELEVATE LABS

A simple Node.js web application with CI/CD pipeline using GitHub Actions and Docker.  




Flow :

![alt text](screenshots/flow.png)
    
    1. The source code is (git push) pushed to the git repository.
    2. Whenever the code pushed The GitHub Actions will do its job with our scripts which i wrote in (.github/workflow/CiCD.yml)
    3. The github actions will perform the CICD follows,
            A. Will pull the source code to machine
            B. setup nodejs and Start the nodejs app (app.js) on server
            C. the unit test case performed (test.js) if test case passed the process will continue, if TEST case failed the process will terminated.

![alt text](screenshots/Tests.png)    
                
            D. after the tests are passed the app will be BUILD the app on docker as docker image with the help of (Dockerfile).
            E. once the docker image is built it will be DEPLOY to the dockerhub (docker registry)
            F. then the image can be pulled and ran anywhere on any machines,instances on cloud.  

<====before Push=====>
![Docker Creds](screenshots/beforePush.png)

<----after Push-----> push > code > test > build > pushed the new image > pulled it and excuted on my machine

![Docker Creds](screenshots/afterPush.png)




Docker credentials :
Stored my docker credentials in github > Secrets
    ![Docker Creds](screenshots/image.png)



[![Email](https://img.shields.io/badge/Email-subasangeeth07@gmail.com-blue)](mailto:subasangeeth07@gmail.com)

