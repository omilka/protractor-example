exports.config = {
    /**
     *  Uncomment ONE of the following to connect to: seleniumServerJar OR directConnect. Protractor
     *  will auto-start selenium if you uncomment the jar, or connect directly to chrome/firefox
     *  if you uncomment directConnect.
     */
    //seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    directConnect: true,

    specs: ['specs/homePageSpec.js'],
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',

    onPrepare: () => {
        browser.manage().window().maximize();


        const SpecReporter = require('jasmine-spec-reporter');
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'specs',
            }));


        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
            })
        );

    },

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
            prefs: {
                // disable chrome's  password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
       print: () => {},
        defaultTimeoutInterval: 50000
    }
};

require("babel-register")({
    presets: [ 'es2015' ]
});