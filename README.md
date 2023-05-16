## 1. The idea behind the NFTs app-

NFTs is designed to be used as a gallery for pictures(not real NFTS!) of animals with cute Noses, Feet and Tails. It's non-profit, meaning users can add their own or browse other users pictures, but can't buy, sell or trade them. 


## 2. Starting the app-

In order to get the app going, it must be started locally(the default URL for accessing it should be "http://localhost:3000");


## 3. Back-end of the application(OUTDATED)- 
//
--UPDATE--
The application works without the need to set up the REST-API locally. 
//

In order for the NFTs application to run as intended, a REST-API is required. It uses the SoftUni Practice Server, which can be found in the server folder of the project. It runs on port 3030 (http://localhost:3030).

The app can send requests to http://localhost:3030/users for getting users data and http://localhost:3030/data/nfts for accessing the catalog and the related CRUD operations.


## 4. Components of the application-

The application has a basic Home page with some hard-coded images in it.

-- 4.1 User authentication-

The Login and Register pages are straightforward. Both are equipped with client-side data validation. In order to Register, the User has to provide Username, Email and Password(+ he has to repeat the Password in order to make sure that he is not misspelling it). In order to Login, the User has to provide an Email and Password.

(OUTDATED)The requests are sent to "http://localhost:3030/users/register"(POST) and "http://localhost:3030/users/login"(POST) respectively. 

IMPORTANT- After Login or Registration, the User data and the Access Token are set in the Local Storage!

The Logout clears the Local Storage and logs out the User. (OUTDATED)The requests are sent to "http://localhost:3030/users/logout"(GET)

The Profile page simply shows the User's chosen Username and Email. 

IMPORTANT- Login and Register have Guards preventing already logged in users from accessing them. Guest users are prevented from accessing Logout and Profile.

-- 4.2 NFTs Gallery-

The Gallery(and Details page of a single NFTs) is accessible by both Guests and logged in Users. It shows the collection of NFTs'. Each individual NFTs has it's name, image and description shown, but in order to see the price and comments, the User has to access the Details page of the given NFTs. (OUTDATED)The requests for accessing the data for the entire catalog are sent to "http://localhost:3030/data/nfts"(GET), for details of a single NFTs "http://localhost:3030/data/nfts/:id"(GET).

Only logged in User can see the "Create" button, which opens the component for creating a NFTs.

In order to add his own NFTs, the logged in User has to enter a Name, Image URL link, Price(Numbers only) and Description. All of these have client-side data validation. (OUTDATED)The reqests are sent to "http://localhost:3030/data/nfts"(POST).

The Details page has a Comments functionality tied to that particular NFT. Everybody can read the Comments section, but only logged in Users can post comments. 

If the User is an owner of a given NFTs, he can Edit or Delete it, from the Details page of that NFTs. (OUTDATED)The requests are sent to "http://localhost:3030/data/nfts/:id" as PUT and DELETE respectively. 

-- 4.3 404 Not Found-

Trying to access a non-existing page will show the user the 404 Not Found page.


## 5. Miscellaneous-

-- 5.1 Modal Functionality-

There is app-wide Modal functionality, which serves for notification or alert purposes, such as confirmation while trying to delete a NFTs, successful login/register, or a server-side error(username or password do not match, for instance). 

-- 5.2 Responsive Design-

The application has responsive design. By default the app is designed for mobile devices(360px+), but it has four breakpoints using media queries(min-width) in the following order - 500, 800, 1200, 1600. Up to 800px the navigation bar is a button which triggers a drop-down menu, after that the links appear on the top of the page. Up to 1200 some of the components(Home, Login, Register, just to name a few) have all their content in a flex-column direction, after that some of the content is displayed side by side. 

-- 5.3 Unit Testing- 

The application supports some very basic component unit tests. Some of the tests include checking if the component is displaying properly the data received. Another one checks if by clicking a link the application changes to the proper path in the URL. There is also a test that makes sure that the submit buttons in components with forms are disabled, if the client-side verifications are not passed. 
