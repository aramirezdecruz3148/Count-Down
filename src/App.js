import Component from '../utilities/Component.js';
import Header from './Header.js';
import Clock from './Clock.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        
        const header = new Header();
        dom.insertBefore(header.render(), main);

        const clock = new Clock();
        main.appendChild(clock.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main>
            </main>
        </div>
        `;
    }
}
export default App;