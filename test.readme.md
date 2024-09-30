OPENSAAS Test

pre-requisite:

Node.js must be >= 18

Wasp:
https://docs.opensaas.sh/start/getting-started/

to install wasp on Linux/Mac
```bash
curl -sSL https://get.wasp-lang.dev/installer.sh | sh
```


Get Source from DNG

Launch Postgres through local install or local docker

In project source
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