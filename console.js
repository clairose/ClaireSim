"use strict";
{
    const gconsole = {
        templateUrl: 'console.html',
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
        }
    }

    gconsole.$inject = ["gameService"];

    angular
        .module("game")
        .component("gconsole", gconsole)
}