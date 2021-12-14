let form = document.querySelector('#form');
let input = document.querySelector('#form_input');
let submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
	e.preventDefault();
	getSearch();
});

let config = {
	headers: {
		'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
	}
}

let getSearch = async () => {
	let res = await axios.get(
		`https://www.bol.com/nl/rnwy/search-suggestions/products?query=${input.value}`, config
	);
	console.log(res);
	makeElement(res.data);
};

let makeElement = (data) => {
	for (let i = 0; i < data.suggestions.length; i++) {
		const tekst = document.createElement('P');
		tekst.append(
			'Product: ' + data.suggestions[i].label + ' ID:' + data.suggestions[i].id
		);
		document.body.append(tekst);
	}
};