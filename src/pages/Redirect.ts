import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Redirect() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  console.log("code: " + code);
  useEffect(() => {
    if (!code) return;

    const getToken = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/login?code=${code}`);
        localStorage.setItem("authId", `${res.data.id_token}`);
        navigate("/news");
      } catch (error) {
        alert("エラーが発生しました。: " + error);
        navigate("/");
      }
    };

    getToken();
  }, [code, navigate]);

  return null;
}
