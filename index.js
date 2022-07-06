const rwClient=require('./twitterClient.js');
const { TwitterApi } = require('twitter-api-v2');

const tweet= async()=>{
    try{
        await rwClient.v1.tweet('twitter-api-v2 is awesome!', {
            lat: 1.23,
            long: -13.392,
          });
    } catch(e){
        console.log(e);
    }
}

tweet()


//.log(result); // TweetV2[]