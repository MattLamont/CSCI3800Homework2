/**
 * Created by matt on 2/25/16.
 */

var express = require('express');
var app = express();

function admitRequest( req , res )
{
    res.set( 'Content-Type' , 'text/plain' );

    var s = "";

    s += "Recieved a " + req.method + " method on " + req.path + " route.\n\n";

    s += "Request Headers\n\n";
    for( var name in req.headers )
    {
        s += "\t" + name + ": " + req.header(name) + "\n";
    }

    s += "\nRequest Queries\n\n";

    for( var name in req.query )
    {
        s += "\t" + name + ": " + req.query[name] + "\n";
    }

    console.log( s );
    res.send( s );
}

function denyRequest( req , res )
{
    res.send( "You cannot perform that HTTP verb on this URL." );
}


app.get( '/gets' , function( req , res )
{
    admitRequest( req , res );
});

app.post( '/posts' , function( req , res )
{
   admitRequest( req , res );
});

app.put( '/puts' , function( req , res )
{
   admitRequest( req , res );
});

app.delete( '/deletes' , function( req , res )
{
    admitRequest( req , res );
});



app.listen( 8888 , function()
{
   console.log( "server listening on port 8888" );
});