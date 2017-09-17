MyReads
=======
By Chris Leung

Overview
--------
MyReads is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. This application is powered by React along with an API server and client library provided by Udacity, which persists information as one interacts with the application.

Installation
------------
1. Install [Node.js](https://nodejs.org/en/) and [Create React App](https://github.com/facebookincubator/create-react-app)
2. Clone/fork the [MyReads respository](https://github.com/chrislzm/MyReads)
3. npm install
4. npm start

How to Use
----------
Basic requirements: Internet connection and browser

1. After running "npm start", a web browser will open the address: http://localhost:3000/
2. Three bookshelves will appear (Currently Reading, Want to Read, Read) to which books can be added and removed from
3. To move books to/from bookshelves, click the green down-arrow next to a book, then select the shelf you would like to move it to
4. To find and add new books, click on the green "+" button on the bottom right to open the search page
5. Please view the included SEARCH_TERMS.md file for a list of valid search terms

Additional Usage Notes
----------------------
Udacity's backend server currently limits searches to 20 results, and limits search terms to only those listed in SEARCH_TERMS.md. Partial searches will will only match the closest search terms in this file.

Credits
-------
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
* Design (stylesheets, images, initial layout) provided by [Richard Kalehoff](https://github.com/richardkalehoff) of [Udacity](https://udacity.com)
