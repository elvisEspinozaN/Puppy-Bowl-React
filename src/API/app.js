export async function fetchAllPlayers() {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2411/players/"
    );
    const data = await response.json();
    return data.data.players;
  } catch (e) {
    console.error("Error fetching players: ", e);
    throw error;
  }
}

export async function fetchSinglePlayer(id) {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2411/players/${id}`
    );
    const data = await response.json();
    return data.data.player;
  } catch (e) {
    console.error("Error fetching player: ", e);
    throw error;
  }
}
