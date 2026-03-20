import { useSearchParams } from "react-router-dom";

const KakaoRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get("code");
  return (
    <div>
      <div>Kakao Login Redirect 부터 받은 인가코드</div>
      <div>{authCode}</div>
    </div>
  );
};
export default KakaoRedirectPage;
