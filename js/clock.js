let count = 0;
let countId = 0
let min = 0;
let hour = 0;
let sl  = 0
const rating = document.getElementById('count');
const minContent = document.getElementById('min');
const hours = document.getElementById('hours');
const stopButton = document.getElementById('stop');
stopButton.disabled=true;

const start = () => {

    countId = setInterval(() => {
        stopButton.disabled=false;
        ++count
        if (count === 60) {
            rating.textContent = '00';
            count = 0;

            // min start
            ++min;
            if (min===60) {
                minContent.textContent='00'
                min=0;

                // hour start
                hour++
                if (hour===24) {
                    hour=0;
                    hours.textContent='00';

                }
                else if (hour<9) {
                    hours.textContent=`0${hour}`;
                }

                else{
                    hours.textContent=hour;
                }
            }
            else if (min<9) {
                minContent.textContent=`0${min}`;
            }
            else{
                minContent.textContent=min;
            }
        }
        else if (count < 10) {
            rating.textContent = `0${count}`
        }
        else {
            rating.textContent = count;
        }
    }, 1000)

}


const tbody = document.getElementById('tbody');
const stop = () => {
    clearInterval(countId);
    const tr = document.createElement('tr');
    tr.innerHTML = `
    
      <th>${sl+1}</th>
      <td class="font-bold">${hour} <sub> hour </sub> : ${min}  <sub> min </sub>  : ${count} <sub> sec </sub> </td>
    
    `
    tbody.appendChild(tr);
    sl++;
}

const reset = () => {
    count = 0;
    min=0;
    hour=0;
    sl=0; 
    tbody.textContent = '';
    rating.textContent = '00';
    minContent.textContent = '00';
    hours.textContent = '00';
    stopButton.disabled=true;
}


