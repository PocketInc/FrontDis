const { spawn } = require("child_process");
var state = false;
let ls;
function startBot() {
    if (state == true) {
        document.getElementById("console").innerHTML += "<br><b class='text-primary'>[APP]</b> Bot is already online";
        document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
        return;
    }

    state = true;
        ls = spawn("node", ["bot/index.js"]);
        document.getElementById("console").innerHTML += "<br><b class='text-primary'>[APP]</b> Bot Started."
        document.getElementById("state").innerHTML = "Running...";
    document.getElementById("state").classList.remove("text-danger")
    document.getElementById("state").classList.add("text-success")

    document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
    ls.stdout.on("data", data => {
        document.getElementById("console").innerHTML += "<br>" + data;
        document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
    });

    ls.stderr.on("data", data => {
        document.getElementById("console").innerHTML += "<br>" + data;

        document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
    });

    ls.on('error', (error) => {
        document.getElementById("console").innerHTML += "<br><b class='text-danger'>[ERROR]</b> " + error;

        document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
    });

    ls.on("close", code => {
        document.getElementById("console").innerHTML += "<br><b class='text-primary'>[APP]</b> Bot Stopped.";
        document.getElementById("state").innerHTML = "Stopped";
        document.getElementById("state").classList.remove("text-success")
        document.getElementById("state").classList.add("text-danger")

        document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
        state=false;
    });
}
function stopBot() {
    if (state == false)  {
        document.getElementById("console").innerHTML += "<br><b class='text-primary'>[APP]</b> Bot is already offline";

        document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
        return;
        }
    state = false;
    ls.kill()
}

function sendCmd() {
    let cmd = document.getElementById("cmd").value;
    eval(cmd)
}
document.getElementById("cmd").addEventListener("keydown",function (event) {
    if (event.key == "Enter") sendCmd()
})

