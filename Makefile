
gen:
	@hugo -t after-dark

publish:
	@git add . && git commit -m 'Publish'  && git push
