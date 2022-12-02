all: menu

build: build-front clean-back build-msg build-inner

build-inner:
	@mvn clean package -f firebase-admin
	@echo \\033[35m* \\033[32mDone \\033[35m'*'
	@echo
	@echo \\033[32mUse \\033[35m'`'\\033[36mmake run\\033[35m'`' \\033[32mto run ClassMate
	@echo

build-msg:
	@echo
	@echo \\033[35m**************************************************
	@echo \\033[35m* ~~~~~~~~~~~ \\033[32mPackaging into Jar... \\033[35m~~~~~~~~~~~ '*'
	@echo \\033[35m**************************************************
	@echo

build-front: build-front-msg build-front-inner

build-front-inner:
	@npm run build --prefix frontend
	@echo \\033[35m* \\033[32mDone \\033[35m'*'

build-front-msg:
	@echo
	@echo \\033[35m**************************************************
	@echo \\033[35m* ~~~~~~~~~~~~ \\033[32mBuilding Frontend... \\033[35m~~~~~~~~~~~~ '*'
	@echo \\033[35m**************************************************

clean-back: clean-back-msg clean-back-inner

clean-back-inner:
	@mvn clean -f firebase-admin
	@echo \\033[35m* \\033[32mDone \\033[35m'*'

clean-back-msg:
	@echo
	@echo \\033[35m**************************************************
	@echo \\033[35m* ~~~~~~~~~~~~ \\033[32mCleaning Backend... \\033[35m~~~~~~~~~~~~ '*'
	@echo \\033[35m**************************************************
	@echo

deps: deps-msg deps-inner

deps-inner:
	@npm i --prefix frontend
	@echo \\033[35m* \\033[32mDone \\033[35m'*'
	@echo
	@echo \\033[32mUse \\033[35m'`'\\033[36mmake build\\033[35m'`' \\033[32mto build ClassMate
	@echo

deps-msg:
	@echo
	@echo \\033[35m**************************************************
	@echo \\033[35m* ~~~~~~~~~ \\033[32mInstalling Dependencies...\\033[35m ~~~~~~~~~ '*'
	@echo \\033[35m**************************************************

menu:
	@echo
	@echo \\033[35m********************
	@echo \\033[35m* ~~ \\033[33mClassMate. \\033[35m~~ '*'
	@echo \\033[35m********************
	@echo
	@echo \\033[35mFollow these steps to get ClassMate up and running:
	@echo
	@echo \\033[35m'`'\\033[36mmake deps\\033[35m'`' - \\033[32mInstalls dependencies
	@echo \\033[35m'`'\\033[36mmake build\\033[35m'`' - \\033[32mBuilds and packages ClassMate into jar
	@echo \\033[35m'`'\\033[36mmake run\\033[35m'`' - \\033[32mRuns ClassMate
	@echo

run: start-msg run-inner

run-inner:
	@java -jar firebase-admin/target/firebase-admin-0.0.1-SNAPSHOT.jar

start-msg:
	@echo
	@echo \\033[35m**************************************************
	@echo \\033[35m* ~~~~~~~~~~~ \\033[32mStarting \\033[33mClassMate\\033[32m...\\033[35m ~~~~~~~~~~~ '*'
	@echo \\033[35m**************************************************

terminated-msg:
	@echo \\033[35m* \\033[32mProcess terminated. \\033[35m'*'