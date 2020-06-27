// const http = require('http')
const express = require ('express');
const moment = require('moment');
const PORT = process.env.PORT || 5000
const app = express ();

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`
    );
    next();
};
app.use(logger)

const strains = [{
 id: 1,
 strain: 'test',
 flavor: 'test',
 effect: 'test',
 description: 'test',
}
]// const server = http.createServer( (req, res) => {
//  res.write ('Hello World')
// }) 
app.listen(PORT, (error) => {
    if (error) {
        console.log ( "Somthing went wrong", error)
    } else {
        console.log("Server is listening on port " + PORT)
    }
})

app.get ('/api/cannabis',  (req, res ) => {
    res.json (strains)
})



