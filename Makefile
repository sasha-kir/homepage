build:
	@echo "installing dependencies"
	@npm install
	@echo "building homepage"
	@npm run build
	@echo "removing old version"
	@rm -r ~/static-files/homepage
	@echo "copying files"
	@mkdir ~/static-files/homepage
	@cp -r build/* ~/static-files/homepage/
	@echo "\033[0;32mDone! \033[0m"

.PHONY: build
