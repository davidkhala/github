import API, {CodeScan} from '../rest.js';
import assert from 'assert';

describe('octokit:rest module', function () {
    this.timeout(0)
    it('public access', async () => {
        const api = new API();
        assert.ok(await api.connect())
        const {data} = await api.client.repos.listForOrg({
            org: "octokit",
            type: "public",
        })
        assert.ok(Array.isArray(data))
        console.debug(data)
    })

    it('connect', async () => {
        const pat = process.env.GITHUB_TOKEN
        const api = new API({pat})
        assert.ok(await api.connect())
        const {login, type, user_view_type} = await api.me()


        assert.equal(login, 'davidkhala')
        assert.equal(type, 'User')
        assert.equal(user_view_type, 'private')
    })
})
describe('codeScan', function () {
    this.timeout(0)

    it('list for repos', async () => {
        const pat = process.env.GITHUB_TOKEN
        const api = new CodeScan({pat})
        const org = 'davidkhala'
        const repo = 'ci-cd-utils'
        const data = await api.listForRepo(org, repo)
        console.debug(data)
    })
    it('list for org', async () => {
        const pat = process.env.GITHUB_TOKEN
        const api = new CodeScan({pat})
        const org = 'stage4fish'
        const data = await api.listForOrg(org)
        console.debug(data)
    })
})