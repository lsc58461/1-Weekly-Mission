import classNames from "classnames";
import styles from "./AddLinkButton.module.css";

const AddLinkButton = () => {
  return <button className={classNames(styles.cta, styles.ctaShort)}>추가하기</button>;
};

export default AddLinkButton;
