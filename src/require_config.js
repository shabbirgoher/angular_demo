require.config({
  paths:{
	  "jquery": "bower_components/jquery/dist/jquery",
	  "app": "demo_app",
	  "angular": "bower_components/angular/angular",
	  "login.module": "components/login/login_module",
	  "uiRouter": "bower_components/angular-ui-router/release/angular-ui-router.min",
	  "ngRoute": "bower_components/angular-route/angular-route.min",
	  //"common.httpService": "components/common/httpService",
	  //"common.urlService": "components/common/urlService"
  },
  shim:{
	  "angular": {
          exports: "angular"
      },
      "uiRouter":{
          deps: ["angular"]
      },
      "ngRoute": ["angular"],
  },
  deps: ["app"]
});