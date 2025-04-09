import React from "react";

const DragonBallCard = ({ character }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4"
      style={{
        maxWidth: "320px",
        margin: "1.5rem auto",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#1A202C", 
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
      }}
    >
      <img
        className="h-64 object-cover mx-auto"
        src={character.image}
        alt={character.name}
        style={{
          height: "220px",
          objectFit: "cover",
          margin: "auto",
          borderBottom: "1px solid #2D3748", 
          transition: "filter 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(85%)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(100%)")}
      />
      <div className="px-6 py-4" style={{ padding: "1rem 1.5rem" }}>
        <h2
          className="font-bold text-xl mb-2"
          style={{
            fontSize: "1.5rem",
            color: "#E2E8F0", 
            marginBottom: "0.8rem",
          }}
        >
          {character.name}
        </h2>
        <p
          className="text-sm mb-4"
          style={{
            fontSize: "0.9rem",
            color: "#A0AEC0", 
            marginBottom: "1rem",
          }}
        >
          {character.description}
        </p>
        <div style={{ color: "#CBD5E0", fontSize: "0.9rem" }}>
          <p>
            <span
              style={{
                fontWeight: "bold",
                color: "#63B3ED",
              }}
            >
              Raza:
            </span>{" "}
            {character.race}
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
                color: "#63B3ED",
              }}
            >
              Genero:
            </span>{" "}
            {character.gender}
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
                color: "#63B3ED",
              }}
            >
              Ki:
            </span>{" "}
            {character.ki}
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
                color: "#63B3ED",
              }}
            >
              Ki Maximo:
            </span>{" "}
            {character.maxKi}
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
                color: "#63B3ED",
              }}
            >
              Afiliación:
            </span>{" "}
            {character.affiliation}
          </p>
        </div>
      </div>
    </div>
  );
};
export default DragonBallCard;
