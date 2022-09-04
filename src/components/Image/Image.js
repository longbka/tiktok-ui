import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
function Image({ className, src, alt, fallBack: customFallBack = images.noImage, ...props }, ref) {
  const [fallBack, setFallBack] = useState('');
  const handleErr = () => {
    setFallBack(customFallBack);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      {...props}
      ref={ref}
      src={fallBack || src}
      onError={handleErr}
      alt={alt}
    />
  );
}

export default forwardRef(Image);
