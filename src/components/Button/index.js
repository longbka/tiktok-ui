import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
  className,
  to,
  href,
  type,
  size,
  leftIcon,
  rightIcon,
  disabled = false,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  //Remove event listener when btn disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on')) {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  // Add class
  const classes = cx('wrapper', {
    [className]: className,
    [type]: type,
    [size]: size,
    disabled,
    leftIcon,
    rightIcon,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
