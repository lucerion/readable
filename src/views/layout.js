module.exports = ({ title, content }) => (
  `
    <!doctype html>
    <html>
        <head>
            <title>${title}</title>
        </head>
        <style>
          body {
            font-family: sans-serif;
            margin: 1em;
          }
        </style>
        <body>
            <h1>${title}</h1>
            ${content}
        </body>
    </html>
  `
);
