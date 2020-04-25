<p align="center">
  <a href="https://twitter.com/willstenner">
    <img alt="my_logo" src="/logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Firebase Starter
</h1>

## This is a Gatsby Firebase Starter that uses the following technologies:

1. Gatsby
2. Firebase (database and authorisation)
3. Context API (state management)
4. Styled components
5. Styled system

---

### To get started carry out the following:

1. `git clone https://github.com/wjastenner/gatsby_firebase_starter.git`
2. `npm install`
3. create .env.production and .env.development and set environment variables for firebase config (see environment variable names in firebase.js)
4. run `gatsby develop` to start development (ensure you have gatsby cli installed)

---

### To connect to your own firebase project:

1. Ensure you have the firebase cli installed (`npm install -g firebase-tools`)
2. `firebase login`
3. `firebase init`
4. `gatsby build`
5. `firebase deploy`

---

### Note

The starter allows you to create pages to be served as static html files as well as dynamic pages for an app like experience. Routing for dynamic pages is achieved using Reach Router in app.js and routes are protected using a private route component that ensures users are authenticated.
