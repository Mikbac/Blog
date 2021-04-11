pipeline {
  agent none

  environment {
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }

  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:14-alpine'
        }
      }
      steps {
        sh 'npm --version'
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Unit tests - Karma and Jasmine') {
      agent {
        docker {
          image 'trion/ng-cli-karma:latest'
        }
      }
      environment {
        CHROME_BIN = '/usr/bin/chromium-browser'
        CHROME_PATH = '/usr/lib/chromium/'
      }
      steps {
        sh 'npm test'
      }
    }

  }
}
