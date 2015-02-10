cordova.define("cordova/plugin/calendar",
    function(require, exports, module) {
        var exec = require("cordova/exec");
//        var calendarPlugin = {
//    createEvent: function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
//        cordova.exec(
//            successCallback,
//            errorCallback,
//            'calendarPlugin',
//            'addCalendarEntry',
//            [{
//                "title": title,
//                "description": notes,
//                "eventLocation": location,
//                "startTimeMillis": startDate.getTime(),
//                "endTimeMillis": endDate.getTime()
//            }]
//        );
//     }
//}
        var calendarPlugin = function(){};
        calendarPlugin.prototype.createEvent=function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
            cordova.exec(
                successCallback,
                errorCallback,
                'calendarPlugin',
                'addCalendarEntry',
                [{
                    "title": title,
                    "description": notes,
                    "eventLocation": location,
                    "startTimeMillis": startDate.getTime(),
                    "endTimeMillis": endDate.getTime()
                }]
            );
        };

        var CalendarPlugin = new calendarPlugin();
        module.exports = CalendarPlugin;

    });

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.CalendarPlugin) {
    window.plugins.CalendarPlugin = cordova.require("cordova/plugin/calendar");
}