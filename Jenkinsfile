pipeline {
    agent none
    stages {
        stage('Build') {
            agent any
            steps {
                echo "Building.."
                sh "npm ci"
                sh '''
                '''
            }
        }
        stage('Test') {
            agent any
            steps {
                echo "Testing.."
                sh '''
                '''
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
