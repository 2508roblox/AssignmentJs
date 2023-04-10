
const couter = (hour, min, sec) => {
    setInterval(() => {
        if (sec === 0 && hour >= 0) {
            min--
            sec = 59
        } else if (min == -1) {
            min = 59
            hour--
        } else if (hour == -1) {

            return;

        } else {
            sec--
        }
        document.querySelector('.hours').setAttribute('style', `--value:${hour};`)
        document.querySelector('.min').setAttribute('style', `--value:${min};`)
        document.querySelector('.sec').setAttribute('style', `--value:${sec};`)
        // document.querySelector('.counter ').innerHTML = `
        // <div  class="grid grid-flow-col gap-1 text-center auto-cols-max">
        //                         <div  class="text-1xl flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        //                             <span class="countdown font-mono text-2xl">
        //                                 <span class="hours" style="--value:${hour};"></span>
        //                             </span>
        //                             hours
        //                         </div>

        //                         <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        //                             <span class="countdown font-mono text-2xl">
        //                                 <span class="min" style="--value:${min};"></span>
        //                             </span>
        //                             min
        //                         </div>
        //                         <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        //                             <span class="countdown font-mono text-2xl">
        //                                 <span class="sec" style="--value:${sec};"></span>
        //                             </span>
        //                             sec
        //                         </div>
        //                     </div>

        // `

    }, 1000)


}

console.log(couter(2, 12, 56));
