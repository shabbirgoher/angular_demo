var r = require("request");
var request = r.defaults({
    strictSSL: false,
    tunnel: true,
    maxRedirects: 100,
    timeout: 10000000,
    jar: true
});


module.exports = function(){

    function requestService(req, res){
        var url = "";
        var reqeuestOptions = {
            url: "http://api-beta.breezometer.com/baqi/?lat=40.7324296&lon=-73.9977264&key="

        };

        req.pipe(request(reqeuestOptions)).on("response", function (response){
            console.log(response);
        }).pipe(res);
    }

    function customMiddlewares(connect, options, middlewares){
        middlewares.unshift(function(req, res, next) {
            if(req.url.match("\/proxyserve")){
                requestService(req, res);
            }
            else{
                next();
            }
        });
        
        return middlewares;
    }

    return {
        serve: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: "localhost",
                open: true,
                base: ["out"],
                middleware:customMiddlewares
            }
        }
    }
};