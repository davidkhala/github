# Free security features
## Dependency graph
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
    2. ![image](https://github.com/user-attachments/assets/743c1341-bfce-47aa-a936-d4b7f02507e9)
    3. **Use as default for newly created repositories:** > **All repositories**

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
- Code scanning
  - [Configuring default setup](https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)
    - Recommend to apply to all eligible repositories in an organization
    - Scan Triggers
      - On push default/protected branch
      - On creating or committing to a pull request against default/protected branch, excluding pull requests from forks
      - On a weekly schedule
        - Idle: when no pushes and pull requests have occurred for 6 months
    - build mode for compiled languages: `none` for C# and Java, otherwise `autobuild`
    - [Steps: configure for single repos](https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#configuring-default-setup-for-a-repository)
- CodeQL CLI: a standalone, command-line tool that you can use to analyze code
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
- Secret scanning
- Custom auto-triage rules
- Dependency review 
