export async function fetchAllPlayers() {
  const response = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/2411/players/"
  );
  const data = await response.json();
  return data.data.players;
}
