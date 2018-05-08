'use strict';

let cntrcontainer = document.getElementById('center-container');
cntrcontainer.id = "quotecontainer";

let arr = ["1", "2", "3", "5", "10", "15"];

let apiHeader = document.createElement("h1");
apiHeader.innerHTML = "Inpsirational Quotes (by Ron Swanson)";
cntrcontainer.appendChild(apiHeader);



let selectList = document.createElement("select");
selectList.id = "quoteSelect";
cntrcontainer.appendChild(selectList);

for(let i = 0;i < arr.length;i++) {
  let option = document.createElement("option");
  option.value = arr[i];
  option.text = arr[i];
  selectList.appendChild(option);
}

let submitdiv = document.createElement("div");
submitdiv.id = "submitdiv";

let quoteBtn = document.createElement("input");
quoteBtn.type = "submit";
quoteBtn.value = "Get Quote(s)"
quoteBtn.id = "get-quote";
submitdiv.appendChild(quoteBtn);
cntrcontainer.appendChild(submitdiv);

let quoteDiv = document.createElement("div");

function* quoteGenerator() {
  let link = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
	while (true) {
		yield fetch(link)
    		.then(res => res.json());
 	}
}

const generator = quoteGenerator();

function getQuote() {
  quoteBtn.disabled = true;

  let val = selectList.options[selectList.selectedIndex].text;
  for(let i = 0; i < val;i++) {
    generator.next().value.then(function (data) {
      let quoteElem = document.createElement("h1");
  		quoteElem.innerHTML = `"${data[0]}"`;
      quoteDiv.appendChild(quoteElem);
      document.getElementById("quotecontainer").appendChild(quoteDiv);
      quoteBtn.disabled = false;
  	});
  }
}

quoteBtn.onclick = getQuote;

getQuote();
