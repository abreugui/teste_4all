import axios from 'axios';

class Request {
  getWidgets() {
    const URL = 'http://dev.4all.com:3050/widgets'
    return axios.get(URL);
  }
  getGraphData() {
    const URL = 'http://dev.4all.com:3050/pageViews'
    return axios.get(URL);
  }
  getMessage() {
    const URL = 'http://dev.4all.com:3050/messages'
    return axios.get(URL);
  }
}

export default new Request();
