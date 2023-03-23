// Sidebar coding

// variables selection
const button=document.getElementById('btn');
const SideContent=document.getElementsByClassName('Sidebar')
const Sidemenu=document.getElementById('sidebar')
const mobSide=document.getElementsByClassName('sidemenus')
const mobBtn=document.getElementById('mobileButton')

var windowWidth;
window.onresize=onload=()=>{
  windowWidth=this.innerWidth
  Sidebar(windowWidth)
}
function Sidebar(windowWidth){
  if(windowWidth < 1000){
    Sidemenu.style.height='5%'
    Sidemenu.style.width='100%'
    for(i=0;i<mobSide.length;i++){
      mobSide[i].style.display='none'
    }
    for(i=0;i<SideContent.length;i++){
      SideContent[i].style.display='inline';
    }
    
    mobBtn.addEventListener('click',mobilescreen)

  }
  else{
    Sidemenu.style.width='5%';
    Sidemenu.style.height='100%';
    for(i=0;i<SideContent.length;i++){
      SideContent[i].style.display='none';
    }
    for(i=0;i<mobSide.length;i++){
      mobSide[i].style.display='inline'
    }
    button.addEventListener('click',lapscreen)
  }

}
function mobilescreen(){
  if(Sidemenu.style.height==='5%'){
    Sidemenu.style.height='100%';
    for(i=0;i<mobSide.length;i++){
      mobSide[i].style.display='inline'
    }
  }
  else{
    Sidemenu.style.height='5%'
    for(i=0;i<mobSide.length;i++){
      mobSide[i].style.display='none'
    }
  }
}
function lapscreen(){
  if( Sidemenu.style.width==='5%'){
    Sidemenu.style.width='20%';
    for(i=0;i<SideContent.length;i++){
      SideContent[i].style.display='inline';
    }
  }
  else{
    Sidemenu.style.width='5%'
    for(i=0;i<SideContent.length;i++){
      SideContent[i].style.display='none';
    }
  }
}