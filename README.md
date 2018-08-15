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
2. Login heroku

```js
$ heroku login
```

3. Deploy your changes

```js
$ git add .
$ git commit -am "make it better"
$ git remote -v
// heroku	https://git.heroku.com/react-hirokoymj.git (fetch)
// heroku	https://git.heroku.com/react-hirokoymj.git (push)
// hiroko1	master (fetch)
// hiroko1	master (push)
// hiroko2	master (fetch)
// hiroko2	master (push)
// hiroko3	https://github.com/hirokoymj/hirokoymj1 (fetch)
// hiroko3	https://github.com/hirokoymj/hirokoymj1 (push)
// origin	git@github.com:hirokoymj/hirokoymj1.git (fetch)
// origin	git@github.com:hirokoymj/hirokoymj1.git (push)
$ git remote rm hiroko1
$ git remote rm hiroko2
$ git remote rm hiroko3
$ git push heroku master
```


# Reference
- [my dashboad - Deploy tab](https://dashboard.heroku.com/apps/react-hirokoymj/deploy/heroku-git)