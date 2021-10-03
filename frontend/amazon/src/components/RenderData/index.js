export default function RenderData({ error, isPending, data, DisplayData }) {
  return (
    <div className="popularMovies">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {data && <DisplayData data={data} />}
    </div>
  );
}
