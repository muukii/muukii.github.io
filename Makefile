
gen:
	@hugo -t after-dark

publish:
	@git add . && git commit -m 'Publish'  && git push

local:
	@hugo server -t after-dark -w -D
