1. node --version  
2. mkdir crud-api-app
3. cd .\crud-api-app\
4. npm init -y [create package.json]

5. (Inside package.json adding...["start": "node index.js",
    "serve": "node index.js"])

6. npm i express [also install node module]
7. create index.js also createing a server

8. npm i nodemon -D [package.json "dev": "nodemon index.js"]

8. run server as ['npm start' OR 'npm run serve' OR 'node index.js' OR recomended 'npm run dev']

9. now adding MongoDB with mogodb.com/atlas [Username:"maruf84210cse" password:"OgrBCtALnAhJOhEd" importent]

10. 'npm install mongodb' and 'npm i mongoose'
11. npm install contcurrently

    "client": "npm run dev --prefix 4-react-router-dom-project",
    "dev": "concurrently \"npm start\"\"npm run client\""