const sayHi = require('./../js/backend.js').sayHiModule;

$(() => {
  $('#name-form').submit((event) => {
    console.log('hello');
    event.preventDefault();
    const name = $("#input").val();
    $("#output").text(sayHi(name));
  });
});
