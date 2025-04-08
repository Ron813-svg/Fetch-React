import { useState, useEffect } from "react";
import DragonBallCard from "../components/CardDragonBall";

const DragonBall = () => {
  const apiUrl = "https://dragonball-api.com/api/characters"; 
  const [characters, setCharacters] = useState([]); 
  const [loading, setLoading] = useState(true); 


  const fetchCharacters = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      setCharacters(data.items);
    } catch (erгог) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []); 
 
  return (
    <div className="bg-gray-900 ">
      <h1
  className="text-center text-2xl bg-gray-900 "
  style={{
    color: "rgba(233, 233, 233, 0.2)", 
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", 
  }}
>
  Personajes
</h1 >
      {loading ? (
        <p className="grid bg-black">Cargando personajes....</p>
      ) : (
        <div className="grid bg-gray-900  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character) => (
            <DragonBallCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};
export default DragonBall;
