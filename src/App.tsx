import { useEffect, useState } from "react";
import { getAllPokemon } from "./utils/pokemon.ts";
import "./App.css";

export function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      console.log(res);
      setLoading(false);
    };
    fetchPokemonData();
  });

  return (
    <>
      {loading ? <h1>ロード中...</h1> : <h1>ポケモンデータを取得しました。</h1>}
    </>
  );
}
