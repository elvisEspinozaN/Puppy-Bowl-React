import React, { useEffect, useState } from "react";
import styles from "../styles/SinglePlayer.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePlayer } from "../API/app";

function SinglePlayer() {
  const { id } = useParams(); // single player id
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayer() {
      try {
        setLoading(true);
        const player = await fetchSinglePlayer(id);
        setPlayer(player);
        setError(null);
      } catch (e) {
        setError("Failed to load player.");
      } finally {
        setLoading(false);
      }
    }

    getPlayer();
  }, [id]);

  if (loading) {
    return <p>Loading player...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!player) {
    return <p>Player Not found.</p>;
  }

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        &larr; Back to Players
      </button>

      <div className={styles.playerCard}>
        <div className={styles.imageContainer}>
          <img src={player.imageUrl} alt={player.name} />
          <span
            className={`${styles.status} ${
              player.status === "field" ? styles.field : styles.bench
            }`}
          >
            {player.status}
          </span>
        </div>

        <div className={styles.details}>
          <h2>{player.name}</h2>
          <div className={styles.data}>
            <p>
              <strong>Breed:</strong> {player.breed}
            </p>
            <p>
              <strong>Team:</strong> {player.team.name || "N o Team"}
            </p>
            <p>
              <strong>Team Score:</strong> {player.team.score}
            </p>
            <p>
              <strong>Teammates:</strong> {player.team.players.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePlayer;
