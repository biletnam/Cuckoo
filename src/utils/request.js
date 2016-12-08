import request from 'reqwest';

function GET(url, data = {}) {
  return request({
    url,
    data,
  }).fail((err, msg) => {
    console.error(msg);
  });
}

export default {
  GET,
};
