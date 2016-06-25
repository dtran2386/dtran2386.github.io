(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// CROSSFADE FEATURE
//$(function () {
//    $('.fadein img:gt(0)').hide();
//    setInterval(function () {
//        $('.fadein :first-child').fadeOut().next('img').fadeIn().end().appendTo('.fadein');
//    }, 2000);
//});

//window.onload = function () {
//  
//  var slider = document.getElementsByClassName('slider')[0],
//      images = slider.getElementsByTagName('img'),
//      counter = 0,
//      nextBtn = slider.getElementsByClassName('next')[0],
//      prevBtn = slider.getElementsByClassName('prev')[0];
//  
//  
//  function showImage (index) {
//    // Remove all classnames on the images (so hide them)
//    for (var i = 0; i < images.length; i += 1) {
//      images[i].className = 'hideImage';  
//    }
//    
//    // Add the showImage classname to the img-element you want
//    images[index].className = 'showImage';
//  }
//  
//  
//  function nextImg () {
//    // counter variable gets the current img selected
//    // if we have the last img, we switch back to the first one again
//    
//    if (counter < images.length -1) {
//      counter += 1;
//    } else {
//      counter = 0;
//    }
// 
//    showImage(counter);
//  }
//  
//  function prevImg () {
//    // counter variable gets the current img selected
//    // if we have the first img, we switch back to the last one again
//    
//    if (counter > 0) {
//      counter -= 1;
//    } else {
//      counter = images.length - 1;
//    }
// 
//    showImage(counter);
//  }
//  
//  window.setInterval(prevImg, 5000);
//  
//  // give the buttons an onclick event
//  nextBtn.onclick = nextImg;
//  prevBtn.onclick = prevImg;
//  
//  
//  // start it
//  showImage(counter);
//  
//};
},{}]},{},[1])