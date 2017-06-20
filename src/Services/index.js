import axios from 'axios';

class Request {
  getWidgets() {
    const URL = 'http://dev.4all.com:3050/widgets';
    return axios.get(URL);
  }
  getGraphData() {
    const URL = 'http://dev.4all.com:3050/pageViews';
    return axios.get(URL);
  }
  getMessage() {
    const URL = 'http://dev.4all.com:3050/messages';
    return axios.get(URL);
  }
  setMessage(userName, message, time) {
    const URL = 'http://dev.4all.com:3050/messages';
    const PARAMS = {
      userName: userName,
      message: message,
      time: time,
    };
    return axios.post(URL, PARAMS);
  }
}

export default new Request();
