# Blog

[![Build Status](https://travis-ci.org/Mikbac/Blog.svg?branch=master)](https://travis-ci.org/Mikbac/Blog)
![GitHub](https://img.shields.io/github/license/Mikbac/Blog)

Frontend application for showing blog with using firestore as database.

## Prerequisites
* npm

## Configuration
* Set web app's Firebase configuration

## Installing
```
npm install && npm run
```
Open the browser and hit
```
http://localhost:4200/
```
## Color palette
![Color Palette](img/Color_Palette.png) 

## Built with
* [TypeScript 4.0](https://www.typescriptlang.org/)
* [Angular 10.1](https://angular.io/)
* [Firestore](https://firebase.google.com/docs/firestore)
* [LessCss](http://lesscss.org/)

## Database model

### Category
* id: string
* title: string

### Post
* id: string
* title: string
* category: list<string>
* date: date
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
- [ ] Angular paginator
