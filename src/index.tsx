import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './App'
import accessControl from './accessControl'

let base = process.env.PUBLIC_URL as string
if (!base) {
  base = 'http://localhost:3000'
}
ReactDOM.render(
  <React.StrictMode>
    <App getToken={accessControl(base)} baseUrl={base} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
