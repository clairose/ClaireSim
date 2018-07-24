"use strict";
{
    const daycomp = {
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
            vm.show = gameService.getShow();
            vm.addWater = function(){
                vm.water += vm.WS;
                gameService.setWater(vm.water);
            }
            vm.getNum = function(num) {
                let array = new Array();
                for (var i = 1; i <= num; i++) {
                    array.push(i);
                    }
                return array;
            }
        }
    }

    daycomp.$inject = ["gameService"];

    angular
        .module("game")
        .component("daycomp", daycomp)
}