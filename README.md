# ACMPortfolioWorkshop
*Sanjeev Kamath & Jacob Frankel | 9/11/2025*
<hr>

## About
This repo is designed to introduce new web developers to HTML, CSS, and JavaScript with a simple boilerplate web portfolio.

Feel free to take this example portfolio and make it your own.

## Forking the Repo

To create your own web portfolio you must first have your own repository. You can copy all the files manually or **fork** the repo. Here's how:
1. On the [repo's page](https://github.com/sanjeevkamath/ACMPortfolioWorkshop), click "**Fork**" in the top right corner.
2. Rename the repository to whatever you like, and click "**Create Fork**". You have now made your own fork of the repo! Now to get it on VS Code.
3. On your fork's github page, click "**Code**", and then copy the HTTPS url.
4. In VS Code, open a terminal by using the keybind ``Ctrl + ` ``
5. Type `git clone` and paste the URL copied from GitHub: `git clone https://github.com/userName/forkName.git`

Now you can make changes and upload them to your fork by using 3 basic git commands: `add`, `commit`, and `push`. See [References](#references) for more info on git commands.

## Deploying your site with Vercel
Once you have finished making changes to your portfolio, it is time to publish it to its own website! We will be using Vercel for a quick and simple deployment.
1. Go to [Vercel's website](https://vercel.com/signup) and create a hobby account. **Ensure you continue with GitHub**.
2. Click the install button underneath "**Import Git Repository**".
3. Give Vercel access to all your GitHub account's public repos, or just the portfolio repo.
4. After Vercel has access to your GitHub, you will be able to click "**Import**" to the right of the portfolio repo's title.
5. Click "**Deploy**".

### Changing your Vercel domain name
Now you have deployed your site with Vercel. You can change the URL to something you like, but the free Vercel plan requires you to keep the `.vercel.app` at the end. Here's how to change the URL.
1. From your Vercel account dashboard (click your profile picture in the top right and click "**Dashboard**"), click the portfolio project you just deployed.
2. Click "**Domains**" in the upper-right of the screen.
3. You can now see the default domain Vercel generated. Click "**Edit**" next to it.
4. Change the URL to anything you like, so long as it has `.vercel.app` at the end. Then click "**Save**".

Now you have a fully custom, deployed portfolio site!

## References
- [Git commands](https://medium.com/@itsmepankaj/git-workflow-add-commit-push-pull-69adf44cf812)
- [HTML guide](https://www.w3schools.com/html/)
- [CSS guide](https://www.w3schools.com/css/)
- [JavaScript guide](https://www.w3schools.com/js/)
- [Learn more about Vercel](https://vercel.com/docs)

