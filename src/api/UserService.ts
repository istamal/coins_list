import axios from "axios";

type Params = {
    search?: string;
    orderBy?: string;
}

export default class UserService {
    private static host: string = "https://test.gefara.xyz/api/v1/user/";

    static async getUsers(params?: Params) {
        if (params) {
            return await axios.get(this.host + "list", { params })
        }

        return await axios.get(this.host + "list");
    }


    static async getUserTransations(id: string) {
        return await axios.get(this.host + "/" + id + "/" + "transactions");
    }
};