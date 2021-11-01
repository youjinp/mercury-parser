# Setup
- setup github PAT with read:packages & write:packages scopes
- create ~/.npmrc with 

```
//npm.pkg.github.com/:_authToken=TOKEN
```

- create .npmrc with

```
@OWNER:registry=https://npm.pkg.github.com
```

- update package.json's name `@OWNER/<packagename>`
- update package.json's repository

# Refs
- https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry