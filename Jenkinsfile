pipeline {
    agent any
	tools {nodejs 'node'}
    
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'GitHubcredentials', url: 'https://github.com/Selmouni-Abdelilah/nodejs-ci.git']])
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
    }
    
    post {

        success {
            script {
                echo 'Build successful!'
            }
        }   
        failure {
            script {
                echo 'Build failed!'
            }
        }
    }
}
