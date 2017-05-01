# Web Development Group Project

## Create an account at gitlab.com
Add your ssh public key
Create a new project
Set visibility to private

On the newly created "Project" -> "Home" screen, clone the ssh url displayed to your local machine

### [optional] Add someone as a collaborator
Go to "Settings" tab -> "Members" Subtab
Add "$USERNAME" as a collaborator


## Choose your path
   * ASP.NET (documented below, Medium, Good all-around)
   * PHP
   * Haskell (Hard)

## [optional, recommended] ASP.NET Path 

###Installation and setup

   * Download dotnet core sdk from [microsoft.com](https://www.microsoft.com/net/core#windowscmd)
      * 
   * Download visual studio code from [code.visualstudio.com](https://code.visualstudio.com)
   * After installing both, launch Visual Studio Code
      * Bonus: set DOTNET_CLI_TELEMETRY_OPTOUT=1 in [System Environment Variables](https://www.kb.wisc.edu/cae/page.php?id=24500) to avoid sending usage data tomicrosoft
      * Install extensions by pressing `Ctrl+P` then typing the extension name
         * Install these extensions: [csharp](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp), [language-vscode-javascript-angular2](https://marketplace.visualstudio.com/items?itemName=nwallace.language-vscode-javascript-angular2)
   * Open your command prompt of choice (git-bash, powershell, etc) and navigate to a folder where you want to create a new project
      * Bonus: you can open a new terminal in VSCode by pressing ``Ctrl+'`'`` (literal back-quote)
   * Run `dotnet new mvc` within the project folder
   * Run `dotnet restore` within the project folder
   * Open the `Startup.cs` file from within VSCode
   * Tap the `Debug` icon (fourth from top) in the VSCode left-hand menu
   * Click the `Play (F5)` icon to launch your web application
   * Your web application should be visible on http://localhost:5000


### Create a free asp.net hosting account
myasp.net
free plan
choose asp.net site

Go To Hostings -> Control Panel

TODO: find site URL 



### Create a database
Go To Hostings -> Control Panel

Go To Databases
Add an MSSQL Database using MSSQL 2016
Record the server name [sql****.myasp.net], username, and password info
