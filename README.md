## Description

This is a basic setup of the requirements defined in the brief document.

We have a simple script (index.ts) which uses the [CoinGecko API](https://www.npmjs.com/package/coingecko-api) to periodically (every 1 minute) get the current Bitcoin value in USD.

Personally I have not used Kubernetes/Helm previously, so had a very brief play around with some of the tools ([kube-ctl](https://kubernetes.io/docs/tasks/tools/), [kind](https://kind.sigs.k8s.io/docs/user/quick-start/)) but didn't have the time to delve much deeper in as to how to create a valid helm chart. 

I've created a basic pipeline in CircleCI and commented out Orbs for AWS ECR/ECS which could possibly build the included Dockerfile, push to ECR, and update the corresponding ECS task definition to begin using the newer version of the service (by default the image in ECR will be tagged with the Git commit hash).

