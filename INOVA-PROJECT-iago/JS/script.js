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