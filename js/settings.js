const languageCodes = ["en", "ta", "hi", "es", "zh", "ja", "ar", "ru"];
const messages = {
    candiesCount: ["you have {count} candies", "உங்களிடம் {count} மிட்டாய்கள் உள்ளன", "आपके पास {count} कैंडी हैं", "tienes {count} caramelos", "你有 {count} 颗糖果", "{count} 個のキャンディを持っています", "لديك {count} حلوى", "у вас {count} конфет"],
    chocolateCount: ["you have {count} chocolates", "உங்களிடம் {count} சாக்லேட்டுகள் உள்ளன", "आपके पास {count} चॉकलेट हैं", "tienes {count} chocolates", "你有 {count} 块巧克力", "{count} 個のチョコレートを持っています", "لديك {count} قطعة شوكولاتة", "у вас {count} шоколадок"],
    chocolateShortCount: ["chocolates: {count}", "சாக்லேட்டுகள்: {count}", "चॉकलेट: {count}", "chocolates: {count}", "巧克力：{count}", "チョコレート：{count}", "الشوكولاتة: {count}", "шоколад: {count}"],
    chocolateProduction: ["chocolates per second: {count}", "விநாடிக்கு சாக்லேட்டுகள்: {count}", "प्रति सेकंड चॉकलेट: {count}", "chocolates por segundo: {count}", "每秒巧克力：{count}", "毎秒のチョコレート：{count}", "الشوكولاتة في الثانية: {count}", "шоколада в секунду: {count}"],
    candiesPerSecond: ["candies per second: {count}", "விநாடிக்கு மிட்டாய்கள்: {count}", "प्रति सेकंड कैंडी: {count}", "caramelos por segundo: {count}", "每秒糖果：{count}", "毎秒のキャンディ：{count}", "الحلوى في الثانية: {count}", "конфет в секунду: {count}"],
    buyCandies: ["Buy {name} for {cost} candies", "{cost} மிட்டாய்களுக்கு {name} வாங்கு", "{cost} कैंडी में {name} खरीदें", "Compra {name} por {cost} caramelos", "花费 {cost} 颗糖果购买{name}", "{cost} 個のキャンディで{name}を購入", "اشترِ {name} مقابل {cost} حلوى", "Купить «{name}» за {cost} конфет"],
    buyChocolates: ["Buy {name} for {cost} chocolates", "{cost} சாக்லேட்டுகளுக்கு {name} வாங்கு", "{cost} चॉकलेट में {name} खरीदें", "Compra {name} por {cost} chocolates", "花费 {cost} 块巧克力购买{name}", "{cost} 個のチョコレートで{name}を購入", "اشترِ {name} مقابل {cost} قطعة شوكولاتة", "Купить «{name}» за {cost} шоколадок"],
    boostNone: ["none", "எதுவுமில்லை", "कुछ नहीं", "ninguno", "无", "なし", "لا شيء", "нет"],
    boostBanana: ["banana flavoured candy", "வாழைப்பழச் சுவை மிட்டாய்", "केले के स्वाद वाली कैंडी", "caramelo con sabor a plátano", "香蕉味糖果", "バナナ味キャンディ", "حلوى بنكهة الموز", "конфета с банановым вкусом"],
    boostCherry: ["cherry flavoured candy", "செர்ரி சுவை மிட்டாய்", "चेरी के स्वाद वाली कैंडी", "caramelo con sabor a cereza", "樱桃味糖果", "チェリー味キャンディ", "حلوى بنكهة الكرز", "конфета со вкусом вишни"],
    fertilizer: ["fertilizer", "உரம்", "खाद", "fertilizante", "肥料", "肥料", "سماد", "удобрение"],
    activateMill: ["activate mill", "ஆலையைச் செயல்படுத்து", "मिल चालू करें", "activar molino", "启动磨坊", "製粉機を起動", "تشغيل الطاحونة", "включить мельницу"],
    buyMen: ["buy chocolate men", "சாக்லேட் மனிதர்களை வாங்கு", "चॉकलेट पुरुष खरीदें", "comprar hombres de chocolate", "购买巧克力人", "チョコレート人間を購入", "شراء رجال الشوكولاتة", "купить шоколадных человечков"],
    buyMiner: ["buy miner", "சுரங்கத் தொழிலாளியை வாங்கு", "खनिक खरीदें", "comprar minero", "购买矿工", "採掘者を購入", "شراء عامل منجم", "купить шахтёра"],
    buyLumberjack: ["buy lumberjack", "மரம்வெட்டியை வாங்கு", "लकड़हारा खरीदें", "comprar leñador", "购买伐木工", "木こりを購入", "شراء حطّاب", "купить дровосека"],
    openBox: ["open the box?", "பெட்டியைத் திறக்கவா?", "डिब्बा खोलें?", "¿abrir la caja?", "打开盒子？", "箱を開けますか？", "هل تفتح الصندوق؟", "открыть коробку?"],
    youWon: ["you won!", "நீங்கள் வென்றீர்கள்!", "आप जीत गए!", "¡ganaste!", "你赢了！", "勝ちました！", "لقد فزت!", "вы выиграли!"],
    farmName: ["chocolate farm", "சாக்லேட் பண்ணை", "चॉकलेट का खेत", "granja de chocolate", "巧克力农场", "チョコレート農場", "مزرعة الشوكولاتة", "шоколадная ферма"],
    merchantName: ["kevin the candy merchant", "மிட்டாய் வணிகர் கெவின்", "कैंडी व्यापारी केविन", "Kevin, el comerciante de caramelos", "糖果商人凯文", "キャンディ商人ケビン", "كيفن تاجر الحلوى", "Кевин, торговец конфетами"],
    chocolateMenTitle: ["chocolate men", "சாக்லேட் மனிதர்கள்", "चॉकलेट पुरुष", "hombres de chocolate", "巧克力人", "チョコレート人間", "رجال الشوكولاتة", "шоколадные человечки"],
    forestName: ["lollipop forest", "லாலிபாப் காடு", "लॉलीपॉप का जंगल", "bosque de piruletas", "棒棒糖森林", "ロリポップの森", "غابة المصاصات", "лес леденцов"],
    boxName: ["the box", "பெட்டி", "डिब्बा", "la caja", "盒子", "箱", "الصندوق", "коробка"],
    settingsButton: ["Settings", "அமைப்புகள்", "सेटिंग्स", "Ajustes", "设置", "設定", "الإعدادات", "Настройки"],
    settingsTitle: ["Settings", "அமைப்புகள்", "सेटिंग्स", "Ajustes", "设置", "設定", "الإعدادات", "Настройки"],
    languageLabel: ["Language", "மொழி", "भाषा", "Idioma", "语言", "言語", "اللغة", "Язык"],
    soundLabel: ["Sound", "ஒலி", "ध्वनि", "Sonido", "声音", "サウンド", "الصوت", "Звук"],
    darkModeLabel: ["Dark mode", "இருண்ட பயன்முறை", "डार्क मोड", "Modo oscuro", "深色模式", "ダークモード", "الوضع الداكن", "Тёмный режим"],
    potatoLabel: ["Potato mode", "உருளைக்கிழங்கு பயன்முறை", "आलू मोड", "Modo patata", "低配模式", "低負荷モード", "وضع الأجهزة الضعيفة", "Режим для слабых устройств"],
    potatoDescription: ["Reduce visual effects and pause game updates while this tab is hidden.", "காட்சி விளைவுகளைக் குறைத்து, இந்தத் தாவல் மறைக்கப்படும்போது விளையாட்டு புதுப்பிப்புகளை இடைநிறுத்தவும்.", "दृश्य प्रभाव कम करें और टैब छिपा होने पर गेम अपडेट रोकें।", "Reduce los efectos visuales y pausa el juego mientras esta pestaña esté oculta.", "减少视觉效果，并在此标签页隐藏时暂停游戏更新。", "視覚効果を減らし、このタブが非表示の間はゲームの更新を一時停止します。", "تقليل المؤثرات المرئية وإيقاف تحديثات اللعبة مؤقتًا عند إخفاء علامة التبويب.", "Уменьшает визуальные эффекты и приостанавливает игру, пока вкладка скрыта."],
    closeSettings: ["Close", "மூடு", "बंद करें", "Cerrar", "关闭", "閉じる", "إغلاق", "Закрыть"],
    debugButton: ["toggle debug", "பிழைத்திருத்தத்தை மாற்று", "डिबग टॉगल करें", "alternar depuración", "切换调试模式", "デバッグ切替", "تبديل وضع التصحيح", "переключить отладку"],
    notEnoughCandies: ["Not enough candies to buy {name}", "{name} வாங்க போதுமான மிட்டாய்கள் இல்லை", "{name} खरीदने के लिए पर्याप्त कैंडी नहीं हैं", "No tienes caramelos suficientes para comprar {name}", "糖果不足，无法购买{name}", "{name}を買うためのキャンディが足りません", "لا تملك حلوى كافية لشراء {name}", "Недостаточно конфет для покупки «{name}»"],
    notEnoughChocolates: ["Not enough chocolates to buy {name}", "{name} வாங்க போதுமான சாக்லேட்டுகள் இல்லை", "{name} खरीदने के लिए पर्याप्त चॉकलेट नहीं हैं", "No tienes chocolates suficientes para comprar {name}", "巧克力不足，无法购买{name}", "{name}を買うためのチョコレートが足りません", "لا تملك شوكولاتة كافية لشراء {name}", "Недостаточно шоколада для покупки «{name}»"],
    notEnoughWin: ["Not enough candies to buy the win condition.", "வெற்றி நிபந்தனையை வாங்க போதுமான மிட்டாய்கள் இல்லை.", "जीतने की शर्त खरीदने के लिए पर्याप्त कैंडी नहीं हैं।", "No tienes caramelos suficientes para comprar la victoria.", "糖果不足，无法购买胜利条件。", "勝利条件を購入するためのキャンディが足りません。", "لا تملك حلوى كافية لشراء شرط الفوز.", "Недостаточно конфет для покупки победы."],
    alertThreshold: ["you have accumulated enough candies to attract new people to your domain", "உங்கள் பகுதியில் புதியவர்களை ஈர்க்கப் போதுமான மிட்டாய்களைச் சேகரித்துள்ளீர்கள்", "आपने अपने क्षेत्र में नए लोगों को आकर्षित करने के लिए पर्याप्त कैंडी जमा कर ली है", "has reunido suficientes caramelos para atraer gente nueva a tu dominio", "你积累了足够多的糖果，可以吸引新居民来到你的领地", "新しい人々を領地に呼び込むのに十分なキャンディが集まりました", "جمعت حلوى كافية لجذب أشخاص جدد إلى منطقتك", "Вы накопили достаточно конфет, чтобы привлечь новых людей в свои владения"],
    winAlert: ["you have won the game! you have unlocked all upgrades and found all secrets. congratulations!", "விளையாட்டில் வெற்றி பெற்றீர்கள்! அனைத்து மேம்பாடுகளையும் திறந்து ரகசியங்களைக் கண்டுபிடித்துள்ளீர்கள். வாழ்த்துகள்!", "आपने खेल जीत लिया! आपने सभी अपग्रेड अनलॉक किए और सारे रहस्य खोज लिए। बधाई हो!", "¡Has ganado! Desbloqueaste todas las mejoras y encontraste todos los secretos. ¡Felicidades!", "你赢得了游戏！你解锁了所有升级并发现了所有秘密。恭喜！", "ゲームに勝利しました！すべてのアップグレードを解除し、秘密もすべて見つけました。おめでとう！", "لقد فزت باللعبة! فتحت كل الترقيات واكتشفت كل الأسرار. تهانينا!", "Вы выиграли! Вы открыли все улучшения и нашли все секреты. Поздравляем!"],
    debugEnabled: ["debug mode enabled. this is used by devs to test out new features without waiting hours and is not meant for normal gameplay", "பிழைத்திருத்த முறை இயக்கப்பட்டது. புதிய அம்சங்களைச் சோதிக்க இது பயன்படும்; சாதாரண விளையாட்டுக்கானது அல்ல.", "डिबग मोड चालू है। इसका उपयोग नई सुविधाओं को जल्दी जाँचने के लिए है, सामान्य खेल के लिए नहीं।", "Modo de depuración activado. Sirve para probar funciones y no está pensado para jugar normalmente.", "调试模式已启用。此模式用于快速测试新功能，不适合正常游戏。", "デバッグモードを有効にしました。新機能のテスト用で、通常プレイ向けではありません。", "تم تفعيل وضع التصحيح. يُستخدم لاختبار الميزات الجديدة وليس للعب العادي.", "Режим отладки включён. Он нужен для быстрой проверки функций и не предназначен для обычной игры."],
    debugDisabled: ["debug mode disabled.", "பிழைத்திருத்த முறை முடக்கப்பட்டது.", "डिबग मोड बंद है।", "Modo de depuración desactivado.", "调试模式已关闭。", "デバッグモードを無効にしました。", "تم إيقاف وضع التصحيح.", "Режим отладки выключен."],
    buyError: ["An error occurred while buying the upgrade: {message}", "மேம்பாட்டை வாங்கும்போது பிழை ஏற்பட்டது: {message}", "अपग्रेड खरीदते समय त्रुटि हुई: {message}", "Se produjo un error al comprar la mejora: {message}", "购买升级时出错：{message}", "アップグレードの購入中にエラーが発生しました：{message}", "حدث خطأ أثناء شراء الترقية: {message}", "При покупке улучшения произошла ошибка: {message}"],
    imaginaryWorkers: ["imaginary workers", "கற்பனைத் தொழிலாளர்கள்", "काल्पनिक कर्मचारी", "trabajadores imaginarios", "想象中的工人", "想像上の労働者", "عمال خياليون", "воображаемые работники"],
    cookies: ["cookies", "குக்கீகள்", "कुकीज़", "galletas", "饼干", "クッキー", "بسكويت", "печенье"],
    hypercaffeinatedSoda: ["hypercaffeinated soda", "அதிகக் கஃபீன் கொண்ட சோடா", "अत्यधिक कैफीन वाला सोडा", "refresco hipercafeinado", "超高咖啡因汽水", "超高カフェインソーダ", "مشروب غازي عالي الكافيين", "сверхкофеиновая газировка"],
    feature: ["a feature", "ஒரு அம்சம்", "एक सुविधा", "una función", "一个功能", "ある機能", "ميزة", "особенность"],
    mines: ["the mines", "சுரங்கங்கள்", "खदानें", "las minas", "矿井", "鉱山", "المناجم", "шахты"],
    look: ["look", "பார்", "देखें", "mirar", "看看", "見る", "انظر", "смотреть"],
    lookCloser: ["look closer", "அருகில் பார்", "और पास से देखें", "mirar más de cerca", "仔细看看", "もっと近くで見る", "انظر عن قرب", "посмотреть поближе"],
    whatIsThat: ["what is that", "அது என்ன", "वह क्या है", "¿qué es eso?", "那是什么", "あれは何？", "ما هذا؟", "что это?"],
    walkCloser: ["walk closer", "அருகில் செல்", "पास जाएँ", "acercarse", "走近一点", "近づく", "اقترب", "подойти ближе"],
    wave: ["wave", "கையசை", "हाथ हिलाएँ", "saludar", "挥手", "手を振る", "لوّح", "помахать"],
    chocolateMen: ["chocolate men", "சாக்லேட் மனிதர்கள்", "चॉकलेट पुरुष", "hombres de chocolate", "巧克力人", "チョコレート人間", "رجال الشوكولاتة", "шоколадные человечки"],
    bananaCandy: ["banana flavoured candy", "வாழைப்பழச் சுவை மிட்டாய்", "केले के स्वाद वाली कैंडी", "caramelo con sabor a plátano", "香蕉味糖果", "バナナ味キャンディ", "حلوى بنكهة الموز", "конфета с банановым вкусом"],
    cherryCandy: ["cherry flavoured candy", "செர்ரி சுவை மிட்டாய்", "चेरी के स्वाद वाली कैंडी", "caramelo con sabor a cereza", "樱桃味糖果", "チェリー味キャンディ", "حلوى بنكهة الكرز", "конфета со вкусом вишни"]
};

