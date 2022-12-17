let reloadCallback = null;
let preReloadCallback = null;
const history = [];

export const PATH = {
  home: 0,
  search: 1
};

export class Router {

  static onPreReload(callback) {
    preReloadCallback = callback;
  }

  static onReload(callback) {
    reloadCallback = callback;
  }

  static getActivePath() {
    return history[0];
  }

  static load({ initialPath }) {
    if (history.length <= 0) {
      history.push(initialPath);
    }

    if (preReloadCallback != null && typeof(preReloadCallback) == 'function') {
      preReloadCallback();
    }

    if (reloadCallback != null && typeof(reloadCallback) == 'function') {
      reloadCallback(history[0], null);
    }
  }

  static navigateTo(path, data = null) {
    history.unshift(path);

    if (preReloadCallback != null && typeof(preReloadCallback) == 'function') {
      preReloadCallback();
    }

    if (reloadCallback != null && typeof(reloadCallback) == 'function') {
      reloadCallback(history[0], data);
    }
  }

  static navigateUp() {
    if (history.length <= 1) {
      return;
    }

    history.shift();

    if (preReloadCallback != null && typeof(preReloadCallback) == 'function') {
      preReloadCallback();
    }

    if (reloadCallback != null && typeof(reloadCallback) == 'function') {
      reloadCallback(history[0], null);
    }
  }
}