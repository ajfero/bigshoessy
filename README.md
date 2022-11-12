# BigShoesSy V2.0 Resumen

- Framework Angular
- Language JavaScript

# Execution of the application in descending order

- pnpm install
- ng serve

# Execution of the application with Docker

 - docker pull ajfero/bssy-docker
 - docker container run --name bssy-v1.5.0 --publish 4200:80 --detach ajfero/bssy-docker:v1.5.0

## Construction of docker-app

  - ng build --configuration production --aot
  - docker build -t bssy-docker .
  - docker container run --name bssy-docker --publish 4200:80 --detach bssy-docker

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Backend -> endPoints 

## Auth
(post)   /api/register               "return user"
(post)   /api/login                  "return userData + Token"
(get)    /api/logout                  "return 200"
(post)   /api/change-password         "return 200"

## User
(get)    /api/users/find/all          "return all usersData"             (all users)
(get)    /api/users/:id               "return an user"                   (user + token)

## Profile
(get)    /api/user/profile/:id        "return all profilesData"          (all profiles)
(get)    /api/user/profile/:id        "return a Profile"                 (profile)
(patch)  /api/user/profile/:id        "return update of profileData"    (profile + user)

(patch)  /api/user/profile            "return us profileData"            (profiles)