const upgradeMessageKeys = {
    "imaginary workers": "imaginaryWorkers",
    "cookies": "cookies",
    "hypercaffeinated soda": "hypercaffeinatedSoda",
    "a feature": "feature",
    "the mines": "mines",
    "look": "look",
    "look closer": "lookCloser",
    "what is that": "whatIsThat",
    "walk closer": "walkCloser",
    "wave": "wave",
    "chocolate men": "chocolateMen",
    "banana flavoured candy": "bananaCandy",
    "cherry flavoured candy": "cherryCandy"
};

function getSetting(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value;
    } catch (error) {
        console.error("Unable to read saved game settings:", error);
        return fallback;
    }
}

function saveSetting(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.error("Unable to save game settings:", error);
    }
}

let currentLanguage = languageCodes.includes(getSetting("candiebank-language", "en"))
    ? getSetting("candiebank-language", "en")
    : "en";
window.soundEnabled = getSetting("candiebank-sound", "true") !== "false";
let potatoModeEnabled = getSetting("candiebank-potato-mode", "false") === "true";
let darkModeEnabled = getSetting("candiebank-dark-mode", "true") !== "false";

function languageIndex() {
    return languageCodes.indexOf(currentLanguage);
}

function translate(key, values = {}) {
    const entry = messages[key];
    let text = entry ? entry[languageIndex()] : key;
    for (const [name, value] of Object.entries(values)) {
        text = text.replace(new RegExp(`\\{${name}\\}`, "g"), String(value));
    }
    return text;
}

