import axios from "axios";

// ローカルストレージから JWT トークンを取得する関数
export const getAuthToken = (): string | null => {
  return localStorage.getItem("authId"); // ローカルストレージに保存されたトークンを取得
};

export const deleteAuthToken = (): void => {
  localStorage.removeItem("authId"); // ローカルストレージからトークンを削除
};

// axios インスタンスの作成
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // .env からベースURLを取得
  timeout: 5000, // タイムアウト設定
  headers: {
    "Content-Type": "application/json",
  },
});

// リクエストのインターセプターで JWT トークンをヘッダーに追加
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken(); // トークンを取得
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // ヘッダーに追加
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const fetchData = async (url: string) => {
  try {
    const response = await axiosInstance.get(url); // GETリクエストを送信
    return response.data; // レスポンスデータを返す
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // エラーを再スロー
  }
};

export default axiosInstance;
