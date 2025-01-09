from davidkhala.github import Github


class Dependabot(Github):

    def list_for_repo(self, repo):
        return self.client.get_repo(repo).get_dependabot_alerts()

    def list_for_org(self, org: str):
        return self.client.get_organization(org).get_dependabot_alerts()


class CodeScan(Github):
    def list_for_repo(self, repo):
        return self.client.get_repo(repo).get_codescan_alerts()

    def list_for_org(self, org):
        return self.client.get_organization(org).get_codescan_alerts()
