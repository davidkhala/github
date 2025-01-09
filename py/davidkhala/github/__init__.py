from github import Github as G
from github.Auth import Token


class Github:
    def __init__(self, auth: Token=None, hostname= None):
        opts = {}
        if hostname:
            opts['hostname'] = f"https://{hostname}/api/v3"
        if auth:
            opts['auth'] = auth
        self.client = G(
            **opts
        )

