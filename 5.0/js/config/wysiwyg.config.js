require.config({
    paths:{
        jQuery:"../../libs/jquery-1.9.1.min",
        Handlebars:"../../libs/handlebars-v1.3.0"
    },
    shim:{
        jQuery:{
            exports:"$"
        },
        Handlebars:{
            exports:"Handlebars"
        }
    }
});