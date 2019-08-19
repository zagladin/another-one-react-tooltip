import * as React from 'react';
import styles from './Tooltip.module.scss';

interface Props {
  color?: 'danger' | 'inform' | 'success';
  size?: 's' | 'm' | 'l';
  position?: 'bottom' | 'top';
  delay?: number;
  animation?: string;
  children?: React.ReactNode;
  enable: boolean;
}

const Tooltip = (props: Props) => {
    return (
      <>
        {props.enable &&
        <div className={`${styles[props.position || 'bottom']} ${styles[props.color || 'inform']}`}>
          <span className={styles.content}>
            {props.children}
          </span>
        </div>
        }
      </>

    )
  }
;

export default Tooltip;
