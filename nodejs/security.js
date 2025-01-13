import API from "./rest.js";

export class CodeScan extends API {
    async listForOrg(org) {
        const {data} = await this.client.codeScanning.listAlertsForOrg({
            org,
        });
        return data
    }

    static flatten(item) {

        const {
            number, html_url, state,
            created_at, updated_at, fixed_at, dismissed_by, dismissed_at,
            rule, most_recent_instance
        } = CodeScan.pretty(item)
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
        delete item.rule.id // mostly equivalent to .name
        delete item.rule.description // just a short form of full_description
        delete item.tool // assuming { name: 'CodeQL', guid: null, version: '2.20.0' }
        return item
    }

    async listForRepo(org, repo) {
        const {data} = await this.client.codeScanning.listAlertsForRepo({
            repo,
            owner: org,
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

    static pretty(item) {
        delete item.url
        delete item.locations_url
        delete item.secret
        delete item.secret_type // described in secret_type_display_name
        delete item.validity

        item.repository = item.repository.name
        return item
    }

    static flatten(item) {
        const {
            number, created_at, updated_at, html_url, state, secret_type_display_name,
            multi_repo, resolution, resolved_by, resolved_at, repository
        } = SecretScan.pretty(item)

        return {
            number, url: html_url, state, secret_type: secret_type_display_name,
            resolution, resolved_by, resolved_at,
            multi_repo, repository,
            created_at, updated_at,
        }
    }
}

export class Dependabot extends API {
    async listForOrg(org) {
        const {data} = await this.client.dependabot.listAlertsForOrg({org})
        return data
    }

    static pretty(item) {
        delete item.html_url
        item.repository = item.repository.name
        const {severity, vulnerable_version_range, first_patched_version} = item.security_vulnerability

        item.security_vulnerability = {
            severity, vulnerable_version_range
        }
        if (first_patched_version) {
            item.security_vulnerability.first_patched_version = first_patched_version.identifier
        }

        return item
    }

    static flatten(item) {

        const {
            number, state, html_url,
            created_at, updated_at, fixed_at, dismissed_by, dismissed_at, auto_dismissed_at,
            dependency, repository, security_vulnerability, security_advisory
        } = Dependabot.pretty(item)

        const {package: {ecosystem, name}, manifest_path, scope} = dependency
        const {ghsa_id, cve_id, summary} = security_advisory

        const {severity, vulnerable_version_range, first_patched_version} = security_vulnerability
        return {
            number, state, dependency: name, scope, manifest_path, repository, url: html_url,
            created_at, updated_at, fixed_at, dismissed_by, dismissed_at, auto_dismissed_at,
            severity_level: severity, vulnerable_version_range, first_patched_version,
            build_tool: ecosystem,
            ghsa: ghsa_id, cve: cve_id, description: summary
        }
    }

    async listForRepo(org, repo) {
        const {data} = await this.client.dependabot.listAlertsForRepo({owner: org, repo})
        return data
    }
}