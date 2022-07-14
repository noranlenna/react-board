import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="">

          <nav>
            <Link to={"/home"}>
              <button type='button'>홈</button></Link>
            <Link to={"/board"}>
              <button type='button'>게시판</button></Link>
            <Link to={"/login"}>
              <button type='button'>로그인</button></Link>
          </nav>
          <Outlet/>
      </div>
    </div>
  );
}

export default App;
