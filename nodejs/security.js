import API from "./rest.js";
import {html} from "mocha/lib/reporters/index.js";

export class CodeScan extends API {
    async listForOrg(org) {
        const {data} = await this.client.codeScanning.listAlertsForOrg({
            org,
        });
        return data
    }

    static prettyRule({rule}) {
        delete rule.id // mostly equivalent to .name
        delete rule.description // just a short form of full_description
    }

    static as_report({
                      number, html_url,
                      created_at, updated_at,
                      state,
                      fixed_at, dismissed_by, dismissed_at,
                      rule, most_recent_instance
                  }) {
        const {security_severity_level, tags, full_description, name} = rule // the dimensional table
        const cweTag = tags.find(tag => tag.startsWith('external/cwe/cwe-'))
        const cwe = cweTag ? cweTag.substring(17) : undefined

        const {ref, location, commit_sha} = most_recent_instance

        return {
            severity_level: security_severity_level, cwe,
            name, number, url: html_url, description: full_description,
            created_at, updated_at, fixed_at,
            dismissed_by, dismissed_at,
            state, ref, commit: commit_sha, location: JSON.stringify(location)
        }
    }


    static pretty(item) {
        delete item.url // For internal usage only
        delete item.instances_url // For internal usage only
        CodeScan.prettyRule(item)
        delete item.tool // assuming { name: 'CodeQL', guid: null, version: '2.20.0' }
        return item
    }

    async listForRepo(org, repo, pretty) {
        const {data} = await this.client.codeScanning.listAlertsForRepo({
            repo,
            owner: org,
        })
        if (pretty) {
            return data.map(CodeScan.pretty)
        }
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