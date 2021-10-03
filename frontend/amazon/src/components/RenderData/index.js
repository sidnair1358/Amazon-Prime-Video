export default function RenderData({
  error,
  isPending,
  data,
  DisplayData,
  handleHover,
}) {
  return (
    <div className="popularMovies">
      <div>{}</div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {data && <DisplayData data={data} handleHover={handleHover} />}
    </div>
  );
}