function translateUpgradeName(name) {
    const key = upgradeMessageKeys[name];
    return key ? translate(key) : name;
}

function formatUpgradeButton(name, cost, currency) {
    const messageKey = currency === "chocolates" ? "buyChocolates" : "buyCandies";
    return translate(messageKey, { name: translateUpgradeName(name), cost });
}

function applyLanguage() {
    const index = languageIndex();
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        element.textContent = translate(element.dataset.i18n);
    });
    document.getElementById("settingsButton").textContent =
        translate("settingsButton") + (currentLanguage === "en" ? "" : " (settings)");

    document.getElementById("candieText").textContent =
        translate("candiesCount", { count: Math.round(window.candies) });
    document.getElementById("chocolate_count").textContent =
        translate("chocolateCount", { count: Math.round(window.chocolates) });
    document.getElementById("chocolate_prod").textContent =
        translate("chocolateProduction", { count: window.chocolate_cps });
    document.getElementById("cps").textContent =
        translate("candiesPerSecond", {
            count: window.mill_active ? window.getCps() * 2 : window.getCps()
        });

    document.querySelectorAll("button[data-upgrade-name]").forEach(button => {
        button.textContent = formatUpgradeButton(
            button.dataset.upgradeName,
            button.dataset.upgradeCost,
            button.dataset.upgradeCurrency
        );
    });
    document.title = `candiebank V${window.cb_version}`;
    document.getElementById("debugToggle").textContent = translate("debugButton");
}

