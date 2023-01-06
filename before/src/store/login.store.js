import { makeAutoObservable } from "mobx"
import { http } from "utils/index";

class LoginStore {
    token = "";
    constructor() {
        makeAutoObservable(this)
    }

    setToken = async ({ username, password }) => {
        //调入登录接口
        await http.post("", {})
        //存入token
    }

}

export default LoginStore