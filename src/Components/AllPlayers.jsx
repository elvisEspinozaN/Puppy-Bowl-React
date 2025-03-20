import React, { useEffect, useState } from "react";
import style from "../styles/AllPlayers.module.css";
import { fetchAllPlayers } from "../API/app";
import { Link } from "react-router-dom";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPlayers() {
      try {
        const playersData = await fetchAllPlayers();
        setPlayers(playersData);
        setError(null);
      } catch (E) {
        setError("Failed to load players. Please try again later.");
        console.error("Error fetching players: ", E);
      } finally {
        setLoading(false);
      }
    }

    getPlayers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div className={style.error}>{error}</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.title}>Puppy Bowl Roster</h1>
      </div>
      <div className={style.grid}>
        {players.map((player) => (
          <div key={player.id} className={style.playerCard}>
            <Link to={`/players/${player.id}`} className={style.playerLink}>
              <div className={style.imageContainer}>
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className={style.playerImage}
                />
                <span className={style.playerStatus}>{player.status}</span>
              </div>
              <div className={style.playerCard}>
                <h3 className={style.playerName}>{player.name}</h3>
                <p className={style.playerBreed}>{player.breed}</p>
                <div className={style.playerDetailsButton}>View Details</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPlayers;
