window.debug = false;


window.candies = 0;
window.chocolates = 0;

window.chocolate_men = 0;

let cps = 0.5;
window.getCps = () => cps;
window.chocolate_cps = 0;

let progressed = false;
let past_1000 = false;

window.currentBoost = "none";

window.cb_version = "1.0.0 gamma 2 hotfix";

window.farm_active = false;
window.mill_active = false;
window.forge_active = false;

window.mine_found = false;
window.forest_found = false;

window.figure_stage = 0;

window.clickSound = new Audio("click.wav");
window.buttonRolloverSound = new Audio("buttonrollover.wav");
window.quickSettingsClickSound = new Audio("quicksettingsclick.wav");
window.settingsClickSound = new Audio("button3.wav");
window.tadaSound = new Audio("tada_1.mp3");
window.warnedSound = new Audio("warned.mp3");
window.ravenholmSound = new Audio("ravenholm_1.mp3");
window.ravenholmSound.loop = true;
window.hi = new Audio("WAPP-Hi.wav");

const insufficientFundsAudioContext = new AudioContext();
const insufficientFundsGain = insufficientFundsAudioContext.createGain();
insufficientFundsGain.connect(insufficientFundsAudioContext.destination);
window.insufficientFundsGain = insufficientFundsGain;
const insufficientFundsSoundReady = fetch("insufficient funds.wav")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load insufficient funds.wav: " + response.status);
        }
        return response.arrayBuffer();
    })
    .then(data => insufficientFundsAudioContext.decodeAudioData(data));

function playInsufficientFundsSound(message) {
    if (!window.soundEnabled) {
        alert(message);
        return;
    }
    const resume = insufficientFundsAudioContext.resume();
    Promise.all([insufficientFundsSoundReady, resume]).then(([buffer]) => {
        const source = insufficientFundsAudioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(insufficientFundsGain);
        source.start();
        window.setTimeout(() => alert(message), 0);
    }).catch(err => {
        console.error(err);
        alert(message);
    });
}

let gameTickInterval = null;

window.updateGameTick = function() {
    if (gameTickInterval !== null) {
        window.clearInterval(gameTickInterval);
        gameTickInterval = null;
    }

    if (document.hidden && document.body.classList.contains("potato-mode")) {
        return;
    }

    gameTickInterval = window.setInterval(addCps, 1000);
};

document.addEventListener("visibilitychange", window.updateGameTick);
window.updateGameTick();

document.addEventListener("mouseover", function(event) {
    const button = event.target.closest("button");
    if (
        !button ||
        document.body.classList.contains("potato-mode") ||
        (event.relatedTarget instanceof Node && button.contains(event.relatedTarget))
    ) {
        return;
    }

    window.playSound(window.buttonRolloverSound);
});

// The callback function
function addCps() {
    let total_cps2 = cps;

    if (window.mill_active) {
        total_cps2 *= 2;
    }

    candies += total_cps2;
    if (candies >= 1000 && !past_1000) {
        alert(window.t("alertThreshold"));
        past_1000 = true;
    }
    var candieText = document.getElementById("candieText");
    candieText.textContent = window.t("candiesCount", { count: Math.round(candies) });

    if (window.farm_active) {
        var totalCps = chocolate_cps;
        if (window.currentBoost == "cherry") {
            totalCps *= 4;
            if (Math.random() < 0.1) {
                window.chocolates *= 0.8;
            }
        }
        else if (window.currentBoost == "bananas") {
            totalCps *= 2.2;
        }
        if (window.mill_active){
            totalCps *= 0.2;
        }
        chocolates += totalCps;
        var chocolateText = document.getElementById("chocolate_count");
        var chocolateProd = document.getElementById("chocolate_prod");
        chocolateProd.textContent = window.t("chocolateProduction", { count: totalCps });
        chocolateText.textContent = window.t("chocolateCount", { count: Math.round(chocolates) });
    }

    window.unlock_upgrades(generalUpgrades);
    window.unlock_upgrades(specializedUpgrades);
    if (past_1000) {
        if (window.figure_stage == 0) {
            window.unlock_upgrades(figure1);
        }
        if (window.figure_stage == 1) {
            window.unlock_upgrades(figure2);
        }
        if (window.figure_stage == 2) {
            window.unlock_upgrades(figure3);
        }
        if (window.figure_stage == 3) {
            window.unlock_upgrades(figure4);
        }
        if (window.figure_stage == 4) {
            window.unlock_upgrades(figure5);
        }
        if (window.figure_stage == 5) {
            window.unlock_upgrades(figure6);
        }
        if (window.figure_stage == 6) {
            window.unlock_upgrades(figure7);
        }
        if (window.figure_stage == 7) {
            window.unlock_upgrades_kevin(kevinUpgrades);
            window.unlock_upgrades_kevin_chocolates(kevinUpgradesChocolate);
        }

    }

}

function playClickSound() {
    window.playSound(window.clickSound);
}



function buyUpg(upg) {
    if (candies >= upg.cost) {
        playClickSound();
        try {
             upg.buy();
        } catch (error) {
              alert(window.t("buyError", { message: error.message }));
              return;
        }
        const button = document.getElementById(upg.name);

        


        if (button) button.remove();

        console.log("bought!");
    } else {
        playInsufficientFundsSound(window.t("notEnoughCandies", {
            name: window.translateUpgradeName(upg.name)
        }));
    }
}

