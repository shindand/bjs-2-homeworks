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
        if(this.intervalId) {
           return;
        } 
        
        this.intervalId = setInterval(() => this.alarmCollection.forEach((item) => {if (item.time == this.getCurrentFormattedTime() && item.canCall == true) {
            item.canCall = false;
            item.callback();
          }
         }
       ), 1000);

        }

 

    stop() {
        clearTimeout(this.intervalId);
        this.intervalId = null;
    }

    clearAlarms() {
        this.alarmCollection = [];
        this.stop();
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
 
 clock.resetAllCalls();
 console.log(clock.alarmCollection[0].canCall);
 console.log(clock.alarmCollection[1].canCall);
 console.log(clock.alarmCollection[2].canCall);
 console.log(clock.alarmCollection);
 clock.start();

 
 