pipeline {
    agent none
    tools {
        nodejs 'Node-22.13.1' // Use the name you configured in Global Tool Configuration
    }
    stages {
        stage('Build') {
            agent any
            steps {
                echo "Building.."
                sh "npm ci"
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
