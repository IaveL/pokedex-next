
export async function getStaticProps(){  

  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokedex/1/`)
      .then((response)=> {
        return response.json(); 
      })
      .then((data)=>{
        return data.pokemon_entries.slice(0, 25) 
      })
  return {
    props: {
      pokemon //seta como props (que vai ser usado no meu home) o objeto de pokemons da linha 8 em diante (data.pokemon_entries.slice(0, 25))
    }
  }
}


export default function Home({pokemon}) {


console.log(pokemon)
  // https://pokeapi.co/api/v2/pokedex/1/



  return (
    <>
      <h1>Hi!</h1>
      <ul>
        {pokemon.map(pok=> <li key={pok.entry_number}>{pok.pokemon_species.name}</li>
        )}
      </ul>
    </>
  );
}
