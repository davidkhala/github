Q: when I [Install GitHub] from [VS Code MCP marketplace](https://github.com/mcp), VS Code Desktop raises error when attemp to start server
```
[info] 连接状态: 错误 The "path" argument must be of type string. Received type undefined
```

- According to [prerequisites](https://github.com/github/github-mcp-server/?tab=readme-ov-file#prerequisites), VS Code version under 1.101 does not support **Remote GitHub MCP Server** (public GitHub MCP service)
- Solution: bump updated VS Code version
