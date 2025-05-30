import {CodeScan, Dependabot, SecretScan} from "../security.js";
import {JSONReadable} from '@davidkhala/light/format.js'
import fs from "fs";
import {ToFile} from '@davidkhala/csv/index.js'
import {Repository} from "../repos.js";


const pat = process.env.GITHUB_TOKEN

describe('codeScan', function () {
    this.timeout(0)
    const api = new CodeScan({pat})
    it('list for repos', async () => {

        const org = 'davidkhala'
        const repo = 'ci-cd-utils'
        const data = await api.listForRepo(org, repo)
        fs.writeFileSync('test/artifacts/codeScan.json', JSONReadable(data))
        fs.writeFileSync('test/artifacts/codeScan.csv', ToFile(data.map(CodeScan.flatten)))

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
    const org = 'davidkhala'
    it('list for repos', async () => {
        const repo = 'ci-cd-utils'
        const data = await api.listForRepo(org, repo)
        fs.writeFileSync('test/artifacts/secretScan.json', JSONReadable(data))
        fs.writeFileSync('test/artifacts/secretScan.csv', ToFile(data.map(SecretScan.flatten)))
    })
    it('disable/enable for one', async ()=>{
        const repo = 'ci-cd-utils'
        await api.disable(org, repo)
        await api.enable(org, repo)
    })
    it('enable for all in org', async () => {
        const repoControl = new Repository({pat})
        const repos = await repoControl.listForUser(org)
        for (const repo of repos) {
            const {name} = repo
            await api.enable(org, name)
        }


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
        fs.writeFileSync('test/artifacts/dependabot.json', JSONReadable(data))
        fs.writeFileSync('test/artifacts/dependabot.csv', ToFile(data.map(Dependabot.flatten)))
    })
    it('list for org', async () => {
        const org = 'stage4fish'
        const data = await api.listForOrg(org)
        console.debug(data)
    })
})