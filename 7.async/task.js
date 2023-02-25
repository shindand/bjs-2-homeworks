class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
 
    }
    addClock(time, callback) {
       if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
      }
      if (this.alarmCollection.find(item => item.time == time)) {
       console.warn('Уже присутствует звонок на это же время');
        
      }
      this.alarmCollection.push({time: time, callback: callback, canCall: true});
      clock.start();
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => (item.time != time));
        
    }

    getCurrentFormattedTime() {
        const newDate = new Date();
        const getHour = newDate.getHours() > 9 ? newDate.getHours() : '0' + newDate.getHours();
        const getMinutes = newDate.getMinutes() > 9 ? newDate.getMinutes() : '0' + newDate.getMinutes();
        return getHour + ":" + getMinutes;
    }
    start() {
        if(!this.intervalId) {
            this.callback = () => {if(this.alarmCollection.forEach((item) => item.time == this.getCurrentFormattedTime()) && this.canCall == false) {
                             this.canCall = true;   
                             return;
                            }
                        }
        this.intervalId = setTimeout(callback, 1000);

         //  return this.alarmCollection.forEach((item) => console.log(item.time, this.getCurrentFormattedTime()));
           

    //    if(!this.intervalId) {
    //        this.intervalId = setTimeout(() => {
    //            if(this.alarmCollection.forEach((item) => item[this.time] == this.getCurrentFormattedTime())) {
    //                this.canCall = false;
    //            }
    //        }, 1000);
        //    return this.intervalId;
   
        }
       
    }

    stop() {
        clearTimeout(this.intervalId);
        this.intervalId = null;
    }

    clearAlarms() {
        this.alarmCollection = [];
        stop();
    }

    resetAllCalls () {
     this.alarmCollection.forEach((item) => item.canCall = true);
            
    }

}

const callback = f => f;
 let clock = new AlarmClock();
 clock.addClock("12:23", callback);
 console.log(clock.alarmCollection[0].canCall);
 clock.addClock("12:24", callback);
 clock.addClock("12:25", callback);
 clock.addClock("12:23", callback);
 console.log(clock.alarmCollection.length);
 clock.removeClock("12:24", 2);
 console.log(clock.alarmCollection);
 //console.log(clock.alarmCollection);
// console.log(clock.getCurrentFormattedTime);
 //console.log(clock.start);
 //clock.clearAlarms();
 //console.log(clock.alarmCollection);
 //console.log(clock.alarmCollection.length);
 //console.log(clock.getCurrentFormattedTime());
 
 clock.resetAllCalls();
 console.log(clock.alarmCollection[0].canCall);
 console.log(clock.alarmCollection[1].canCall);
 console.log(clock.alarmCollection[2].canCall);
 console.log(clock.alarmCollection);
 clock.start();