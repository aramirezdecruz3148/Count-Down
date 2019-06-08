import Component from '../utilities/Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/`
        <header>
            <h1 class="title">The Final Count Down!</h1>
        </header>
        `;
    }
}
export default Header;