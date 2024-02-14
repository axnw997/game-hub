import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((each) => (
        <li key={each.id}>{each.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
