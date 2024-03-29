# Blog

[![Build Status](https://travis-ci.org/Mikbac/Blog.svg?branch=master)](https://travis-ci.org/Mikbac/Blog)
![GitHub](https://img.shields.io/github/license/Mikbac/Blog)

Frontend application for showing blog with using firestore as database.

## Prerequisites
* npm

## Configuration
* Set web app's Firebase configuration

## Installing
1. Build and run the application:`
```
npm install && npm run
```
or

```
docker build --tag mikbac/blog:1.0 -f Dockerfile .
docker container run -p 4200:80 --name blog mikbac/blog:1.0
```

2. Open the browser and hit
```
http://localhost:4200/
```
## Color palette
![Color Palette](img/Color_Palette.png) 

## Built with
* [TypeScript 4.0](https://www.typescriptlang.org/)
* [Angular 10.1](https://angular.io/)
* [Firestore](https://firebase.google.com/docs/firestore)
* [SCSS](https://sass-lang.com/guide)

## Database model

### Category
* id: string
* title: string

### Post
* id: string
* title: string
* category: list<string>
* date: Timestamp (note: two or more posts cannot have the same time!)
* description: string (optional)


## TODO
- [x] ngx-translate
- [x] Travis CI configuration
- [x] Loading spinner (Http Interceptor)
- [x] Lazy loading for images
- [x] Joke (from [icanhazdadjoke](https://icanhazdadjoke.com/))
- [x] Firestore configuration
- [x] Application configuration
- [ ] Firebase storage
- [x] Paginator
- [ ] Firebase function for newsletter
- [ ] Unit tests - Karma + Jasmine
