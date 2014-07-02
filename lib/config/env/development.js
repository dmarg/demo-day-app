'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: 'mongodb://localhost/demoDayApp-dev'
  },
  linkedin: {
    apiKey: '776ag8e08yi6m9',
    secretKey: 'JsU6XmOKdSAS2x2a',
    oauthUserToken: '519a08b2-ecc4-4a8c-b54f-c38117d6fd1b',
    oauthUserSecret: 'bfb68246-38ff-48bc-9fdf-fb85e7208858',
    callbackUrl: 'http://localhost:9000/auth/linkedin/callback'

  }
};