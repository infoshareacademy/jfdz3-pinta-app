/**
 * Created by enea on 06.04.17.
 */

import request from 'superagent'

const CALENDAR_ID = '0mq1so1lmi80c7omf4vcag0lo4@group.calendar.google.com'
const API_KEY = 'AIzaSyBBncpyjdKrgvQD0wd5rCozlFgewffJnIc'
let url = `https://www.googleapis.com/calendar/v3/calendars/${0mq1so1lmi80c7omf4vcag0lo4@group.calendar.google.com}/events?key=${AIzaSyBBncpyjdKrgvQD0wd5rCozlFgewffJnIc}`

export function getEvents (callback) {
    request
        .get(url)
        .end((err, resp) => {
            if (!err) {
                const events = []
                JSON.parse(resp.text).items.map((event) => {
                    events.push({
                        start: event.start.date || event.start.dateTime,
                        end: event.end.date || event.end.dateTime,
                        title: event.summary,
                    })
                })
                callback(events)
            }
        })
}