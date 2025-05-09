import {Octokit} from 'octokit';


export default class API {
    isPublic

    /**
     * @param [pat] personal access token
     * @param [baseUrl] used for GitHub Enterprise
     */
    constructor({pat, baseUrl} = {}) {

        const opts = {};
        if (pat) {
            opts.auth = pat
        } else {
            this.isPublic = true
        }
        if (baseUrl) {
            opts.baseUrl = baseUrl
        }

        this.client = new Octokit(opts).rest;
    }

    async me() {
        const {data} = await this.client.users.getAuthenticated()
        return data
    }

    async connect() {
            if (this.isPublic) {
                await this.client.repos.listForOrg({
                    org: "octokit",
                    type: "public",
                })
            } else {
                await this.me()
            }

    }

}