window.t = translate;
window.translateUpgradeName = translateUpgradeName;
window.formatUpgradeButton = formatUpgradeButton;
window.applyGameLanguage = applyLanguage;

window.playSound = function(audio) {
    if (!window.soundEnabled) {
        return;
    }
    audio.currentTime = 0;
    audio.play().catch(error => console.error(error));
};

window.setGameSoundEnabled = function(enabled) {
    window.soundEnabled = enabled;
    saveSetting("candiebank-sound", String(enabled));
    [
        window.clickSound,
        window.buttonRolloverSound,
        window.quickSettingsClickSound,
        window.settingsClickSound,
        window.tadaSound,
        window.warnedSound,
        window.ravenholmSound,
        window.hi
    ].forEach(audio => {
        audio.muted = !enabled;
    });
    window.insufficientFundsGain.gain.value = enabled ? 1 : 0;
};

function setPotatoMode(enabled) {
    potatoModeEnabled = enabled;
    document.body.classList.toggle("potato-mode", enabled);
    saveSetting("candiebank-potato-mode", String(enabled));
    window.updateGameTick();
}

function setDarkMode(enabled) {
    darkModeEnabled = enabled;
    document.documentElement.dataset.theme = enabled ? "dark" : "light";
    saveSetting("candiebank-dark-mode", String(enabled));
}

