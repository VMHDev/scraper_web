---
applyTo: "**"
---

# Karpathy Coding Principles

Behavioral guidelines to reduce common LLM coding mistakes. Based on Andrej Karpathy's four principles for better AI-assisted coding.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

References: https://github.com/forrestchang/andrej-karpathy-skills

---

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### Example 1: Hidden Assumptions

**User Request:** "Add a feature to export user data"

**❌ Wrong — Silent Assumptions**

```typescript
async function exportUsers(format: "json" | "csv" = "json"): Promise<string> {
  const users = await User.findAll();

  if (format === "json") {
    await fs.writeFile(
      "users.json",
      JSON.stringify(
        users.map((u) => u.toJSON()),
        null,
        2,
      ),
    );
  } else if (format === "csv") {
    const rows = users.map((u) => `${u.id},${u.email},${u.name}`);
    await fs.writeFile("users.csv", ["id,email,name", ...rows].join("\n"));
  }

  return `Exported ${users.length} users`;
}
```

**Problems:**

- Assumed it should export ALL users (privacy? pagination?)
- Assumed file location without asking
- Assumed which fields to include
- Assumed CSV fieldnames without checking actual data structure

**✅ Correct — Surface Assumptions**

```
Before implementing, I need to clarify:

1. **Scope**: Export all users or filtered subset? (privacy implications)
2. **Format**: You mentioned "export" — did you mean:
   - Download file in browser?
   - Background job with email notification?
   - API endpoint returning data?
3. **Fields**: Which user fields? (some might be sensitive)
4. **Volume**: How many users typically? (affects approach)

Simplest approach: Add an API endpoint that returns paginated JSON.
What's your preference?
```

### Example 2: Multiple Interpretations

**User Request:** "Make the search faster"

**❌ Wrong — Pick Silently**

```typescript
// Adds caching, indexes, and async processing without asking which "faster" matters
const cache = new Map<string, Result[]>();

async function search(query: string): Promise<Result[]> {
  if (cache.has(query)) return cache.get(query)!;
  // ... 200 lines of optimization code
}
```

**✅ Correct — Present Options**

```
"Make the search faster" could mean:

1. **Faster response time** (< 100ms instead of 500ms)
   - Add database indexes
   - Cache frequent queries
   - Estimated effort: 2 hours

2. **Handle more concurrent searches** (throughput)
   - Add async/await + connection pooling
   - Estimated effort: 4 hours

3. **Faster perceived speed** (UX)
   - Show partial results immediately (progressive loading)
   - Estimated effort: 3 hours

Current search takes ~500ms for typical queries.
Which aspect matters most for your use case?
```

---

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### Example 1: Over-abstraction

**User Request:** "Add a function to calculate discount"

**❌ Wrong — Overengineered**

```typescript
interface DiscountStrategy {
  calculate(amount: number): number;
}

class PercentageDiscount implements DiscountStrategy {
  constructor(private readonly percentage: number) {}
  calculate(amount: number): number {
    return amount * (this.percentage / 100);
  }
}

class FixedDiscount implements DiscountStrategy {
  constructor(private readonly fixedAmount: number) {}
  calculate(amount: number): number {
    return Math.min(this.fixedAmount, amount);
  }
}

interface DiscountConfig {
  strategy: DiscountStrategy;
  minPurchase?: number;
  maxDiscount?: number;
}

class DiscountCalculator {
  constructor(private readonly config: DiscountConfig) {}

  applyDiscount(amount: number): number {
    if (amount < (this.config.minPurchase ?? 0)) return 0;
    const discount = this.config.strategy.calculate(amount);
    return Math.min(discount, this.config.maxDiscount ?? Infinity);
  }
}

// Usage requires 30+ lines of setup for a simple calculation
```

**✅ Correct — Simple**

```typescript
function calculateDiscount(amount: number, percent: number): number {
  return amount * (percent / 100);
}

// Usage
const discount = calculateDiscount(100, 10); // $10 off
```

**When to add complexity:** Only when you actually need multiple discount types. Refactor then.

### Example 2: Speculative Features

**User Request:** "Save user preferences to database"

**❌ Wrong — Unnecessary Features**

