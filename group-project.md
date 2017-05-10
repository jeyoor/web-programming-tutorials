# Web Development Group Project

##[Optional Extra Info](https://github.com/jeyoor/web-programming-tutorials/blob/master/optional-extra-info.md)

## Create an account at github.com
   * Create an account at https://github.com
   * Fork this repository to your account
   * Clone the newly repository to your local machine




## Lesson One: Setting up a development workstation and cloud deployment

### Workstation setup

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
   * Click the Gear icon with an orange dot, then select `.NET Core` from the list
   * This should autoconfigure a `launch.json` file in the .vscode subfolder for you
   * Select `.NET Core Launch (web)` from the dropdown next to the play button
   * Within the `launch.json` file, find the `.NET Core Launch (web)` subsection
      * Within that subsection, update the `"program"` key to point to the path to your dll
      * For this example project, the program key looks like this:  `"program": "${workspaceRoot}/bin/Debug/netcoreapp1.1/aspnet-core-example.dll",`
   * Press the `Play (F5)` icon and an error message should appear noting that VSCode `Could not find the prelaunch task "build"`
   * Choose the "Configure Task Runner" option and select `.NET Core Build`
   * This should autoconfigure a `tasks.json` file in the .vscode subfolder for you
   * Restart VSCode
   * Return to the `Debug` menu and press the `Play (F5)` icon
   * A browser should launch with your web application should be visible on http://localhost:5000
   * At this point we are ready to save everything into source control
      * add a .gitignore to your project folder similar to the one listed here
      * Use the VSCode source control menu to commit and push to your GitHub repo


