

### `npm start`

Runs the appFirebase in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Note: add your firebase apiKey to initializeApp in `appFirebase.js` file


Open the page as signed-out user
Sign in (I can see that onAuthStateChanged is triggered with user data)
Open a new window with window.open('/anyUrl', '_blank')
onAuthStateChanged is triggered with null value (application is defined user as signed out).
reload the page and the user becomes authorized.

https://github.com/stanislavmboardscom/firebase-app/assets/171330214/d7510213-bc92-4fca-99b4-66c47fbb5c4e

