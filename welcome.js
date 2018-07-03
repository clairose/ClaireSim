"use strict";
{
    const welcome = {
        templateUrl: 'welcome.html',
        controller: function (gameService) {
            let vm = this;
            vm.city = "";
            vm.setcity = function(input){
                gameService.setCity(input);
            };
        }
    }
    welcome.$inject = ["gameService"];

    angular
        .module("game")
        .component("welcome", welcome)
}