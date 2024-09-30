# <YOUR_APP_NAME>

This project is based on [OpenSaas](https://opensaas.sh) template and consists of three main dirs:
1. `app` - Your web app, built with [Wasp](https://wasp-lang.dev).
2. `e2e-tests` - [Playwright](https://playwright.dev/) tests for your Wasp web app.

For more details, check READMEs of each respective directory!


OPENSAAS Test

pre-requisite:

Node.js must be >= 18

Docker

Postgres will be launched on docker via commandline.

if postgres not launched via commandline
modify .env.server DATABASE_URL with this format: postgresql://postgres:PASSWORD$@Db_HOST:5432/opensaas

Wasp:
https://docs.opensaas.sh/start/getting-started/

to install wasp on Linux/Mac
```bash
curl -sSL https://get.wasp-lang.dev/installer.sh | sh
```
Windows:
```bash
curl -sSL https://get.wasp-lang.dev/installer.sh | sh
```

Validate Wasp is installed
```bash
wasp version

```

Unzip Source from DNG



In project source if using local DB
```bash
cd app
wasp start db
```

in new terminal window in app folder

```bash
wasp db migrate-dev
```

finally 

```bash
wasp start
```

You can create an account using the login button at the top right.

In the terminal, you should see a message with a URL to access to confirm the account creation.


Tasks:

Implement/Modify this application template to have the top menu with the following items: My Account | Settings | Help (see top_menu.png)
-Keep the existing log-in functionality and components

-Clicking Settings menu opens up an empty page in the main area
-Clicking Help menu opens up an empty page in the main area
-Clicking "My Account" opens up a left bar menu with the following sub-menus. (see side_menu.png)
"My Scans"| "My Reports" | Statistics | Documents
->Note: the submenu "My Scans" is the default state when the users clicks "My Account".

In The My Account state,
Clicking "My Scans" opens up an empty page with "My Scans" text item in the main area
Clicking Each of the other submenus on the left will behave the same, opening up an empty main page in the main area.
The menu at the top is preserved with the correct highlighted selection of "My Account"

Task 2:

Using https://ui.shadcn.com
propose a solution how we can implement the top navigation menu and the left hand side menu. Using radix primitives.
Keep in mind the UI components will be shared with other react/NextJS projects.
The end result should be an easily maintainable project to implement UX from UI designer. 

Task 3: 
Also, propose a responsive version of the top and left handside menus so a user on a mobile phone can navigate easily.
 












  