import API from "./rest.js";

export class CodeScan extends API {
    async listForOrg(org) {
        const {data} = await this.client.codeScanning.listAlertsForOrg({
            org,
        });
        return data
    }

    async listForRepo(org, repo) {
        const {data} = await this.client.codeScanning.listAlertsForRepo({
            repo,
            owner: org
        })
        return data
    }
}

export class SecretScan extends API {
    async listForOrg(org) {
        const {data} = await this.client.secretScanning.listAlertsForOrg({org})
        return data
    }

    async listForRepo(org, repo) {
        const {data} = await this.client.secretScanning.listAlertsForRepo({
            owner: org,
            repo
        })
        return data
    }
}

export class Dependabot extends API {
    async listForOrg(org) {
        const {data} = await this.client.dependabot.listAlertsForOrg({org})
        return data
    }

    async listForRepo(org, repo) {
        const {data} = await this.client.dependabot.listAlertsForRepo({owner: org, repo})
        return data
    }
}