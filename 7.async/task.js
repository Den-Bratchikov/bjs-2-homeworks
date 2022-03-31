class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.timerId = []
    }

    addClock(hhmm, alarmOn, id) {
        if (this.addClock.arguments.length < 3 || id != undefined || id != null) { // мб тут переделать на выражения "длина аргументов и undefined" или "длина аргументов и null"
            throw new Error('Будильник не передан')
        } else {
            try {   
                let result = this.alarmCollection.find(el => el.alarmId === id) 
                if (result != undefined) {
                        throw new Error('Такой будильник уже есть')
                    } else {
                        return this.alarmCollection.push({alarmId: id, alarmTime: hhmm, callback: alarmOn})
                    }
            } catch (e) {
                    console.log(e.message) 
            } finally {
                    return this.alarmCollection 
            }

        } 
            
    }

    removeClock(id) {
        let result = this.alarmCollection.filter(element => element.alarmId != id)

        if (result.length > this.alarmCollection.length) {
            console.log ("Будильник успешно удален");
            return this.alarmCollection = result
        } else {
            console.log ("не смог удалить будильник");
            return this.alarmCollection
        }
    }

    getCurrentFormattedTime() {
        let currentdate = new Date();
        let datetime = currentdate.getHours() + ":" + currentdate.getMinutes();
        return datetime
    }

    start() {
        checkClock(alarm) {
            if (getCurrentFormattedTime() === alarm.alarmTime) {
                return alarm.alarmOn()
            } 
        }
        
        setInterval() {
            checkClock(alarm)
        }
    }

    stop() {
        if (this.timerId.length > 0) {
            
            let timerID = this.timerId.find((element) => this.alarmCollection.alarmId === element)
            clearTimeout(timerID)
        }
        
    }

    printAlarms(){
        this.alarmCollection.forEach(element => {
            console.log('id ' + element.alarmId + '   ' + 'time: ' + element.alarmTime)
        });
    }

    clearAlarms() {
        this.timerId = []
    }
}