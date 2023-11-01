import { useCallback, useEffect, useState } from "react";
import styles from "./FolderPage.module.css";
import AddLink from "../components/AddLink/AddLink";
import NavBar from "../components/NavBar/NavBar";
import Search from "../components/Search/Search";
import Footer from "../components/Footer/Footer";
import useAsync from "../hooks/useAsync";
import getUserFolders from "../api/getUserFolders";
import Category from "../components/Category/Category";
import Card from "../components/Card/Card";
import getUserLinks from "../api/getUserLinks";
import FolderUtils from "../components/FolderUtils/FolderUtils";
import FloatingAddFolder from "../components/FloatingAddFolder/FloatingAddFolder";
import Loadable from "../components/Skeleton/Loadable";
import CardListSkeleton from "../components/Skeleton/CardListSkeleton/CardListSkeleton";
import CategoryListSkeleton from "./../components/Skeleton/CategoryListSkeleton/CategoryListSkeleton";

const FolderPage = () => {
  const [userId, setUserId] = useState(null);
  const [currentFolderName, SetCurrentFolderName] = useState(undefined);
  const [folderListData, setFolderListData] = useState([]);
  const [linksListData, setLinksListData] = useState([]);
  const [selectedCategoryId, SetSelectedCategoryId] = useState("");
  const { pending: isLoadingFolderList, wrappedFunction: getFolderListAsync } = useAsync(getUserFolders);
  const { pending: isLoadingLinksList, wrappedFunction: getLinksListAsync } = useAsync(getUserLinks);

  const handleLoadFolderListData = useCallback(async () => {
    const [folderListResponseData, linksListResponseData] = await Promise.all([
      getFolderListAsync({ userId }),
      getLinksListAsync({ userId, folderId: selectedCategoryId }),
    ]);

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
        <Loadable isLoading={isLoadingFolderList} fallback={<CategoryListSkeleton size={6} />}>
          <Category
            folderListData={folderListData}
            currentFolder={SetCurrentFolderName}
            selectedCategoryId={selectedCategoryId}
            onClick={SetSelectedCategoryId}
          />
        </Loadable>
        <FolderUtils userId={userId} currentFolderName={currentFolderName} />
        <Loadable isLoading={isLoadingLinksList} fallback={<CardListSkeleton size={9} />}>
          <Card folderData={linksListData} />
        </Loadable>
        <FloatingAddFolder />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default FolderPage;
