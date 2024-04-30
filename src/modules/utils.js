class Utils {
  goToUrl(param, value) {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(param, value);
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }
}

export { Utils };