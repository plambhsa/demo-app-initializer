# Overview 

This repo is to demo what happens when using `APP_INITIALIZER` in conjuction with lazy loaded routes.

If you go to the `app.module.ts` file and comment out the providers array, then run `ng build`, you'll see a chunk that is related to `mod-1`. If you re add the providers array and run `ng build`, you'll see that the chunk relating to `mod-1` is gone. And if you go to the route ('/m1/cmp1') you'll see an error.

It seems like `APP_INITIALIZER` shouldn't have this effect. Otherwise, what would the point of having that option be? But that's the effect it is having. 
