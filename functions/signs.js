const axios = require('axios');

require('dotenv').config();

exports.handler = function instagram(event, context, callback) {
  const userId = process.env.USER_ID;
  const fields = 'id,%20caption,media_url,permalink';
  const token = process.env.IG_TOKEN;
  const url = `https://graph.instagram.com/${userId}/media/?fields=${fields}&access_token=${token}`;

  axios
    .get(url)
    .then(({ data: { data: posts } }) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(
          posts.map(i => ({
            id: i.id,
            url: i.media_url,
            caption: i.caption,
          })),
        ),
      })
    })
    .catch((e) => {
      callback(e)
    })
}