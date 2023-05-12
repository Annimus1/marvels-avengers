function removeClass(itemList){
  itemList.forEach(element => {
    element.classList.remove('active');
  });
}


function main(){
  const items = Array.from(document.getElementsByClassName("box"));
  items.forEach((item)=>{
    item.addEventListener('click', (element)=>{
      removeClass(items);
      element.target.classList.add('active');
    });
  });
  
}




window.addEventListener('load',()=>{ main()})