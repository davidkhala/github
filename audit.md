# Log
[Learn](https://resources.github.com/learn/pathways/administration-governance/essentials/access-capture-consume-audit-logs/)

Access endpoints
- Github UI: settings pages
  - in both [`enterprise`](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise) and [`organization`](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log) levels
  - By default display up to 3 months
    - For older events in 3-6 months ago, use [Github search syntax](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/about-searching-on-github) by specifying a date range.
- API or Export

Included activities
- configuration changes and CRUD events
- API access to resources
- **Git Events**: such as pushing, pulling, or cloning of code
  - retained for 7 days
  - Not accessible in Github UI.
  - Accessible by
    - Export (in JSON format only): event invoked by web browser, REST or GraphQL APIs are excluded
    - API
    - Log Streaming

Retention period
- configurable, up to 6 months, except fot **Git Events**


## Log Streaming
integration with
- Azure Events Hub (native)
- Datadog (native)
- Splunk (native)
- Object storage
