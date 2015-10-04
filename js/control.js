/*tic-tac-toe*/
var itemAll = document.querySelectorAll('.item'); //массив player
	
function startGame() {
	for (var i = 0; i < itemAll.length; i++) {
		var currentItem = itemAll[i];

		currentItem.onclick = function() {
			
			if ( !this.classList.contains('zero-id') && !this.classList.contains('x-id')) {
				this.classList.add('zero-id');
				this.classList.remove('current');
			} else {
				return;
			}

			//массив ходов ai
			var currentAll = document.querySelectorAll('.current'); 

			var itemRandom = randomInt(0, currentAll.length - 1);

			for (var j = 0; j < currentAll.length; j++) {
				currentAll[itemRandom].classList.add('x-id');
				currentAll[itemRandom].classList.remove('current');
				//длина массива сокращается при каждом click)
			}

			checkVictory();
			checkDefeat();

			showFinal(currentAll);
		};
	}
}

function randomInt(min, max) {
	var rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
}

function checkVictory() {
	if (itemAll[0].classList.contains('zero-id') && itemAll[1].classList.contains('zero-id') && itemAll[2].classList.contains('zero-id') ) {
		return true;
	}

	if (itemAll[0].classList.contains('zero-id') && itemAll[3].classList.contains('zero-id') && itemAll[6].classList.contains('zero-id') ) {
		return true;
	}

	if (itemAll[2].classList.contains('zero-id') && itemAll[5].classList.contains('zero-id') && itemAll[8].classList.contains('zero-id') ) {
		return true;
	}

	if (itemAll[6].classList.contains('zero-id') && itemAll[7].classList.contains('zero-id') && itemAll[8].classList.contains('zero-id') ) {
		return true;
	}

	if (itemAll[1].classList.contains('zero-id') && itemAll[4].classList.contains('zero-id') && itemAll[7].classList.contains('zero-id') ) {
		return true;
	}

	if (itemAll[3].classList.contains('zero-id') && itemAll[4].classList.contains('zero-id') && itemAll[5].classList.contains('zero-id') ) {
		return true;
	}

	if (itemAll[0].classList.contains('zero-id') && itemAll[4].classList.contains('zero-id') && itemAll[8].classList.contains('zero-id') ) {
		return true;
	}

	if (itemAll[2].classList.contains('zero-id') && itemAll[4].classList.contains('zero-id') && itemAll[6].classList.contains('zero-id') ) {
		return true;
	}

}

function checkDefeat() {
	if (itemAll[0].classList.contains('x-id') && itemAll[1].classList.contains('x-id') && itemAll[2].classList.contains('x-id') ) {
		return true;
	}

	if (itemAll[0].classList.contains('x-id') && itemAll[3].classList.contains('x-id') && itemAll[6].classList.contains('x-id') ) {
		return true;
	}

	if (itemAll[2].classList.contains('x-id') && itemAll[5].classList.contains('x-id') && itemAll[8].classList.contains('x-id') ) {
		return true;
	}

	if (itemAll[6].classList.contains('x-id') && itemAll[7].classList.contains('x-id') && itemAll[8].classList.contains('x-id') ) {
		return true;
	}

	if (itemAll[1].classList.contains('x-id') && itemAll[4].classList.contains('x-id') && itemAll[7].classList.contains('x-id') ) {
		return true;
	}

	if (itemAll[3].classList.contains('x-id') && itemAll[4].classList.contains('x-id') && itemAll[5].classList.contains('x-id') ) {
		return true;
	}

	if (itemAll[0].classList.contains('x-id') && itemAll[4].classList.contains('x-id') && itemAll[8].classList.contains('x-id') ) {
		return true;
	}

	if (itemAll[2].classList.contains('x-id') && itemAll[4].classList.contains('x-id') && itemAll[6].classList.contains('x-id') ) {
		return true;
	}
}

function showFinal(arrAi) {
	if ( checkVictory() && !checkDefeat() ) {
		alert('Вы победили!');

		location.reload();
	}

	if ( checkDefeat() && !checkVictory() ) {
		alert('Вы проиграли!');

		location.reload();
	}

	if (!checkVictory() && !checkDefeat() && !arrAi.length) {
		alert('Ничья!');
		location.reload();
	}
}

startGame(); //функция запускает другие функции


var button = document.querySelector('button')