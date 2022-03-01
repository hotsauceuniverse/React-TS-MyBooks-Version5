// api호출 하는 코드 작성

import axios from "axios"
import { LoginReqType } from "../types";

const USER_API_URL = "https://api.marktube.tv./v1/me";

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<string> {
    const response = await axios.post(USER_API_URL, reqData);
    return response.data.token;
  }

  // logout 할 때는 기존의 login 되어 있는 토큰값을 보내서 USER_API_URL에 delete처리를 해줘야 된다.
  public static async logout(token: string): Promise<void> {
    await axios.delete(USER_API_URL, {
      headers: {Authorization: `Bearer ${token}`},
    });
  }
}