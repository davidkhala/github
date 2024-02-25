# Repository
- GitHub has a strict file limit of **100MB**
- Github repository description cannot include newline (EOL)
    - otherwise it shows `Error saving your changes: Description control characters are not allowed`
- [How to sync master to a fork](https://help.github.com/articles/syncing-a-fork/)
## Environment
- Repository Environment Box: controlled by settings for the repository
    > The environments tab shows a block under the details of the repository. Once a deployment has been made to a service—be that GitHub Pages, or an external service—the historic deployments will show up in this tab. The checkbox in the settings for the repository will either display that information or hide it.  
    > [Here](https://docs.github.com/en/free-pro-team@latest/developers/overview/viewing-deployment-history) is a little more information on that pane. These are all configured in the repository information provided earlier and when a deployment to that environment occurs, it should show up in the list.

## Insights
- list people who have starred a GitHub repository: HTTP GET `${repository-url}/stargazers`
