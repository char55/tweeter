# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance
- Mongodb
- md5
- Nodemon

## Final Product
![shortdescript](urlofpic)

## Website abilities

- The website allows users to post a "tweet" - short text message.
- Each tweet is composed of at least one character, but no larger than 140.
- A character counter, located at the bottom right of the "Compose Tweet" input box, keeps tract of user input, displaying how many characters are left available.
- The character counter turns red when the user inputs over 140 characters, displaying a negative number of how many need to be removed.
- A simple error message appears if the user attempts to post an invalid sized message.
- Hovering over a tweet will "highlight" it; certain features alter slightly to draw attention to it.
- Hovering over a tweet will allow the "flag", "retweet", and "likes" to appear (heart shaped icon with number count)


- There is a "Compose" button at the top right of the screen which will toggle the "Compose Tweet" input.  One click to hide it, one click to display it.
- Users can compose a tweet, post the tweet, and see it posted without having to refresh the page.
- All tweets are display in order (newest on top, oldest below)

- Each posted tweet has the following information:
    - User name
    - User's handler
    - Message content
    - Time at which the message was made

The tweets are stored in a database (MongoDB).
