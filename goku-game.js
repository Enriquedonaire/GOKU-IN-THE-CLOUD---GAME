let winBtn = document.getElementById('#win-btn');
let startBtn = document.querySelector('#start-btn');
let restartBtn = document.querySelector('#restart-btn');
let startPage = document.querySelector('#start-page');
let gamePage = document.querySelector('#game-page');
let gameOverPage = document.querySelector('#game-over-page');
let gameWinningPage = document.querySelector('#win-game-page');
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';
let bg = new Image;
bg.src = 'Images/background1.png';
let audioMainPage = new Audio('Music/Dragon Ball 8 Bits Mystical Adventure Opening.mp3');
let audiogameOverPage = new Audio ('Music/Dragon ball Super  Ultra Instinct 8bit Cover.mp3');
let startAudio = new Audio('Music/Dragon Ball Z Opening 8 bit.mp3');
let audioWiningPage = new Audio('Music/Dragon ball z cancion.mp3');
let audioGokuWin = new Audio('Music/goku-kamehameha-tonos.mp3');
let goku = new Image;
goku.src = 'Images/goku-Ready.png';
let fg = new Image;
fg.src = 'Images/mountainSouth.png';
let mountainNorth = new Image;
mountainNorth.src = 'Images/mountainNorth.png';
let cloud1 = new Image;
cloud1.src ='Images/cloud1.png';
let cloud2 = new Image;
cloud2.src = 'Images/cloud2.png';
let enemy1 = new Image;
enemy1.src ='Images/enemy1.png';
let enemy2 = new Image;
enemy2.src ='Images/enemy 2.png';
let enemy3 = new Image;
enemy3.src= 'Images/enemy3.png';
let mountains = [{x: 1890,  y: 570},                             
];
let fgs = [{x: 400, y: canvas.height - 120 }
]
let sphere1 = new Image
sphere1.src = 'Images/Sphere1.png'
let sphere2 = new Image
sphere2.src ='Images/Sphere2.png'
let sphere3 = new Image
sphere3.src = 'Images/Sphere3.png'
let sphere4 = new Image
sphere4.src = 'Images/Sphere4.png'
let sphere5 = new Image
sphere5.src = 'Images/Sphere5.png'
let sphere6 = new Image
sphere6.src = 'Images/Sphere6.png'
let sphere7 = new Image
sphere7.src = 'Images/Sphere7.png'
let gokuX = 400, gokuY = 250
let incrX = 0, incrY = - 2
let isUp = false, isDown = false, isRight = false, isLeft = false;
let clouds = [{ x: 250, y: 350},{ x: 1500, y: 600}
]
let spheres = [
     {x: 1895, y: 0},
     {x: 1895, y: 15},
     {x: 1895, y: 30},
     {x: 1895, y: 60},
     {x: 1895, y: 120},
     {x: 1895, y: 240},
     {x: 1895, y: 480}
     
]

let enemies = [{x: 3500, y:95},
               {x: 500, y:650},
               
]

let intervalId = 0
let isGameOver = false;
let score = 0;
let EnemiesCollision = 0;
let isGameWin = false




