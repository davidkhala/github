from github import Auth


def from_pat(pat: str) -> Auth.Token:
    """
    :param pat: personal access token
    :return:
    """
    return Auth.Token(pat)
