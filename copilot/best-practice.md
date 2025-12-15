[Best practices](https://docs.github.com/en/copilot/get-started/best-practices)

# for Copilot Chat
> If the first output isn't quite what you're looking for, don't start from scratch. Instead, erase the suggested code, enrich your initial comment with added details and examples, and prompt Copilot again.
> Role prompting helps you get production-ready code faster by incorporating domain expertise into initial implementations, reducing the need for multiple revision cycles.
- e.g. `Security expert role`, `Performance optimization role`, `Testing specialist role`

## 4 Ss principles for creating effective prompts

- Single: Always focus your prompt on a single, well-defined task or question. This clarity is crucial for eliciting accurate and useful responses from Copilot.
- Specific: Ensure that your instructions are explicit and detailed. Specificity leads to more applicable and precise code suggestions.
- Short: While being specific, keep prompts concise and to the point. This balance ensures clarity without overloading Copilot or complicating the interaction.
- Surround: Utilize descriptive filenames and keep related files open. This provides Copilot with rich context, leading to more tailored code suggestions.

## Chain prompting and managing chat history
- Summarize context when conversations become lengthy: "Based on our previous discussion about user authentication, now add rate limiting to prevent brute force attacks"
- Reset and provide focused context for new features: Start fresh with essential details rather than carrying forward the entire conversation
- Use concise references to previous work instead of repeating full implementations

# for copilot space

## Do's and Don'ts of Working in a Space
Do keep your questions tightly scoped to the sources you attached—files, issues, pull requests, and notes—so answers stay grounded.

Don't @‑mention people or other Copilot extensions in a Space
- user mentions won't notify anyone, and extensions can't be invoked from Space chats.

Do treat the Space as a focused environment for a single task or domain, and reuse its own terminology to reinforce consistency.

Do use prompting patterns that lead to runnable, verifiable outputs.
- Start by confirming intent, then refine with concrete constraints (formats, time ranges, file paths, or sections to consider).
- Ask for executable code, queries, or commands and, when helpful, request references back to the included sources for traceability.

Don't expect the Space to pull in content that isn't included—unless your environment supports repository search you've explicitly attached
- Copilot won't discover outside material.

Do iterate when responses drift
- tighten instructions
- add 1-3 high‑quality examples that demonstrate "good" output
- prune noisy or irrelevant sources.

Don't let the Space sprawl beyond a single job or exceed model context limits;
- if you hit size warnings or degraded answers, reduce sources or split into smaller Spaces to restore precision and predictability.

Do keep context fresh and well‑ordered.
- Link version‑controlled files so the Space reflects your repository's default branch as it evolves
- lead with the most important sources or examples since ordering can influence responses.

Don't paste sensitive data into free‑text notes;
- prefer linking to files in repos (or use uploads where supported) so standard review and permissions apply.

## Governance checklist
Naming and Purpose

[ ] Choose a clear, purpose‑driven title (for example, "ServiceName—Onboarding Helper"); keep "one job per Space."
[ ] Write a 1–2 sentence description that states scope, intended audience, and expected outputs.
[ ] Add a brief "How to use this Space" note at the top of the instructions.
Ownership and Visibility

[ ] Set the correct owner (individual or organization, if available).
[ ] Select appropriate visibility (private, org‑visible, etc.).
[ ] Verify access with a non‑owner who expected GitHub permissions (Spaces inherit repo/issue/PR permissions).
[ ] Share the URL and, where available, add collaborators.
Security and Privacy

[ ] Don't paste sensitive data into free‑text; prefer linking version‑controlled files where normal review/permissions apply.
[ ] Ensure all attached sources are suitable for the chosen visibility.
[ ] If uploads are supported, limit the text content you’re comfortable sharing.
[ ] Remove obsolete or confidential materials.
Discoverability and Docs

[ ] Use consistent naming conventions across Spaces (team/service prefixes help).
[ ] Add tags/keywords in the description to aid search.
[ ] Announce or catalog the Space in your org’s preferred directory/channel.
Review Cadence and Governance

[ ] Assign a maintainer/owner responsible for updates.
[ ] Set a review cadence (for example, monthly or per release).
[ ] At each review: validate links, test 2–3 representative prompts, update examples, prune noisy sources, and confirm visibility.
[ ] Track feedback and improvement requests (issues, discussion, or a simple checklist in the description).
