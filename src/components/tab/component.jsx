import classNames from "classnames";
import styles from "./styles.module.scss";

export const Tab = ({ title, onClick }) => {
  return (
    <div className={classNames(styles.root)} onClick={onClick}>
      {title}
    </div>
  );
};
