'use strict'

import fecha from 'fecha'

var date = new Date();
date.setDate(date.getDate() -0);
var todayDate = fecha.format(date, 'YYYY-MM-DD');
const API_URL = "http://api.tvmaze.com/schedule?country=US&date="

const queryStringPair = function(key, value) {
  return '&' + key + '=' + value
}

const fetch = (dayShift) => new Promise((resolve, reject) => {
    var date = new Date()
    dayShift = dayShift ? dayShift : 0
    date.setDate(date.getDate() + dayShift)
    var formattedDate = fecha.format(date, 'YYYY-MM-DD');
    var urlWithDate = API_URL + formattedDate
    var httpReq = new XMLHttpRequest()
    httpReq.open("GET", urlWithDate.replace(/\s/ig, "%20"), true)
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState !== 4) {
            return
        }
        if (httpReq.status !== 200) {
            reject("Unexpected HTTP status code: " + httpReq.status )
        }
        resolve(JSON.parse(httpReq.responseText))
    }
    httpReq.send()
})

exports = module.exports = fetch
