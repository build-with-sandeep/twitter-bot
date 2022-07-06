const { TwitterApi } = require('twitter-api-v2');

const userClient = new TwitterApi({
    appKey: 'deD73odgLJxEfus34jDCZufbp',
    appSecret: 'n9N5nLZqI8JhAO1uochktsiUMcW4mfA3BN1nlmXMjqs0ggYqS4consumerAppSecret',
    // Following access tokens are not required if you are
    // at part 1 of user-auth process (ask for a request token)
    // or if you want a app-only client (see below)
    accessToken: '1497238827811086336-cp1mmMTPVlmdTMEzZ18SvAtvxLy1Ao',
    accessSecret: 'zfI5KPaeHPgLmFAMmYQi7cyUgEuhUL4v7tNorc2CBtENE',
    
  });
  const appOnlyClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAFtXeAEAAAAAVulnj%2FxKTaC%2Fon5d4HvOMuYe%2Fik%3Dw6QnCuhuCgbhrt1FHXlIhShbbdnI0PbN8iMET9fiCwRhtAUppo');
  const rwClient=userClient.readWrite;

  module.exports=rwClient;