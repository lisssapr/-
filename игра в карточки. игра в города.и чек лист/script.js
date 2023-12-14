"use strict"
// function generateRandomCells(numCells) {
//   let  cells = [];
//   while (cells.length < numCells) {
//       let row = Math.floor(Math.random() * 10);
//       let col = Math.floor(Math.random() * 10);
//       let cell = { row, col };
//     if (!cells.some(c => c.row === row && c.col === col)) {
//       cells.push(cell);
//     }
//   }
//   return cells;
// }

// let targetCells = generateRandomCells(10); // Генерируем случайные ячейки

// let grid = document.getElementById('grid');
// let cells = [];

// // Создаем ячейки в таблице
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//       let cell = document.createElement('div');
//     cell.classList.add('cell');
//     cell.dataset.row = i;
//     cell.dataset.col = j;
//     cell.addEventListener('click', handleClick);
//     grid.appendChild(cell);
//     cells.push(cell);
//   }
// }

// function handleClick(event) {
//   let clickedCell = event.target;
//   let clickedRow = parseInt(clickedCell.dataset.row);
//   let clickedCol = parseInt(clickedCell.dataset.col);
//   let isTarget = targetCells.some(cell => cell.row === clickedRow && cell.col === clickedCol);

//   if (isTarget) {
//     clickedCell.style.backgroundColor = 'green';
//     targetCells.splice(
//       targetCells.findIndex(cell => cell.row === clickedRow && cell.col === clickedCol),
//       1
//     );
//     if (targetCells.length === 0) {
//       alert('Поздравляем! Вы нашли все ячейки!');
//     }
//   } else {
//     clickedCell.style.backgroundColor = 'red';
//   }
// }







// // Реализация игры в города на JavaScript  2 
// let currentPlayer = 1;
// let usedCities = [];
// let outputElement = document.getElementById('output');
// let formElement = document.getElementById('gameForm');
// let cityInput = document.getElementById('cityInput');

//     function makeMove() {
//       const cityName = cityInput.value.trim();
      
//       if (cityName === '') {
//         alert('Введите название города!');
//         return;
//       }

//       if (!isValidMove(cityName)) {
//         alert('Некорректный ход! Попробуйте другой город.');
//         return;
//       }

//       usedCities.push(cityName);
//       displayGameState();
//       switchPlayer();
//       cityInput.value = '';
//     }

//     function isValidMove(cityName) {
//       if (usedCities.length === 0) {
//         return true;
//       }

//       let lastCity = usedCities[usedCities.length - 1].toLowerCase();
//       let firstLetter = lastCity[lastCity.length - 1];
//       return cityName.toLowerCase()[0] === firstLetter && !usedCities.includes(cityName);
//     }

//     function switchPlayer() {
//       currentPlayer = currentPlayer === 1 ? 2 : 1;
//     }

//     function displayGameState() {
//         let playerName = `Игрок ${currentPlayer}`;
//         let citiesList = usedCities.join(', ');
//       outputElement.textContent = `${playerName}: ${citiesList}`;
//     }




//Игра в города против робота на JavaScript




// let robotCities = ['Москва', 'Астана', 'Алматы', 'Екатеринбург', 'Гонконг', 'Гавана', 'Абу-Даби', 'Иркутск', 'Каир'];
//     let currentPlayer = 1;
//     let usedCities = [];
//     let outputElement = document.getElementById('output');
//     let formElement = document.getElementById('gameForm');
//     let cityInput = document.getElementById('cityInput');

//     function makeMove() {
//       let cityName = cityInput.value.trim();

//       if (cityName === '') {
//         alert('Введите название города!');
//         return;
//       }

//       if (!isValidMove(cityName)) {
//         alert('Некорректный ход! Попробуйте другой город.');
//         return;
//       }

//       usedCities.push(cityName);
//       displayGameState();
//       switchPlayer();
//       cityInput.value = '';

//       // Робот делает свой ход
//       let robotMove = getRobotMove();
//       usedCities.push(robotMove);
//       displayGameState();
//       switchPlayer();
//     }

//     function isValidMove(cityName) {
//       if (usedCities.length === 0) {
//         return true;
//       }

//       let lastCity = usedCities[usedCities.length - 1].toLowerCase();
//       let firstLetter = lastCity[lastCity.length - 1];

//       return (
//         cityName.toLowerCase()[0] === firstLetter &&
//         !usedCities.includes(cityName) &&
//         robotCities.includes(cityName)
//       );
//     }

//     function getRobotMove() {
//       let lastPlayerCity = usedCities[usedCities.length - 1].toLowerCase();
//       let lastLetter = lastPlayerCity[lastPlayerCity.length - 1];

//       // Робот выбирает город, начинающийся на ту букву, на которую закончился предыдущий город игрока
//       let availableCities = robotCities.filter(city => !usedCities.includes(city) && city.toLowerCase()[0] === lastLetter);

//       if (availableCities.length === 0) {
//         alert('Робот не может выбрать город. Игра завершена!');
//         // Дополнительные действия при завершении игры с роботом (например, начать новую игру)
//       }

//       // Робот выбирает случайный город из доступных
//       let randomIndex = Math.floor(Math.random() * availableCities.length);
//       return availableCities[randomIndex];
//     }

//     function switchPlayer() {
//       currentPlayer = currentPlayer === 1 ? 2 : 1;
//     }

//     function displayGameState() {
//       let playerName = currentPlayer === 1 ? 'Игрок 1' : 'Робот';
//       let citiesList = usedCities.join(', ');
//       outputElement.textContent = `${playerName}: ${citiesList}`;
//     }





// Чеклист на JavaScript и  Кнопки для удаления и завершения в чеклисте на JavaScript  Редактирование дела в чеклисте на JavaScript

let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
		
		let task = document.createElement('span');
		task.classList.add('task');
		task.textContent = this.value;
		task.addEventListener('dblclick', function() {
			let text = this.textContent;
			this.textContent = '';
			
			let edit = document.createElement('input');
			edit.value = text;
			this.appendChild(edit);
			
			let self = this;
			edit.addEventListener('keypress', function(event) {
				if (event.key == 'Enter') {
					self.textContent = this.value;
				}
			});
		});
		li.appendChild(task);
		
		let remove = document.createElement('span');
		remove.textContent = 'удалить';
		remove.classList.add('remove');
		remove.addEventListener('click', function() {
			this.parentElement.remove();
		});
		li.appendChild(remove);
		
		let mark = document.createElement('span');
		mark.textContent = 'сделано';
		mark.classList.add('mark');
		mark.addEventListener('click', function() {
			this.parentElement.classList.add('done');
		});
		li.appendChild(mark);
		
		list.appendChild(li);
		
		this.value = '';
	}
});
