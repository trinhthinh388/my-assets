export default function Searchbar() {
  return (
    <div className="form-control w-full">
      <div className="w-full lg:w-1/2 mx-auto input-group input-group-lg relative border border-transparent rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Search…"
          className="input w-full input-bordered bg-white input-lg"
        />

        <button className="btn btn-circle btn-lg">Go</button>
      </div>
    </div>
  );
}
