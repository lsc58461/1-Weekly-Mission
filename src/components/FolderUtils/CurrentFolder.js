import styles from "./CurrentFolder.module.css";

const CurrentFolder = ({ children }) => {
  return <h2 className={styles.currentFolder}>{children}</h2>;
};

export default CurrentFolder;
