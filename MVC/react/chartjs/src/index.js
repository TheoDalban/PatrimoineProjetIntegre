import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* const Instagram = require('instagram-web-api')
const username = "pat_la_debrouille"
const password = "ppifrance"

const client = new Instagram({ username: 'pat_la_debrouille', password: 'ppifrance' }, { language: 'fr-FR' })
console.log(username, password)

client.mode = 'no-cors'

console.log('USERNAME %s',username)
console.log('PASSWORD %s',password)
client
  .login()
  .then(() => {
    client
      .getProfilePhoto()
      .then(console.log)
  }
  ) */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