function buyUpgChoc(upg) {
    if (chocolates >= upg.cost) {
        playClickSound();
        try {
             upg.buy();
        } catch (error) {
              alert(window.t("buyError", { message: error.message }));
              return;
        }
        const button = document.getElementById(upg.name);

        


        if (button) button.remove();

        console.log("bought!");
    } else {
        playInsufficientFundsSound(window.t("notEnoughChocolates", {
            name: window.translateUpgradeName(upg.name)
        }));
    }
}


class upgrade {
    constructor(name, cost, cps, unlocked) {
        this.name = name;
        this.cost = cost;
        this.cps = cps;
        this.unlocked = unlocked;
    }

    buy() {
        candies -= this.cost;
        cps += this.cps;
        progressed = true;
        document.getElementById("candieText").textContent =
            window.t("candiesCount", { count: Math.round(candies) });
    }
}

class specializedUpgrade {
    constructor(name, cost, unlocked, onBuy = null, options = {}) {
        this.name = name;
        this.cost = cost;
        this.unlocked = unlocked;
        this.onBuy = onBuy;
        this.requires = options.requires || null;
        this.unlockThreshold = options.unlockThreshold;
        this.displayCost = options.displayCost;
    }

    buy() {
        candies -= this.cost;
        progressed = true;
        document.getElementById("candieText").textContent =
            window.t("candiesCount", { count: Math.round(candies) });
        if (this.onBuy) {
            this.onBuy(this);
        }
    }
}

class specializedUpgradeChocolate {
    constructor(name, cost, unlocked, onBuy = null) {
        this.name = name;
        this.cost = cost;
        this.unlocked = unlocked;
        this.onBuy = onBuy;
    }

    buy() {
        chocolates -= this.cost;
        progressed = true;
        document.getElementById("chocolate_count").textContent =
            window.t("chocolateShortCount", { count: Math.round(chocolates) });
        if (this.onBuy) {
            this.onBuy(this);
        }
    }
}




// asjhnfaslkfaslksjflaksjfa
//asfohlfhasfhasiopfhasojhasoifas
//okasnisnfasfinasoifasnfa
//aoshfoasfhnaishnfaisofnasofin

document.addEventListener("DOMContentLoaded", function() {
    // Find the element by its ID, class, or tag
    document.title = "candybank V" + window.cb_version;
    let vtext = document.getElementById("ihasd");
    if (vtext) {
        vtext.textContent = "V" + window.cb_version;
    }
});

window.addEventListener('beforeunload', function (e) {
    if (!progressed) {
        return;
    }
    // Cancels the event to trigger the confirmation dialog
    e.preventDefault();
    
    // Required by older versions of Chrome and some other modern browsers
    e.returnValue = ''; 
});




window.win = function() {
    alert(window.t("winAlert"));
    const winSec= document.getElementById("end");
    const farm= document.getElementById("farm");
    if (winSec) {
        winSec.hidden = false;
    }
    if (farm) {
        farm.hidden = true;
    }
}

window.buyWIN = function() {
    if (candies >= 49999) {
        window.playSound(window.tadaSound);
        candies -= 49999;
        window.win();
    } else {
        playInsufficientFundsSound(window.t("notEnoughWin"));
    }
}

window.toggleDebug = function() {
    window.playSound(window.quickSettingsClickSound);
    window.debug = !window.debug;
    if (window.debug) {
        alert(window.t("debugEnabled"));
        cps = 300000;
        window.chocolate_cps = 300000;
    } else {
        alert(window.t("debugDisabled"));
    }
    
}





var generalUpgrades = [
    new upgrade("imaginary workers", 9, 1, false),
    new upgrade("cookies", 29, 2, false),
    new upgrade("hypercaffeinated soda", 49, 4, false)
];

var specializedUpgrades = [
    new specializedUpgrade("a feature", 99, false, window.unlock_chocolate),
    new specializedUpgrade("a feature", 599, false, window.unlock_mill)
];

var kevinUpgrades = [
    new specializedUpgrade("banana flavoured candy", 849, false, (upg) => window.buy_fertilizer(upg, "bananas")),
    new specializedUpgrade("cherry flavoured candy", 1399, false, (upg) => window.buy_fertilizer(upg, "cherry")),
    
]

var kevinUpgradesChocolate = [
    new specializedUpgradeChocolate("chocolate men", 29, false, (upg) => window.unlock_chocolate_men(upg)),
    new specializedUpgradeChocolate("the mines", 99, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
]

var choc_men = [
    new specializedUpgradeChocolate("chocolate men", 29, false, (upg) => window.unlock_chocolate_men(upg)),
    new specializedUpgradeChocolate("the mines", 99, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
]

var figure1 = [
    new specializedUpgrade("look", 1, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];
var figure2 = [
    new specializedUpgrade("look closer", 2, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];
var figure3 = [
    new specializedUpgrade("what is that", 4, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];
var figure4 = [
    new specializedUpgrade("walk closer", 8, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];
var figure5 = [
    new specializedUpgrade("walk closer", 16, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];
var figure6 = [
    new specializedUpgrade("wave", 32, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];
var figure7 = [
    new specializedUpgrade("wave", 64, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];