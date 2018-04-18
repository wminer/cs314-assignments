'use strict';
let numstringmap = {"1":"one", "2":"two", "3":"three", "4":"four", "5":"five"};
// Scrolling Part of Assignment
let btns = document.querySelectorAll("#selection .inner-content button");
for(let key in btns) {
  let btn = btns[key];
  if(!Number.isInteger(btn))  {
    btn.onclick = function(event) {
        let txt = event.target.innerHTML;
        let trgt = document.getElementById(numstringmap[txt]);
        trgt.scrollIntoView(true);
    }
  }
}

// #1
let task1 = document.querySelectorAll("#one .inner-content button");
for(let key in task1) {
  let btn = task1[key];
  if(!Number.isInteger(btn))  {
    btn.onclick = function(event) {
      let txt = event.target.innerHTML;
      let elem = document.querySelector("#one.dark-bg");
      elem.style.backgroundColor = String(txt);
    }
  }
}

// #2
let task2 = document.querySelectorAll("#two .inner-content button");
for(let key in task2) {
  let btn = task2[key];
  if(!Number.isInteger(btn))  {
    btn.onclick = function(event) {
      let txt = event.target.innerHTML;
      let txt1 = "Click for pink!";
      let txt2 = "Click for orange!";
      let elem = document.getElementById("two");
      if(txt === txt1) {
        elem.style.backgroundColor = "pink";
        event.target.innerHTML = txt2;
      } else if(txt === txt2) {
        elem.style.backgroundColor = "orange";
        event.target.innerHTML = txt1;
      }
    }
  }
}

// #3
let task3 = document.querySelector("#three .inner-content button");
let inp = document.querySelector("#three .inner-content input");
task3.onclick = function(event) {
  let txt = inp.value;
  let list = document.querySelector("#three .inner-content ul");
  list.innerHTML += "<li>" + txt + "</li>";
}

//#4
let task4 = document.querySelectorAll("#four .inner-content li");
for(let key in task4) {
  let listitem = task4[key];
  if(!Number.isInteger(listitem)) {
    listitem.onclick = function(event) {
      event.target.innerHTML = "";
    }
  }
}

//#5
let task5 = document.querySelectorAll("#five .inner-content li");
for(let key in task5) {
  let listitem = task5[key];
  if(!Number.isInteger(listitem)) {
    listitem.onclick = function(event) {
      let otheritems = document.querySelectorAll("#five .inner-content li");
      for(let keye in otheritems) {
        let currItem = otheritems[keye];
        if(currItem === event.target && !Number.isInteger(currItem)) {
          currItem.style.backgroundColor = "yellow";
        } else if(currItem !== event.target && !Number.isInteger(currItem) && typeof currItem !== 'function') {
          currItem.style.backgroundColor = "lightgray";
        }
      }
    }
  }
}
