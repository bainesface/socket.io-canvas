let wHeight = $(window).height();
let wWidth = $(window).width();
let player = {};

let canvas = document.querySelector('#the-canvas');
let context = canvas.getContext('2d');
canvas.width = wWidth;
canvas.height = wHeight;

$(window).load(() => {
  $('#loginModal').modal('show');
});

$('.name-form').submit((event) => {
  event.preventDefault();
  console.log('submitted');
  player.name = document.querySelector('#name-input').value;
  $('#loginModal').modal('hide');
  $('#spawnModal').modal('show');
  document.querySelector('.player-name').innerHTML = player.name;
});

$('.start-game').click((event) => {
  $('.modal').modal('hide');
});
