const Search = ({Search, setSearch}) => {
  return (
    <div className="search">
        <h2>Pesquisar:</h2>
        <input type="text" value={Search} onChange={(e)=> setSearch(e.target.value)}/>
    </div>
  )
}

export default Search
