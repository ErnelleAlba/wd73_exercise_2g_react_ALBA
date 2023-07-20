import PokemonCard from "./PokemonCard";
import ProductItem from "./PokemonCard"

function MainComponent () {
  const pokemons = [
    {
      id: 1,
      name: 'Bulbasaur',
      type: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/b/bf/Grass_big.png?width=1920',
      type_2: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/5/50/Poison_big.png?width=1920',
      hp:	45,
      attack:	49,	
      defense: 49,	
      sp_atk: 65,	
      sp_def:	65,	
      speed: 45,
      image_url: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/6/60/Pokemans_001.gif?width=1920'
    },
    {
      id: 2,
      name: 'Ivysaur',
      type: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/b/bf/Grass_big.png?width=1920',
      type_2: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/5/50/Poison_big.png?width=1920',
      hp:	60,
      attack:	62,	
      defense: 63,	
      sp_atk: 80,	
      sp_def:	80,	
      speed: 60,
      image_url: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/2/24/Pokemans_002.gif?width=1920'
    },
    {
      id: 3,
      name: 'Venusaur',
      type: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/b/bf/Grass_big.png?width=1920',
      type_2: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/5/50/Poison_big.png?width=1920',
      hp:	80,
      attack:	82,	
      defense: 83,	
      sp_atk: 100,	
      sp_def:	100,	
      speed: 80,
      image_url:'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/3/38/Pokemans_003.gif?width=1920'
    },
    {
      id: 4,
      name: 'Charmander',
      type: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/9/95/Fire_big.png?width=1920',
      type_2: '',
      hp:	39,
      attack:	52,	
      defense: 43,	
      sp_atk: 60,	
      sp_def:	50,	
      speed: 65,
      image_url:'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/1/12/Pokemans_004.gif?width=1920'
    },
    {
      id: 5,
      name: 'Charmeleon',
      type: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/9/95/Fire_big.png?width=1920',
      type_2: '',
      hp:	58,
      attack:	64,	
      defense: 58,	
      sp_atk: 80,	
      sp_def:	65,	
      speed: 80,
      image_url:'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/4/40/Pokemans_005.gif?width=1920'
    },
    {
      id: 6,
      name: 'Charizard',
      type: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/9/95/Fire_big.png?width=1920',
      type_2: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/a/ae/Flying_big.png?width=325',
      hp:	78,
      attack:	84,	
      defense: 78,	
      sp_atk: 109,	
      sp_def:	85,	
      speed: 100,
      image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nL5eac-hNXxsFltNSpln_G5GLQ72yH-Fz7yLWLKOi5XLGfJOjf0MhNVe3dPxB08JSlI&usqp=CAU'
    },
    {
      id: 7,
      name: 'Squirtle',
      type: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/9/9d/Water_big.png?width=1920',
      type_2: '',
      hp:	44,
      attack:	48,	
      defense: 65,	
      sp_atk: 50,	
      sp_def:	64,	
      speed: 43,
      image_url:'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/d/da/Pokemans_007.gif'
    },
    {
      id: 8,
      name: 'Wartortle',
      type: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/9/9d/Water_big.png?width=1920',
      type_2: '',
      hp:	59,
      attack:	63,	
      defense: 80,	
      sp_atk: 65,	
      sp_def:	80,	
      speed: 59,
      image_url:'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/f/f7/Pokemans_008.gif'
    },
    {
      id: 9,
      name: 'Blastoise',
      type: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/9/9d/Water_big.png?width=1920r',
      type_2: '',
      hp:	79,
      attack:	83,	
      defense: 100,	
      sp_atk: 85,	
      sp_def:	105,	
      speed: 78,
      image_url:'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/8/8b/Pokemans_009.gif?width=325'
    }
  ]

  const pokemonCardList = pokemons.map(
    (pokemon) => <PokemonCard pokemon={pokemon}/>
  );

  return (
    <>
      <div className="container d-flex flex-wrap justify-content-center">
        {pokemonCardList}
      </div>   
    </>
  )
}

export default MainComponent