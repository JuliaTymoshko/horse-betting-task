import { Component } from 'react';
import classNames from 'classnames';
import styles from './RaceChart.module.scss';
import { io } from 'socket.io-client';

import Horse from '../Horse/Horse';
import CustomButton from './../../elements/CustomButton/CustomButton';
import Title from './../../elements/Title/Title';

import WinnersChart from '../WinnersChart/WinnersChart';

const ENDPOINT = 'http://localhost:3002';
const TOTAL_DISTANCE = 1000;

class RaceChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horses: [],
      finishedHorses: [],
      inProgress: false,
      socket: null,
    };
  }

  setHorses(horses) {
    this.setState((state, props) => {
      return { ...state, horses: horses };
    });
  }
  setFinishedHorses(horses) {
    this.setState((state, props) => {
      return { ...state, finishedHorses: horses };
    });
  }
  setSocket(socket) {
    this.setState((state, props) => {
      return { ...state, socket: socket };
    });
  }
  setInProgress(inProgress) {
    this.setState((state, props) => {
      return { ...state, inProgress: inProgress };
    });
  }

  handleTicker(data) {
    let { inProgress, finishedHorses, horses } = this.state;

    if (!inProgress) {
      return;
    }

    console.log('Socket: ticker', data);

    let fHorses = data.filter((horse) => horse.distance === TOTAL_DISTANCE);
    let isFinished = data.length === finishedHorses.length;

    this.setHorses([...data]);
    fHorses.forEach((horse) => {
      if (!finishedHorses.find((h) => h.name === horse.name)) {
        finishedHorses.push(horse);
      }
      this.setFinishedHorses(finishedHorses);
    });

    if (isFinished) {
      this.finishRace();
    }
  }

  startRace() {
    let socket = io(ENDPOINT);
    this.setSocket(socket);
    this.setFinishedHorses([]);
    this.setHorses([]);

    socket.on('connect', () => {
      console.log('Socket: connect');
      this.setInProgress(true);
      socket.emit('start');
    });

    socket.on('ticker', this.handleTicker.bind(this));

    socket.on('disconnect', (reason) => {
      console.log('Socket: disconnect', reason);
      this.setSocket(null);
    });
  }

  finishRace() {
    const { socket } = this.state;

    if (socket) {
      socket.disconnect();
    }

    this.setHorses([]);
    this.setInProgress(false);
  }

  componentWillUnmount() {
    this.finishRace();
  }

  render() {
    const { finishedHorses, horses, inProgress } = this.state;

    const normalise = (value) => ((value - 0) * 100) / (TOTAL_DISTANCE - 0);

    return (
      <section>
        <WinnersChart winnerList={finishedHorses} distance={TOTAL_DISTANCE} />

        <div className={classNames(styles.runningHorsesList)}>
          <CustomButton
            onClickHandler={this.startRace.bind(this)}
            buttonText="Start Race"
            disabled={inProgress}
          />

          {horses.map((horse, i) => {
            return (
              <Horse
                key={i}
                horseName={horse.name}
                horseDistance={horse.distance}
                value={normalise(horse.distance)}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default RaceChart;
