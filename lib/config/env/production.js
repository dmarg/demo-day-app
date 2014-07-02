'use strict';

module.exports = {
  env: 'production',
  ip:   process.env.OPENSHIFT_NODEJS_IP ||
        process.env.IP ||
        '0.0.0.0',
  port: process.env.OPENSHIFT_NODEJS_PORT ||
        process.env.PORT ||
        8080,
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
         'mongodb://localhost/fullstack'
  },
  linkedin: {
    apiKey: '776ag8e08yi6m9',
    secretKey: 'JsU6XmOKdSAS2x2a',
    oauthUserToken: '519a08b2-ecc4-4a8c-b54f-c38117d6fd1b',
    oauthUserSecret: 'bfb68246-38ff-48bc-9fdf-fb85e7208858',
    callbackUrl: 'http://dreamitdemodayapp.herokuapp.com/auth/linkedin/callback'
  }
};