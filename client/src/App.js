import './styles/index.scss';
import 'animate.css';

import RaceChart from './components/RaceChart/RaceChart';
import Carousel from './components/Carousel/Carousel';
import Sponsors from './components/Sponsors/Sponsors';

const App = () => {
  return (
    <div className="App">
      <main className="container">
        <Carousel />
        <RaceChart />
        <Sponsors />
      </main>
    </div>
  );
};

export default App;
