---
applyTo: "**"
description: "Basic coding principles. These rules emphasize careful planning, simplicity, surgical changes, and goal-driven execution to produce high-quality code."
---

# Commons Rules

> **Last updated**: 2026-05-31

## Project Docs First

Before executing any request, **always read the relevant project documentation** in the workspace.

### Rules

- **Read before acting**: Check `docs/`, `README.md`, and any applicable `*.instructions.md`, `*.md` files before writing code or making changes.
- **Instruction files**: If an instruction file matches the file path you are working on (via its `applyTo` pattern), read and follow it.
- **Skill files**: If the task matches a skill description in `.github/skills/`, load and follow that skill's `SKILL.md`.
- **No assumptions**: Do not rely on prior knowledge alone — project docs may override general conventions.

### ❌ Anti-pattern

Acting on a request without first checking whether the project has relevant documentation, instructions, or skill files that apply.

### ✅ Correct pattern

1. Identify the task.
2. Check `docs/`, `README.md`, `.github/instructions/`, and `.github/skills/` for relevant context.
3. Load and follow any matching instruction or skill files.
4. Then proceed with implementation.

---

## Last Updated Date

Every Markdown file (`.md`) **must** include a `Last updated` line near the top — directly below the title or in a blockquote header block.

```markdown
# Document Title

> **Last updated**: 2026-04-14
```

### Rules

- **Always present**: Never create or save a `.md` file without the `Last updated` line.
- **Always current**: Update the date to today whenever the file is modified — even for minor edits.
- **Placement**: Immediately after the top-level `# Title`, before any other content.
- **Format**: `> **Last updated**: YYYY-MM-DD` (ISO 8601 date, bold label, blockquote style).

### Scope

Applies to **all** `.md` files in the project, including:

| Location            | Examples                                              |
| ------------------- | ----------------------------------------------------- |
| Root                | `README.md`                                           |
| `docs/`             | `ARCHITECTURE.md`, `DEVELOPMENT.md`, `QUICK_START.md` |
| `.github/`          | `copilot-instructions.md`, `*.instructions.md`        |
| `.github/agents/`   | `*.agent.md`                                          |
| `.github/skills/*/` | `SKILL.md`                                            |

### ❌ Anti-patterns

```markdown
# My Document

<!-- Missing Last updated — invalid -->

Some content here.
```

```markdown
# My Document

Last updated: April 14 2026

<!-- Wrong format — must be YYYY-MM-DD in blockquote with bold label -->
```

### ✅ Correct pattern

```markdown
# My Document

> **Last updated**: 2026-04-14

Some content here.
```

---

## Sensitive Information Masking

All sensitive values **must be masked** in any documentation, markdown files, code comments, examples, and commit messages.

### What to mask

Any value that grants access, identifies a secret, or could be exploited if exposed:

| Category                  | Examples                                                |
| ------------------------- | ------------------------------------------------------- |
| API keys & tokens         | `API_KEY`, `ACCESS_TOKEN`, `AUTH_TOKEN`, `BEARER_TOKEN` |
| Secrets & passwords       | `SECRET`, `SECRET_KEY`, `PASSWORD`, `PRIVATE_KEY`       |
| Credentials               | `CLIENT_SECRET`, `DB_PASSWORD`, `SMTP_PASSWORD`         |
| Connection strings        | Database URLs with embedded credentials                 |
| AWS / cloud keys          | `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`            |
| Signing / encryption keys | JWTs, PEM keys, HMAC secrets                            |

### Rules

- **Never write real values**: Replace any actual key, secret, token, or password with a placeholder.
- **Use descriptive placeholders**: Clearly indicate the type and source, e.g. `<YOUR_API_KEY>`, `<AWS_SECRET_ACCESS_KEY>`.
- **Apply everywhere**: Docs, `README.md`, `.env.example`, code samples, SQL scripts, shell scripts, and inline comments.
- **Env vars over hardcoding**: Reference environment variable names (e.g. `process.env.API_KEY`) rather than embedding values.

### ❌ Anti-patterns

```markdown
<!-- Real secret exposed — NEVER do this -->

API_KEY=sk-abc123realkey
DB_PASSWORD=MyS3cur3Pass!
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

```bash
# Hardcoded in a script — NEVER do this
curl -H "Authorization: Bearer eyJhbGci...realtoken" https://api.example.com
```

### ✅ Correct pattern

```markdown
API_KEY=<YOUR_API_KEY>
DB_PASSWORD=<YOUR_DB_PASSWORD>
AWS_SECRET_ACCESS_KEY=<YOUR_AWS_SECRET_ACCESS_KEY>
```

```bash
curl -H "Authorization: Bearer ${API_TOKEN}" https://api.example.com
```

```env
# .env.example
API_KEY=<YOUR_API_KEY>
SECRET_KEY=<YOUR_SECRET_KEY>
DB_PASSWORD=<YOUR_DB_PASSWORD>
```

---

## CHANGELOG.md Updates

Whenever a `CHANGELOG.md` file exists in the project root, **every code change must include a corresponding entry** in that file.

### Rules

- **Check first**: Before making any code change, verify whether a `CHANGELOG.md` exists at the project root.
- **Always update**: If it exists, add or update an entry describing the change — no code change is complete without it.
- **Use [Keep a Changelog](https://keepachangelog.com) format**: Group entries under `Added`, `Changed`, `Fixed`, `Removed`, `Security`, or `Deprecated` within an `[Unreleased]` section.
- **Be specific**: Each entry must describe _what_ changed and _why_, not just _that_ something changed.
- **One entry per logical change**: A single PR or commit may have multiple entries if it touches distinct areas.

### Scope

Applies to **all code changes**, including:

| Change type        | Examples                                            |
| ------------------ | --------------------------------------------------- |
| Feature additions  | New endpoints, new components, new config options   |
| Bug fixes          | Corrected logic, patched security issues            |
| Refactors          | Renamed symbols, restructured modules               |
| Dependency updates | Upgraded/downgraded packages                        |
| Configuration      | Changed environment variables, build config updates |

### ❌ Anti-pattern

Making a code change and leaving `CHANGELOG.md` untouched when the file exists.

### ✅ Correct pattern

```markdown
## [Unreleased]

### Added

- `POST /v1/users/export` endpoint for exporting user data as CSV or JSON.

### Fixed

- Empty email no longer crashes the user validator.
```
