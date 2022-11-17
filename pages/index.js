/*eslint-disable @next/next/no-img-element*/
import Link from "next/link"
import styles from "../styles/Home.module.css"

export async function getServerSideProps(){  

  const pokemon = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json`) 
  
  const data = await pokemon.json()       
        

  return {
    props: {
      response: data.slice(0,25)
    }
  }
}


export default function Home({response}) {

  // console.log(props);

  // https://pokeapi.co/api/v2/pokedex/1/



  return (
    <>
      <h1>Oi</h1>
      <div className={styles.container}>
        {response.map(pokemon => (
          <article key={pokemon.id} className={styles.card}>
          <Link href={`/pokemon/${pokemon.id}`}>
            <a>
              <img 
              alt={pokemon.name} 
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}/>
              <h3>{pokemon.name}</h3>
            </a>
          </Link>
          </article>
        ))}
      </div>
    </>
  );
}
