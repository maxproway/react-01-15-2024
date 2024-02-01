import classNames from "classnames";
import styles from "./styles.module.scss";

export const Tab = ({ title, id, onClick }) => {
  return (
    <div className={classNames(styles.root)} id={id} onClick={onClick}>
      {title}
    </div>
  );
};
