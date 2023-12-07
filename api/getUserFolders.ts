import API_ENDPOINTS from "./endpoints";

interface Props {
  userId: number;
}

/**
 * 비동기 함수로 서버에서 폴더 정보를 가져오는 함수입니다.
 *
 * @returns {Promise<UserFolderData>} 서버에서 받은 JSON 형식의 폴더 정보를 나타내는 객체를 포함하는 Promise 객체
 * @throws {Error} 서버에서 응답을 받지 못할 경우 에러가 발생합니다.
 */
const getUserFolders = async ({ userId }: Props): Promise<UserFolderData> => {
  const baseUrl = API_ENDPOINTS.baseUrl;
  const endpoint = API_ENDPOINTS.user.folders.getUserFolders({
    userId,
  });
  const response = await fetch(baseUrl + endpoint);
  const body: UserFolderData = await response.json();
  return body;
};

export default getUserFolders;
