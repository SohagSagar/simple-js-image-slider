let imageArray=['image-1.jpg','image-2.jpg','image-3.jpg','image-4.jpg','image-5.jpg','image-6.jpg','image-7.jpg','image-8.jpg','image-9.jpg','image-10.jpg'];


let number=0;
setInterval(()=>{
    if(number>9){
        number=0;
    }
    const imageCounter= imageArray[number];
    const imgUrl=document.getElementById('imageSlider');
    imgUrl.setAttribute("src", 'images/'+imageCounter);
    number++;
},1000)