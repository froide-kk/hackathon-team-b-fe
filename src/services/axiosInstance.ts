import axios from "axios";

// ローカルストレージから JWT トークンを取得する関数
const getAuthToken = (): string | null => {
  return localStorage.getItem("jwt_token"); // ローカルストレージに保存されたトークンを取得
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

export default axiosInstance;
