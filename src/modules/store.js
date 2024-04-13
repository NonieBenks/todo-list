class Store {
  constructor() {}
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  retrieveLocalStorage() {
    if (localStorage.getItem("store") === null) {
      let store = {
        projects: [],
        mainQuest: {},
      };
      this.save("store", store);
      return store;
    } else {
      let store = JSON.parse(localStorage.getItem("store"));
      console.log(store);
      return store;
    }
  }
}
export { Store };
