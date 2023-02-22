class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
 
    }
    addClock(time, callback) {
        this.time = time;
        this.canCall = true;
        this.callback = callback;
       if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
      }
      if (!this.alarmCollection.find(item => (item == time))) {
        const clock = {time: this.time, callback: this.callback, canCall: this.canCall};
        this.alarmCollection.push(clock);
      }
      else {
        console.warn('Уже присутствует звонок на это же время');
      }
    return this.alarmCollection;
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => (item.time != time));
        return this.alarmCollection; 
        
    }

    getCurrentFormattedTime() {
        const newDate = new Date();
        const getHour = newDate.getHours() > 9 ? newDate.getHours() : '0' + newDate.getHours();
        const getMinutes = newDate.getMinutes() > 9 ? newDate.getMinutes() : '0' + newDate.getMinutes();
        
        //const newTime = newDate.getHours() + ":" + getMinutes;
        return getHour + ":" + getMinutes;
    }
    start() {
        if(!this.intervalId) {
            this.intervalId = setTimeout(() => {
                if(this.alarmCollection.forEach((item) => item[this.time] == this.getCurrentFormattedTime)) {
                    this.alarmCollection.canCall = false;
                }
            }, 1000);
            return this.intervalId;
        }
       
    }

    stop() {
        clearTimeout(this.intervalId);
        this.intervalId = null;
    }

    clearAlarms() {
        return this.alarmCollection = [];
    }

    resetAllCalls () {
     return this.alarmCollection.forEach((item) => item.canCall = true);
            
    }

}

 let clock = new AlarmClock();
 clock.addClock("12:23", 1);
 console.log(clock.alarmCollection[0].canCall);
 clock.addClock("12:24", 2);
 clock.addClock("12:25", 3);
 clock.addClock("12:23", 4);
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