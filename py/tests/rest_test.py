import os
import unittest

from davidkhala.github import Github
from davidkhala.github.auth import from_pat


class AuthTestCase(unittest.TestCase):
    def test_from_pat(self):
        auth =from_pat(os.environ.get('GITHUB_TOKEN'))
        print(auth)
        g= Github(auth)
        for repo in g.client.get_user().get_repos():
            print(repo.owner.name, repo.name)
        g.client.close()

if __name__ == '__main__':
    unittest.main()
