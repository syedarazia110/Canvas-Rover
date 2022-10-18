canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpg","nasa_image_3.jpg",];
random_number = math.floor(math.random()*4);
console.log(random_number);
rover_width = 100;
rover_height = 90;
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgtag.src = background_image;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgtag.src = rover_image;
}

