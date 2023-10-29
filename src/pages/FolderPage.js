import { useCallback, useEffect, useState } from "react";
import styles from "../styles/FolderPage.module.css";
import AddLink from "../components/AddLink";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import useAsync from "../hooks/useAsync";
import getUserFolders from "../api/getUserFolders";
import Category from "../components/Category";
import Card from "../components/Card";
import getUserLinks from "../api/getUserLinks";
import FolderUtils from "../components/FolderUtils";

const FolderPage = () => {
  const [userId, setUserId] = useState(null);
  const [currentFolderName, SetCurrentFolderName] = useState(undefined);
  const [folderListData, setFolderListData] = useState([]);
  const [linksListData, setLinksListData] = useState([]);
  const [selectedCategoryId, SetSelectedCategoryId] = useState("");
  const [isLoadingFolderList, isLoadingLinksList, getFolderListAsync, getLinksListAsync] = useAsync(
    getUserFolders,
    getUserLinks
  );

  const handleLoadFolderListData = useCallback(async () => {
    const folderListResponseData = await getFolderListAsync({ userId });
    const linksListResponseData = await getLinksListAsync({ userId, folderId: selectedCategoryId });
    setFolderListData(folderListResponseData);
    setLinksListData(linksListResponseData);
  }, [getFolderListAsync, getLinksListAsync, selectedCategoryId, userId]);

  useEffect(() => {
    handleLoadFolderListData();
  }, [handleLoadFolderListData]);
  return (
    <>
      <header className={styles.header}>
        <NavBar userId={setUserId} />
        <AddLink />
      </header>
      <main className={styles.main}>
        <Search />
        <Category
          folderListData={folderListData}
          currentFolder={SetCurrentFolderName}
          isLoading={isLoadingFolderList}
          selectedCategoryId={selectedCategoryId}
          onclick={SetSelectedCategoryId}
        />
        <FolderUtils userId={userId} currentFolderName={currentFolderName} />
        <Card folderData={linksListData} isLoading={isLoadingLinksList} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default FolderPage;
