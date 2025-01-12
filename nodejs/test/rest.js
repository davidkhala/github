import API from '../rest.js';
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
