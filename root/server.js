//because I used "import express from" in package.json ""type": "module"," is required

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// CONSTANTS ------------------------------

const port = process.env.PORT || 3000;
const app = express();

// SERVER LISTEN ------------------------------

const server = app.listen(port, async () => {
    console.log(`Assignment 1 app listening on port ${port}!`);
});

// SETUP ------------------------------
//this does not exist natively using "import/from", so I had to create it with the path

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');

// SEND CLIENT FOLDER ON EVERY REQUEST ------------------------------

app.use(express.static(path.join(__dirname, 'client')));

// ROUTES ------------------------------
//You need a new "Route" for every "Page" Routes = Pages in this scenario

app.get('/', async (req, res) => {
    //the "res.render" will look for the string "index.ejs" (of the same name in "views" folder)
    res.render('index', {
        //whatever is in this object will get sent down to your ejs file
        title:'Home'
    });
});

app.get('/about', async (req, res) => {
    //the "res.render" will look for the string "index.ejs" (of the same name in "views" folder)
    res.render('about', {
        //whatever is in this object will get sent down to your ejs file
        title:'About'
    });
});

app.get('/contact', async (req, res) => {
    res.render('contact', {
        title:'Contact'
    });
});

app.get('/portfolio', async (req, res) => {
    res.render('portfolio', {
        title:'Portfolio'
    });
});

app.get('/portfolio/item1', async (req, res) => {
    res.render('portfolio/item1', {
        title:'Portfolio - GOPOOL App Design'
    });
});

app.get('/portfolio/item2', async (req, res) => {
    res.render('portfolio/item2', {
        title:'Portfolio - CakeLab App Design'
    });
});

app.get('/portfolio/item3', async (req, res) => {
    res.render('portfolio/item3', {
        title:'Portfolio - Photography'
    });
});