let wHeight = $(window).height();
let wWidth = $(window).width();

let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
canvas.width = wWidth;
canvas.height = wHeight;
