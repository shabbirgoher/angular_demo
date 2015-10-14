require.config({
  paths:{
	  "jquery": "bower_components/jquery/dist/jquery",
	  "app": "demo_app",
	  "angular": "bower_components/angular/angular",
	  "login.module": "components/login/login_module",
	  "uiRouter": "bower_components/angular-ui-router/release/angular-ui-router.min",
	  "ngRoute": "bower_components/angular-route/angular-route.min",
	  "common.httpService": "services/common/httpService",
	  "common.urlService": "services/common/urlService",
    "app.breezo": "components/breezoMeter/breezo_meter_module"
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