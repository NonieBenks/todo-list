class Utils {
  goToUrl(param, value) {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(param, value);
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }

  getCurrentPage() {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get("page");
  }

  clearQueryParams() {
    const urlObj = new URL(window.location);
    urlObj.search = "";
    window.history.replaceState({}, "", urlObj.href);
  }
}

export { Utils };
