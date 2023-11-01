import styles from "./FolderUtils.module.css";
import CurrentFolder from "./CurrentFolder";
import FolderEdit from "./FolderEdit";

const FolderUtils = ({ userId, currentFolderName = "전체" }) => {
  if (!userId) return;

  return (
    <div className={styles.folderUtils}>
      <div className={styles.container}>
        <CurrentFolder>{currentFolderName}</CurrentFolder>
        {currentFolderName !== "전체" && <FolderEdit />}
      </div>
    </div>
  );
};

export default FolderUtils;
