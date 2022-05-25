const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors and more designing </title>
      <style>
          .container{
              border: 2px solid red;
              background: rgb(159, 228, 170);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          a{
              text-decoration: none;
              color: #000;
          }
  
          a:hover{
              color: rgb(68, 7, 7);
              background: rgb(235, 194, 194);
          }
          a:visited{
              background-color: royalblue;
          }
          a:active{
              background-color: skyblue;
          }
          .btn{
              background: rgb(129, 197, 243);
              border: none;
              border-radius: 3px;
              cursor: pointer;
              font-size: 13px;
              padding: 6px;
  
          }
      </style>
  </head>
  <body>
      <div id="cont1"  class="container">
          <h3>This is heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit amet quo tempora quidem nihil eligendi laborum animi accusamus vero quae, sapiente assumenda beatae facere ad officia sequi nostrum enim soluta et, similique illo?</p>
          <a href="https://google.com" class="btn">Read more</a>
          <button class="btn">contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});