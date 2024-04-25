// Parent abstract class

class Quest {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
  setTitle(title) {
    this.title = title;
  }
}

export { Quest };
