## [Github CodeSpace](https://github.com/codespaces/)

OS: Ubuntu 24.04.4 LTS (July 2026)
- No Windows OS option

> A codespace is a development environment hosted in a container.
>
- > Codespaces uses devcontainers to define the environment.
- You cannot run `systemctl` in codespace

  ```
  "systemd" is not running in this container due to its overhead.
  Use the "service" command to start services instead. e.g.: 
  
  service --status-all
  ```

- Use [OAuth fashion](https://github.com/github/github-mcp-server#install-in-vs-code) to configure Codespace does not work
  - The OAuth fashion is

  ```
  {
    "servers": {
      "github": {
        "type": "http",
        "url": "https://api.githubcopilot.com/mcp/"
      }
    }
  }
  ```
  The popup window
  ```
  **Dynamic Client Registration not supported**

  The authorization server 'https://api.githubcopilot.com/' does not support automatic client registration. Do you want to proceed by manually providing a client registration (client ID)?

  Note: When registering your OAuth application, make sure to include these redirect URIs:
  http://127.0.0.1:33418
  https://vscode.dev/redirect
  ```
