import Component from '../utilities/Component.js';

class Clock extends Component {
    render() {
        const dom = this.renderDOM();
        const deadline = new Date('sept 25, 2019 18:01:00').getTime(); 
  
        const x = setInterval(function() { 
            const now = new Date().getTime(); 
            const timeDifference = deadline - now; 
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); 
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); 
            document.getElementById('day').innerHTML = days ; 
            document.getElementById('hour').innerHTML = hours; 
            document.getElementById('minute').innerHTML = minutes;  
            document.getElementById('second').innerHTML = seconds;  
            if(timeDifference < 0) { 
                clearInterval(x); 
                document.getElementById('clock-stopped').innerHTML = 'TIME UP'; 
                document.getElementById('day').innerHTML = '0'; 
                document.getElementById('hour').innerHTML = '0'; 
                document.getElementById('minute').innerHTML = '0' ;  
                document.getElementById('second').innerHTML = '0'; } 
        }, 1000);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div id="clock-div"> 
            <div> 
                <span class="days" id="day"></span> 
                <div class="small-text">Days:</div> 
            </div> 
            <div> 
                <span class="hours" id="hour"></span> 
                <div class="small-text">Hours:</div> 
            </div> 
            <div> 
                <span class="minutes" id="minute"></span> 
                <div class="small-text">Minutes:</div> 
            </div> 
            <div> 
                <span class="seconds" id="second"></span> 
                <div class="small-text">Seconds:</div> 
            </div> 
            <p id="clock-stopped"></p>
            <img src="assets/cat.gif">
        </div> 
        `;
    }
}
export default Clock;