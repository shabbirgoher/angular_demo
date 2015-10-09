module.exports = function(){

    function customMiddlewares(connect, options, middlewares){
        middlewares.unshift(function(req, res, next) {
            if(req.url.match("\/proxyserve\/")){
                res.end("Call service for :: " + req.url);
            }
            else{
                next();
            }
        });
        
        return middlewares;
    }

    return {
        server: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: 'localhost',
                open: true,
                base: ["out"],
                middleware: customMiddlewares
            }
        }
    }
};