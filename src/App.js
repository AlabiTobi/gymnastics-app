import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs ';
import Reasons from './components/reasons/Reasons';
function App() {
  return (
    <div className="App">
    <Dashboard />
    <Programs />
    <Reasons />
    <Plans />
    </div>
  );
}

export default App;
