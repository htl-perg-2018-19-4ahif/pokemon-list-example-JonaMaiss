(async function() {
    let pokemon = sessionStorage.getItem("pokemon");

    const pokedetails = await $.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);

    $('#name')[0].innerHTML = `${pokedetails.name}`;
    $('#image').attr('src',`${pokedetails.sprites.front_default}`);
    $('#weight')[0].innerHTML = `Weight: ${pokedetails.weight}`;
})();