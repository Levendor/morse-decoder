const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    function dotLetter(dots) {
		switch(dots) {
			case '.-':
				return 'a';
			case '-...':
				return 'b';
			case '-.-.':
				return 'c';
			case '-..':
				return 'd';
			case '.':
				return 'e';
			case '..-.':
				return 'f';
			case '--.':
				return 'g';
			case '....':
				return 'h';
			case '..':
				return 'i';
			case '.---':
				return 'j';
			case '-.-':
				return 'k';
			case '.-..':
				return 'l';
			case '--':
				return 'm';
			case '-.':
				return 'n';
			case '---':
				return 'o';
			case '.--.':
				return 'p';
			case '--.-':
				return 'q';
			case '.-.':
				return 'r';
			case '...':
				return 's';
			case '-':
				return 't';
			case '..-':
				return 'u';
			case '...-':
				return 'v';
			case '.--':
				return 'w';
			case '-..-':
				return 'x';
			case '-.--':
				return 'y';
			case '--..':
				return 'z';
			case '.----':
				return '1';
			case '..---':
				return '2';
			case '...--':
				return '3';
			case '....-':
				return '4';
			case '.....':
				return '5';
			case '-....':
				return '6';
			case '--...':
				return '7';
			case '---..':
				return '8';
			case '----.':
				return '9';
			case '-----':
				return '0';
			case '**********':
				return ' ';
			default:
				return;
		};
	};
	
	function digiDot(digits) {
		switch(digits) {
			case '11':
				return '-';
			case '10':
				return '.';
			case '00':
				return '';
			case '**':
				return '**';
			default:
				return '';
		};
	};
	
	let decodedPhrase = [],
			codeArray = expr.split(''),
			letter = [];
			codeLetters = [];
			morseWord = '';
			length = codeArray.length;
			
	for (let i = 0; i < codeArray.length; i += 2) {
		letter.push(codeArray[i]);
		letter.push(codeArray[i + 1]);
		if (letter.length == 14) {
			letter = letter.join('').split(' ');
			codeLetters.push(letter);
			letter = [];
			continue;
		};
		letter.push(' ');
	};
	
	codeLetters = codeLetters.map( letter => {
		return letter.reduce( (num, digits) => num + digiDot(digits), '')
	});

	codeLetters.forEach( letter => decodedPhrase.push(dotLetter(letter)));
	
	return decodedPhrase.join('');
}

module.exports = {
    decode
}