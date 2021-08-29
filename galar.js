const poke_container = document.getElementById('poke_container');
const pokemons_number = 898;
const colors = {
	Normal: '#d1d0a4',
	Fire: '#d66214',
	Water: '#6b96f1',
	Electric: '#eedf89e8',
	Grass: '#7AC74C',
	Ice: '#96D9D6',
	Fighting: '#C22E28',
	Poison: '#A33EA1',
	Ground: '#5c4e3afa',
	Flying: '#A98FF3',
	Psychic: '#F95587',
	Bug: '#798611de',
	Rock: '#57542aec',
	Ghost: '#735797',
	Dragon: '#6F35FC',
	Dark: '#67656def',
	Steel: '#B7B7CE',
	Fairy: '#D685AD'
};

const TypeIcons = {
	Normal: 'NormalIcon.svg',
	Fire: 'FireIcon.svg',
	Water: 'WaterIcon.svg',
	Electric: 'ElectricIcon.svg',
	Grass: 'GrassIcon.svg',
	Ice: 'IceIcon.svg',
	Fighting: 'FightingIcon.svg',
	Poison: 'PoisonIcon.svg',
	Ground: 'GroundIcon.svg',
	Flying: 'FlyingIcon.svg',
	Psychic: 'PsychicIcon.svg',
	Bug: 'BugIcon.svg',
	Rock: 'RockIcon.svg',
	Ghost: 'GhostIcon.svg',
	Dragon: 'DragonIcon.svg',
	Dark: 'DarkIcon.svg',
	Steel: 'SteelIcon.svg',
	Fairy: 'FairyIcon.svg'
};

const fetchPokemons = async () => {
	for (let i = 810; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const id = pokemon.id.toString().padStart(3, '0')
	const poke_types = pokemon.types.map(type => type.type.name[0].toUpperCase()+type.type.name.slice(1));
    const ptype = poke_types[0];
    const stype = new Array(poke_types[1]).filter(item => item != undefined);
	const color = colors[ptype];
    const icon1 = new Array(TypeIcons[ptype]);
    const icon2 = new Array(TypeIcons[stype]).filter(item => item != undefined);
	const height = pokemon.height/10;
	const weight = pokemon.weight/10;
	const moves = pokemon.moves.map(move=> move.move.name[0].toUpperCase()+move.move.name.slice(1)).join(", ");
	const ability = pokemon.abilities.map(ability=> ability.ability.name[0].toUpperCase()+ability.ability.name.slice(1)).join(", ");

	pokemonEl.style.backgroundColor = color;

	const pokeInnerHTML = `
        <div class="img-container" align="center">
			<a href="https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)">
				<img src="https://assets.pokemon.com//assets/cms2/img/pokedex/detail/${id}.png" alt="${name} front image" />
			</a>
        </div>
        <div class="info" align="center">
            <span class="number"><i>#${id}</i></span>
            <h3 class="name">${name}</h3>
            <small class="type">
				<b>Type: </b>
				<table align="center">
					<tr>
						<td align="left">${ptype}</td>
						<td><img class="primary-icon" src="${icon1}" alt="${ptype} icon image" width="20"/></td>
					</tr>
					<tr>
						<td align="left">${stype}</td>
						<td><img class="secondary-icon" src="${icon2}" width="20"/></td>
					</tr>
				</table>
			</small>
			<small>
				<span><B>Height: ${height} m</B></span>
				<br>
				<span><B>Weight: ${weight} kg</B></span>
			</small>
			<br>
			<br>
			<small>
				<details>
					<summary><B>Moves</B></summary>
					<p>${moves}</p>
				</details>
				<br>
				<details>
					<summary><B>Abilities</B></summary>
					<p>${ability}</p>
				</details>
			</small>
        </div>
    `;
	pokemonEl.innerHTML = pokeInnerHTML;
	poke_container.appendChild(pokemonEl);
}

fetchPokemons();