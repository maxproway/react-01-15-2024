import { Size } from "../../constants/sizes";
import { ButtonViewVariant } from "./constant.js";
import styles from "./styles.module.scss";
import classNames from "classnames";

const SizeClass = {
  [Size.s]: styles.s,
  [Size.m]: styles.m,
  [Size.l]: styles.l,
};

export const Button = ({
  className,
  onClick,
  disabled,
  children,
  size = Size.m,
  viewVariant = ButtonViewVariant.primary,
}) => {
  return (
    <button
      className={classNames(styles.root, className, SizeClass[size], styles[viewVariant])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
