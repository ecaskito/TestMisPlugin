/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

window.addEventListener('load', function () {
    document.addEventListener("deviceReady", deviceReady, false);
}, false);

function deviceReady() {
    try {
        var startDate = new Date("July 19, 2013 8:00:00");
        var endDate = new Date("July 19, 2013 18:00:00");
        var notes = "Arrive on time, don't want to miss out (from Android)";
        var title = "PhoneGap Day";
        var location = "Portland, OR";
        var notes = "Arrive on time, don't want to miss out!";
        var success = function() { alert("Success"); };
        var error = function(message) { alert("Oopsie! " + message); };
        window.CalendarPlugin.createEvent(title, location, notes, startDate, endDate, success, error);

    }
    catch (ex) {
        alert("deviceReady error: "+ex.message);
    }
}