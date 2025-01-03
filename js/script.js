let dots = document.getElementById('dots')
let dots_menu = document.getElementById('dots_menu')
let contaner = document.getElementById('contaner')
let acount = document.getElementById('acount')
let acounts1 = document.getElementById('acounts1')
let closes = document.getElementById('close')
let manage_acounts = document.getElementById('manage_acounts')
let search_icon = document.getElementById('search_icon')
let camera = document.getElementById('camera')
let voice = document.getElementById('voice')


dots.addEventListener('click', function(){
    dots_menu.style.display= 'flex';
    acounts1.style.display= 'none';
})
acount.addEventListener('click', function(){
    acounts1.style.display= 'flex';
    dots_menu.style.display= 'none';
    
})
contaner.addEventListener('click', function(){
    acounts1.style.display= 'none';
    dots_menu.style.display= 'none';
})

closes.addEventListener('click', function(){
    acounts1.style.display= 'none';
    
})
search_icon.addEventListener('click', function(){
    alert ('Connect the Network')
})
voice.addEventListener('click', function(){
    alert ('Connect the Network')
})
camera.addEventListener('click', function(){
    alert ('Connect the Network')
})

