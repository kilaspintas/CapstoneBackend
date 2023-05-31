# Cloud team backend
 Backend API for Capstone Project

Create user, Get data user, Update score, Delete room code #done
Need more improvement and respon message

Testing CRUD in POSTMAN

In windows use XAMPP for Apache web server and SQL Server 

In development run using npm run start-dev

Create User :
http://localhost:9000/api/index
Using POST method 

Read User :
http://localhost:9000/api/index
http://localhost:9000/api/index/{code}
code = Room Code
Using GET method

Update Score
http://localhost:9000/api/index/{id}
id = user ID generate by nanoid
Using PUT method

Delete Room Code and All Score in the Room
http://localhost:9000/api/index/{code}
code = Room Code
Using DELETE method

Create Table with name "data" and import the sql file.




