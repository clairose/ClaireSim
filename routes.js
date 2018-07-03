"use strict";
{
    angular
      .module("game")
      .config(($routeProvider) => {
        $routeProvider
          .when("/welcome", {
            template: "<welcome></welcome>"
          })
          .when("/gconsole", {
            template: "<gconsole></gconsole>"
          })
          .when("/daycomp", {
            template: "<daycomp></daycomp>"
          })
          .when("/task", {
            template: "<task></task>"
          })
          .otherwise({ redirectTo: "/welcome" })
      });
  }