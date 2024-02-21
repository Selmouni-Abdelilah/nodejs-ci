pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from your version control system
                git 'https://github.com/Selmouni-Abdelilah/nodejs-ci.git'
            }
        }
        stage('Install dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                // Run Jest tests
                sh 'npm test'
            }
        }
        stage('Cleanup') {
            steps {
                // Clean up any artifacts or temporary files if necessary
                sh 'npm clean'
            }
        }
    }
    
    post {
        always {
            // Archive your test results
            archiveArtifacts artifacts: 'test-results/**/*.xml'
            // Publish test results
            junit 'test-results/**/*.xml'
        }
        success {
            // Notify success
            echo 'Tests passed successfully!'
        }
        failure {
            // Notify failure
            echo 'Tests failed!'
        }
    }
}