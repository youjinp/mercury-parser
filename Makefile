.PHONY: test
test:
	npm run test

.PHONY: test.mercury
test.mercury:
	npx jest -- src/mercury.test.js --json --outputFile test-output.json

.PHONY: build
build:
	npm run build

.PHONY: publish
publish:
	npm publish