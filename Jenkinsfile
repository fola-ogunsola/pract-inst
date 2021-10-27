pipeline {
    agent any
    stages {
        stage('Prepare') {
            steps {
                echo 'Instrail Admin Frontend Prepare Stage'
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Deploy') {
            when {
                branch 'develop'
            }
            steps {
                echo 'Instrail Admin Frontend Deploy Stage'
                sh 'ssh projects@44.239.126.131 "cd instrail-admin-frontend && git stash && git pull origin develop && npm install && pm2 restart instrail-admin-frontend"'
            }
        }
    }
}
