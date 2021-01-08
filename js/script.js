const container = document.querySelector('.container');
const redButton =  document.querySelector('.redButton');
const blueButton =  document.querySelector('.blueButton');
let colorPicker = document.querySelector('#favcolor');
const randomButton = document.querySelector('.randomButton');
const reset = document.querySelector('.reset');
const slider = document.querySelector('.slider');
let output = document.querySelector('#gridSize');
let event;
let color;
let gridCount = 16;

output.innerHTML = slider.value;

slider.oninput = function() {
	let gridDivs = document.querySelectorAll('.grid');
	gridDivs.forEach(gridDiv => gridDiv.remove());
  	output.innerHTML = this.value;
  	//createGrid(parseInt(this.value));
  	createGrid(slider.value);
}

redButton.addEventListener('click', function(e){
	return event = e.target.dataset.color;
});

blueButton.addEventListener('click', function(e){
	return event = e.target.dataset.color;
});

colorPicker.addEventListener('change', function(e){
	return event = e.target.value;
});

randomButton.addEventListener('click', function(e){
	return event = e.target.dataset.color;
});

reset.addEventListener('click', resetColor);

function createGrid(gridNumber){
	let gridArea = gridNumber * gridNumber;
	for(let i = 0; i < gridArea; i++ ){
		const div = document.createElement('div');
		div.addEventListener('mouseover', changeColor);
		container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
		container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
		container.appendChild(div);
		div.classList.add('grid');
	}
}

function changeColor(){
	this.style.backgroundColor = "grey";

	if(event == 'red'){
		this.style.backgroundColor = "red";
	}else if(event == 'blue'){
		this.style.backgroundColor = "blue";
	}else if(event == 'random'){
		color = Math.floor(Math.random()*16777215).toString(16);
		this.style.backgroundColor = "#"+color;
	}else if (event == event){
		this.style.backgroundColor = event;
	}
}



function resetColor(){
	let gridDivs = document.querySelectorAll('.grid');
	gridDivs.forEach(gridDiv => gridDiv.style.backgroundColor = '#ffffff');
}

createGrid(gridCount);