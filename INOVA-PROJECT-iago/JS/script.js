var countDownDate =  new Date("Sep 24, 2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance =  countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000)



function toggleDiv(divid, setaid){
    if(document.getElementById(divid).style.display == 'none'){
      document.getElementById(divid).style.display = 'block';
      document.getElementById(setaid).setAttribute('src', '../IMAGENS/arrow_forward_ios_up.png')
    }else{
      document.getElementById(divid).style.display = 'none';
      document.getElementById(setaid).setAttribute('src', '../IMAGENS/arrow_forward_ios_down.png')

  }
  }

let pagina_atual = 24

function passar_dia(x){
  if (pagina_atual + x >= 24 && pagina_atual + x <= 27){
    document.getElementById("dia_" + pagina_atual.toString()).style.backgroundColor = "#C6E7E2"
    pagina_atual = pagina_atual + x;
    document.getElementById("dia_" + pagina_atual.toString()).style.backgroundColor = "#01C0A1"
  }
}



(function($) {
    
  var slide = function(ele,options) {
      var $ele = $(ele);
      
      var setting = {
          speed: 1000,
          interval: 2000,
          
      };
      $.extend(true, setting, options);
      var states = [
          { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
          { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
          { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7 },
          { $zIndex: 4, width: 224, height: 288, top: 0, left: 263, $opacity: 1 },
          { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
          { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
          { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
      ];

      var $lis = $ele.find('li');
      var timer = null;

      $ele.find('.hi-next').on('click', function() {
          next();
      });
      $ele.find('.hi-prev').on('click', function() {
          states.push(states.shift());
          move();
      });
      $ele.on('mouseenter', function() {
          clearInterval(timer);
          timer = null;
      }).on('mouseleave', function() {
          autoPlay();
      });

      move();
      autoPlay();

      function move() {
          $lis.each(function(index, element) {
              var state = states[index];
              $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
          });
      }

      function next() {
          states.unshift(states.pop());
          move();
      }

      function autoPlay() {
          timer = setInterval(next, setting.interval);
      }
  }
  $.fn.hiSlide = function(options) {
      $(this).each(function(index, ele) {
          slide(ele,options);
      });
      return this;
  }
})(jQuery);