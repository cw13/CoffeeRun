(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var SLIDER_SELECTOR = '[is-slider="yes"]'
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var sliderValue = App.sliderValue;
  var myTruck = new Truck('Serenity', new DataStore());
  window.myTruck = myTruck;

  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSliderHandler(SLIDER_SELECTOR);
  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);
})(window);
