var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

dbHost=process.env.DB_HOST_NAME;
dbPort=process.env.DB_PORT;
apiBaseUrl = process.env.API_BASE_URL;
notificationRecHost = process.env.NOTIFICATION_RECEIVE_HOST;
notificationRecPort = process.env.NOTIFICATION_RECEIVE_PORT;

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'necCrowdCount'
    },
    port: 6350,
    db: 'mongodb://127.0.0.1:27017/surveillance-development',
    socketUrl:"http://212.47.249.75:5000",
    hostName:"is-ext1.nec-labs.com",
    zmq:{
      sendHost:"127.0.0.1",
      recHost:"*",
      port:'6351',
      queue:[
        {name:'surveillanceEventsDetection',portNo:'6351',type:'pull'}
      ]
    }
  },
  integration: {
    root: rootPath,
    app: {
      name: 'necCrowdCount'
    },
    db: 'mongodb://163.172.131.83:28018/surveillance',
    port: 6350,
    socketUrl:"http://212.47.249.75:5000",
    baseUrl:"http://is-ext1.nec-labs.com:3000",
    zmq:{
      sendHost:"212.47.249.75",
      recHost:"*",
      port:'6351',
      queue:[
        {name:'surveillanceEventsDetection',portNo:'6351',type:'pull'}
      ]
    }
  },
  test: {
    root: rootPath,
    app: {
      name: 'necCrowdCount'
    },
    port: 6350,
    db: 'mongodb://163.172.131.83:28018/surveillance',
    socketUrl:"http://212.47.249.75:5000",
    baseUrl:"http://is-ext1.nec-labs.com:3000",
    zmq:{
      sendHost:"212.47.249.75",
      recHost:"*",
      port:'6351',
      queue:[
        {name:'surveillanceEventsDetection',portNo:'6351',type:'pull'}
      ]
    }
  },
  production: {
    root: rootPath,
    app: {
      name: 'necCrowdCount'
    },
    port: 6350,
    db: 'mongodb://localhost:27027/surveillance',
    zmq:{
      sendHost:"localhsot",
      recHost:"*",
      queue:[
        {name:'surveillanceEventsDetection',portNo:'6351',type:'pull'}
      ]
    }
  }

};

module.exports = config[env];
