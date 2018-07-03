"use strict";
{
    const task = {
        templateUrl: 'task.html',
        controller: function (gameService, $location) {
            let vm = this;
            vm.random = function (num, add) {
                return Math.floor(Math.random() * num) + add;
            }
            vm.fwamt = vm.random(3, 1);
            vm.samt = vm.random(5, 2);
            vm.newfood = function() {
                vm.food += vm.fwamt;
                return gameService.setFood(vm.food);
            }
            vm.newwater = function() {
                vm.water += vm.fwamt
                return gameService.setWater(vm.water);
            }
            vm.newwood = function() {
                vm.wood += vm.fwamt;
                return gameService.setWood(vm.wood);
            }
            vm.city = gameService.getCity();
            vm.food = gameService.getFood();
            vm.water = gameService.getWater();
            vm.wood = gameService.getWood();
            vm.villagers = gameService.getVillagers();
            vm.day = gameService.getDay();
            vm.WS = gameService.getWS();
            vm.house = true;
            // vm.scavengeopt = [vm.nothing(), vm.nothing(), vm.findfood(), vm.findfood(), "death"];
            vm.scavenge = function(x){
                let i = vm.random(4, 0);
                if (i < 2){
                    vm.nothing(x);
                } else if (i < 4) {
                    vm.findfood(x);
                } else {
                    vm.death(x);
                }
            }
            vm.scavengetext = "test";
            vm.nothing = function(x) {
                vm.scavengetext = `${x} found nothing.`;
                return vm.nothingtext;
            }
            vm.findfood = function (x) {
                vm.scavengetext = `${x} encountered a bear and killed it for ${vm.samt} food.`
                vm.food += vm.samt
                return gameService.setFood(vm.food);
            }
            vm.death = function (x) {
                alert(`${x} was attacked by a bear while scavenging! ${x} has died.`);
                return gameService.killVillager(x);
            }
            vm.buildhouse = function () {
                vm.house = false;
                vm.wood -= 5;
                gameService.setWood(vm.wood);
                alert("Great! With the addition of a new house, a new villager has moved into town!");
            }
            vm.page = function() {
                if (vm.house === true){
                    $location.path("/daycomp");
                } else {
                    $location.path("/gconsole");
                }
            }
        }
    }

    task.$inject = ["gameService", "$location"];

    angular
        .module("game")
        .component("task", task)
}