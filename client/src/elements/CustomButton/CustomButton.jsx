import classNames from 'classnames';
import styles from './customButton.module.scss';

const CustomButton = ({ buttonText, onClickHandler, type, disabled }) => {
  return (
    <button
      type={type || 'text'}
      className={classNames(styles.customButton)}
      onClick={onClickHandler}
      disabled={disabled || false}
    >
      {buttonText || 'Button :)'}
    </button>
  );
};

export default CustomButton;
