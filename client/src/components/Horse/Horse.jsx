import classNames from 'classnames';
import { Avatar, LinearProgress } from '@mui/material';
import styles from './horse.module.scss';

const Horse = ({ horseName, horseDistance, value }) => (
  <div
    className={classNames(
      'animate__animated',
      'animate__fadeInUp',
      'animate__faster'
    )}
  >
    <LinearProgress variant="determinate" value={value} />
    <div className={classNames(styles.horseWrapper)}>
      <p className={classNames(styles.horseName)}>{horseName}</p>
      <p className={classNames(styles.horseDistance)}>{horseDistance}</p>
      <Avatar alt={horseName} src={horseName ? horseName : ''} />
    </div>
  </div>
);

export default Horse;