### Set up cloud deployment

   * Create a Microsoft Azure account
   * I recommend using [this account creation link](https://azure.microsoft.com/en-us/develop/net/aspnet/)
   * There is quite the involved account creation procedure involving a phone number verification and a credit card verification
   * If you want to avoid getting charged, make sure your app stays within the free tier limits [here](https://azure.microsoft.com/en-us/pricing/details/app-service/)
   * Log in to https://portal.azure.com after creating your account
   * Click on `App Services`
   * Search for `Web App + SQL`
   * Click `Create`
   * Name your application something unique
   * Under SQL Database, click on `Configure required settings`
   * Enter a name for your new SQL database
   * Click on `Target Server`
   * Create a new server with a specified username. Enter and confirm the password. Keep this information handy.
   * Click on `Pricing Tier`
   * Move the down to the free tier if you don't want to get charged
   * Click the `Select` button once, to drop back to the database creation dialog
   * Click the `Select` button again to drop back to the Web App + SQL creation dialog
   * Check the `Pin to dashboard` box
   * Click `Create`
   * After the web app deploys, it should appear in your Azure dashboard
   * Click on the app service to open it
   * Scroll down to `Scale up (App Service Plan)`
   * Scroll down to the `Free Tier`, click it, and click the `Select` button
   * Click on the `App Services` icon in the far left (it looks like a globe)
   * Reopen your specific app service
   * Click on `Deployment options` in the left-hand menu
   * Click on `Configure required settings`
   * Choose `GitHub`
   * Click `Authorization`, then click the `Authorize` button
   * Sign into your GitHub account
   * Click the `Authorize` button
   * Press the `Ok` button
   * Choose the project
   * Choose the repository
   * Press Ok
   * The build process will take a while
   * Once it's done, click the `Overview` item in the left-hand menu.
   * Next, click the `Browse` button in the top-left of the right-most pane. This should open your running web app.
   * from this point forward, once you push to github, your app will deploy itself.
   * To demonstrate this, edit Views/Home/About.cshtml and put a new message between the <p> tags.
   * After you commit and push, your site should update
   * From here on out, I recommend [creating a feature branch](https://code.visualstudio.com/Docs/editor/versioncontrol#_branches-and-tags) for each new feature you are going to implement, then [creating, reviewing, and merging a pull request](https://help.github.com/articles/about-pull-requests/) to your master branch when you want to deploy.

## Lesson Two: Building a Web API and sending a pull request


   * Create a new branch using [Visual Studio Code](https://code.visualstudio.com/Docs/editor/versioncontrol#_branches-and-tags) or the [Git CLI](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
      * In Visual Studio Code, press `Ctrl-Shift-P`, then select `Git:Create branch...`
      * From your Git command line, type `git checkout -b BRANCH_NAME` to create a new branch with the desired `BRANCH_NAME` and switch to it
   * Reminder: Run `dotnet restore` and then `dotnet build` to refresh and rebuild your project after changing code
   * Reminder: In Visual Studio Code, go to the `Debug` menu and click the `Play` button or press `F5` on the keyboard to run your application
   * Install the free [Postman](https://www.getpostman.com/) app (we will use it to test the API your build)
   * Create a Models folder under aspnet-core-example if it does not already exist
   * Follow [this tutorial](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api) to create a Web API on your new branch
   * Test your API using Postman as described in the tutorial
   * Commit your work
      * In Visual Studio Code,
         * press the `Git` button (it looks like a Y)
         * type a message for the commit into the text box
	 * mouse over each file in the list and press the plus sign
	 * once you're ready to commit, click the check mark icon at the top
      * OR from your Git command line, type `git add . -A`
   * Push your work to GitHub
      * In Visual Studio Code
         * press the `Git` button (it looks like a Y)
         * click the three dots icon at the top of the screen
	 * choose `Push`
      * From your Git command line, type `git push origin BRANCH_NAME`
   * Create a pull request to merge your work to master
      * Open your GitHub account
      * Choose your web-programming-tutorials repository
      * Click on the `Pull Requests` tab
      * Click the `New Pull Request` button
      * For the `base` branch, choose `master`
      * For the `compare` branch, choose `BRANCH_NAME`
      * Click the `Create pull request` button
      * Add a comment or description to your pull request
      * Click the `Create pull request` green button at the bottom-right of the page
   * Review your pull request (in professional settings usually someone else will review your pull request)
      * Open your GitHub account
      * Choose your web-programming-tutorials repository
      * Click on the `Pull Requests` tab
      * Click on the newly created pull request
      * Click on the `Files changed` tab
      * Begin reviewing files and making comments
   * Make some comments on your pull request
      * You can click on a line under the `Files changed` tab to add a comment
      * I recommend sprinkling some comments throughout the files so you can have something to change for the next step
      * Comments like, `better variable names needed here` or `more comments needed here` are fun easy to fix
      * After adding a comment you can click the `Start a review` button
      * After adding all the necessary comments, click the `Review changes` button on the top-right
      * You may optionally leave a summary comment
      * When reviewing for others, you can decide to `Comment`, `Approve`, or `Request Changes`, then submit your review
      * Since you're reviewing your own request, all you can do is `Comment`, so select `Comment` and click the `Review` button
   * Respond to the comments by adding some work to your branch
      * Make the changes required for your pull request using Visual Studio code
      * Commit and push your work (see steps above) [make sure you push to BRANCH_NAME and not master!]
   * Return to the pull request and review it
      * Open the pull request (See steps for `Review your pull request` above)
      * This time, click the `Commits` tab
      * You should see your new commits that fix the earlier issues listed under the commits tab
   * Merge the pull request
      * Open the pull request (See steps for `Review your pull request` above)
      * Scroll to the bottom of the pull request
      * Click the `Merge pull request` button
   * If `master` is properly set up for Azure deployment (see Lesson 1), your production website should update with the API endpoint you created
   * You can now repeat the Postman testing steps from the Web API tutorial against your production web API (the API with the azurewebsites.net URL)

## Lesson Three: Building an Angular2 client for the Web API

Special thanks to [this StackOverflow question](https://stackoverflow.com/questions/36494938/debug-run-angular2-typescript-with-visual-studio-code#37605661) for powering this lesson.

### Set up VS Code and the Angular Quickstart
   * Pull the `lesson_three` branch from this repository into yours
      * if you don't have this repository set up as a remote, add it as an upstream
         * (unfortunately, adding remotes requires using the Git CLI at the moment)
	 * From your Git CLI, run `git remote add upstream https://github.com/jeyoor/web-programming-tutorials.git`
      * using the upstream remote, pull the `lesson_three` branch into your current repository
         * (unfortunately, pulling from a different remote requires using the Git CLI at the moment)
         * From the Git CLI, run `git pull upstream lesson_three`
      * if you have problems with pulling, you can simply [clone an entirely new copy of this repository and check out the `lesson_three` branch to continue](https://xkcd.com/1597/)
   * Make certain your VSCode installation is up to date
      * Use Help -> Check for Update
      * Install any newer updates
   * Install the extension called `Debugger for BROWSER_NAME` to facilitate browser debugging (this tutorial will use Chrome)
   * Add a configuration for debugging with sourcemaps to launch.json
      * Under `Browse` in VSCode, look under `aspnet-core-example/.vscode` for `launch.json`
      * Under the `configurations` array, add a new configuration that looks like this:
 
        {
            "name": "Launch localhost with sourcemaps",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:3000/Welcome",
            "sourceMaps": true,
            "webRoot": "${workspaceRoot}"
        }
TODO: add more info here
### Write the Angular2 TodoList app
TODO: describe this part
