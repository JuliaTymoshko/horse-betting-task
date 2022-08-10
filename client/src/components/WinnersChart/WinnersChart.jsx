import classNames from 'classnames';
import styles from './winnersChart.module.scss';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Title from '../../elements/Title/Title';
import { List } from '@mui/material';

const WinnersChart = ({ winnerList, distance }) => {
  return (
    <div className={classNames(styles.winnersBlockWrapper)}>
      <Title title="Race" highlightedText="Results" />
      <List className={classNames(styles.winnersList)}>
        {winnerList.length === 0 || !winnerList ? (
          <ListItem
            className={classNames(
              'animate__animated',
              'animate__fadeInUp',
              'animate__faster'
            )}
          >
            <ListItemAvatar>
              <Avatar>
                <EmojiEventsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={'Which one is the fastest?'}
              secondary={`Race distance: ${distance} m`}
            />
          </ListItem>
        ) : (
          <div>
            {winnerList.map((winner, i) => {
              return (
                <ListItem
                  key={i}
                  className={classNames(
                    'animate__animated',
                    'animate__fadeInUp',
                    'animate__faster'
                  )}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <EmojiEventsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${i + 1} ${winner.name}`}
                    secondary={`Race distance: ${distance} m`}
                  />
                </ListItem>
              );
            })}
          </div>
        )}
      </List>
    </div>
  );
};

export default WinnersChart;
