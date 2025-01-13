import {CodeScan, Dependabot, SecretScan} from "../security.js";
import assert from "assert";
import {JSONReadable} from '@davidkhala/light/format.js'
import fs from "fs";
import {ToFile} from '@davidkhala/csv'

const pat = process.env.GITHUB_TOKEN
describe('codeScan', function () {
    this.timeout(0)
    const api = new CodeScan({pat})
    it('list for repos', async () => {

        const org = 'davidkhala'
        const repo = 'ci-cd-utils'
        const data = await api.listForRepo(org, repo, true)
        fs.writeFileSync('test/artifacts/codeScan.json', JSONReadable(data))
        await assert.rejects(async () => {
            await api.listForRepo(undefined, `${org}/${repo}`)
        }, 'HttpError: Not Found - https://docs.github.com/rest')
        fs.writeFileSync('test/artifacts/codeScan.csv', ToFile(data.map(CodeScan.flatter)))

    })
    it('list for org', async () => {

        const org = 'stage4fish'
        const data = await api.listForOrg(org)
        console.debug(data)
    })
})
describe('secretScans', function () {
    this.timeout(0)
    const api = new SecretScan({pat})
    it('list for repos', async () => {

        const org = 'davidkhala'
        const repo = 'ci-cd-utils'
        const data = await api.listForRepo(org, repo)
        console.debug(data)
    })
    it('list for org', async () => {
        const org = 'stage4fish'
        const data = await api.listForOrg(org)
        console.debug(data)
    })
})
describe('Dependabot', function () {
    this.timeout(0)
    const api = new Dependabot({pat})
    it('list for repos', async () => {

        const org = 'davidkhala'
        const repo = 'ci-cd-utils'
        const data = await api.listForRepo(org, repo)
        console.debug(data)
    })
    it('list for org', async () => {
        const org = 'stage4fish'
        const data = await api.listForOrg(org)
        console.debug(data)
    })
})