import os
import unittest

from davidkhala.github import Github
from davidkhala.github.auth import from_pat


class PATTestCase(unittest.TestCase):

    def setUp(self):
        auth = from_pat(os.environ.get('GITHUB_TOKEN'))
        print(auth.token)
        self.g = Github(auth)

    def test_self(self):
        self.assertEqual(self.g.me().login, 'davidkhala')

    def test_code_scan(self):
        for dependabot in self.g.client.get_organization('stage4fish').get_dependabot_alerts():
            print(dependabot.url)

    def tearDown(self):
        self.g.disconnect()

if __name__ == '__main__':
    unittest.main()
