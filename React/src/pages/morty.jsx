import { useState, useEffect } from "react";
import CardMorty from "../components/CardMorty";

const Morty = () => {
  const apiUrl = "https://rickandmortyapi.com/api/character"; 
  const [characters, setCharacters] = useState([]); 
  const [loading, setLoading] = useState(true); 

  const fetchCharacters = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data); 
      setCharacters(data.results); 
    } catch (error) {
      console.error("Error al cargar personajes:", error);
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    fetchCharacters();
  }, []); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-center text-2xl" style={{
    color: "rgba(233, 233, 233, 0.2)", 
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", 
  }}>Personajes de Rick and Morty</h1>
      {loading ? (
        <p>Cargando personajes...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character) => (
            <CardMorty key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Morty;
