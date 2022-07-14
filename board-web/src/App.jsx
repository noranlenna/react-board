import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="">

        <Link to={"/homepage"}>homepage</Link>
        <Link to={"/loginpage"}>loginpage</Link>
      </div>
    </div>
  );
}

export default App;
