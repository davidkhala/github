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

        try {
            if (this.isPublic) {
                await this.client.repos.listForOrg({
                    org: "octokit",
                    type: "public",
                })
            } else {
                await this.me()
            }

            return true
        } catch (e) {
            const {message} = e
            if (['Bad credentials - https://docs.github.com/rest', 'Requires authentication - https://docs.github.com/rest/users/users#get-the-authenticated-user'].includes(message)) {
                return false
            }
            throw e
        }


    }

}


