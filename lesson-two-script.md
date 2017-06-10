Welcome to lesson two!

Video One
====

For this lesson, you will need:

Source code checked out from the lesson_two branch.
The editor of your choice. (I'm using Visual Studio Code.)
Postman.
The dotnet command-line interface.


Video Two
====


First, let's explore the behavior of the web service.
Please note, this web service comes from the tutorial linked in the description.
https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api
from the lesson_two branch, run dotnet restore.
then run dotnet build.
finally, run dotnet run.
This will run the web service.
This webservice is designed to record, update, and remove items in a To-Do list.


Video Three
====

Postman sends HTTP requests to the web service and receives HTTP responses.
This is an example HTTP request.

This an example HTTP response.
Each HTTP response includes a status code.
You can see more information on HTTP status code linked in the description.
https://tools.ietf.org/html/rfc7231#section-6
HTTP requests and responses can also include headers.


Let's use Postman to send some example requests and responses.
First, we need to give Postman a URL.
Next, we need to give Postman a body.

GET (list) http://localhost:5000/api/todo/

GET (individual) http://localhost:5000/api/todo/1

POST (create) http://localhost:5000/api/todo/

PUT (idempotent update) http://localhost:5000/api/todo/2

DELETE (delete) http://localhost:5000/api/todo/2
Please note: firewalls may block some of the lesser-used HTTP methods such as PUT and DELETE.
There are other ways to build a similar API using different URLs and only GET plus POST.
The body of each request and response is given in JSON (JawSawn).
For more information on JSON, see the link in the description.


Video Four
====

Let's examine the source code.

This Web API application has a controller called TodoController.
The Route annotation on the TodoController is what built the URL structure api/todo.

The TodoController contains methods that handle each of the operations we tested in Postman earlier.

The GetAll method retrieves the list of all To-Dos.

The GetById method retrieves a single To-Do.

The Create method is triggered by a POST HTTP request and creates a new To-Do item from the body of that request.

The Update method is triggered by a PUT HTTP request and updates the contents of an existing To-Do item based on the body of that request.

Finally, the Delete method uses the id sent via the URL to delete a To-Do item from the list.

That concludes this lesson. In the next lesson, we'll build a frontend for this API using JavaScript and HTML.


Video Description Notes
====

See the full source code here: https://github.com/jeyoor/web-programming-tutorials
See the tutorial that inspired this lesson here: https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api
For more information on HTTP status codes, look here: https://tools.ietf.org/html/rfc7231#section-6
More information on JSON is available here: http://json.org/