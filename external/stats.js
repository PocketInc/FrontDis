const si = require('systeminformation');
const du = require('du')
const pidusage = require("pidusage");

  setInterval(() => {
if (state == true) {
  pidusage(ls.pid, function (err, stats) {

    document.getElementById("cpu").innerHTML = parseInt(stats.cpu) + "%"
    document.getElementById("memory").innerHTML = parseInt(stats.memory / 1000000) + " MB"
  })
} else {
  document.getElementById("cpu").innerHTML = "0%";
  document.getElementById("memory").innerHTML = "0 MB";
}
  new du("./bot/").then(size => document.getElementById("disk").innerHTML = parseInt(size / 1000000) + " MB");

    }, 3000)
