import express from "express";
import { renderToString } from "react-dom/server";
import App from '../src/App';
import React from 'react';

const app = express();

app.use('/static', express.static('dist'));

app.get(/.*/, (req, res) => {
  const appHtml = renderToString(<App />)

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  </head>
  <body>
  <div id="app">${appHtml}</div>
  <script src="/static/client.js"></script>
  </body>
  </html>
  `

  res.send(html);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});