import "./App.css";

// 896886f79587dfbf74117710900da9dc

const URL_API =
  "https://api.themoviedb.org/3/movie/550?api_key=896886f79587dfbf74117710900da9dc";

fetch(URL_API)
  .then((response) => response.json())
  .then((data) => console.log(data));

function App() {
  return <div className="App">
    <h1>Movie App</h1>

  </div>;
}

export default App;
