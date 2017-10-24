# Hello! Welcome to Hilary's Movie Manager app!

 ## What is it?

 This Movie Manager client front-end app is the front-end webpage to a back-end API and library I created, [here](https://stormy-sea-27251.herokuapp.com/). My Movie Manager sends information to and receives information from that API and renders it on my app for the user. The user is able to use the app to maintain a list that contains movies they want to see, as well as movies they've already seen and can assign ratings to. Users can use the app to view all movies they've entered, as well as update their movies, delete movies, and add new movies. A user is only able to see the list of movies that they themselves created, so they must be logged in to use the Movie Manager app.

 ## Where Can I access it?

 Movie Manager is hosted [here](https://hilarybrown.github.io/full-stack-client-front-end/), and is also accessible via the website section at the top of this repository page.

## Technologies Used

 Some of the technologues used in my front-end app creation were:
 - Javascript for app Logic
 - jQuery for DOM manipulation and event handling
 - HTML for page content
 - SCSS for page styling
 - AJAX requests for interacting with an API which allows the game to perform such functions as `CREATE` user accounts and new movies, `PATCH` or update their password and make changes to their movies, and much more.

 ## My Development Process and Problem-Solving Strategy

 I tried to stick to our suggested schedule for development as closely as possible, so I did not make any changes to my front-end client until I knew that my back-end API was working as expected. Once that was done, I set to work on getting my events set up for user authentication. We had set up user authentication (sign up, sign in, update password, sign out) in a prior project, so I was most comfortable getting that set up first.

 Once I was sure that the user authentication was working correctly, I began setting up CRUD (create, read, update, delete) requests for my movies resource. Once I finished with my Create action and tested it out, I got to working on my Read action, and realized that it would be much easier to use Handlebars in order to display my table with multiple movies as the user adds them. I set up Handlebars with my Read action and was able to test it sucessfully.

 Next, I tackled my Delete action fairly easily, and moved on to my Update action for movies. This proved more difficult, as I had my Update button nested inside of a modal which was inside of my Handlebars document. After over 24 hours of working through that issue, and with some brainstorming with my fellow developers, Update was finally working.

 I tested out each CRUD action for both my user and my resource again, and then began work on my styling for the app.

 ## Unsolved Problems

 - Cannot resize app in browser
   - I planned on updating the table in my Handlebars document with column sizing for bootstrap, but ran out of time due to the unexpected struggle with Update on my movies resource.
 - Cannot close modal via Submit button on Update action
   - Because my Update form is nested within a modal in my Handlebars document, it's proven more difficult to get the form to close upon submittal, so for now users need to click the 'Close' button after submitting an update.

 ## Wireframes

 I created several wireframes for my app, which I loosely translated into the deployed site.

 ![Sign-Up/Sign-In screen](https://imgur.com/Nep5WNr)

 ![New Movie/Change Password Modals](https://imgur.com/Md0BpFM)

 ![Movies Display Screen](https://imgur.com/LI3Agqf)

 ## User Stories

 - As a user, I want to be able to sign in to the application
 - As a user, I want a list of my submitted movies that I can retrieve while signed in
 - As a user, I want to be able to add and update my movies
 - As a user, I want to be able to remove any movie I may add in error
 - As a user, I want to be able to sign out of a session once I'm finished
