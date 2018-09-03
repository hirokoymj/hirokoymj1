# How to deploy the app in Heroku
1. Build the app with production version. See package.json

```js
$ npm run heroku-postbuild
//webpack -p --env=production
// env production
// Hash: 4fbbb97ec66f981b5208
// Version: webpack 3.1.0
// Time: 14314ms
//         Asset     Size  Chunks                    Chunk Names
//     bundle.js   782 kB       0  [emitted]  [big]  main
//     style.css  7.43 kB       0  [emitted]         main
// bundle.js.map  6.53 MB       0  [emitted]         main
// style.css.map    22 kB       0  [emitted]         main
```
2. Run express server if the site works properly.
```js
$ npm start
```   
Browse the content in http://127.0.0.1:3000/

3. Login heroku

```js
$ heroku login
```

3. Deploy your changes

```js
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```

```js
git remote -v

```

# Reference
- [my dashboad - Deploy tab](https://dashboard.heroku.com/apps/react-hirokoymj/deploy/heroku-git)