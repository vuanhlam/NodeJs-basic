
const path = require('path')
const bodyParser = require('body-parser');
const express = require('express');
const rootDir = require('./utils/path')
const adminData = require('./routes/admin')
const shopRoute = require('./routes/shop')


const app = express();

/**
 ** set() method allows us set any value globaly in express application 
 */
app.set('view engine', 'pug');
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false })) 

/**
 ** Only route start with /admin will go the adminRoute file 
 */
app.use('/admin', adminData.routes)
app.use(shopRoute)

app.use((req, res, next) => {
    res.status(404).render('404.pug')
})

app.listen(4000)
