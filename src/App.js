import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs ';
import Reasons from './components/reasons/Reasons';
import Testimonials  from './components/testimonials/Testimonials'

function App() {
  return (
    <div className="App">
    <Dashboard />
    <Programs />
    <Reasons />
    <Plans />
    <Testimonials />
    <Join />
    <Footer />
    </div>
  );
}

export default App;
