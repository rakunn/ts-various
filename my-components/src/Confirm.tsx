import * as React from 'react';
import './Confirm.css';

interface IProps {
  open: boolean,
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

const Confirm: React.FunctionComponent<IProps> = (props) => {

  const [cancelClickCount, setCancelClickCount] = React.useState(0);

  React.useEffect(
    () => {
    console.log("first render confirm");
    return () => {
      console.log("unmounted");
    }
  },
    []
  ); // determine when to run this func - array of values to subscribe

  const handleOkClick = () => {
    props.onOkClick();
  };

  const handleCancelClick = () => {
    const newCount = cancelClickCount + 1;
    setCancelClickCount(newCount);
    if (newCount >= 2) {
      props.onCancelClick();
    }
  };

  return (
    <div className={
      props.open
        ? 'confirm-wrapper confirm-visible'
        : 'confirm-wrapper'
    }
    >
      <div className="confirm-container">
        <div className="confirm-title-container">
          <span>{props.title}</span>
        </div>
        <div className="confirm-content-container">
          <p>{props.content}</p>
        </div>
        <div className="confirm-buttons-container">
            <button onClick={handleCancelClick} className="confirm-cancel">
              { cancelClickCount === 0 ? props.cancelCaption : 'Really?' }
            </button>
          <button onClick={handleOkClick} className="confirm-ok">{props.okCaption}</button>
        </div>
      </div>
    </div>
  );
};

Confirm.defaultProps = {
  cancelCaption: "Cancel",
  okCaption: "Okay"
};

const ConfirmMemo = React.memo(Confirm);

export default ConfirmMemo;
