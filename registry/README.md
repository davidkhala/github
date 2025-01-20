# Github Packages
https://docs.github.com/en/packages

- [Delete a published package](https://docs.github.com/en/free-pro-team@latest/packages/publishing-and-managing-packages/deleting-a-package)
    - You can only delete a version of a private package

## permission mode
granular permission
- Packages with granular permissions are scoped to a personal account or organization.

repository-scoped permission
- A repository-scoped package inherits the permissions and visibility of the repository in which the package is published.

GitHub Packages only supports authentication using a **personal access token (classic)**. 

## Container: GHCR
domain: ghcr.io
- See details in ./docker.sh

## Java
Apache Maven registry and Gradle registry only support repository-scoped permissions.
- **granular permission not supported**

## Python: WON'T DO
revealed in [roadmap](https://github.com/github/roadmap/issues/94)
