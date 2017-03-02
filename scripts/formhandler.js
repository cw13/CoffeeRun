(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    var sliderValue = App.sliderValue || '';

    var SLIDER_SELECTOR = App.SLIDER_SELECTOR
    var slider = document.getElementById('strengthLevel');
    var sliderOutput = document.getElementById('range_slider_value');

    function FormHandler (selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
          throw new Error('Could not find element with selector: ' + selector);
        }

    }

    FormHandler.prototype.addSubmitHandler = function (dataHandler) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function (event) {
          event.preventDefault();

          var data =  {}
          $(this).serializeArray().forEach(function (item) {
            data[item.name] = item.value;
            console.log(item.name + ' is ' + item.value)
          });
          console.log(data);
          dataHandler(data);
          this.reset();
          this.elements[0].focus();

        });

    };

    FormHandler.prototype.addSliderHandler = function (selector) {
      console.log('Setting slider handler for slider');
      slider.addEventListener('change', function (event) {
        console.log(event)
        console.log(slider.value)
        App.sliderValue = slider.value
        sliderOutput.innerHTML = App.sliderValue
      });
    };

    App.sliderValue = sliderValue;
    App.FormHandler = FormHandler;
    window.App = App;

})(window);
