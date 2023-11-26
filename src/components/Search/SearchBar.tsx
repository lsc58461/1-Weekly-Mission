import { ChangeEvent, FormEvent } from "react";

import styles from "./SearchBar.module.css";

import searchIcon from "../../assets/images/searchIcon.svg";
import closeIcon from "../../assets/images/close.svg";

interface Props {
  inputValue: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchBar = ({ inputValue, onSubmit, onChange, onClick }: Props) => {
  return (
    <div className={styles.search}>
      <div className={styles.searchContainer}>
        <form className={styles.searchBar} onSubmit={onSubmit}>
          <img
            className={styles.searchIcon}
            src={searchIcon}
            alt="돋보기 모양 아이콘"
          />
          <input
            className={styles.input}
            name="search"
            placeholder="링크를 검색해 보세요."
            value={inputValue}
            onChange={onChange}
          />
          {inputValue && (
            <button className={styles.resetButton} onClick={onClick}>
              <img src={closeIcon} alt="지우기 이미지" />
            </button>
          )}
        </form>
        {inputValue && (
          <p className={styles.description}>
            <span className={styles.accent}>{inputValue}</span>으로 검색한
            결과입니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
