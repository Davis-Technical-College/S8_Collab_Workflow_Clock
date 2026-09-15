const clock = document.querySelector('.clock');
const date = document.querySelector('.date');

// updates realtime below

const tick = () => {

    const now = new Date();
    const regHours = dateFns.format(now, 'hh');
    const standardFormat = dateFns.format(now, 'A');
    const date1 = dateFns.format(now, 'MMMM D, YYYY');
    const date2 = dateFns.format(now, 'D MMM YYYY');
    const date3 = dateFns.format(now, 'M/D/YY');
    const date4 = dateFns.format(now, 'D/M/YYYY');


    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    // different time formats
    const html = `Military Time: 
        <span>${h}</span>  :
        <span>${m}</span>  :
        <span>${s}</span>
        <br><br>
        Standard Time: 
        <span>${regHours}</span>  :
        <span>${m}</span>  :
        <span>${s} ${standardFormat}</span>
    `;
    // different date formats
    const dates = `
        Long Date: <span>${date1}</span>
        <br><br>
        Military Date: <span>${date2}</span>
        <br><br>
        Slash Date: <span>${date3}</span>
        <br><br>
        Euro Date: <span>${date4}</span>
    `;

    clock.innerHTML = html;
    date.innerHTML = dates;

};
//updates once a second
setInterval(tick, 1000);