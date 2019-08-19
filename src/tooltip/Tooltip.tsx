import * as React from 'react';
import styles from './Tooltip.module.css';

interface Props {
  color?: string;
  size?: string;
  position?: string;
  delay?: number;
  animation?: string;
  children?: React.ReactNode;
  enable: boolean;
}

const Tooltip = (props: Props) => {
    return (
      <>
        {props.enable &&
        <div className={styles.wrapper}>
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
