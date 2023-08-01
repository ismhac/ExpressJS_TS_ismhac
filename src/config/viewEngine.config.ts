import express, { Application } from 'express';

let configViewEngine = (app: Application) => {
    app.set('view engine', 'ejs')
    app.set('views', './src/views')
}

export {
    configViewEngine
}