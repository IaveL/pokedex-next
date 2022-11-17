import Head from "next/head";

/*eslint-disable @next/next/no-img-element*/

export async function getServerSideProps({ params }) {
  const data = await fetch(
    `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
  );

  return {
    props: {
      pokemon: await data.json(),
    },
  };
}

export default function Details({ pokemon }) {
  console.log(pokemon);

  return (
      <div>
    <Head>
      <title>{pokemon.name}</title>
    </Head>
      <h2>{pokemon.name}</h2>
      <img
        style={{width: "10vw"}}
        alt={pokemon.name}
        src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
      />
      
    </div>
  );
}
