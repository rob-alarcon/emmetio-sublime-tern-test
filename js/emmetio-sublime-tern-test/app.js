

requirejs.config({
    paths: {
        'jquery': '../jquery/jquery'
    },
    shim: {
        'jquery': {
            exports: '$'
        }
    },
    urlArgs: "bust=" + ( new Date() ).getTime()
});


require( [ "jquery" ], function( $ ) {
    $( "h1" ).append( "hello Sublime Tern" );
});

