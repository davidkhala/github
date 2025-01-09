from github import Github as G
from github.Auth import Token
from github.AuthenticatedUser import AuthenticatedUser


class Github:
    def __init__(self, auth: Token = None, hostname=None):
        opts = {}
        if hostname:
            opts['hostname'] = f"https://{hostname}/api/v3"
        if auth:
            opts['auth'] = auth
        self.client = G(
            **opts
        )

    def me(self) -> AuthenticatedUser:
        return self.client.get_user()

    def disconnect(self):
        self.client.close()
