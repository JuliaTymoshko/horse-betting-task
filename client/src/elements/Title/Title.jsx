import classNames from 'classnames';
import styles from './title.module.scss';

const Title = ({ title, highlightedText }) => {
  return (
    <div className={classNames(styles.sectionTitle)}>
      <h2 className={classNames(styles.title)}>
        {title || 'Hello'}
        <span className={classNames(styles.highlightedText)}>
          {highlightedText || 'Title'}
        </span>
      </h2>
      <div className={classNames(styles.underline)}></div>
    </div>
  );
};

export default Title;
