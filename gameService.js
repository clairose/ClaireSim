"use strict";
{
    function gameService() {
        let city = "";
        const getCity = function (){
            return city;
        }
        const setCity = function (newCity){
            city = newCity;
        }
        let villagers = [{name: "Tom", boo: false}, {name: "Jones", boo: false}];
        const getVillagers = function(){
            return villagers;
        }
        const setVillager = function(newVillager){
            villagers.push(newVillager);
        }
        let houses = 1;
        let water = 10;
        const getWater = function (){
            return water;
        }
        const setWater = function (newWater){
            water = newWater;
        }
        let food = 10;
        const getFood = function (){
            return food;
        }
        const setFood = function (newFood){
            food = newFood;
            console.log(food);
        }
        let wood = 0;
        const getWood = function (){
            return wood;
        }
        const setWood = function (newWood){
            wood = newWood;
        }
        let day = 1;
        const getDay = function (){
            return day;
        }
        let watersource = 0;
        const getWS = function (){
            return watersource;
        }
        const setWS = function (){
            watersource++;
        }
        let wells = 0;
        const newDay = function (){
            day++;
            water -=villagers.length;
            food -=villagers.length;
            watersource +=wells;
            console.log("Day: "+ day+ " Water: " + water+ " Food: "+  food +" WS: "+  watersource);
        }
        const killVillager = function(input) {
            let i = villagers.indexOf(input);
            villagers.splice(i, 1);
            villagers.forEach(function(element){
                console.log(element);
            })
        // const changePage = function() {
        //     if () 
        //     $location.url()
        // }

        }
        return {
            city,
            getCity,
            setCity,
            getWater,
            setWater,
            getVillagers,
            setVillager,
            getFood,
            setFood,
            getWood,
            setWood,
            getDay,
            newDay,
            getWS,
            setWS,
            killVillager
        };
    }

    angular
        .module("game")
        .factory("gameService", gameService)
}