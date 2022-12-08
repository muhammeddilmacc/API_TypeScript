### dependencies

```
- npm i -D typescript tsc-watch eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/node @types/express

- npm i express dotenv

- npm i module-alias

- npm i mongoose compression cors morgan helmet

- npm i -D @types/compression @types/cors @types/morgan

- npm i envalid

```

---

- npx tsc --init -->

  "baseUrl": "./src",
  "outdir": "dist",
  "paths": {
  "@/resources/*": ["resources/*"],
  "@/utils/*": ["utils/*"],
  "@/middileware/*": ["middileware/*"],
  },

- package.json --> "start": "node dist/index.js",
- package.json --> "dev": "tsc-watch --onSuccess \"node ./dist/index.js\"",    
- package.json --> "build": "tsc", 
- package.json --> "postinstall": "npm run build",        
---

```
- npm i mongoose compression cors morgan helmet
- npm install jsonwebtoken
- npm install -D @types/jsonwebtoken @types/bcrypt
```

---

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node dist/index.js\"",
    "dev": "tsc-watch --onSuccess \"node dist/index.js\"",
    "build": "tsc",
    "postinstall": "npm run build"
  },
```
