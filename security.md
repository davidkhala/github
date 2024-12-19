# Free security
## Dependency graph
Dependency graph is part of repository [Insights](../../network/dependencies)
> GitHub uses the dependency graph to add dependency reviews to the pull request.

## Dependabot alerts
Pre-requisite: You need to have CI first before apply patch
- Merge Dependabot PR directly is a partial update. It always introduces consistence issue.
- Make sure CI green before patch. Otherwise there is no destination of rollback, then you have to immediate rush towards resolution.

## Configure in Organization level
Code security configurations
- Location: Tab `Settings` > Left panel `Security` \ **Code Security** > `Configurations`
- Apply **GitHub recommended** prebuilt configuration
  - It is `Suggested settings for Dependabot, secret scanning, and code scanning.`
  - Steps (need to be repeated regularly)
    1. **Apply to** > `All repositories without configurations`
    2. **Use as default for newly created repositories:** > **All repositories**

[Global code security settings](https://github.com/organizations/pbank-test/settings/security_analysis)
- Location: Tab `Settings` > Left panel `Security` \ **Code Security** > `Global settings`
- **Dependabot**
  - [x] **Dependabot on Actions runners**
- **Code scanning**
  - [x] **Recommend the extended query suite for repositories enabling default setup**
    - Extended Query Suite detects lower risk issues, such as
      - Misconfigurations
      - Unused dependencies
      - Potentially vulnerable code patterns
- **Secret scanning**
  - **Add a resource link in the CLI and web UI when a commit is blocked**
    - a url-like text. free-form text is not allowed
    - optional if you have universal support web


# [Github Advanced Security (GHAS)](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security)
[About](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security)
- All features are available in public repository
- Features having native push prevention
  - [dependency-review-action](#dependency-review-action)
  - [Code scanning](#code-scanning)
## Code scanning
Location: [security_analysis](../../settings/security_analysis) > **Code scanning** > **Tools** > **CodeQL analysis**

### CodeQL default configuration
- It will *Overriding an existing advanced setup*
- It will not introduce file in repository
- Scan Triggers
  - On push default/protected branch
  - On creating or committing to a pull request against default/protected branch, excluding pull requests from forks
  - On a weekly schedule
    - Idle: when no pushes and pull requests have occurred for 6 months
- > [Default setup will not run on PRs from Dependabot](https://github.com/orgs/community/discussions/121836#discussioncomment-9341155)

- build mode for compiled languages: `none` for C# and Java, otherwise `autobuild`
- [Steps: Configuring default setup for a repos](https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#configuring-default-setup-for-a-repository)

### CodeQL *advanced setup*
It presents as a [Github workflow](https://github.com/davidkhala/ci-cd-utils/edit/master/.github/workflows/codeql.yml)

## CodeQL CLI: a standalone, command-line tool that you can use to analyze code
  - [About](https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/about-the-codeql-cli)
  - It can generate a database representation (the CodeQL database) of a codebase
    - consumed by [CodeQL](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-codeql) VSCode extension
    - command: `codeql database create`
  - You can query CodeQL database interactively
  - You can generate a set of results in `SARIF` format
    - by running a suite of queries
      - command: `codeql database analyze`
    - to upload to Github for display
      - command: `codeql github upload-results`
  - Use cases
    - offline on-prem environment
    - Use CodeQL on 3rd-party CI systems including Azure DevOps
    - Advanced code scanning: write your own query as security researcher
  - [e2e Example](https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/about-the-codeql-cli#example-ci-configuration-for-codeql-analysis)
  - [Install](https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)
    - dlp format: a tar archive in [release page](https://github.com/github/codeql-action/releases) containing the CLI binary, source code and compiled of queries and libraries
    - current latest release: [v2.20.0](https://github.com/github/codeql-action/releases/tag/codeql-bundle-v2.20.0)
    - validate command `codeql resolve packs`
  - It is written in nodejs
## Secret scanning
[Enabling secret scanning for your repository](https://docs.github.com/en/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository)
## Custom auto-triage rules
It allow user to create new Dependabot rule
- [to your repository](https://docs.github.com/en/code-security/dependabot/dependabot-auto-triage-rules/customizing-auto-triage-rules-to-prioritize-dependabot-alerts#adding-custom-auto-triage-rules-to-your-repository)
- [to your organization](https://docs.github.com/en/code-security/dependabot/dependabot-auto-triage-rules/customizing-auto-triage-rules-to-prioritize-dependabot-alerts#adding-custom-auto-triage-rules-to-your-organization)
## Dependency review 
Compare to Dependabot alerts 
- Both will find vulnerabilities
- Dependabot alerts discover that are already in your dependencies
- Dependency review prevent new vulnerabilities from being introduced


### Dependency review [(visualization)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request#reviewing-dependencies-in-a-pull-request)
It provides a visualization of dependency changes (in package manifests or lock files) with a rich diff
- Location: tab "Files Changed" of a pull request.

### [dependency-review-action](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#about-the-dependency-review-action)
- A Github Action
- By default, dependency-review-action check will fail if it discovers any vulnerable packages.
  - Part to checklist: A failed check blocks a pull request from being merged when the repository owner requires the dependency review check to pass. 


