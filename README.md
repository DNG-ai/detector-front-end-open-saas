# <YOUR_APP_NAME>

This project is based on [OpenSaas](https://opensaas.sh) template and consists of three main dirs:
1. `app` - Your web app, built with [Wasp](https://wasp-lang.dev).
2. `e2e-tests` - [Playwright](https://playwright.dev/) tests for your Wasp web app.
3. `blog` - Your blog / docs, built with [Astro](https://docs.astro.build) based on [Starlight](https://starlight.astro.build/) template.

For more details, check READMEs of each respective directory!


Postgres Staging


simonSimon9$


postgresql://postgres:simonSimon9$@34.122.189.106:5432/postgres-detector

,




need to put postgres on VPC using private IP of db


follow this for back-end
https://github.com/wasp-lang/open-saas/issues/178

Current status: Deployment using CLoudrun with trigger works.
Need the front.


cd .wasp/build/web-app

npm install && REACT_APP_API_URL=https://detector-front-end-open-saas-728107681887.us-central1.run.app npm run build


