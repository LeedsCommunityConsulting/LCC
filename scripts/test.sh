#!/bin/bash

exitfn () {
    trap SIGINT             
    kill $1 
    exit                 
}

function test_wrapper () {
	printf "\033[32m$1\033[0m\n"
	while true ; do 
		echo -n '.'
		sleep 1
	done &
	bgid=$! 
	trap "exitfn $bgid" INT  
	eval $2
	kill $bgid
	if [ $? -ne "0" ]
	then
		printf "\033[31m$3 Error: please fix\033[0m\n"
		exit
	fi
	echo ""
}

test_wrapper "Running npm ci" 'npm ci >&/dev/null' 'Install'
test_wrapper "Testing npm run build" 'npm run build 1>/dev/null' 'Build' 
test_wrapper "Testing unit tests" 'npm run test --if-present 1>/dev/null' "Testing"
test_wrapper "Checking formatting" 'npm run format-check >&/dev/null' 'Format'

echo "All is well"