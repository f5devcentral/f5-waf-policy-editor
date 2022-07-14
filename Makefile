.PHONY: all docker docker-push helm-i helm-u

all: docker docker-push

ifeq ($(CI),true)
$(info == Running in CI environment ===============)
else
$(info == Running in local environment ============)
CI_COMMIT_SHORT_SHA   	?= $(shell git rev-parse --short HEAD)
CI_COMMIT_SHA		  	?= $(shell git rev-parse HEAD)
CI_PROJECT_PATH		  	?= $(shell cat PROJECT)
CI_PROJECT_NAME		  	?= $(shell cat RROJECT)
endif

VERSION				 ?= $(shell cat VERSION)
SUFFIX				 ?= $(shell git rev-parse --abbrev-ref HEAD)
SEMVER 				 ?= $(VERSION)-$(shell sed "s/\//_/g" <<< $(SUFFIX))

# Build labels to add to docker images
DOCKER_REGISTRY 	   ?= interestingstorage
DOCKER_REPOSITORY_URI  ?= $(DOCKER_REGISTRY)/$(CI_PROJECT_PATH)
DOCKER_BUILD_LABELS:="com.f5aas.version=$(SEMVER)" \
"com.f5aas.package=$(CI_PROJECT_NAME)" \
"com.f5aas.commit_sha=$(CI_COMMIT_SHA)" \
"com.f5aas.commit_sha_short=$(CI_COMMIT_SHORT_SHA)"


$(info == BUILD VARS ==============================)
$(info PRERELEASE=$(PRERELEASE))
$(info BUILD_META=$(BUILD_META))
$(info VERSION=$(VERSION))
$(info SEMVER=$(SEMVER))
$(info CI_COMMIT_SHA=$(CI_COMMIT_SHA))
$(info CI_COMMIT_SHORT_SHA=$(CI_COMMIT_SHORT_SHA))
$(info )
$(info CI_PROJECT_PATH=$(CI_PROJECT_PATH))
$(info DOCKER_REGISTRY=$(DOCKER_REGISTRY))
$(info DOCKER_BUILD_LABELS=$(DOCKER_BUILD_LABELS))
$(info DOCKER_REPOSITORY_URI=$(DOCKER_REPOSITORY_URI))
$(info )
$(info GOLDFLAGS=$(GOLDFLAGS))
$(info GOGOPATH=$(GOPATH))
$(info GO111MODULE=$(GO111MODULE))
$(info GOFLAGS=$(GOFLAGS))
$(info ============================================)


docker:	
	DOCKER_BUILDKIT=1 docker build --no-cache \
		--build-arg SEMVER=$(SEMVER) \
		--build-arg CI_COMMIT_SHORT_SHA=$(CI_COMMIT_SHORT_SHA) \
		--build-arg CI_COMMIT_SHA=$(CI_COMMIT_SHA) \
		$(addprefix --label ,$(DOCKER_BUILD_LABELS)) \
		-t $(CI_PROJECT_PATH):$(CI_COMMIT_SHORT_SHA) \
		-f ./Dockerfile \
		.

docker-push:	
	docker tag $(CI_PROJECT_PATH):$(CI_COMMIT_SHORT_SHA) $(DOCKER_REPOSITORY_URI):$(CI_COMMIT_SHORT_SHA)
	docker tag $(CI_PROJECT_PATH):$(CI_COMMIT_SHORT_SHA) $(DOCKER_REPOSITORY_URI):$(VERSION)
	docker tag $(CI_PROJECT_PATH):$(CI_COMMIT_SHORT_SHA) $(DOCKER_REPOSITORY_URI):$(SEMVER)
	docker tag $(CI_PROJECT_PATH):$(CI_COMMIT_SHORT_SHA) $(DOCKER_REPOSITORY_URI):latest
	# docker push $(DOCKER_REPOSITORY_URI):$(CI_COMMIT_SHORT_SHA)
	# docker push $(DOCKER_REPOSITORY_URI):$(VERSION)
	# docker push $(DOCKER_REPOSITORY_URI):$(SEMVER)
	# docker push $(DOCKER_REPOSITORY_URI):latest


helm-i:
	helm upgrade --install waffler ./helm/waffler --values=./helm/waffler/values.yaml

helm-u:
	helm uninstall waffler