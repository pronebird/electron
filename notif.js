const {Notification} = require('electron')

var notifs = []

function showNotif() {

  for (const notif of notifs) {
    notif.close()
  }

  notifs = []

  let notif = new Notification({ body: "Wat" })
  notif.on('close', () => {
    console.log('closed: %s', notif.body)
  })

  setTimeout(() => {
    notif.close()
  }, 4000)
  notifs.push(notif)

  notif.show()
}

module.exports = showNotif
