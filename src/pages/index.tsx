import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
type Pokemon = {
  name: string;
  image: string;
};
export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const pokename = e.target.pokename.value;
        console.log(pokename);
        const citiesRef = collection(db, "pokemons");
        const q = query(citiesRef, where("name", "==", pokename));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          setPokemon({
            name: doc.data().name,
            image: doc.data().image,
          });
        });
      }}
    >
      <div className="flex border-b  mt-1">
        <button className="btn btn-primary btn-sm mb-1 ml-[1710px]">
          Cadastra-se
        </button>
        <button className="btn btn-primary btn-sm ml-2">Login</button>
      </div>

      <div className="text-center mt-52 flex flex-col items-center gap-10">
        <h1 className="text-center font-extrabold text-5xl">
          Bem vindo a Pokedex
        </h1>
        <input
          name="pokename"
          type="text"
          placeholder="Digite um Pokemon"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary">
          Enter
        </button>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>{pokemon && <img src={pokemon?.image} alt="Movie" />}</figure>
          <div className="card-body">
            <h1>Nome: {pokemon?.name}</h1>
          </div>
        </div>
      </div>
    </form>
  );
}
