import { ReactNode } from "react";
import styles from "./CurrentFolder.module.css";

interface Props {
  children?: ReactNode;
}

const CurrentFolder = ({ children }: Props) => {
  return <h2 className={styles.currentFolder}>{children}</h2>;
};

export default CurrentFolder;