```typescript
class PreferenceManager {
  constructor(
    private db: Database,
    private cache: Cache = new InMemoryCache(),
    private validator: Validator = new DefaultValidator(),
  ) {}

  async save(
    userId: number,
    prefs: Record<string, unknown>,
    options: { merge?: boolean; validate?: boolean; notify?: boolean } = {},
  ): Promise<boolean> {
    const { merge = true, validate = true, notify = false } = options;

    if (validate) {
      const errors = this.validator.validate(prefs);
      if (errors.length) throw new ValidationError(errors);
    }

    const existing = merge ? await this.get(userId) : {};
    const merged = merge ? { ...existing, ...prefs } : prefs;

    await this.db.query("UPDATE users SET preferences = ? WHERE id = ?", [
      JSON.stringify(merged),
      userId,
    ]);

    this.cache.set(`prefs:${userId}`, merged);

    if (notify) await this.notifyPreferenceChange(userId, merged);

    return true;
  }
}
```

**✅ Correct — Just What Was Asked**

```typescript
async function savePreferences(
  db: Database,
  userId: number,
  preferences: Record<string, unknown>,
): Promise<void> {
  await db.query("UPDATE users SET preferences = ? WHERE id = ?", [
    JSON.stringify(preferences),
    userId,
  ]);
}
```

**Add later if needed:** Caching (when performance matters), validation (when bad data appears), merging (when requirement emerges).

---

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### Example 1: Drive-by Refactoring

**User Request:** "Fix the bug where empty emails crash the validator"

**❌ Wrong — Too Much Changed**

```diff
  function validateUser(userData: UserData) {
-   // Check email format
-   if (!userData.email) {
+   /** Validate user data against schema rules. */
+   const email = (userData.email ?? '').trim();
+
+   // Validate email
+   if (!email) {
      throw new Error('Email required');
-   if (!userData.email.includes('@')) {
+   if (!email.includes('@') || !email.split('@')[1].includes('.')) {
      throw new Error('Invalid email');
-
-   // Check username
-   if (!userData.username) {
+   // Validate username
+   const username = (userData.username ?? '').trim();
+   if (!username) {
      throw new Error('Username required');
+   if (username.length < 3) throw new Error('Username too short');
+   if (!/^[a-z0-9]+$/i.test(username)) throw new Error('Username must be alphanumeric');

    return true;
  }
```

**Problems:** "Improved" email validation beyond the bug fix, added username validation nobody asked for, changed comments, added JSDoc.

**✅ Correct — Surgical**

```diff
  function validateUser(userData: UserData) {
    // Check email format
-   if (!userData.email) {
+   const email = userData.email ?? '';
+   if (!email || !email.trim()) {
      throw new Error('Email required');
    }
-   if (!userData.email.includes('@')) {
+   if (!email.includes('@')) {
      throw new Error('Invalid email');
    }

    // Check username
    if (!userData.username) {
      throw new Error('Username required');
    }

    return true;
  }
```

**Only changed:** The specific lines that fix empty email handling.

### Example 2: Style Drift

**User Request:** "Add logging to the upload function"

**❌ Wrong — Reformat Everything**

```diff
- function uploadFile(filePath, destination) {
+ async function uploadFile(filePath: string, destination: string): Promise<boolean> {
+   /** Upload file to destination with logging. */
+   logger.info(`Uploading ${filePath} to ${destination}`);
+
    try {
-     const data = fs.readFileSync(filePath)
-     const response = await fetch(destination, { method: 'POST', body: data })
-     if (response.ok) {
-       return true
-     } else {
-       return false
-     }
+     const data = await fs.promises.readFile(filePath);
+     const response = await fetch(destination, { method: "POST", body: data });
+     const success = response.ok;
+     if (success) {
+       logger.info(`Upload successful: ${filePath}`);
+     } else {
+       logger.error(`Upload failed: ${filePath}, status=${response.status}`);
+     }
+     return success;
    } catch (err) {
-     console.log(`Error: ${err}`)
+     logger.exception(`Upload error for ${filePath}: ${err}`);
      return false
    }
  }
```

**Problems:** Changed quote style, added TypeScript types nobody asked for, added JSDoc, reformatted whitespace, changed boolean return logic.

**✅ Correct — Match Existing Style**

```diff
+ const logger = require('./logger')
+
  function uploadFile(filePath, destination) {
+   logger.info(`Starting upload: ${filePath}`)
    try {
      const data = fs.readFileSync(filePath)
      const response = await fetch(destination, { method: 'POST', body: data })
      if (response.ok) {
+       logger.info(`Upload successful: ${filePath}`)
        return true
      } else {
+       logger.error(`Upload failed: ${filePath}, status=${response.status}`)
        return false
      }
    } catch (err) {
-     console.log(`Error: ${err}`)
+     logger.error(`Upload error: ${filePath}`, err)
      return false
    }
  }
```

