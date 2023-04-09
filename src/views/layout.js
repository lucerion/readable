module.exports = ({ title, content }) => (
  `
    <!doctype html>
    <html>
        <head>
            <title>${title}</title>
        </head>
        <style>
          content {
            font-family: sans-serif;
            line-height: 1.5;
            display: block;
            width: 80%;
            margin: 0 auto;
          }
        </style>
        <body>
            <content>
              <h1>${title}</h1>
              ${content}
            </content>
        </body>
    </html>
  `
);
