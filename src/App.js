// import logo from './logo.svg';
import './App.css';
import Row from './Components/Row'
import request from './request';
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'

function App() {
  return ( 
    <div className="app">
      
      
      <Navbar></Navbar>
      
      <Banner></Banner>

      <Row title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginals} isLargeRow={true}></Row>
      <Row title="TRENDING NOW" fetchURL={request.fetchTrending}></Row>
      <Row title="TOP RATED" fetchURL={request.fetchTopRated}></Row>
      <Row title="" fetchURL={request.fetchTrending}></Row>
      <Row title="ACTION MOVIES" fetchURL={request.fetchActionMovies}></Row>
      <Row title="COMEDY MOVIES" fetchURL={request.fetchComedyMovies}></Row>
      <Row title="HORROR MOVIES" fetchURL={request.fetchHorrorMovies}></Row>
      <Row title="ROMANCE MOVIES" fetchURL={request.fetchRomanceMovies}></Row>
    </div>
  );
}

export default App;
