const Auth0Strategy = require('passport-auth0');
const config = require(`${__dirname}/config.js`)


module.exports=new Auth0Strategy({
    domain: config.domain,
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: '/login'
},
function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
}
);