import {
  FC,
  Fragment,
  MouseEventHandler,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from 'react';
import ReactDOM from 'react-dom';

import styles from './ModalComponent.module.css';

interface ModalComponentProps {
  children?: any;
  onClose: () => void;
}

const Backdrop = (props: {
  onClose: MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const ModalComponent: FC<ModalComponentProps> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement!
      )}
    </Fragment>
  );
};

export default ModalComponent;
