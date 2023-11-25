import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
        Hello JUnjie
        <h2>Search A Song or Artist Here:</h2>
           <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for a song.." title="Type in a song"></input>
<a class="accordion-toggle" href="#content-a">
  1 - Simply Jessie by Rex Smith</a>
 class="accordion" id="content-a" 
<pre>           
<iframe width="560" height="315" src="https://www.youtube.com/embed/LOSl_y8wVgM?si=Nz1JamDfBUYysPIv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</pre>
      </div>      
  );
}

export default App;
