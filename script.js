$(".frame").mousedown(function () {
  $(".active").removeClass("active");
  $(this).addClass("active");
});
$(".frame")
  .not(".maximized")
  .resizable({
    alsoResize: ".active .content",
    minWidth: 200,
    minHeight: 59,
  })
  .draggable({
    handle: ".topbar",
  });

//COLOR CHANGNG
/*$('.swatches span').click(function(){
			var color = $(this).attr("class");
			$(this).parent().parent().attr("class", "topbar").addClass(color);
		});*/

//MAXIMIZED
/*	$('.maxbtn').click(function(){
			$(this).parent().parent().toggleClass("maximized");
		}); */

//CLOSE
/*$('.xbtn').click(function(){
			$(this).parent().parent().remove();
		});*/
$(".xbtn").click(function () {
  $(this).parent().parent().hide();
});

$(".marcado").draggable();

// ELEMENTO MODAL
const sobre = document.querySelector("#custom");
const nft = document.querySelector("#website");
const reel = document.querySelector("#video");
const mail = document.querySelector("#sticky");

// CHAMAR BOTAO DE ABRIR MODAL
const bsobre = document.querySelector("#sobre");
const bnft = document.querySelector("#nft");
const breel = document.querySelector("#reel");
const bmail = document.querySelector("#mail");

// EVENTOS
bsobre.addEventListener("click", openSobre);
bnft.addEventListener("click", openNFT);
breel.addEventListener("click", openReel);
bmail.addEventListener("click", openMail);

// FUNCAO ABRIR
function openSobre() {
  sobre.style.display = "block";
}
function openNFT() {
  nft.style.display = "block";
}
function openReel() {
  reel.style.display = "block";
}
function openMail() {
  mail.style.display = "block";
}



//P5
/*var ball1 = [];

function setup() {
  
  canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1')


//Cria bolas
  for (var i = 0; i < 20; i++) { 
    ball1 [i] = new Ball();
  }
}

function draw(){
  background(245,84,162);

  for (var i = 0; i < ball1.length; i++) { 
    ball1[i].cria();
    ball1[i].move(); 
  }
  
  
}

function windowResized() {
  //Redimensiona o canvas apartir do tamanho da tela
  resizeCanvas(windowWidth, windowHeight);
  console.log(windowWidth + 'x' + windowHeight);
}

function Ball() {   
  this.r = random(150,255); // Vermelho
  this.g = random(150,255); // Verde
  this.b = random(150,255); // Azul
  this.rd = random(12,25); //Raio
  this.x = random(this.rd*2,width-this.rd*2);   //X da bola   
  this.y = random(this.rd*2,height-this.rd*2);  //Y da bola
  this.spx = random(-7, 7);  // Velocidade x da bola
  this.spy = random(-3, 7);  // Veloridade y da bola
  

  this.move = function() {
    this.x += this.spx; //  x += velocidade
    this.y += this.spy; //  y += velocidade

    //Se bater nos lados a bola reverte seu caminho
    if (this.x > width-this.rd*2 || this.x < this.rd*2) {
      this.spx *= -1;
    }
    
    if (this.y > height-this.rd*2 || this.y < this.rd*2) {
      this.spy *= -1;
    }
  }

  
  this.cria = function() {

    let d = dist(mouseX,mouseY,this.x,this.y);
    
    stroke(255,255,255,60);
    noFill();
    ellipse(this.x, this.y, this.rd*5, this.rd*5);
  }
}*/