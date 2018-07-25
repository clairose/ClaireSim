"use strict";
{
    const gconsole = {
        templateUrl: 'console.html',
        controller: function (gameService) {
            let vm = this;
            vm.city = gameService.getCity();
            vm.newVillager = function (input) {
                gameService.setVillager({name: input, boo: false});
                let length = gameService.getVillLength();
                if (length === 10) {
                    gameService.setShow(true);
                }
            }
            vm.food = gameService.getFood();
            vm.water = gameService.getWater();
            vm.wood = gameService.getWood();
            vm.villagers = gameService.getVillagers();
            vm.getNum = function(num) {
                let array = new Array();
                for (var i = 1; i <= num; i++) {
                    array.push(i);
                    }
                return array;
        }
        }
    }

    gconsole.$inject = ["gameService"];

    angular
        .module("game")
        .component("gconsole", gconsole)
}