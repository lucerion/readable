module.exports = ({ title, content }) => (
  `
    <!doctype html>
    <html>
    <head>
        <title>${title}</title>
    </head>
    <body>
      ${content}
    </body>
    </html>
  `
);
