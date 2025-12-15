
# Copilot Chat
Inline suggestions
- To accept a suggestion, select the `Tab` key or the `>` (right arrow) key.
- To reject a suggestion, keep typing or select the `Esc` key.
- aka. ghost text

Multiple suggestions
- Select the icon or use `Alt+]` (Windows/Linux) or `Option+]` (Mac) to cycle through alternatives.


Inline chat
1. Use the keyboard shortcut `Ctrl+I` (Windows or Linux) or `Cmd+I` (Mac) to open inline chat. 
2. Ask questions or request changes specific to that code location. you can also use Slash commands here


Comments to code
> Copilot uses natural language processing to convert comments into code. You can describe the functionality that you want in a comment. 
- ?? When you select the `Enter` key, Copilot generates code based on your description.

command palette `Copilot: Generate Tests`


# slash commands
some common slash commands and their usage:
- /explain - Provides an explanation of the selected code.
- /suggest - Offers code suggestions based on the current context.
- /tests - Generates unit tests for the selected function or class.
- /comment - Converts comments into code snippets.

Copilot will automatically constructs a rich internal prompt behind the scenes (aka. implicit prompts) when using slash commands in inline chat for fixing code issues

# Troubleshoot
command palette `Developer: Chat Diagnostics`

# Performance
- Chat window currently operates with a context window of 4k tokens
- Inline suggestions context window typically ranges from approximately 200-500 lines of code or up to a few thousand tokens.
