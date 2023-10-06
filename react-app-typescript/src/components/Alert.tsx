import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-dismissible alert-primary">
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
      ></button>
      <span aria-hidden="true">&times;</span>
    </div>
  );
};

export default Alert;
