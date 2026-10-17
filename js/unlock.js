window.unlock_upgrades = function(general_upgrades) {
    var generalUpgrades = general_upgrades;
    for (let i = 0; i < generalUpgrades.length; i++) {
        const currentUpgrade = generalUpgrades[i];
        if (currentUpgrade.requires && !currentUpgrade.requires()) {
            continue;
        }
        const unlockThreshold = currentUpgrade.unlockThreshold ?? currentUpgrade.cost / 2;
        if (candies >= unlockThreshold) {
            if (currentUpgrade.unlocked == false){
                var upg = document.createElement("button");
                upg.dataset.upgradeName = currentUpgrade.name;
                upg.dataset.upgradeCost = currentUpgrade.displayCost ?? currentUpgrade.cost + 1;
                upg.dataset.upgradeCurrency = "candies";
                upg.textContent = window.formatUpgradeButton(currentUpgrade.name, currentUpgrade.displayCost ?? currentUpgrade.cost + 1, "candies");
                upg.onclick = function() {
                    buyUpg(currentUpgrade);
                };
                upg.id = currentUpgrade.name;
                currentUpgrade.unlocked = true;
                var upsec = document.getElementById("upsec");
                upsec.appendChild(upg);
            }
        }
    }
}


window.unlock_upgrades_kevin = function(general_upgrades) {
    var generalUpgrades = general_upgrades;
    for (let i = 0; i < generalUpgrades.length; i++) {
        if (candies >= (generalUpgrades[i].cost / 2)) {
            if (generalUpgrades[i].unlocked == false){
                var upg = document.createElement("button");
                const currentUpgrade = generalUpgrades[i];
                upg.dataset.upgradeName = currentUpgrade.name;
                upg.dataset.upgradeCost = currentUpgrade.cost + 1;
                upg.dataset.upgradeCurrency = "candies";
                upg.textContent = window.formatUpgradeButton(currentUpgrade.name, currentUpgrade.cost + 1, "candies");
                upg.onclick = function() {
                    buyUpg(currentUpgrade);
                };
                upg.id = generalUpgrades[i].name;
                generalUpgrades[i].unlocked = true;
                var upsec = document.getElementById("kevin");
                upsec.appendChild(upg);
            }
        }
    }
}

window.unlock_upgrades_kevin_chocolates = function(general_upgrades) {
    var generalUpgrades = general_upgrades;
    for (let i = 0; i < generalUpgrades.length; i++) {
        if (window.chocolates >= (generalUpgrades[i].cost / 2)) {
            if (generalUpgrades[i].unlocked == false){
                var upg = document.createElement("button");
                const currentUpgrade = generalUpgrades[i];
                upg.dataset.upgradeName = currentUpgrade.name;
                upg.dataset.upgradeCost = currentUpgrade.cost + 1;
                upg.dataset.upgradeCurrency = "chocolates";
                upg.textContent = window.formatUpgradeButton(currentUpgrade.name, currentUpgrade.cost + 1, "chocolates");
                upg.onclick = function() {
                    buyUpgChoc(currentUpgrade);
                };
                upg.id = generalUpgrades[i].name;
                generalUpgrades[i].unlocked = true;
                var upsec = document.getElementById("kevin");
                upsec.appendChild(upg);
            }
        }
    }
}
