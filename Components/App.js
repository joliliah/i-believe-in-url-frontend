import Component from './Component.js';

class App extends Component {
  render() {
    const dom = this.renderDOM();

    return dom;
  }

  renderTemplate() {
    return /*html*/`
      <div>
      <h1>TINYFY YOUR URL!</h1>
        <form>
          <label>url <input name="long-url" required> </label>
          <button>TINYFY</button>
        </form>
        <p id="short-url"></p>
      </div>
  `;
  }
}

export default App;