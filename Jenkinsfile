pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from your version control system
                 checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'GitHubcredentials', url: 'https://github.com/Selmouni-Abdelilah/nodejs-ci.git']])
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
