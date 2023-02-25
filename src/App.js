import './App.css';
import GitHubCard from './GitHubCard';

function App() {
  return (
    <div className="App">
      <h1>POTATOES</h1>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <GitHubCard />
      </div>
    </div>
  );
}

export default App;
