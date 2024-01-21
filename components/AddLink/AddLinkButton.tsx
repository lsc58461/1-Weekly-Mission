import classNames from "classnames";
import styles from "./AddLinkButton.module.css";
import ModalContainer from "../Modal/ModalContainer/ModalContainer";
import useModal from "@/hooks/useModal";
import AddLinkModalContent from "../Modal/AddLinkModalContent/AddLinkModalContent";
import isValidURL from "@/utils/isValidURL";
import { UserFolders } from "@/@types/folder.types";

interface Props {
  inputValue: string;
  folderListData?: UserFolders[];
}

function AddLinkButton({ inputValue, folderListData }: Props) {
  const { isOpenModal, openModal, closeModal } = useModal(false);

  const handleOpenModal = () => {
    if (!inputValue) return;
    if (!isValidURL(inputValue)) return;
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <>
      {isOpenModal && folderListData && folderListData.length > 0 && (
        <ModalContainer onClose={handleCloseModal}>
          <AddLinkModalContent
            inputValue={inputValue}
            folderListData={folderListData}
            onClose={handleCloseModal}
          />
        </ModalContainer>
      )}
      <button
        className={classNames(styles.cta, styles.ctaShort)}
        onClick={handleOpenModal}
      >
        추가하기
      </button>
    </>
  );
}

export default AddLinkButton;
