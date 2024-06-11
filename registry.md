# Github Packages
https://docs.github.com/en/packages

- [Delete a published package](https://docs.github.com/en/free-pro-team@latest/packages/publishing-and-managing-packages/deleting-a-package)
    - You can only delete a version of a private package

## permission mode
granular permission
- Packages with granular permissions are scoped to a personal account or organization.

repository-scoped permission
- A repository-scoped package inherits the permissions and visibility of the repository in which the package is published.

## Container registry: GHCR
- Docker login
    ```
    $ export CR_PAT=YOUR_personal_access_token
    $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
    > Login Succeeded
    ```
- Docker push
    ```
    docker push ghcr.io/OWNER/IMAGE_NAME:latest
    ```
## Java registry
Apache Maven registry and Gradle registry only support repository-scoped permissions.
- **granular permission not supported**

