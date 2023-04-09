const bodyParser = require('body-parser');
const express = require('express');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')
const path = require('path')

const app = express();

/**
 ** set() method allows us set any value globaly in express application 
 */
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false })) 

/**
 ** Only route start with /admin will go the adminRoute file 
 */
app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(errorController.get404)



app.listen(4000)
 