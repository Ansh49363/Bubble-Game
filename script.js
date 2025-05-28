alert("Are you ready to start the game ?");

var timer = 30;
var hitrn = 0;
var score = 0;

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 175; i++) {
        var rc = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rc}</div>`;
    }
    document.querySelector("#pnl-bt").innerHTML = clutter;
}

function runTime() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeinterval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pnl-bt").innerHTML = `<h1 class="result-text">Game Over ✌🏻
            <br> Your Score: ${score}
            <br> Go For More</h1>`;

            if (score > 250) {
                alert("are you an alien?");
            } else if (score > 200) {
                alert("You're such a skilled gamer");
            } else if (score > 150) {
                alert("nice");
            } else {
                alert("Game khelna nhi aata kya ?");
            }
        }
    }, 1000);
}

function getHit() {
    hitrn = Math.floor(Math.random() * 10);

    document.querySelector("#hitscore").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pnl-bt").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);

    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getHit();
    }
})

makeBubble();
runTime();
getHit();
