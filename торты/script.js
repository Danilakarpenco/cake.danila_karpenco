let img = document.querySelector("#img");
let Arrimg = ["img/4c5eecd5e679f4ce05c271e092d48bcd.webp","img/79c48ad57161d0235ad11bf5e990cbce.webp","img/a38a65b38ad441e56213b611ccc71b2c.webp","img/a56ed61c34323bd384d31c8dfb9f6ef7.webp","img/e976a02cb4a1f356608a595fd0caae94.webp","img/ea3e2e3208b793085ced52d777bde53e.webp"];
let numderInd = 0;



function slider(num){
    numderInd += num;
    if (numderInd >= Arrimg.length){
        numderInd = 0;
    }else if (numderInd < 0){
        numderInd = Arrimg.length - 1;
    }
    img.src = Arrimg[numderInd];
    return 0;
}



/*let list = document.querySelectorAll("#list");

list.forEach(function(item){
    item.addEventListener("click", function(){
let currentBtn = item;
let tabId = currentBtn.getAttribute("data-tab")
let currentTab = document.querySelector(tabId);


list.forEach(function(item){
    item.classList.remove('active')
});


currentBtn.classList.add('active');
currentTab.classList.add("active")
    });
});

*/

let jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      let id = this.getAttribute('data-tab'),
          content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.js-tab-trigger.active'),
          activeContent = document.querySelector('.js-tab-content.active');
      
      activeTrigger.classList.remove('active');
      trigger.classList.add('active');
      
      activeContent.classList.remove('active');
      content.classList.add('active');
   });
});
