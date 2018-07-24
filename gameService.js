"use strict";
{
    function gameService() {
        let city = "";
        let show = false;
        let water = 10;
        let food = 10;
        let wood = 0;
        let day = 1;
        let watersource = 0;
        let villagers = [{ name: "Tom", boo: false }];
        let rand = Math.floor(Math.random() * villagers.length);
        const getCity = function () {
            return city;
        }
        const setCity = function (newCity) {
            city = newCity;
        }
        const getVillagers = function () {
            return villagers;
        }
        const setVillager = function (newVillager) {
            villagers.push(newVillager);
        }
        const getWater = function () {
            return water;
        }
        const setWater = function (newWater) {
            water = newWater;
        }
        const getFood = function () {
            return food;
        }
        const setFood = function (newFood) {
            food = newFood;
            console.log(food);
        }
        const getWood = function () {
            return wood;
        }
        const setWood = function (newWood) {
            wood = newWood;
        }
        const getDay = function () {
            return day;
        }
        const getWS = function () {
            return watersource;
        }
        const setWS = function () {
            watersource++;
        }
        const newDay = function () {
            day++;
            water -= villagers.length;
            food -= villagers.length;
            water += watersource;
            checkSupplies();
        }
        const checkSupplies = function () {
            if (water < 0) {
                alert(villagers[rand].name + " has died of thirst.");
                killVillager(villagers[rand]);
                water = 0;
            }
            if (food < 0) {
                alert(villagers[rand].name + " has died of hunger.");
                console.log(villagers.indexOf(villagers[rand]));
                killVillager(villagers[rand]);
                food = 0;
            }
        }
        const killVillager = function (input) {
            let i = villagers.indexOf(input);
            villagers.splice(i, 1);
            villagers.forEach(function (element) {
                console.log(element);
            })
            if (villagers.length < 1) {
                show = true;
            }
        }
        const setShow = function (newShow) {
             show = newShow;
        }
        const getShow = function () {
            return show;
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
            killVillager,
            setShow, 
            getShow
        };
    }

    angular
        .module("game")
        .factory("gameService", gameService)
}