pipeline {
    agent none
    environment {
        NX_BRANCH = env.BRANCH_NAME.replace('PR-', '')
    }
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