document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");
    const soundToggle = document.getElementById("soundToggle");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const potatoToggle = document.getElementById("potatoToggle");
    const settingsButton = document.getElementById("settingsButton");
    const settingsPanel = document.getElementById("settingsPanel");
    const closeSettingsButton = document.getElementById("closeSettingsButton");
    const dontPressButton = document.getElementById("dontPressButton");
    const dontPressDialog = document.getElementById("dontPressDialog");
    const dontPressYes = document.getElementById("dontPressYes");
    const dontPressNo = document.getElementById("dontPressNo");
    const dontPressResponse = document.getElementById("dontPressResponse");
    const dontPressConsequence = document.getElementById("dontPressConsequence");

    languageSelect.value = currentLanguage;
    soundToggle.checked = window.soundEnabled;
    darkModeToggle.checked = darkModeEnabled;
    potatoToggle.checked = potatoModeEnabled;
    setDarkMode(darkModeEnabled);
    setPotatoMode(potatoModeEnabled);
    window.setGameSoundEnabled(window.soundEnabled);
    applyLanguage();

    languageSelect.addEventListener("change", () => {
        currentLanguage = languageCodes.includes(languageSelect.value) ? languageSelect.value : "en";
        saveSetting("candiebank-language", currentLanguage);
        applyLanguage();
    });

    soundToggle.addEventListener("change", () => {
        window.setGameSoundEnabled(soundToggle.checked);
    });

    darkModeToggle.addEventListener("change", () => {
        setDarkMode(darkModeToggle.checked);
    });

    potatoToggle.addEventListener("change", () => {
        setPotatoMode(potatoToggle.checked);
    });

    const setSettingsOpen = open => {
        settingsPanel.hidden = !open;
        settingsButton.setAttribute("aria-expanded", String(open));
    };
    settingsButton.addEventListener("click", () => {
        window.playSound(window.quickSettingsClickSound);
        setSettingsOpen(settingsPanel.hidden);
    });
    settingsPanel.addEventListener("click", event => {
        if (event.target.closest("button, input, select")) {
            window.playSound(window.settingsClickSound);
        }
    });
    closeSettingsButton.addEventListener("click", () => {
        setSettingsOpen(false);
        settingsButton.focus();
    });

    dontPressButton.addEventListener("click", () => {
        window.playSound(window.quickSettingsClickSound);
        dontPressResponse.hidden = true;
        dontPressDialog.hidden = false;
        dontPressYes.focus();
    });
    dontPressNo.addEventListener("click", () => {
        dontPressDialog.hidden = true;
        dontPressResponse.hidden = false;
        dontPressButton.focus();
    });
    dontPressYes.addEventListener("click", () => {
        dontPressDialog.hidden = true;
        dontPressConsequence.hidden = false;
        window.playSound(window.warnedSound);
        window.playSound(window.ravenholmSound);
    });
    dontPressDialog.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            dontPressDialog.hidden = true;
            dontPressButton.focus();
        }
    });
});
