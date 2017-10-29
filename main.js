const express   = require('express');
const path      = require('path');
const app       = express();
const port      = process.env.port || 8090;

if ( process.env.NODE_ENV !== 'production' )
{
    const webpack              = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    
    const webpackConfig = require('./config/webpack.dev');
    const compiler      = webpack(webpackConfig);
    
    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static('dist'));

app.get( '*', function( req, res ) {
    res.sendFile(path.join(__dirname, 'index.html'));
} );

app.listen( port, function(error) {
    
    if ( error )
    {
        console.error( error );
    }
    else
    {
        console.log( 'Listenning on port %s. See on http://localhost:%s/ in your browser. ', port, port );
    }
    
});
