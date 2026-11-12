# Sample application

A very small Node and TypeScript project with a test command. It exists to be pushed to test
projects on GitLab.com and GitHub, so that a tool can be tested against real merge requests,
pipelines and deployments. It does nothing useful.

- `src/greeting.ts` is the whole application: one function.
- `src/greeting.test.ts` holds its tests.
- `.gitlab-ci.yml` runs the tests on GitLab.com and records a deployment that deploys nothing.

## Run the tests

Node 24.12 or later is needed, and nothing else: Node runs the TypeScript files by itself, and
the project has no dependency.

```sh
npm test
```

## Licence

MIT. See `LICENSE`.
