# BDT Hackaton - MWC21
BDT Hackathon fullstack chellenge in which you are asked to create a functional SPA where an user can drop a csv/json file with predictions and it calculates the MSE (Mean Squared Error).

This is a repository made together with 2 more participants in less than 8 hours

Built with ```ReactJS```, styled with ```BEM``` methodology, and deployed in ```Vercel```.

## How it looks

🔗 [Live Demo](https://mwc-final-hackaton-backend.vercel.app/)


## 1- Download

```sh
git clone https://github.com/Jocalu/mwc-final-hackaton.git

cd mwc-final-hackaton/frontend

```

## 2- Usage with CLI
```sh
npm run build
npm run start 
```
- [Open localhost:3000/](http://localhost:3000/)



## Endpoint Table

### Client
Verb | Endpoint | Result
----- | ------------- | -------------
GET | "/" | Home page with login screen
GET | "/register | User register screen
GET | "/home" | drag & drop screen
GET | "/result" | MSE Output result screen

### API
Verb | Endpoint | body | Result
------------ | ------------- | -------------  | ------------- 
POST | "/api/v1/register" | { username, email, password } | Register user route
POST | "/api/v1/login" | { username, email, password } | Login user route
PUT | "/api/v1/update" | { username, email, password } | Update user route
POST | "/api/v1/computeECM" | {} | 



## Project Structure

    .
    ├── components              # React Components and components styles
    │   ├── DragAndDrop
    │   └── Score
    ├── pages                   # Pages Components
    │   ├── Home
    │   ├── Login
    │   ├── Register
    │   └── Result
    ├── context                 # Context of the page
    │   ├── UserContext    
    │   └── FilesContext
    ├── assets                  # Assets of the page

    ├── services                # Service that connects to the endpoint
    │   ├── restaurant.service.js
    │   └── user.service.js

    ├── package.json    
    └── README.md
