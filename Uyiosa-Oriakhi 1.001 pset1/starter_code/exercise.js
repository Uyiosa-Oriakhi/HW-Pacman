/*
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc make the PacMan bounce off the boundary at x=600px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.

*/
var exercise = {};
exercise.flag = 0; // 0 = mouth open  1 = mouth shut
exercise.increment = 20; // pixels to move either + or -


  

exercise.run = function() {
   
    exercise.img1 = document.getElementById('PacMan');
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
};

  
        
exercise.updatePosition = function() {

    

    exercise.pic = exercise.img1.src.substring(exercise.img1.src.lastIndexOf('/')+1);
    
    
    if ((exercise.pic=== 'PacMan1.png')||(exercise.pic==='PacMan2.png'))
    {
        exercise.pos.x+=exercise.increment
    }
    if ((exercise.pic==='PacMan3.png')||(exercise.pic==='PacMan4.png'))
    {
        
        exercise.pos.x+=exercise.increment
    }
    // increment exercise.pos.x by increment 
    // now set image position using img1.style.left 
    // remember images positions are "xxx.px"
    exercise.img1.style.left= exercise.pos.x+'px'
    console.log(exercise.increment)

};
exercise.chooseImage = function() {
    // choose between all 4 images
    if (exercise.increment > 0) {
        if (exercise.flag === 1) {
            exercise.img1.src='PacMan1.png'
            exercise.flag=0

        } 
        else {exercise.img1.src='PacMan2.png'
            exercise.flag=1

        }
    } 
    else if (exercise.increment < 0) {
        if (exercise.flag === 1){
            exercise.img1.src='PacMan3.png'
            exercise.flag=0
        }
        else { exercise.img1.src='PacMan4.png'
            exercise.flag=1

        }

        
    }
};
exercise.checkWallCollision = function()
{
    if (exercise.pos.x+exercise.img1.width >= 800){
        console.log(exercise.img1.src)  
        exercise.img1.src='PacMan3.png'
        exercise.increment=-exercise.increment
        console.log(exercise.img1.src)
        exercise.flag=0}
    if (exercise.pos.x<0){
        exercise.img1.src='PacMan1.png'
        exercise.increment=-exercise.increment
        exercise.flag=0

    }
        
    }
    
  

     // reset the direction of motion if wall is hit
    // you need to take into account image width


