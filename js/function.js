// Dom elements:

// text area and drop down menu
var textBox = document.querySelector(".nameText");
var drop = document.querySelector(".dropbtn");
// registation elements
var regDisplayElemCA = document.querySelector(".display-reg-CA")
var regDisplayElemCY = document.querySelector(".display-reg-CY")
var regDisplayElemCL = document.querySelector(".display-reg-CL")
// Add and remove elements
console.log(drop)
var addIt = document.querySelector(".button-primary.add")
console.log(addIt)
var clearIt = document.querySelector(".button-primary.remove")
// error messages
console.log(clearIt)
var error1Elem = document.querySelector(".error1")
var error2Elem = document.querySelector(".error2")
// count element
var countElem = document.querySelector(".totalCount")


function functionality(data){
	var local = data || {}
	var count = 0
	var reg = ""

// How do we use this code. Explain this code.
	function regNumber(num){
		if(local[num] === undefined && num.startsWith("CY") || num.startsWith("CA") || num.startsWith("CL")){
			num = reg
			local[reg] = 0;
			return true;
		}
		return false
	}

	function regGet(){
		return reg;
	}


	function mapping(){
		if(local[reg.toUpperCase()] ===  undefined){
			local[reg] = 0
		}
	}

	function returnMap(){
		return local
	}
	function clearMe(){
		local = {}

	}
	function counter(){
		return Object.keys(local).length
	}

	return{
		reg: regNumber,
		getReg: regGet,
		count: counter,
		map: mapping,
		retMap: returnMap,
		clear: clearMe 
	}
}








clearIt.addEventListener('click', clear)
addIt.addEventListener('click', add)


// Local Storage
var storedObjects = localStorage.getItem('registration') ? JSON.parse(localStorage.getItem('registration')) : {};
var regNumbers = functionality(storedObjects);

function add(){
	var textVal = textBox.value
	// regDisplayElemCA.innerHTML = regNumbers.reg(textVal)
	// regDisplayElemCJ.innerHTML = regNumbers.reg(textVal)
	// regDisplayElemCY.innerHTML = regNumbers.reg(textVal)


	if(textVal == undefined || textVal ==""){
		return error1Elem.innerHTML = "Please enter registration number"
	}

	// else if (
	// 	return error2Elem.innerHTML = "Incorrect registration number"
	// }
	var townSelect = document.querySelector(".dropdown");
	if(townSelect){
		var townBtn = townSelect.value
	}
	// Update local map
	regNumbers.map()
	//update local storage
	localStorage.setItem('registrations', JSON.stringify(regNumbers.retMap()));
	//COunt
	countElem.innerHTML = "Count:" + "" + "" + regNumbers.count();
}

function clear(){
	regNumbers.clear();
	localStorage.clear();
	location.reload();
}
