'use strict'

import fecha from 'fecha'

const date = new Date()
date.setDate(date.getDate() - 0)
const API_URL = 'http://api.tvmaze.com/schedule?country=US&date='

const fetch = dayShift => new Promise((resolve, reject) => {
  const date = new Date()
  dayShift = dayShift ? dayShift : 0
  date.setDate(date.getDate() + dayShift)
  const formattedDate = fecha.format(date, 'YYYY-MM-DD')
  const urlWithDate = API_URL + formattedDate
  const httpReq = new XMLHttpRequest()
  httpReq.open('GET', urlWithDate.replace(/\s/ig, '%20'), true)
  httpReq.onreadystatechange = function () {
    if (httpReq.readyState !== 4) {
      return
    }
    if (httpReq.status !== 200) {
      reject(new Error('Unexpected HTTP status code: ' + httpReq.status))
    }
    resolve(JSON.parse(httpReq.responseText))
  }
  httpReq.send()
})

export default fetch