function draw(){
     startAudio.play()
     startAudio.volume = 0.3 
    
     ctx.drawImage(bg, 0, 0);
      ctx.drawImage(goku, gokuX, gokuY)
     
     for (let i = 0; i < enemies.length; i++){
             ctx.drawImage( enemy1, enemies[i].x, enemies[i].y)
             ctx.drawImage( enemy2, enemies[i].x, enemies[i].y)
             
             enemies[i].x -= 9
               
             if(enemies[i].x + enemy1.width < 0){
             enemies[i] = {
                x: 1890,
                y: -Math.floor(Math.random() * enemies[i].y + enemies[i].x - 240)
            }   
            
        }
     
     }
      
     for (let i = 0; i < mountains.length; i++ ){
      
        ctx.drawImage( mountainNorth, mountains[i].x, mountains[i].y)
        mountains[i].x -= 6

        if(mountains[i].x + mountainNorth.width < 0){
            mountains[i] = {
                x: 1890,
                y: -Math.floor(Math.random() * mountainNorth.height -950)
            }
        }     // spheres[i].x === gokuX && spheres[i].y === gokuY  spheres[i].x > gokuX && spheres[i].x < (gokuX + goku.width) 
               
        if (spheres[i].x > gokuX  && spheres[i].y > gokuY && spheres[i].x < (gokuX + goku.width)) {
            spheres[i].x = -Math.floor(Math.random() * spheres[i].y + spheres[i].x - 340)
            score++
        
        }
        if(enemies[i].x > gokuX && enemies[i].y > gokuY && enemies[i].x < (gokuX + goku.width)){
            enemies[i].x = -Math.floor(Math.random() * enemies[i].y + enemies[i].x - 340)
            EnemiesCollision++       
        }
        
        
        if (score == 7){
            isGameWin = true;
            isGameOver = false
          
            
        }
        if(EnemiesCollision > 3){
            isGameOver = true;
            isGameWin = false;
            startAudio.pause()
            audiogameOverPage.play()
            



        }

    
        //if( gokuX  + goku.width >= enemies[i].x && gokuX <= enemies[i].x + enemies.width && (gokuY <= enemies[i].y + enemies.height || gokuY+goku.height >= enemies[i].y )){
          //  score--
      
     }

      for ( let c = 0 ; c < clouds.length; c++){
        ctx.drawImage(cloud1, clouds[c].x, clouds[c].y)
        ctx.drawImage(cloud2, clouds[c].x, clouds[c].y)

        if (cloud2.width || cloud1.width < 0){
            clouds[c].x -= 7

            if (clouds[c].x + cloud1.width < 0){
                clouds[c] = {
                    x: 1890,
                    y: -Math.floor(Math.random() * cloud1.height - 10)
                }
            }


        }


     }    
     
     
     if (isUp) {
         gokuY = gokuY - 4
         

     }
     
     if(isDown){
          gokuY = gokuY + 4
        
       
        }
        if(isRight){
            gokuX = + 4
        }
        if(isLeft){
            gokuX = - 4
        }
     
     
            for(let f = 0; f < fgs.length; f++){
               ctx.drawImage(fg,  fgs[f].x, fgs[f].y)
                fgs[f].x -= 3

             if(fgs[f].x + fg.width < 0){
              fgs[f] = {
                   x: 1890,
                   y: -Math.floor(Math.random() * fg.height - 875)
        }
      }

      };

            for (let i = 0; i < spheres.length; i++){
             ctx.drawImage(sphere1, spheres[i].x, spheres[i].y)
             ctx.drawImage(sphere2, spheres[i].x, spheres[i].y)
             spheres[0].x -= 0.5  
         
             if(spheres[i].x + sphere1.width < 0){
             spheres[i] = {
               x: 1890,
               y: -Math.floor(Math.random() * spheres[i].y + spheres[i].x - 340)

            } 
       } 


        }

      
        ctx.fillStyle = 'orange'
        ctx.font = 'Saiyan-Sans 73px'
        ctx.fillText(`Score: ${score}`, 250, 85)
      
        ctx.fillStyle = 'blue'
        ctx.font = 'Saiyan-Sans 73px'
        ctx.fillText(`Enemy: ${EnemiesCollision}`, 875, 85)
     

        if (isGameOver){
            cancelAnimationFrame(intervalId)
            gameOverPage.style.display = 'block'
            startPage.style.display = 'none'
            gamePage.style.display = 'none'
            gameWinningPage.style.display = 'none'
            audioGameOverPage.play()
            audioGameOverPage.volume() = 0.1
            restartBtn

        } else if (isGameWin){
            startAudio.pause()
            audioWiningPage.play()
            audioWiningPage.volume = 0.3
            audioGokuWin.play()
            cancelAnimationFrame(intervalId)
            gameWinningPage.style.display = 'block'
            startPage.style.display = 'none'
            gamePage.style.display = 'none'
            gameOverPage.style.display= 'none'
            restartBtn
            
        } else{
            intervalId = requestAnimationFrame(draw)
        }
     
};

function restart(){
    gameOverPage.style.display = 'none'
    isGameOver = false
    gameWinningPage.style.display='none'
    startPage.style.display= 'block'
    audiogameOverPage.pause()
    audioMainPage.play()
    audioMainPage.volume = 0.2
    isGameWin = false
    gokuX = 400 
    gokuY = 250
    score = 0
    EnemiesCollision = 0
    
  
   

}

function start(){
    startPage.style.display = 'none'
    startAudio.play()
    audioMainPage.pause()
    gamePage.style.display = ''
    draw()
    
}




window.addEventListener('load', ()=>{
    startPage.style.display = 'block'
    audioMainPage.play()
    audioMainPage.volume = 0.2
    gamePage.style.display = 'none'
    gameOverPage.style.display = 'none'
    gameWinningPage.style.display = 'none'
    startBtn.addEventListener('click', ()=>{
        start()
        draw()
    
    
    })
    restartBtn.addEventListener('click', ()=>{
        restart()
        
    })
   
     

    


     document.addEventListener('keydown', (event)=>{
        if(event.code == 'ArrowUp'){
            isUp = true
            isDown = false
            isRight = false
            isLeft = false
       
        }
       if(event.code == 'ArrowDown'){
            isUp = false
            isDown = true
            isRight = false
            isLeft = false
   
        }
        
   
     
     });
   
   


     document.addEventListener('keyup', (event)=>{
        isUp = false
        isDown = false

        
    }); 
   
   

})