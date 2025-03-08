import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: ReactNode;
};

// ログイン状態に基づいてアクセス制御を行うコンポーネント
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem("authId"); // ローカルストレージからトークンを取得

  if (!token) {
    window.alert("ログインしてください");
    // トークンがない場合、ログインページにリダイレクト
    return <Navigate to="/" />;
  }

  return children; // トークンがあれば子コンポーネント（アクセスしたいページ）を表示
};

export default PrivateRoute;