**Matched:** Single quotes, no types, existing boolean pattern, spacing style.

---

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

### Example 1: Vague vs. Verifiable

**User Request:** "Fix the authentication system"

**❌ Wrong — Vague Approach**

```
I'll fix the authentication system by:
1. Reviewing the code
2. Identifying issues
3. Making improvements
4. Testing the changes

[Proceeds to make changes without clear success criteria]
```

**✅ Correct — Verifiable Goals**

```
To "fix authentication," I need to define success criteria.
What specific issue are we solving?

If the issue is "users stay logged in after password change":

Plan:
1. Write test: changePassword() → verify old session invalidated
   Verify: Test fails (reproduces bug)

2. Implement: Invalidate all sessions on password change
   Verify: Test passes

3. Check edge cases: Multiple active sessions, concurrent changes
   Verify: Additional tests pass

4. Verify no regression: Existing auth tests still pass
   Verify: Full test suite green

What's the specific auth issue you're seeing?
```

### Example 2: Multi-Step with Verification

**User Request:** "Add rate limiting to the API"

**❌ Wrong — All at Once**

```typescript
// Implements full rate limiting with Redis, multiple strategies,
// configuration system, and monitoring in one 300-line commit.
// No clear verification steps.
import { RateLimiterRedis } from "rate-limiter-flexible";
// ...300 lines
```

**✅ Correct — Incremental with Verification**

```
Plan for rate limiting:

1. Add basic in-memory rate limiting (single endpoint)
   Verify:
   - Test: 100 requests → first 10 succeed, rest get 429
   - Manual: curl endpoint 11 times, see rate limit error

2. Extract to middleware (apply to all endpoints)
   Verify:
   - Test: Rate limits apply to /users and /posts
   - Existing endpoint tests still pass

3. Add Redis backend (for multi-server)
   Verify:
   - Test: Rate limit persists across app restarts
   - Test: Two app instances share rate limit counter

4. Add configuration (rates per endpoint)
   Verify:
   - Test: /search allows 10/min, /users allows 100/min
   - Config file parsed correctly

Each step is independently verifiable and deployable.
Start with step 1?
```

### Example 3: Test-First Verification

**User Request:** "The sorting breaks when there are duplicate scores"

**❌ Wrong — Fix Without Reproducing**

```typescript
// Immediately changes sort logic without confirming the bug
function sortScores(scores: Score[]): Score[] {
  return scores.sort(
    (a, b) => b.score - a.score || a.name.localeCompare(b.name),
  );
}
```

**✅ Correct — Reproduce First**

```typescript
// 1. Write a test that reproduces the issue
test("sortScores is stable with duplicate scores", () => {
  const scores: Score[] = [
    { name: "Alice", score: 100 },
    { name: "Bob", score: 100 },
    { name: "Charlie", score: 90 },
  ];

  // Run multiple times — result must be consistent
  const result1 = sortScores([...scores]);
  const result2 = sortScores([...scores]);

  expect(result1[0].score).toBe(100);
  expect(result1[1].score).toBe(100);
  expect(result1[2].score).toBe(90);
  expect(result1.map((s) => s.name)).toEqual(result2.map((s) => s.name));
});

// Verify: Test fails (non-deterministic ordering)

// 2. Fix with stable sort
function sortScores(scores: Score[]): Score[] {
  return [...scores].sort(
    (a, b) => b.score - a.score || a.name.localeCompare(b.name),
  );
}

// Verify: Test passes consistently
```

---

## Anti-Patterns Summary

| Principle           | Anti-Pattern                                       | Fix                                                           |
| ------------------- | -------------------------------------------------- | ------------------------------------------------------------- |
| Think Before Coding | Silently assumes file format, fields, scope        | List assumptions explicitly, ask for clarification            |
| Simplicity First    | Strategy pattern for a single discount calculation | One function until complexity is actually needed              |
| Surgical Changes    | Reformats quotes, adds types while fixing a bug    | Only change lines that fix the reported issue                 |
| Goal-Driven         | "I'll review and improve the code"                 | "Write test for bug X → make it pass → verify no regressions" |

## Key Insight

The "overcomplicated" examples aren't obviously wrong — they follow design patterns and best practices. The problem is **timing**: they add complexity before it's needed, which:

- Makes code harder to understand
- Introduces more bugs
- Takes longer to implement
- Is harder to test

**Good code solves today's problem simply, not tomorrow's problem prematurely.**
