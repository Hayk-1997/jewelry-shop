pipeline {
    agent any
    
    tools {
        nodejs 'Node-18.20.8'  // Use the name you configured above
    }
    
    stages {
        stage('Check Node Version') {
            steps {
                sh 'node --version'  // Verify correct version
                sh 'npm --version'
            }
        }
        
        stage('Build Next.js') {
            steps {
                sh 'npm ci'  // Install dependencies
                sh 'npm run build'
            }
        }
    }
}
