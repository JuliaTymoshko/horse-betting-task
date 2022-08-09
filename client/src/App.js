import './styles/index.scss';
import 'animate.css';

import RaceChart from './components/RaceChart/RaceChart';
import Sponsors from 'components/Sponsors/Sponsors';

const App = () => {
  return (
    <div className="App">
      <main className="container">
        <RaceChart />
      </main>
    </div>
  );
};

export default App;
