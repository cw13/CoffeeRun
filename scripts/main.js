(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var SLIDER_SELECTOR = '[is-slider="yes"]'
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var sliderValue = App.sliderValue;
    var CheckList = App.CheckList;

    var myTruck = new Truck('Serenity', new DataStore());
    window.myTruck = myTruck;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSliderHandler(SLIDER_SELECTOR);
    formHandler.addSubmitHandler(function(data) {
        myTruck.createOrder(data);
        checkList.addRow.call(checkList, data);
    });
    console.log(formHandler);
})(window);
