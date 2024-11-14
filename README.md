# my-bio.toast
This is where you can design your [bio.toast](https://github.com/lightly-toasted/bio.toast) bio.
Have fun customizing it to your liking!



## Getting Started
1. [Fork](https://github.com/lightly-toasted/yourname.bio.toast/fork) this, and set the repository name to `<your-github-username>.bio.toast`.
2. Edit the files to customize your bio.
3. To test out your styles:
   * Open the `styles.css` file in the root directory.
   * Add or modify CSS rules to customize the appearance of your bio.
   * Run `npm run dev` in your terminal to start the development server.
   * Open your browser to `http://localhost:3001` to see your changes in real-time. (if you are getting ratelimited, host [bio.toast](https://github.com/lightly-toasted/bio.toast) in your computer and run `npm run dev:localhost`)
4. Once you're satisfied with your changes, commit them to your GitHub repository.
5. Visit your bio to see the final result.

## Why my customizations does not apply?
- You did not rename your repository to `<your-github-username>-bio.toast`. All letters are case-sensitive.
- Try waiting up to a hour.
- [Clear](https://support.google.com/accounts/answer/32050) your browser's cache.
- [Open an issue](https://github.com/lightly-toasted/bio.toast/issues/new) for help.

## Configure bio.toast.json
- `name`: Your name, leave it empty if you want to use your GitHub name.
- `description`: About yourself, leave it empty if you want to use your GitHub profile descriptions.
- `pins`: Array of element IDs to be seen on top. You can use this to set the order of elements.
- `customWidgets`: Array of objects that is consisted of:
    - `id`: ID of the widget element. 
    - `type`: `image` | `img` | `text` | `p` | `iframe` | `embed`, defaults to `img` if empty
    - `src`: Widget source URL. (for `img` and `iframe`)
    - `alt`: `alt` attribute of widget. (`title` attribute if `iframe`)
- `pronouns`: Your pronouns. ex\) he/him
- `themeColor`: Embed color.
- `embedImage`: Embed image.
- `github`
    - `username`: Your GitHub username, leave it empty if you want to display your account.
- `discord`: This uses [Lanyard](https://github.com/Phineas/lanyard), join their [Discord server](https://discord.gg/lanyard) to use this.
    - `id`: Your [Discord user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID). 
    - `lanyard-api-base-url`: Base URL of Lanyard API. Leave it empty to use default (`https://api.lanyard.rest/v1`)
- `social`: Your social links
    - `"appName": "url"` format