var observers = {};
let instance = null;

class NotificationService {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    removeObserver = (observer, notificationName) => {
        var obs = observers[notificationName];

        if (obs) {
            for (let x = 0; x < obs.length; x++) {
                if (observer == obs[x].observer) {
                    obs.splice(x, 1);
                    observers[notificationName] = obs;
                    break;
                }                
            }
        }
    }

    addObserver = (notificationName, observer, callBack) => {
        let obs = observers[notificationName];

        if (!obs) {
            observers[notificationName] = [];
        }

        let obj = {observer: observer, callBack: callBack};
        observers[notificationName].push(obj);
    }
}

export default NotificationService;