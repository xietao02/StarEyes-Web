import { reactive } from "vue";

const saveUserInfo = (id, Token) => {
  if (!window.localStorage) {
    ElNotification({
      type: "error",
      message: "浏览器不支持localStorage,\n请更换浏览器或升级浏览器版本!",
    });
    return false;
  } else {
    window.localStorage.setItem("SE_ID", id);
    window.localStorage.setItem("SE_Token", Token);
    return true;
  }
};

const getToken = () => {
  return window.localStorage.getItem("SE_Token");
};

const getID = () => {
  return window.localStorage.getItem("SE_ID");
};

const removeUserInfo = () => {
  window.localStorage.removeItem("SE_ID");
  window.localStorage.removeItem("SE_Token");
};

const user = reactive({
  id: getID(),
  password: "",
  token: getToken(),
});

export { saveUserInfo, getToken, getID, removeUserInfo, user };
