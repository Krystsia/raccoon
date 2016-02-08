window.onload = function(){
  var count = true,
        navCollapse = document.querySelector('.navigation__navigation_visible');

    window.onresize = function(){
        count = true;
        navCollapse.style.display = window.innerWidth > 600 ?'block' : 'none';
    }
    document.querySelector('navigation-toggle').addEventListener('click',function(event){
        if(count){
            event.currentTarget.classList.add('navbar-toggle__active');
            navCollapse.style.display = 'block'
        } else{
            event.currentTarget.classList.remove('navbar-toggle__active');
            navCollapse.style.display = 'none'
        }
        
        
        count = !count;
    })
    
    
    function dropDown(classToggle, classTarget) {
        this.elementToggle = document.querySelector(classToggle);
        this.elementTarget = document.querySelector(classTarget);
    }
    dropDown.prototype.addEvents = function(){
        this.elementToggle.addEventListener('click',function(event){
            event.
        })
    }
  
    
    
////////////////////////////////////////////////////////
    
    
    window.onscroll = function(){
        var navbar = document.querySelector('.navigation'),
            header = document.querySelector('header'),
            logo = document.querySelector('.navigation__brand');
        if(window.pageYOffset > 50){
                navbar.style.cssText = 'position: fixed; top: 0; z-index: 9;';
                header.style.marginBottom = '90px';
                logo.classList.add('navigation__brand_active');
        }else{
            navbar.style.position = 'static';
            header.style.marginBottom = '50px';
            logo.classList.remove('navigation__brand_active');
        }
    }
    
    
    
    
}