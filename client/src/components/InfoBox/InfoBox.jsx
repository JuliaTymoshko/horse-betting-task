import classNames from 'classnames';
import { Avatar, LinearProgress } from '@mui/material';
import styles from './infoBox.module.scss';

const InfoBox = ({ horseName, horseDistance, value }) => (
  <>
    <div
      className={classNames(
        styles.foundItem,
        'animate__animated',
        'animate__fadeInUp',
        'animate__faster'
      )}
    >
      <LinearProgress variant="determinate" value={value} />
      <div className={classNames(styles.wrapper)}>
        <p className={classNames(styles.title)}>{horseName}</p>
        <p className={classNames(styles.distance)}>{horseDistance}</p>
        <Avatar alt={horseName} src={horseName ? horseName : ''} />
      </div>
    </div>
  </>
);

export default InfoBox;
