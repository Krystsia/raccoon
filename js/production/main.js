window.onload = function(){
    window.onscroll = function(){
        var navbar = document.querySelector('.navbar'),
            header = document.querySelector('header');
        if(window.pageYOffset > 50){
                navbar.style.cssText = 'position: fixed; top: 0;';
                header.style.marginBottom = '150px';
        }else{
            navbar.style.position = 'static';
            header.style.marginBottom = '50px';
        }
    }
}
var hello = 'It\'s my favorite';