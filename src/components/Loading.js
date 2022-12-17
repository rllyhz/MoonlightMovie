export default class Loading extends HTMLElement {
  static tagName = 'loading-ui'

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
      <style>
        .loading-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 120px;
        }
        .loading-wrapper .loading {
          border: 4px solid var(--grey-color);
          border-top: 4px solid var(--secondary-color);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>

      <div class='loading-wrapper'>
        <div class='loading'></div>
      </div>
    `;
  }
}

customElements.define(Loading.tagName, Loading);