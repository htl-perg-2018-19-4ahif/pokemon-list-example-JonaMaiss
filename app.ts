(async function() {
    const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/');

    let html = '';
    for(const pokemon of pokelist.results) {
        html += `<li>${pokemon.name}<button type="button" onclick="location.href='details.html?id=${pokemon.name}'">Details</button></li>`
    }

    $('#pokemons')[0].innerHTML = html;
})();