import Component from '../utilities/Component.js';

class Clock extends Component {
    render() {
        const dom = this.renderDOM();

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div id="clock-div"> 
            <div> 
                <span class="days" id="day"></span> 
                <div class="smalltext">Days:</div> 
            </div> 
            <div> 
                <span class="hours" id="hour"></span> 
                <div class="smalltext">Hours:</div> 
            </div> 
            <div> 
                <span class="minutes" id="minute"></span> 
                <div class="smalltext">Minutes:</div> 
            </div> 
            <div> 
                <span class="seconds" id="second"></span> 
                <div class="smalltext">Seconds:</div> 
            </div> 
        </div> 
        `;
    }
}
export default Clock;