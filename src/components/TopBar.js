export default class TopBar extends HTMLElement {
  static tagName = 'top-bar';

  set config(newConfig) {
    this._shouldNavigateUpShown = false;
    this._title = newConfig.title;
    this._onBackPressed = newConfig.onBackPressed;
    this.render();

    const { shouldNavigateUpShown } = newConfig;

    if (!shouldNavigateUpShown && typeof(shouldNavigateUpShown) == 'boolean') {
      this._shouldNavigateUpShown = shouldNavigateUpShown;
      this.shouldShowNavigateUp();
    }
  }

  shouldShowNavigateUp() {
    if (this._shouldNavigateUpShown) {
      this.querySelector('.back-button').style.visibility = 'visible';
    } else {
      this.querySelector('.back-button').style.visibility = 'hidden';
    }
  }

  render() {
    this.innerHTML = `
      <header>
        <nav>
          <a href='/'>${this._title}</a>
        </nav>
        <div class='back-button'>
          <button>Back</button>
        </div>
      </header>
    `;

    this.querySelector('.back-button').addEventListener('click', this._onBackPressed);
  }
}

customElements.define(TopBar.tagName, TopBar);