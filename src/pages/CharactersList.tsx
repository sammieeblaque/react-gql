import { useCharacters } from "../hooks";
const CharactersList = () => {
  const { data, error, loading } = useCharacters();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An Error Occured...</div>;
  return (
    <>
      <div className="characters__list">
        {data.characters.results.map((character: any) => {
          return (
            <div key={character.id}>
              <img src={character.image} alt="photos" />
              <h2>{character.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CharactersList;
