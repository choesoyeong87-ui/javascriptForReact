import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, setCookie, removeCookie } from "../util/cookieUtil";

const initState = {
  email: "",
};

const lodMemberCookie = () => {
  const memberInfo = getCookie("member");
  if (memberInfo && memberInfo.nickname) {
    memberInfo.nickname = decodeURIComponent(memberInfo.nickname);
  }
  return memberInfo;
};

//MemberApi의 oginPost를 component에서 바로 부르면 안되고 createAsyncThunk를 통해서 불러야한다.
export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: lodMemberCookie() || initState,
  reducers: {
    login: (state, action) => {
      //dispatch로 불러짐
      const data = action.payload;
      console.log("로그인 금고지기" + data.email + " " + data.pw);
      return { email: data.email };
    },
    logout: (state, action) => {
      removeCookie("member");
      return { ...initState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        // 토큰을 가져오고 store를 바꿔주는 로직
        console.log("fulfilled : 완료" + action.payload.nickname); // 통신하면서 결과값으로 불러짐
        // 에러가 없다면
        if (!action.payload.error) {
          console.log("쿠키에 저장");
          setCookie("member", JSON.stringify(action.payload), 1);
        }
        return action.payload;
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending : 처리중");
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        //토큰은 가져오지 않고 store를 바꿔주는 로직
        console.log("rejected : 오류");
      });
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
