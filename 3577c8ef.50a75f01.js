(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/ECS-cd03a71aa24fcced1b7e78eee778e5aa.png"},73:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return u}));var n=t(3),i=t(7),r=(t(0),t(97)),o={id:"foresight-install-ECS",title:"Installing CloudScend Foresight to AWS ECS",hide_title:"Installing CloudScend Foresight to AWS ECS",sidebar_label:"Installing CloudScend Foresight to AWS ECS"},s={unversionedId:"foresight-install-ECS",id:"foresight-install-ECS",isDocsHomePage:!1,title:"Installing CloudScend Foresight to AWS ECS",description:"Installing CloudScend Foresight to AWS ECS",source:"@site/docs/foresight-install-ECS.mdx",slug:"/foresight-install-ECS",permalink:"/sage-docs/docs/foresight-install-ECS",editUrl:"https://github.com/saic-oss/sage-docs/edit/main/webapp/docs/docs/foresight-install-ECS.mdx",version:"current",sidebar_label:"Installing CloudScend Foresight to AWS ECS"},c=[{value:"Assumptions for AWS ECS Installation",id:"assumptions-for-aws-ecs-installation",children:[]},{value:"Technical Requirements for AWS ECS Installation",id:"technical-requirements-for-aws-ecs-installation",children:[]},{value:"Steps for Configuring and Installing CloudScend Foresight in AWS ECS Environment",id:"steps-for-configuring-and-installing-cloudscend-foresight-in-aws-ecs-environment",children:[{value:"General configuration steps",id:"general-configuration-steps",children:[]},{value:"Configure your ECS Cluster and Install CloudScend Foresight",id:"configure-your-ecs-cluster-and-install-cloudscend-foresight",children:[]},{value:"Managing Sensitive Environment Variables",id:"managing-sensitive-environment-variables",children:[]}]},{value:"Troubleshooting and Support",id:"troubleshooting-and-support",children:[]}],l={rightToc:c};function u(e){var a=e.components,o=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},l,o,{components:a,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"installing-cloudscend-foresight-to-aws-ecs"},"Installing CloudScend Foresight to AWS ECS"),Object(r.a)("h2",{id:"assumptions-for-aws-ecs-installation"},"Assumptions for AWS ECS Installation"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"You are familiar with AWS ECS Environments")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Access to functional AWS ECS Environment")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Technical Knowledge of the following"),Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Docker"),Object(r.a)("li",{parentName:"ul"},"Docker Compose"),Object(r.a)("li",{parentName:"ul"},"AWS"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html"}),"AWS CLI Version 2")),Object(r.a)("li",{parentName:"ul"},"Optionally, ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI_installation.html"}),"ECS-CLI")))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"SSL Instructions have been completed ",Object(r.a)("strong",{parentName:"p"},Object(r.a)("em",{parentName:"strong"},"NEED INPUT FROM TEAM ON THIS")))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"NEED INPUT FROM TEAM")))),Object(r.a)("h2",{id:"technical-requirements-for-aws-ecs-installation"},"Technical Requirements for AWS ECS Installation"),Object(r.a)("p",null,"Before performing your ECS CloudScend Foresight installation, ensure your environment is set with the following:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"AWS ECS Environment"),Object(r.a)("li",{parentName:"ul"},"EC2 instance"),Object(r.a)("li",{parentName:"ul"},"Amazon Virtual Private Cloud (VPC)"),Object(r.a)("li",{parentName:"ul"},"Elastic Load Balancing (ELB)"),Object(r.a)("li",{parentName:"ul"},"Amazon CloudWatch"),Object(r.a)("li",{parentName:"ul"},"Amazon Elastic File System (EFS)"),Object(r.a)("li",{parentName:"ul"},"Security Groups for you VPC"),Object(r.a)("li",{parentName:"ul"},"AWS Systems Manager Agent (SSM)"),Object(r.a)("li",{parentName:"ul"},"AWS Secrets Manager"),Object(r.a)("li",{parentName:"ul"},"You must download and install an instance of ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://www.sonarqube.org/downloads/"}),"SonarQube"),". You may download either a Community, Developer or Enterprise Edition."),Object(r.a)("li",{parentName:"ul"},"If any of your source code is written in ColdFusion, you must also download and install ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stepstone-tech/sonar-coldfusion/releases/tag/2.0.0"}),"CFLint"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"Explain different plugins for different versions of SonarQube (like CFLint, TypeScript, Java, etc)")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(r.a)("h2",{id:"steps-for-configuring-and-installing-cloudscend-foresight-in-aws-ecs-environment"},"Steps for Configuring and Installing CloudScend Foresight in AWS ECS Environment"),Object(r.a)("h3",{id:"general-configuration-steps"},"General configuration steps"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Environment Variables ???? (perhaps this should be somewhere else or isn't valid)"),"\n",Object(r.a)("strong",{parentName:"p"},"ANY OTHER GENERAL CONFIGURATIONS???")),Object(r.a)("p",null,"Before installing CloudScend Foresight, you must ensure your AWS Environment is setup correctly for an ECS Cluster. Below is an overview of the services required by the ECS cluster."),Object(r.a)("p",null,Object(r.a)("img",{alt:"ECS Cluster",src:t(146).default})),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Create a VPC with preferably two public and two private subnets:")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Example:",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"192.168.0.0/24 VPC"),Object(r.a)("li",{parentName:"ul"},"192.168.0.64/26 Public Subnet-1"),Object(r.a)("li",{parentName:"ul"},"192.168.0.128/26 Public Subnet-2"),Object(r.a)("li",{parentName:"ul"},"192.168.0.192/27 Private Subnet-1"),Object(r.a)("li",{parentName:"ul"},"192.168.0.192/27 Private Subnet-2")))),Object(r.a)("ol",{start:2},Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Create an ECS cluster preferably EC2 Linux + Networking (both EC2 and Fargate capable services are compatible with this setup). Utilize the VPC previously created during ECS setup.")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Choose Amazon ECS-optimized Amazon Linux 2 AMI ami-0583ca2f3ce809fcb and create at least 2 instances with specifications such as:"))),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"t2.2xlarge"),Object(r.a)("li",{parentName:"ul"},"60 GiB"),Object(r.a)("li",{parentName:"ul"},"ecsInstanceRole IAM role"),Object(r.a)("li",{parentName:"ul"},"Enable CloudWatch logs")),Object(r.a)("p",null,"Tasks and services that use the awsvpc network mode require the Amazon ECS service-linked role to provide Amazon ECS with the permissions to make calls to other AWS services on your behalf. This role is created for you automatically when you create a cluster."),Object(r.a)("ol",{start:4},Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Create the proper Security Groups to be used by the ECS cluster EC2 instances and ELB.")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Create Application Load Balancer (ELB) and register the ECS Instances as ELB Targets. Ensure to set the targets to IP and not Instance. This is because tasks that use the awsvpc network mode are associated with an ENI, not with an Amazon EC2 instance.")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Ensure the Internet Gateway of the ECS VPC is properly configured to the Route Table."))),Object(r.a)("p",null,"ECS has integration with Elastic Load Balancing (Application Load Balancers) through the Service feature, where tasks will be automatically registered in the ELB and deregistered in the ELB appropriately."),Object(r.a)("ol",{start:7},Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Create a EC2 instance to administer and manage the ECS cluster")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Configure AWS CLI on a management Linux instance"))),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"[root@ip-172-00-00-111 docker-compose]# aws configure\nAWS Access Key ID [****************RI7S]:\nAWS Secret Access Key [****************zAUX]:\nDefault region name [us-east-2]:\nDefault output format [json]:\n\n")),Object(r.a)("p",null,"Additional information on installing AWS CLI is available at ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html#cliv2-linux-install"}),"AWS Amazon"),"."),Object(r.a)("ol",{start:9},Object(r.a)("li",{parentName:"ol"},"Navigate to the code repository to obtain the json files which are the ECS task definitions. Each application service has a json for EC2 and Fargate deployment respectively.")),Object(r.a)("h3",{id:"configure-your-ecs-cluster-and-install-cloudscend-foresight"},"Configure your ECS Cluster and Install CloudScend Foresight"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Obtain your deployment code repository from the ","[CloudScend Foresight ECS Deployment location]","(PUT A LINK IN HERE?).")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Deployment order of CloudScend Foresight containers:"),Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Commondata Database"),Object(r.a)("li",{parentName:"ul"},"Commondata Backend"),Object(r.a)("li",{parentName:"ul"},"Metabase DB"),Object(r.a)("li",{parentName:"ul"},"Metabase Backend"),Object(r.a)("li",{parentName:"ul"},"Sage DB"),Object(r.a)("li",{parentName:"ul"},"Sage Backend"),Object(r.a)("li",{parentName:"ul"},"Sage Frontend"),Object(r.a)("li",{parentName:"ul"},"Keycloak Database"),Object(r.a)("li",{parentName:"ul"},"Keycloak"),Object(r.a)("li",{parentName:"ul"},"Highlight Agent"),Object(r.a)("li",{parentName:"ul"},"Reports Service"),Object(r.a)("li",{parentName:"ul"},"Uploader"),Object(r.a)("li",{parentName:"ul"},"Elasticsearch"),Object(r.a)("li",{parentName:"ul"},"Fluentd"),Object(r.a)("li",{parentName:"ul"},"Kibana"),Object(r.a)("li",{parentName:"ul"},"Gitlab"),Object(r.a)("li",{parentName:"ul"},"Sonarqube"))),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Create the ECS Task definitions based on your ECS type and CloudScend Foresight deployment order."))),Object(r.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"ECS may be deployed with two different ECS types:"),Object(r.a)("ul",{parentName:"div"},Object(r.a)("li",{parentName:"ul"},"EC2 \u2013 cluster based on server instances"),Object(r.a)("li",{parentName:"ul"},"Fargate \u2013 serverless compute for containers\nThe main differences with Fargate and EC2 Task Definitions is that volumes need to be mounted to Fargate Task Definitions from sourceVolume, to provide nonpersistent empty storage for containers in a Fargate task.\nIt is the decision of your administrator as to which you deploy.")))),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Regardless of your ECS type, you will need to create a task definitions for each CloudScend Foresight json file."),Object(r.a)("li",{parentName:"ul"},"Use awsvpc networking mode",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Your containers in the task will share an ENI using a common network stack. Port mappings can only specify container ports (any existing host port specifications will be removed).")))),Object(r.a)("p",null,"For example, the following describe and register statements create task definitions for the commondata-db container:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"  aws ecs describe-task-definition --task-definition commondata-db-ec2:4\n  aws ecs register-task-definition --cli-input-json file://commondata-db-ec2.json\n\n")),Object(r.a)("ol",{start:4},Object(r.a)("li",{parentName:"ol"},"Create ECS Services")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"If your administrator has chosen the Fargate service, then create ECS Fargate Services"),Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"To create a service with Fargate, run similar AWS CLI command below for each ECS Task Definition previously created. Below is an example using the commondata-db container. Ensure you use the correct network and cluster values for your environment.")),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),' /usr/local/bin/aws ecs create-service --cluster default-ecs-ec2 --service-name commondata-db --task-definition commondata-db-ec2:5 --desired-count 2 --launch-type FARGATE --platform-version LATEST --network-configuration "awsvpcConfiguration={subnets=[subnet-xxxxxx5b024557fe5],securityGroups=[ sg-0035ba27e231xxxxxx],assignPublicIp=DISABLED}"\n')),Object(r.a)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"It\u2019s recommended to run Elasticsearch on Fargate due to recent compatibility contingencies."),Object(r.a)("ul",{parentName:"div"},Object(r.a)("li",{parentName:"ul"},"To fix paging issue on Elasticsearch EC2 attempt to add this command to the instances: ",Object(r.a)("strong",{parentName:"li"},"THIS SAYS EC2 BUT DEALING WITH FARGATE")),Object(r.a)("li",{parentName:"ul"},"sudo sysctl -w vm.max_map_count=262144"),Object(r.a)("li",{parentName:"ul"},"sudo sysctl -w fs.file-max=65536\n:::")))))),Object(r.a)("p",null,"Below find an example of a successful output when task definition is properly registered using FARGATE:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "taskDefinition": {\n        "status": "ACTIVE",\n        "memory": "1024",\n        "networkMode": "awsvpc",\n        "family": "sage-frontend",\n        "placementConstraints": [],\n        "requiresAttributes": [\n            {\n                "name": "com.amazonaws.ecs.capability.ecr-auth"\n            },\n            {\n                "name": "com.amazonaws.ecs.capability.task-iam-role"\n            },\n            {\n                "name": "ecs.capability.execution-role-ecr-pull"\n            },\n            {\n                "name": "com.amazonaws.ecs.capability.docker-remote-api.1.18"\n            },\n            {\n                "name": "ecs.capability.task-eni"\n            }\n        ],\n        "cpu": "512",\n        "executionRoleArn": "arn:aws:iam::358354085340:role/ecsTaskExecutionRole",\n        "compatibilities": [\n            "FARGATE",\n        ],\n        "volumes": [],\n        "requiresCompatibilities": [\n            "FARGATE"\n        ],\n        "taskRoleArn": "arn:aws:iam::358354085340:role/ecsTaskExecutionRole",\n        "taskDefinitionArn": "arn:aws:ecs:us-east-2:358333225340:task-definition/sage-frontend:1",\n        "containerDefinitions": [\n            {\n                "environment": [],\n                "name": "sage-frontend",\n                "mountPoints": [],\n                "image": "358354085340.dkr.ecr.us-east-2.amazonaws.com/ecstestecr:sage-frontend",\n                "cpu": 512,\n                "portMappings": [\n                    {\n                        "protocol": "tcp",\n                        "containerPort": 80,\n                        "hostPort": 80\n                    }\n                ],\n                "memory": 1024,\n                "essential": true,\n                "volumesFrom": []\n            }\n        ],\n        "revision": 1\n    }\n}\n')),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"If your administrator has chosen the EC2 service, then create ECS EC2 Services"),Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"To create a service with ECS EC2, run simialiar AWS CLI command for each Task Definition previously created. Below is an example using the commondata container. Ensure you use the correct network and cluster values for your environment.")),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'/usr/local/bin/aws ecs create-service --cluster default-ecs-ec2 --service-name commondata --task-definition commondata-ec2:7 --desired-count 2 --launch-type EC2 --network-configuration "awsvpcConfiguration={subnets=[subnet-xxxxxx5b024557fe5],securityGroups=[ sg-0035ba27e231xxxxxx],assignPublicIp=DISABLED}"\n')))),Object(r.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},Object(r.a)("strong",{parentName:"p"},"IS THIS NECESSARY"),"\nIt\u2019s recommended to run GitLab on EC2 due to recent compatability contingencies."))),Object(r.a)("p",null,"Below you will find an example of a successful output when the Sage-Frontend EC2 Task Definition is properly registered"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "service": {\n      "status": "ACTIVE",\n      "serviceRegistries": [],\n      "pendingCount": 0,\n      "launchType": "EC2",\n      "enableECSManagedTags": false,\n      "schedulingStrategy": "REPLICA",\n      "loadBalancers": [],\n      "placementConstraints": [],\n      "createdAt": 1607397320.811,\n      "desiredCount": 2,\n      "serviceName": "sage-frontend",\n      "clusterArn": "arn:aws:ecs:us-east-2:358354085340:cluster/dev-ec2-ecs",\n      "createdBy": "arn:aws:iam::358354085340:user/michael.a.schlosser@saic.com",\n      "taskDefinition": "arn:aws:ecs:us-east-2:358354085340:task-definition/sage-frontend-ec2:1",\n      "serviceArn": "arn:aws:ecs:us-east-2:358354085340:service/dev-ec2-ecs/sage-frontend",\n      "propagateTags": "NONE",\n      "deploymentConfiguration": {\n          "maximumPercent": 200,\n          "minimumHealthyPercent": 100\n      },\n      "deployments": [\n          {\n              "status": "PRIMARY",\n              "pendingCount": 0,\n              "launchType": "EC2",\n              "createdAt": 1607397320.811,\n              "desiredCount": 2,\n              "taskDefinition": "arn:aws:ecs:us-east-2:358354085340:task-definition/sage-frontend-ec2:1",\n              "updatedAt": 1607397320.811,\n              "id": "ecs-svc/8272762167026254857",\n              "runningCount": 0\n          }\n      ],\n      "events": [],\n      "runningCount": 0,\n      "placementStrategy": []\n  }\n}\n\n')),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"IS THERE A STATEMENT OR STEP NEEDED FOR DEPLOYING? WE HAVE THE OUTPUT OF DEPLOYMENT BUT WHAT DEPLOYS IT")),Object(r.a)("p",null,"Below you will find an example of a successful output when ECS Service is properly deployed."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "service": {\n        "serviceArn": "arn:aws:ecs:us-east-2:358354085340:service/default-ecs-ec2/commondata",\n        "serviceName": "commondata",\n        "clusterArn": "arn:aws:ecs:us-east-2:358354085340:cluster/default-ecs-ec2",\n        "loadBalancers": [],\n        "serviceRegistries": [],\n        "status": "ACTIVE",\n        "desiredCount": 2,\n        "runningCount": 0,\n        "pendingCount": 0,\n        "launchType": "EC2",\n        "taskDefinition": "arn:aws:ecs:us-east-2:358354085340:task-definition/test-commondata-ec2:7",\n        "deploymentConfiguration": {\n            "deploymentCircuitBreaker": {\n                "enable": false,\n                "rollback": false\n            },\n            "maximumPercent": 200,\n            "minimumHealthyPercent": 100\n        },\n        "deployments": [\n            {\n                "id": "ecs-svc/1675382415882992629",\n                "status": "PRIMARY",\n                "taskDefinition": "arn:aws:ecs:us-east-2:358354085340:task-definition/test-commondata-ec2:7",\n                "desiredCount": 2,\n                "pendingCount": 0,\n                "runningCount": 0,\n                "failedTasks": 0,\n                "createdAt": "2020-12-11T02:49:20.433000+00:00",\n                "updatedAt": "2020-12-11T02:49:20.433000+00:00",\n                "launchType": "EC2",\n                "networkConfiguration": {\n                    "awsvpcConfiguration": {\n                        "subnets": [\n                            "subnet-05e5075b024557fe5"\n                        ],\n                        "securityGroups": [\n                            "sg-0035ba27e231bd006"\n                        ],\n                        "assignPublicIp": "DISABLED"\n                    }\n                },\n                "rolloutState": "IN_PROGRESS",\n                "rolloutStateReason": "ECS deployment ecs-svc/1675382415882992629 in progress."\n            }\n        ],\n        "roleArn": "arn:aws:iam::358354085340:role/aws-service-role/ecs.amazonaws.com/AWSServiceRoleForECS",\n        "events": [],\n        "createdAt": "2020-12-11T02:49:20.433000+00:00",\n        "placementConstraints": [],\n        "placementStrategy": [],\n        "networkConfiguration": {\n            "awsvpcConfiguration": {\n                "subnets": [\n                    "subnet-05e5075b024557fe5"\n                ],\n                "securityGroups": [\n                    "sg-0035ba27e231bd006"\n                ],\n                "assignPublicIp": "DISABLED"\n            }\n        },\n        "schedulingStrategy": "REPLICA",\n        "createdBy": "arn:aws:iam::358354085340:user/michael.a.schlosser@saic.com",\n        "enableECSManagedTags": false,\n        "propagateTags": "NONE"\n    }\n')),Object(r.a)("h3",{id:"managing-sensitive-environment-variables"},"Managing Sensitive Environment Variables"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"NEED SOME WORDS ABOUT WHAT THIS IS AND WHAT IT'S DOING. SEEMS LIKE THERE SHOULD BE MORE INFO HERE")),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Use System Manager and perform the following:")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'{\n"containerDefinitions": [{\n  "secrets": [{\n    "name": "environment_variable_name",\n    "valueFrom": "arn:aws:ssm:region:aws_account_id:parameter/parameter_name"\n  }]\n}]\n}\n\n')),Object(r.a)("p",null,"If you need assistance with sensitve data parameters refer to this ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html"}),"AWS Documentation"),". 2. Use Secrets Manager and perform the following:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'{\n"containerDefinitions": [{\n  "secrets": [{\n    "name": "environment_variable_name",\n    "valueFrom": "arn:aws:secretsmanager:region:aws_account_id:secret:secret_name-AbCdEf"\n    }]\n  }]\n}\n')),Object(r.a)("p",null,"If you need assistance with sensitive data secrets, refer to this ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html"}),"AWS Documentation"),"."),Object(r.a)("h2",{id:"troubleshooting-and-support"},"Troubleshooting and Support"),Object(r.a)("p",null,"If you experience issues with your installation or need support with your CloudScend Foresight installation, please refer to the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/sage-docs/docs/foresight-ops-diagnostic"}),"CloudScend Foresight Operations Guide"),"."))}u.isMDXComponent=!0},97:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var a=i.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},m=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,b=m["".concat(o,".").concat(d)]||m[d]||p[d]||r;return t?i.a.createElement(b,s(s({ref:a},l),{},{components:t})):i.a.createElement(b,s({ref:a},l))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);