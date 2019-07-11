export const PARAM_FILTER = 'filter';
export const PARAM_SELECTED = 'selected';

const UrlAPI = {
  setParam(key, value) {
    const url = new URL(window.location);
    const params = url.searchParams;
    params.set(key, value);
    window.history.replaceState(null, null, url.toString());
  },

  clearParam(key) {
    const url = new URL(window.location);
    const params = url.searchParams;
    params.delete(key);
    window.history.replaceState(null, null, url.toString());
  },

  getParam(key) {
    const params = new URL(window.location).searchParams;
    return params.get(key);
  }
};

export default UrlAPI;