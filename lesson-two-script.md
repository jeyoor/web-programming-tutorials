1. Welcome to lesson two!

For this lesson, you will need:

The source code checked out from the lesson_two branch.
Visual Studio Code.
Postman.
The dotnet command-line interface.

First, let's explore the behavior of the web service.
Please note, this web service comes from the tutorial linked in the description.
https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api
from the lesson_two branch, run dotnet restore.
then run dotnet build.
finally, run dotnet run.
This will run the web service.
This webservice is designed to record, update, and remove items in a To-Do list.


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

GET (list)

GET (individual)

POST (create)

PUT (idempotent update)

DELETE

Please note: firewalls may block some of the lesser-used HTTP methods such as PUT and DELETE. There are other ways 


We can now examine or 
Talk about the other stuff