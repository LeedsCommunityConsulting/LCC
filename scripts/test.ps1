function Test-Wrapper ([string]$Log, [string]$Function, [string]$Name) { # Log, Function, Name 

	Write-Output $Log
	Invoke-Expression $Function
	if ( $LASTEXITCODE -ne 0 ) {
		Write-Warning "$($Name) Failed: Please check this and try again"
		exit
	}

}

Test-Wrapper "Running npm ci" 'npm ci *>$null' 'Install'
Test-Wrapper "Testing npm run build" 'npm run build | Out-Null' 'Build' 
Test-Wrapper "Testing unit tests" 'npm run test --if-present | Out-Null' "Testing"
Test-Wrapper "Checking formatting" 'npm run format-check *>$null' 'Format'