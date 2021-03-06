(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var SLIDER_SELECTOR = '[is-slider="yes"]'
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';

    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var RemoteDataStore = App.RemoteDataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var sliderValue = App.sliderValue;
    var CheckList = App.CheckList;
    var remoteDS = new RemoteDataStore(SERVER_URL);

    // var myTruck = new Truck('Serenity', new DataStore());
    var myTruck = new Truck('Serenity', remoteDS);
    window.myTruck = myTruck;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSliderHandler(SLIDER_SELECTOR);
    formHandler.addSubmitHandler(function(data) {
        return myTruck.createOrder.call(myTruck, data)
          .then(function () {
            checkList.addRow.call(checkList, data);
          });
    });

    myTruck.printOrders(checkList.addRow.bind(checkList));
    formHandler.addInputHandler(Validation.isCompanyEmail);

    console.log(formHandler);
})(window);
