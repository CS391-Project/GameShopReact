# Game Shop React

This repository was created for CS 391 course project 2.

| Member | Task |
| ------- | ----- |
| Cenker Karaörs | Implemented home page, SignUp, and Login page improvements. Added email and password checks before login. Registering users to Local Storage and comparing them with existing users implemented.|
| Denizcan Özpınar | Implemented more info page, header, and footer improvements.|
| Ertan Ayanlar | Improved design of the shop and more info, made them responsive. Moved all components to react hooks style. Moved all utility functions and grouped them in a single file 'functions.js' Implemented and designed basket page. |
| Furkan Karayer | Login and SignUp page implemented. |

## What is Game Shop React?

Game Shop is a simple website that you can purchase recent games. Our website has 4 pages. These pages include a shop, basket, login, and item information page. Users can register using their emails and admins can empty local storage from the login page using the special code 1234. On the shop page, users can view products and filter vendors from the sidebar. In Game Shop users can display information of the desired games using the info button and can add multiple games to the shopping basket (Same or different games). After choosing the basket from the navigation users can remove any item from the basket and complete their purchases from the checkout button.

## Environment

Visual Studio Code and Google Chrome browser is used for development.

## Libraries

* react
* react-router-dom
* reactstrap

## User Manual

Step 1:  Download files in the repository

> Type git clone https://github.com/CS391-Project/GameShopReact or download related codes via Code button in github.

Step 2: Open project directory and run command npm start

> Usage of Google Chrome and Firefox are recommended.
>
> Open http://localhost:3000 to view it in the browser.

## Sample Usage Scenarios

Case 1:

> npm start
>
> Select desired products using the Info button
>
> Click on Add to basket
>
> Choose Basket from the navigation
>
> Click on Checkout for purchase of selected items

Case 2:

> npm start
>
> Filter desired categories using checkboxes
>
> Click on the Apply Filter button
>
> Select desired products using the Info button
>
> Click on Add to basket ( Same product can be added to basket multiple times)
>
> Choose Basket from the navigation
>
> Click on the remove button to remove the desired product
>
> Click on Checkout for complete purchase of selected items

Case 3:

> npm start
>
> Click on SignUp and register a user. (Note password must be longer than 6 characters and must include an uppercase character)
>
> Press register button.
>
> Select desired products using the Info button
>
> Click on Add to basket ( Same product can be added to basket multiple times)
>
> Choose Basket from the navigation
>
> Click on Checkout for complete purchase of selected items

Case 4:

> npm start
>
> Click on SignUp and register two user. (Note password must be longer than 6 characters and must include an uppercase character)
>
> Click on Login and enter wrong credentials. (Email or password is incorrect will be displayed)
>
> Enter correct credentials and login.
>
> Choose a product and click on Add to basket ( Same product can be added to basket multiple times)
>
> Choose Basket from the navigation.
>
> Click on Checkout for complete purchase of selected items.


## Note for contributors

Dear members, please use branches to contribute. (Do not forget to pull recent changes before updating)

## Git Commands
1) git pull
2) git add .
3) git commit -m "message"
4) git checkout -b branchName
5) git push -u origin branchName
6) Create new pull request in github

## React Commands
1)  npx create-react-app my-Apply (Setup sample)
2)  cd GameShopReact
3)  npm install
4)  npm start
