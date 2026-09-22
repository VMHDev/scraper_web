# Commit Message Instructions

- Use conventional commit message format.
- The commit message must be a **single inline line** with a maximum length of **72 characters** (including the ticket prefix).
- The short description should be in the format: `<ticket> (<type>-<scope>): <short description>`
  - `ticket`: Extracted from the current branch name using the following rules:
    - Take the last segment after the final `/` (or the full branch name if no `/` present)
    - Remove any trailing description after the ticket ID pattern (e.g., `uv-2078-profile` → `uv-2078`)
    - A ticket ID is the leading `<prefix>-<number>` portion where `<number>` is **purely numeric digits** (e.g., `uv-2078`, `uv-321`). A word followed by a non-numeric string (e.g., `config-sns`, `heris`, `feature`) is **NOT** a ticket ID.
    - Uppercase the prefix portion of the ticket ID (e.g., `uv-2078` → `UV-2078`, `uv-321` → `UV-321`)
    - If no ticket ID pattern is found, `ticket` is empty and the format becomes: `<type>-<scope>: <short description>` (omit the ticket prefix entirely)
    - **NEVER generate, invent, or use a placeholder ticket ID (e.g. `UV-123`) when the branch has no ticket pattern. If there is no ticket, the ticket prefix MUST be completely absent from the commit message.**
    - **The username/author segment of a branch (e.g. `heris` in `heris/config-sns`) is NEVER a ticket ID — do NOT uppercase or use it as a ticket.**
    - Examples:
      - `heris/uv-2078-profile` → `UV-2078`
      - `heris/uv-2064` → `UV-2064`
      - `feature/uv-321` → `UV-321`
      - `main` → _(empty, omit ticket prefix)_
      - `develop` → _(empty, omit ticket prefix)_
      - `update-gui` → _(empty, omit ticket prefix)_
      - `harry/config-sns` → _(empty, omit ticket prefix)_
      - `heris/config-update` → _(empty, omit ticket prefix)_
      - `heris/fix-something` → _(empty, omit ticket prefix)_
  - `type`: The type of change (e.g., fearure, fix, docs, style, refactor, test, chore).
    - `feature`: A new feature
    - `fix`: A bug fix
    - `docs`: Documentation only changes
    - `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    - `refactor`: A code change that neither fixes a bug nor adds a feature
    - `test`: Adding missing tests or correcting existing tests
    - `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation
    - `perf`: A code change that improves performance
    - `ci`: Changes to CI configuration files and scripts
    - `build`: Changes that affect the build system or external dependencies
    - `revert`: Reverts a previous commit
    - `wip`: Work in progress
    - `security`: Security-related changes
    - `i18n`: Internationalization and localization
    - `a11y`: Accessibility improvements
    - `ux`: User experience improvements
    - `ui`: User interface changes
    - `config`: Configuration file changes
    - `deps`: Dependency updates
    - `infra`: Infrastructure changes
    - `init`: Initial commit
    - `analytics`: Analytics or tracking code
    - `seo`: SEO improvements
    - `legal`: Licensing or legal changes
    - `typo`: Typo fixes
    - `comment`: Adding or updating comments in the code
    - `example`: Adding or updating examples
    - `mock`: Adding or updating mocks
    - `hotfix`: Critical hotfix
    - `merge`: Merging branches
    - `cleanup`: Code cleanup
    - `deprecate`: Deprecating code or features
    - `move`: Moving or renaming files
    - `rename`: Renaming files or variables
    - `split`: Splitting files or functions
    - `combine`: Combining files or functions
    - `add`: Adding files or features
    - `remove`: Removing files or features
    - `update`: Updating files or features
    - `downgrade`: Downgrading files or features
    - `patch`: Applying patches
    - `optimize`: Optimizing code
  - `scope`: The scope of the change (e.g., component or file name). Include this if the change is specific to a particular part of the codebase.
- `short description`: A brief summary of the change.
- The long description should provide additional context and details about the change.
  - Explain why the change was made.
  - Describe what is being used and why.
  - Include any relevant information that might be useful for understanding the change in the future.
  - Reference any related issues or pull requests at the end of the long description.
- If the commit introduces a breaking change, include `BREAKING CHANGE: <description of the breaking change>` at the end of the long description.

## Example

### Commit Message Example

```
UV-2078 (fearure-auth): Add user authentication

Added user authentication using JWT. This includes login, registration, and token verification endpoints.

- Implemented JWT-based authentication.
- Added login and registration endpoints.
- Added middleware for token verification.

Fixes #123
```

### Breaking Change Example

```
UV-321 (refactor-api): Update API endpoints

Refactored the API endpoints to follow RESTful conventions. This change affects all existing API calls.

- Updated endpoint URLs to follow RESTful conventions.
- Modified request and response formats.

BREAKING CHANGE: All existing API calls need to be updated to the new endpoint URLs.
```
