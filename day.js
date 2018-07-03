"use strict";
{
    const day = {
        templateUrl: 'day.html',
        controller: function (gameService) {
            let vm = this;
            vm.city = gameService.getCity();
            vm.newVillager = function (input) {
                gameService.setVillager(input);
            }
            vm.food = gameService.getFood();
            vm.water = gameService.getWater();
            vm.wood = gameService.getWood();
            vm.villagers = gameService.getVillagers();
            vm.day = gameService.getDay();
            vm.WS = gameService.getWS();
            vm.newDay = gameService.newDay();
        }
    }

    day.$inject = ["gameService"];

    angular
        .module("game")
        .component("day", day)
}