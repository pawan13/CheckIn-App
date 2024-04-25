### DEV

build-dev:
	cd Admin/BE && $(MAKE) build
	cd Admin/FE && $(MAKE) build
	cd Client/BE && $(MAKE) build
	cd Client/FE && $(MAKE) build

run-dev:
	docker-compose -f docker-compose-dev.yml up

### Production
build:
	docker-compose build

run:
	docker-compose up -d

down:
	docker-compose down



### SSH For Digital Ocean
SSH_STRING:=root@170.64.224.105

ssh:
	ssh ${SSH_STRING}

copy-files:
	scp -r ./* $(SSH_STRING):/root/
