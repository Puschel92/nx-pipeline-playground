pipeline {
    agent none
    stages {
        stage('Build') {
            agent any
            steps {
                script {
                                    def nodeVersion = '22.13.1' // Or your preferred Node.js version

                                    // Use nvm or similar to manage Node.js versions if needed
                                    sh "nvm install ${nodeVersion}"
                                    sh "nvm use ${nodeVersion}"
                                    sh "node -v"
                                    sh "npm -v"

                                    // Restore node_modules from cache if available
                                    try {
                                        input message: 'Restore node_modules from cache?', submitter: 'admin' // Optional input
                                        stash includes: 'node_modules'
                                        echo "Restored node_modules from cache."
                                    } catch (err) {
                                        echo "No node_modules cache found. Installing dependencies."
                                    }

                                    sh 'yarn install --frozen-lockfile' // Install dependencies

                                    // Build the application(s)
                                    sh 'yarn nx build my-app --prod' // Replace my-app with the actual app name
                                    // Or build all apps:
                                    // sh 'yarn nx run-many --target=build --all --prod'

                                    // Run tests
                                    sh 'yarn nx test my-app --watch=false --coverage' // Replace my-app with the actual app name
                                    // Or test all apps:
                                    // sh 'yarn nx run-many --target=test --all --watch=false --coverage'

                                    // Lint the code (optional)
                                    sh 'yarn nx lint my-app' // Replace my-app or use --all

                                    // Cache node_modules for future builds
                                    stash includes: 'node_modules'
                                }
            }
        }
        stage('Test') {
            agent any
            steps {
                echo "Testing.."
            }
        }
        stage('Deliver') {
            agent any
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}
