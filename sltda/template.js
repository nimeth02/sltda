let search_input=document.querySelector('.searchbar-input');
let search_img=document.querySelector('.search-img-btn');
let search_img_close=document.querySelector('.search-close-img-btn');
let navitems=document.querySelector('.navitems');
let searchbar=document.querySelector('.searchbar');

//console.log(search_img)

function onopen_input() {
        search_input.style.display='inline';
        navitems.style.display='none';
       search_img.style.display='none'
       search_img_close.style.display='inline'
       searchbar.style.flex='9'
       

      
       
  
  }

  function onclose_input() {

        search_input.style.display='none';
        navitems.style.display='flex';
        search_img.style.display='inline'
        search_img_close.style.display='none'
        searchbar.style.flex='0'
    
  
  }