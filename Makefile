base:
	corepack enable yarn
	corepack use 'yarn@4'

test: base
	yarn lint
	yarn test

start: base
	yarn start
