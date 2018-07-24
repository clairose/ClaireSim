"use strict";
{
    function gameService() {
        let city = "";
        let show = false;
        const getCity = function () {
            return city;
        }
        const setCity = function (newCity) {
            city = newCity;
        }
        let villagers = [{ name: "Tom", boo: false }, { name: "Jones", boo: false }];
        let rand = Math.floor(Math.random() * villagers.length);
        const getVillagers = function () {
            return villagers;
        }
        const setVillager = function (newVillager) {
            villagers.push(newVillager);
        }
        let houses = 1;
        let water = 10;
        const getWater = function () {
            return water;
        }
        const setWater = function (newWater) {
            water = newWater;
        }
        let food = 10;
        const getFood = function () {
            return food;
        }
        const setFood = function (newFood) {
            food = newFood;
            console.log(food);
        }
        let wood = 0;
        const getWood = function () {
            return wood;
        }
        const setWood = function (newWood) {
            wood = newWood;
        }
        let day = 1;
        const getDay = function () {
            return day;
        }
        let watersource = 0;
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
            }
            if (food < 0) {
                alert(villagers[rand].name + " has died of hunger.");
                console.log(villagers.indexOf(villagers[rand]));
                killVillager(villagers[rand]);
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
            getShow
        };
    }

    angular
        .module("game")
        .factory("gameService", gameService)
}