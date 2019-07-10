const UrlAPI = {
  setParam(key, value) {
    window.history.replaceState(null, null, `?${key}=${value}`);
  },

  getParam(key) {
    const params = new URL(window.location).searchParams;
    return params.get(key);
  }
};

export default UrlAPI;