import express from "express";
import { renderToString } from "react-dom/server";
import App from '../src/App';
import React from 'react';

const app = express();

app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
  const appHtml = renderToString(<App />)
  const html = `
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root">${appHtml}</div>
    <script type="module" src="/dist/assets/client-CQh0FRdv.js"></script>
  </body>
</html>
`

  res.send(html);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});