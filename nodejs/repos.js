import API from "./rest.js";

export class Repository extends API {

    async listForOrg(org, type = "all") {
        const {data} = await this.client.repos.listForOrg({
            org, type
        })
        return data;
    }
    async listForUser(username) {
        const {data}  =await this.client.repos.listForUser({
            username,type:'owner'
        })
        return data
    }

}
