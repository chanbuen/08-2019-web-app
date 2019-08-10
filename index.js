const app = require ('./server/api')
const { db } = require('./server/db')

const port = process.env.PORT || 3000;

db.sync( { force : true } )
    .then(() => 
    app.listen(port, function () {
        console.log(`Your server, listening on port ${port}`);
      }))
      .catch(console.error)
