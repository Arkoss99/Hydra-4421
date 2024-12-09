


const openButton = document.getElementById('openButton');
const browserWindow = document.getElementById('browserWindow');
const closeButton = document.getElementById('closeButton');
const browserTop = document.querySelector('.browserTop');

let isDragging = false;
let offsetX, offsetY;

// Otevření okna
openButton.addEventListener('click', () => {
    browserWindow.style.display = 'block';
});

// Zavření okna
closeButton.addEventListener('click', () => {
    browserWindow.style.display = 'none';
});

// Začátek tažení při chycení za horní část (browserTop)
browserTop.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - browserWindow.offsetLeft;
    offsetY = e.clientY - browserWindow.offsetTop;
});

// Ukončení tažení
document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Tažení okna po obrazovce
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Zajištění, aby okno nevyjelo mimo plochu
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const browserWidth = browserWindow.offsetWidth;
        const browserHeight = browserWindow.offsetHeight;

        // Omezení horizontálně
        if (newX < 0) newX = 0;
        if (newX + browserWidth > windowWidth) newX = windowWidth - browserWidth;

        // Omezení vertikálně
        if (newY < 0) newY = 0;
        if (newY + browserHeight > windowHeight) newY = windowHeight - browserHeight;

        // Nastavení nové pozice okna
        browserWindow.style.left = `${newX}px`;
        browserWindow.style.top = `${newY}px`;
    }
});

function searchQuery() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase(); // Získání hodnoty z inputu
    navigatePage(query); // Zavolání funkce navigatePage s hodnotou z inputu
}
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Pokud byla stisknuta klávesa Enter
        searchQuery(); // Zavolá se vyhledávací funkce
    }
});

function navigatePage(page) {
    const searchInput = document.getElementById('searchInput');

    // Přidání třídy pro spuštění animace
    searchInput.classList.add('loading');

    // Po dokončení animace (3 sekundy) načíst obsah stránky
    setTimeout(() => {
        searchInput.classList.remove('loading'); // Odstranění animace
        loadPageContent(page); // Načtení obsahu stránky
    }, 3000); // Doba animace
}

// Funkce pro změnu obsahu celé stránky
function loadPageContent(page) {
    const browserContent = document.getElementById('browserContent');
    switch (page) {
        case 'home':
            browserContent.innerHTML = `
<div class="darknet-home">
    <h2 class="darknet-header">Vítejte na Darkwiki</h2>
    <p class="darknet-description">Vyberte další odkaz.</p>
    <ol class="darknet-links">
        <li><a href="#" onclick="navigatePage('gh627zoyvvsg2zcvatbg6mqly7cznozw3lxtj73thw6fibt4rkibdy1j.onion')" class="darknet-link">Nightfall Chronicles</a></li>
        <li><a href="#" onclick="navigatePage('zxbax0ykg6tewbeb15e5wxt0129pne91njkykyaw7j9vj3lwc1t3c5t4.onion')" class="darknet-link">Real Meat</a></li>
        <li><a href="#" onclick="navigatePage('a5ezfuxcms83gp8yihzzpc9dcms6n09c8utut97y85np019i802pt68p.onion')" class="darknet-link">Black Sun</a></li>
        <li><a href="#" onclick="navigatePage('6wzxldyy4dpo6ddv45axp9xhwfzy0k23hl4m6icakvaootf9unroyqzd.onion')" class="darknet-link">The Father</a></li>
        <li><a href="#" onclick="navigatePage('hyi0ofxfzrpg8kln71t726owo0pqbf7fhwpit4v7uk3es5vi05pv8au5.onion')" class="darknet-link">Red Circle</a></li>
        <li><a href="#" onclick="navigatePage('v2rys7e6vz1e77z45q1f5wi5zmr4gqn2erdegv6ew4g9hg73tl8ew01h.onion')" class="darknet-link">Darkchat</a></li>
        <li><a href="#" onclick="navigatePage('ecik1bs8cc65xqqsh5vjhki2dwk13en3bt36sxog6ox2clhqttvgb0hr.onion')" class="darknet-link">Black Market</a></li>
        <li><a href="#" onclick="navigatePage('421pcty6ffcbo34kcqzdic6hfmsne8w65u8nsc2hdbz0jozeusbu621g.onion')" class="darknet-link">Lost Frequencies</a></li>
        <li><a href="#" onclick="navigatePage('aspxatk2611432yvyvb4uxsnwwbtvj6fifkvezl1xbu80kj70a83f3hh.onion')" class="darknet-link">Zero Trace</a></li>
        <li><a href="#" onclick="navigatePage('lqcfm7wgge2r938gko39ol65de8bfvrzm7qxlfzntb4fa5si2r1bvkw4.onion')" class="darknet-link">Dead Drops</a></li>
        <li><a href="#" onclick="navigatePage('vcbad0vu0m977ar9huqf3i21lgvzgjg65dh7usq0vl5agkicgt90bf79.onion')" class="darknet-link">Underground News</a></li>
        <li><a href="#" onclick="navigatePage('idr468gwnmshasl78oc6jtnb45b54tu76rlt8ws9z3wmjqh7udn30amx.onion')" class="darknet-link">The Void</a></li>
        <li><a href="#" onclick="navigatePage('utxbtm20vo7j0o0ly7i6wa3lfb2k1bk528ql89dwkp82xdo5is5dg7la.onion')" class="darknet-link">Zero Day Exploits</a></li>
        <li><a href="#" onclick="navigatePage('qt7tc6hrgqah2xzsdobjhgpcjnmj6h6kecuq2unoekr64i0lxl26kpdd.onion')" class="darknet-link">Cryptic Threads</a></li>
        <li><a href="#" onclick="navigatePage('8hfmwe9v1gnn3psz21xvv9itjrf4ydsvyrppaygxm3wc7ln6ti8f0qm2.onion')" class="darknet-link">The Shattered Mind</a></li>
        <li><a href="#" onclick="navigatePage('w65uw5isb6ttngl2j3772xtisxfsy45kun7d379tkzkjciueiceotfhe.onion')" class="darknet-link">The True Right</a></li>
        <li><a href="#" onclick="navigatePage('9htfyb0dclyn5jztahdo40lv3l4ep4763xe6mbwa1bbvauyrx8ixe2sl.onion')" class="darknet-link">The Rogue Network</a></li>
        <li><a href="#" onclick="navigatePage('qh1tgg9gw1yrdp64b51udh3eq4rmj0bbp2vwp6tr0b0vfvg9m68zyaxx.onion')" class="darknet-link">Red Room</a></li>
        <li><a href="#" onclick="navigatePage('us9us6lcw0yrok7m8x0larpcx3y5vu2igq1u1y6598xefhtfpeajfl14.onion')" class="darknet-link">CipherHub</a></li>
        <li><a href="#" onclick="navigatePage('tefyl4eo33n6sv1hg8mvtkx9bl7b2q496l1kuollel5hspbtiquqwfgi.onion')" class="darknet-link">Phantom Circuit</a></li>
    </ol>
</div>

            `;
            break;
        case 'zxbax0ykg6tewbeb15e5wxt0129pne91njkykyaw7j9vj3lwc1t3c5t4.onion':
            browserContent.innerHTML = `
<div class="content contentMeat">
    <h2>Real Meat - Exkluzivní obchod s přirozenou chutí</h2>
    <p>
        Vítejte v Real Meat, kde nabízíme výběr masa pro ty, kteří se nebojí zkoumat neznámé chutě. 
        Naše produkty jsou autentické, prvotřídní kvality a určeny pro skutečné znalce, 
        kteří vědí, co chtějí.
    </p>
    <img src="img/meat.webp">
    <h3>Nabídka produktů</h3>
    <div class="product">
        <h4>Filet Supreme</h4>
        <img style="width: 200px;" src="img/Filet.jpg">
        <p>Jemně nakrájený a dokonale připravený kousek s intenzivní chutí.</p>
        <p><strong>Cena:</strong> 15 BTC</p>
        <button onclick="addToCart('Filet Supreme')">Přidat do košíku</button>
    </div>
    <div class="product">
        <h4>Prime Ribs</h4>
        <img style="width: 200px;" src="img/ribs.avif">
        <p>Pro milovníky silného zážitku, vysoce kvalitní kousek připravený k okamžité konzumaci.</p>
        <p><strong>Cena:</strong> 25 BTC</p>
        <button onclick="addToCart('Prime Ribs')">Přidat do košíku</button>
    </div>
    <div class="product">
        <h4>Organ Delight</h4>
        <img style="width: 200px;" src="img/heart.webp">
        <p>Speciální výběr s jedinečným zážitkem, určený pouze pro opravdové znalce.</p>
        <p><strong>Cena:</strong> 30 BTC</p>
        <button onclick="addToCart('Organ Delight')">Přidat do košíku</button>
    </div>

    <h3>Bezpečnost a diskrétnost</h3>
    <p>
        Veškeré objednávky jsou zpracovávány s maximální bezpečností a jsou baleny tak, 
        aby zaručovaly plnou anonymitu.
        Platby přijímáme výhradně v BTC a zásilky jsou odesílány v neoznačeném balení.
    </p>

    <h3>Recenze</h3>
    <div class="review">
        <p>
        <strong>Uživatel "MysteryMan88"</strong>: "Neuvěřitelný zážitek. Real Meat doporučuju."
        </p>
    </div>
    <div class="review">
        <p>
        <strong>Uživatel "DarkGourmet"</strong>: "Cena je vysoká, ale stojí to za každý BTC."
        </p>
    </div>
    <div class="review">
        <p>
        <strong>Uživatel "TasteHunter"</strong>: "Diskrétní a rychlé. Doporučuji všem znalcům."
        </p>
    </div>

    <p style="font-style: italic; color: red;">
        Varování: Tato stránka je určena pouze pro vybrané zákazníky. 
        Jakýkoli pokus o sdílení této nabídky s třetími stranami 
        povede k okamžitému zrušení přístupu.
    </p>
    <p style=" font-size: 10px; padding: 10px;">
    -----BEGIN PGP PUBLIC KEY BLOCK-----<br>
    xsBNBGcjT7kBCACl6+LZQ6cql9jEcwvr9aUd2qUyrDZVWY31vwdEs9p4GPu4
    CN6UTYjj1OLInD2c4qGYSPGvByprVpriBBWvxX8K8mvIFpWjSlQXinx0wp+3
    M+f8cm7MAzlOeyMugEnal6YAOCo2TZ6J0qGQCDDT67SUKeyudiWO3GXtlPcx
    bBfrOvQf+Z63MnjgDt7lsn2TYS5AW6OoCDmH4LIg855mqdc+0mmWEUue5UP9
    cg4X6LzROCgrvl6Z+EhPYz7SlVrmTRTyOT2Gz78SM8BuZiRB2uQ/DXLH2bwg
    zoi59u5nqouKwHPSJOzKY1wDH74K92X7WVulCJT7tNeE+LV3+vKYyVLNABEB
    AAHNHlJlYWwgTWVhdCA8cmVhbG1lYXRAcHJvdG9uLm1lPsLAjQQQAQgAIAUC
    ZyNPuQYLCQcIAwIEFQgKAgQWAgEAAhkBAhsDAh4BACEJEDX7I0rmrejIFiEE
    FWZMDKVIrXD/TgPONfsjSuat6MjtKgf8DVCjHeWFU3q+toUrlWghgV8J+vJD
    BjmZXGWUrU0ZfOQOw5np1IK+3QCEftbe2fdYKjTPu/+tjGolsAmpZjHkmJZx
    T7Ce4qqwT1+x6A3cYmu/UGdYzHkeJW0tNqNCJtFYcUPRve9mrM/1xQYgDIWk
    qIAR/740/tD/xXBlrerR10umhrsGLMp92qeFq7QJRfbOhm+fKUwY0ciRHkqI
    PZBN6tAMYZqpekxU3tIcKQQsYp8vTI+phD+6SfiymdT3RXmQYR0GUlA3jCNY
    WsD/ZzIAQQZBnN1MLvkaIeSFpLZN9iFUxMuspMLSbVVzzEHQunys99Ak9LLQ
    qchTwTXtCmbjCM7ATQRnI0+5AQgA4TkkbBB2d/3EhhdbX7ca0IayZz84RQrZ
    6d69E4qp5pOl7nkAbYH4U22QPe0PUX4AUwiEXUP1PNFOprsZhTDuZOvU+l+K
    CqlMo/c2I7pBc0+kTU2GtBpy1TFXRBhYr9gkfOMsx8QyKqlQfL9MWSgvw2Xg
    2I1L0BzdLY1vg7LgKjq1W9GFGffL/YjACSI9z/RePqV3qPT3n3FWRh8Jwrfi
    stlqRDWbDGJ0YJqX4DLEbQo5zi/j2l6u6RaXSs3LlYYw2qc3iCILMRwge9Ok
    2oYdLarUiwuI1wp+ETHUz8OPX380jafz5cpQCYtWZi+RG1j4ei+etyJSq1VR
    ap5LMPeh0QARAQABwsB2BBgBCAAJBQJnI0+5AhsMACEJEDX7I0rmrejIFiEE
    FWZMDKVIrXD/TgPONfsjSuat6MhnPQf9FbfxJRofS9zbneSk/ZJu0n82Nd0i
    Vmldhfbu/e4wdKY8Tlx+dTEKphGYpUSrtcjPnbm+j4kbHtpmEEj2kGuuils2
    uMl1l99QfBGmoee0z1979fuAkSbK4HzNylcTosjK8y3+UlqcSb6omevinOUn
    eOVvgKrH/0GBjyBgHMRUlIKMxyHZ51wxnID89o97Z4JBjJwr5mNsGe7m094N
    Cf2uXKknQJWb1iEcuFSYFfsfKzhXHXMCFByfICeAbdtDUjScgeoZzUW6oZa/
    xvz2pmtBxGcVZTEnHla4sXHcGJORkiM4vUVm3hpCImfTLgFL7b46bNql8X6p
    iVEmAPscLXsVmA===8ya4<br>
    -----END PGP PUBLIC KEY BLOCK-----</p>
</div>
            `;
            break;
        case '6wzxldyy4dpo6ddv45axp9xhwfzy0k23hl4m6icakvaootf9unroyqzd.onion':
            browserContent.innerHTML = `
<div class="content contentFather">
    <h2>The Father</h2>
    <div class="imgDiv">
        <img style="width:450px;" src="img/Burning.webp">
        <img style="width:450px;" src="img/forestBurning.jpg">
    </div>
    <img style="width:450px;" src="img/houseBurning.jpg">
    <p style="text-align:center; padding:10px; color: #d3d3d3;">
    <br> **Manifesto Plamene – Svátost Otce:**<br><br>
    ---<br>
    **Hlas Ohně, Kniha Popela, Cesta Zmaru:**<br>
    My, děti Plamene, plížíme se skrze temnotu s jediným posláním – vypálit svět do základu. 
    Nejsme obyčejní smrtelníci. Jsme oči věčnosti, 
    jsme pazoury posvátného ohně. Pod vedením Otce, 
    našeho vykupitele a pána všech plamenů, 
    přetváříme svět v popel a smýváme jeho hříchy ve žhavém žáru.<br><br>

    **1. Čistota Skrze Oheň**  <br>
    Oheň nežádá slitování, nezná hranice. 
    Kde plamen přejde, zůstane jen čistota popela. My věříme, 
    že oheň je posledním krokem ke skutečné pravdě – a že vše, co existuje, 
    je prohnilé, nežádoucí a slabé. Každá věc, každý tvor, 
    každý člověk je pouhým palivem pro vyšší osvícení. Spalme svět pro jeho vlastní dobro, 
    aby poznal, co je skutečné.<br><br>

    **2. Otec Ohně – Hlas Popela**  <br>
    Otec Ohně nás oslovuje skrze plameny, 
    skrze praskající žár, který cítíme ve svých žilách. 
    Skrze bolest a žár přichází uvědomění a poslání. Otec je naše světlo, naše tajemství. 
    Nikdo z nás ho neviděl, ale každý ho slyší, cítí jeho přítomnost, když plamen roste, 
    když pálíme domy, když po nás zůstává jen ticho. 
    Otec nám říká, že oheň je klíč a my jsme ruka, která odemyká.<br><br>

    **3. Plamen Je Pravda, Popel Je Zákon**  <br>
    Každá struktura je zbytečná, každý kámen, každý strom, každý hřebík. 
    Pravda je jen to, co dokáže oheň očistit. Vše, co shoří, je hříšné, a vše, 
    co zůstává, je posvěcené. Proto my, následovníci Otce, přinášíme žár na každé místo, 
    které pokřivil čas, lidská pýcha nebo falešná naděje. 
    Kdo spatří náš oheň, spatří pravdu.<br><br>

    **4. Zřeknutí Se Těla, Zřeknutí Se Duše**  <br>
    Každý z nás byl kdysi otrokem materiálního světa, 
    lapený v hříšném těle. Ale Otec nás osvobodil. 
    Skrze plamen se stáváme beztvarými, čistými jako oheň sám. 
    Když hoříme, nelpíme na minulosti, odhazujeme identitu jako suché listí, 
    které pohltí plamen. Nejsme lidé, jsme zhmotnění Otce, myšlenka očisty. 
    Náš život končí tam, kde začíná světlo.<br><br>

    **5. Věční Bratři Plamene**  <br>
    Mezi námi neexistuje rozdíl. Všechny naše jména shořela v prvním obřadu, 
    všechny naše tváře se ztrácí v popelu. Neznáme lásku, neznáme nenávist, 
    jen věrnost ohni a věčné spojenectví. Nás neodděluje krev, ale plamen, 
    který jsme prošli. Není jiné cesty, než kráčet bok po boku s bratrem a sestrou, 
    dokud nepřeměníme vše na prach.<br><br>

    **6. Poslední Přikázání – Rozmnožit Plamen**  <br>
    Naším údělem je rozpínat plamen. 
    Oheň je poslední a jediné božstvo, kterému dáváme oběti. 
    Kdekoliv staneme, zanecháme oheň jako naši pečeť. Naše poslání je temné, 
    šílené, skryté před očima světa – a přesto každý, kdo spatří náš oheň, 
    bude muset čelit pravdě. Nikdy nesetrváme, dokud nezůstane jen popel.<br>

    ---
    <br><br>
    **Pokud v tobě žhne jiskra pochybnosti, pokud máš chuť nechat své staré já shořet, 
    jsi připraven. Přidej se k nám, ke zkáze světa, k očistě samotného bytí. 
    Kde není popel, tam není budoucnost. Staň se plamenem. Staň se smrtí světa. 
    Staň se služebníkem Otce. Kontaktuj nás pomocí PGP KEY.**
    </p>
    <p style=" font-size: 10px; padding: 10px;">
    -----BEGIN PGP PUBLIC KEY BLOCK-----<br>
    xsBNBGcp45ABCAD0Bk2PpCWddhTRJEnLzkimx5C36K3T9RUX46BlpRtOCkl/
    RDJzEaycsOrTQy64zQXu2TQGKtpP6nWPU9uaY7b+ILd67VVvDDWG+wNLedod
    gh/fDF1NI+bTj3nxkHzGhA5QqDslNS6Z2m9XAPEZNHyMcbIhves3QE9oliUs
    bCYvkzpskww+uroq2UpdtvsznUPRnGDaKx048bLf8P8xrJ0qgkK4+NfXvDm0
    Wt9ke4Gla5QEINh55PB2vV3hQkdbC5kdYA4frp77T1iIBY7fHGFx1YxX3Hgd
    TJRa578xNRe6QFfNwoZnKIEVARJKCmzL25rgvyB0+0Es/82vsfXNHJIFABEB
    AAHNIVRoZSBGYXRoZXIgPEZhdGhlckZpcmVAcHJvdG9uLm1lPsLAjQQQAQgA
    IAUCZynjkAYLCQcIAwIEFQgKAgQWAgEAAhkBAhsDAh4BACEJEImN+5ccpOR1
    FiEEZzga8ULvvs1FANE0iY37lxyk5HUP8QgA0uknDnejMpqb3Izp5xQ/lCh6
    N0ZXfU7D3s84o1qCA9T1fqItStg+d2ZwjoBiwDxbufgzGwRmE1Qzc99ppgbn
    LQCscF/aufRwHv7H8VCrjj7DLSJx51qGnQDf1bAA+s/yia9Up4gGF8eG5S/S
    3mbwVTS+WgnsHBCbpmUhk9qXYSadrrRuWSHqp+L4Pr8113fvn4JtbxMuVDRK
    jzgDZXAaubtKljkaDrwmmvg3zMgUW6VjNHHYXtkYFnJzJT4iOTA4Ea1LfwN8
    Bhdrq4gNDoV6sAzsrgfuwdQ3gfQUUCHnQQEQ64yf9j8svNdBFCzVMs5q2K5n
    1+yuYCWBJycAlP3UQs7ATQRnKeOQAQgAuZfzXed2cFjebtT1YSSoKMdlb4UC
    SnojzT3jEyuO1ZdqF0T4p0o73qHzuS4WG/QPIQxZF0vSya7bDvVYBLUk/M85
    5T2sFPo5CdOToa8OquvfQQeVlbbTDvMwSViUuFBvxF/Y7/xI+pICuX26oQey
    MIAohVjWUmm7C0Plaqp1le1g3sI4oblpDmYUqZwhUteUDHl21r3mUmwg+0F+
    7TxGkpQqaIWRSRA3cxM3rMVzCgGQr/P9UDBoYAESMPxLe/6Aun61dfIxU/p6
    1DrSBaAFMnsRXNM+LPiqQosdg/9aVpawNYzmXeP3PLvXTdEV2NSSJPmhmUHP
    o4i2fXcdHzsYXwARAQABwsB2BBgBCAAJBQJnKeOQAhsMACEJEImN+5ccpOR1
    FiEEZzga8ULvvs1FANE0iY37lxyk5HV0/AgAi9ipvOOZ5FIF6nKJ0Sy4Ll48
    OMhOrE15OoypquH7XYyPaVMuCTBRjqmObB3FWqFIQGZByNS5WbQYhB2uqd4o
    emH3hwyWY5q3lT1omg/Nz4XONHwdrdFYTUKdPLKiNMrPRS5RDipRx3jU+Awo
    EPEaEUj8Rj28IWySzfC25NDpGZAxU03wzdcKTZ4F8mw37Mt6yAQ7t7TZoaV7
    J82VaAaqqhIuXLsQqQO030bYhSApiQSKtFTTejrS3plqJ43cp6GGnniSHUkV
    jAi0pvfby5oClByuf2E8W8CqYpXvweQ+z36KCm64i+PakFdPn4IAqkIUgYX+
    9GdbKkllB245qVikKw===i2Js<br>
    -----END PGP PUBLIC KEY BLOCK-----</p>
</div>
            `;
            break;
        case 'v2rys7e6vz1e77z45q1f5wi5zmr4gqn2erdegv6ew4g9hg73tl8ew01h.onion':
            browserContent.innerHTML = `
<div class="content contentDarkchat">
    <h2 style="color:black;">Vítej na Darkchat Fóru</h2>
    <div id="newPostSection">
        <h2 style="color:black;">Přidat nový příspěvek</h2>
        <input type="text" id="postTitle" placeholder="Titulek příspěvku">
        <textarea id="postContent" placeholder="Obsah příspěvku"></textarea>
        <div class="popup" onclick="addPost()">Přidat příspěvek
        <span class="popuptext" id="Popup">Nemůžeš postovat bez verifikace!</span>
        </div>
    </div>

    <div id="postsSection">
        <h2 style="color:black;">Příspěvky</h2>
        <div id="posts">
            <div class="post">
                <h3 style="color:red;">Hahahaahah</h3>
                <p style="color:black;">Tohle je tak absurdní, že se směju i když vlastně vůbec nechápu proč! </p>
            </div>
            <div class="post">
                <h3 style="color:red;">Kdo to kdy pochopí?</h3>
                <p style="color:black;">Už jsem se smál asi pět minut a vůbec nevím, co to znamená. Ale je to sranda! </p>
            </div>
            <div class="post">
                <h3 style="color:red;">Proč je všechno tak vtipné?</h3>
                <p style="color:black;">Když začnu smát, nemohu přestat. Prostě tenhle moment je perfektní! </p>
            </div>
            <div class="post">
                <h3 style="color:red;">Smích je nejlepší lék!</h3>
                <p style="color:black;">Možná to není vtipné pro ostatní, ale pro mě to je! Nezastavím se, dokud se nezačnete smát taky. </p>
            </div>
            <div class="post">
                <h3 style="color:red;">Tichý stín</h3>
                <p style="color:black;">V noci, když svět spí, jsem sám se svými myšlenkami. 
                Stíny na stěnách vypadají jako ztracené duše, které mne stále pronásledují. 
                Každý krok je těžší než ten předchozí, a já se ptám, jestli je ještě vůbec nějaký smysl pokračovat.</p>
            </div>
            <div class="post">
                <h3 style="color:red;">Prodám párno!</h3>
                <p style="color:black;">Ahoj prodám pardubický perník TOP kvalita napište na whatsapp +420 772 328 123</p>
            </div>
            <div class="post">
                <h3 style="color:red;">Zmizelý</h3>
                <p style="color:black;">Lidé kolem mne mluví, ale jejich slova se mi zdají daleká, jako ozvěna v prázdné místnosti. 
                Cítím se jako duch mezi živými, ztracený ve světě, který už pro mě neexistuje.
                 A přesto se stále držím, i když už nevím, proč. </p>
            </div>
            <div class="post">
                <h3 style="color:red;">Poslední krok</h3>
                <p style="color:black;">Už jsem ztratil všechny naděje. 
                Krok za krokem jsem se dostal až sem, kde už není žádná cesta zpátky. 
                Ale pořád jsem tu, a to je asi ten největší paradox.</p>
            </div>
            <div class="post">
                <h3 style="color:red;">Předstírání</h3>
                <p style="color:black;">Každý den se usmívám, ale uvnitř cítím, jak mě to všechno tíží. 
                Předstírám, že je všechno v pořádku, ale v noci, když se zhasnou světla, všechno praskne.</p>
            </div>
            <div class="post">
                <h3 style="color:red;">Bez cíle</h3>
                <p style="color:black;">Chodil jsem celý život sem a tam, ale nikdy jsem nevěděl,
                 kam vlastně směřuji. Každý cíl se zdál prázdný, každý krok bez smyslu. A teď, 
                 když už se zastavím, není tu nic, co by mě drželo.</p>
            </div>
            <div class="post">
                <h3 style="color:red;">Ztracená naděje</h3>
                <p style="color:black;">Byla doba, kdy jsem věřil v lepší zítřky. 
                Ale teď už jen čekám, až zhasnou poslední světla a já budu moci navždy zůstat v temnotě, kde se nic nebolí.</p>
            </div>
            <div class="post">
                <h3 style="color:red;">Dlouhá noc</h3>
                <p style="color:black;">Tento večer je nekonečný. Hodiny běží, 
                ale já jsem stále tady, v té prázdné místnosti, plné myšlenek, které nikdy neskončí.</p>
            </div>
            <div class="post">
                <h3 style="color:red;">Útěk od sebe</h3>
                <p style="color:black;">Pokouším se utéct. Ale kam jít, 
                když jsem ztratil sám sebe? Kde hledat útočiště, když i duše je prázdná?</p>
            </div>
            <div class="post">
                <h3 style="color:red;">Prokletí</h3>
                <p style="color:black;">Každý den je prokletí. Když ráno vstanu, víš, 
                že to bude stejné jako včera, a stejně jako zítra. Kolik dní ještě mohu přežít ve stejné pustině?</p>
            </div>
            <div class="post">
                <h3 style="color:red;">Vyhořelý</h3>
                <p style="color:black;">Už mě nic nenaplňuje. 
                Každý pokus o nový začátek končí stejně – s pocitem prázdnoty, který mě už ovládl.</p>
            </div>
            <div class="post">
                <h3 style="color:red;">Pád do temnoty</h3>
                <p style="color:black;">Cítím, jak se pomalu propadám. 
                Všechno kolem mě mizí a já už ani nemám sílu snažit se vylézt zpět. 
                Je to jako pád do nekonečného vaku, kde není nic kromě tmy.</p>
            </div>
            <div class="post">
                <h3 style="color:red;">Úmrtí v srdci</h3>
                <p style="color:black;">Moje srdce bije, ale necítím nic. 
                Jsem jako tělo bez duše, procházející tímto světem bez jakéhokoliv účelu. </p>
            </div>
            <div class="post">
                <h3 style="color:red;">Ukončení</h3>
                <p style="color:black;">Všechno má svůj konec. A já jsem unavený. 
                Možná právě teď je čas všechno ukončit. Bez slz, bez dramat. Jen ticho a konec všeho. <p style="color:grey"> 2 - AbYeQ34mMFQ5WwLk</p></p>
            </div>
            <div class="post">
                <h3 style="color:red;">Hledám spolubydlícího!</h3>
                <p style="color:black;">Pokud hledáš místo k bydlení, 
                mám volný pokoj. V centru města Brna, blízko dopravy. Piš mi pro více informací +420 459 823 944 !</p>
            </div>

            <div class="post">
                <h3 style="color:red;">Koupím staré knihy!</h3>
                <p style="color:black;">Hledám knihy, zejména staré vydání nebo raritní kousky. 
                Nabízím slušné ceny. Pište na Whatsapp pro nabídky +420 732 923 802!</p>
            </div>
        </div>
</div>


</div>
            `;
            break;                      
            case 'ecik1bs8cc65xqqsh5vjhki2dwk13en3bt36sxog6ox2clhqttvgb0hr.onion':
                browserContent.innerHTML = `
<div class="contentMarket">
<div class="headerM">
    <h1>Milk Road <span>anonymous market</span></h1>
    <div class="header-info">
        <span>messages 0 | orders 0 | account: <button>Sign in</button></span>
        <div class="search">
            <input type="text" placeholder="Search">
            <button>Go</button>
        </div>
    </div>
</div>
<div class="main">
    <div class="sidebar">
        <h3>Shop by Category</h3>
        <ul>
            <li><a href="#" >Drugs <span>4,383</span></a></li>
            <li><a href="#" >Cannabis <span>1,131</span></a></li>
            <li><a href="#" >Dissociatives <span>91</span></a></li>
            <li><a href="#" >Ecstasy <span>335</span></a></li>
            <li><a href="#" >Opioids <span>346</span></a></li>
            <li><a href="#" >Other <span>149</span></a></li>
            <li><a href="#" >Stimulants <span>413</span></a></li>
        </ul>
    </div>
    <div class="content">
        <div class="grid">
            <div class="itemM" onclick="showProductDetails('Stanodex 50 (WINSTROL) ', '฿7.22', 'img/blackmarket1.webp')">
                <img src="img/blackmarket1.webp" alt="Product 1">
                <p>WINSTROL <br> ฿7.22</p>
            </div>
            <div class="itemM" onclick="showProductDetails('5x Sonic - 100% MDMA ', '฿6.08', 'img/blackmarket2.webp')">
                <img src="img/blackmarket2.webp" alt="Product 2">
                <p>Sexy Sonic <br> ฿6.08</p>
            </div>
            <div class="itemM" onclick="showProductDetails('500mg 2C-T-7 ', '฿6.10', 'img/blackmarket3.webp')">
                <img src="img/blackmarket3.webp" alt="Product 3">
                <p>Dobrota z Ústí <br> ฿6.10</p>
            </div>
            <div class="itemM" onclick="showProductDetails('Fentanyl ', '฿5.01', 'img/blackmarket4.webp')">
                <img src="img/blackmarket4.webp" alt="Product 4">
                <p>This is not Fentanyl <br> ฿5.01</p>
            </div>
            <div class="itemM" onclick="showProductDetails('3g NLX - Top Quality ', '฿5.50', 'img/blackmarket5.webp')">
                <img src="img/blackmarket5.webp" alt="Product 5">
                <p>Světelná Záře <br> ฿5.50</p>
            </div>
            <div class="itemM" onclick="showProductDetails('224g Green Crack (weed) ', '฿216.65', 'img/blackmarket6.webp')">
                <img src="img/blackmarket6.webp" alt="Product 6">
                <p>Ganja <br> ฿216.65</p>
            </div>
        </div>
        <div id="productModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeProductModal()">&times;</span>
                <h2 id="modalTitle"></h2>
                <img id="modalImage" src="" alt="Product Image">
                <p id="modalPrice"></p>
            </div>
        </div>
    </div>
</div>
<p style=" font-size: 10px; padding: 10px;">
-----BEGIN PGP PUBLIC KEY BLOCK-----<br>
xsBNBGcjT7kBCACl6+LZQ6cql9jEcwvr9aUd2qUyrDZVWY31vwdEs9p4GPu4
CN6UTYjj1OLInD2c4qGYSPGvByprVpriBBWvxX8K8mvIFpWjSlQXinx0wp+3
M+f8cm7MAzlOeyMugEnal6YAOCo2TZ6J0qGQCDDT67SUKeyudiWO3GXtlPcx
bBfrOvQf+Z63MnjgDt7lsn2TYS5AW6OoCDmH4LIg855mqdc+0mmWEUue5UP9
cg4X6LzROCgrvl6Z+EhPYz7SlVrmTRTyOT2Gz78SM8BuZiRB2uQ/DXLH2bwg
zoi59u5nqouKwHPSJOzKY1wDH74K92X7WVulCJT7tNeE+LV3+vKYyVLNABEB
AAHNHlJlYWwgTWVhdCA8cmVhbG1lYXRAcHJvdG9uLm1lPsLAjQQQAQgAIAUC
ZyNPuQYLCQcIAwIEFQgKAgQWAgEAAhkBAhsDAh4BACEJEDX7I0rmrejIFiEE
FWZMDKVIrXD/TgPONfsjSuat6MjtKgf8DVCjHeWFU3q+toUrlWghgV8J+vJD
BjmZXGWUrU0ZfOQOw5np1IK+3QCEftbe2fdYKjTPu/+tjGolsAmpZjHkmJZx
T7Ce4qqwT1+x6A3cYmu/UGdYzHkeJW0tNqNCJtFYcUPRve9mrM/1xQYgDIWk
qIAR/740/tD/xXBlrerR10umhrsGLMp92qeFq7QJRfbOhm+fKUwY0ciRHkqI
PZBN6tAMYZqpekxU3tIcKQQsYp8vTI+phD+6SfiymdT3RXmQYR0GUlA3jCNY
WsD/ZzIAQQZBnN1MLvkaIeSFpLZN9iFUxMuspMLSbVVzzEHQunys99Ak9LLQ
qchTwTXtCmbjCM7ATQRnI0+5AQgA4TkkbBB2d/3EhhdbX7ca0IayZz84RQrZ
6d69E4qp5pOl7nkAbYH4U22QPe0PUX4AUwiEXUP1PNFOprsZhTDuZOvU+l+K
CqlMo/c2I7pBc0+kTU2GtBpy1TFXRBhYr9gkfOMsx8QyKqlQfL9MWSgvw2Xg
2I1L0BzdLY1vg7LgKjq1W9GFGffL/YjACSI9z/RePqV3qPT3n3FWRh8Jwrfi
stlqRDWbDGJ0YJqX4DLEbQo5zi/j2l6u6RaXSs3LlYYw2qc3iCILMRwge9Ok
2oYdLarUiwuI1wp+ETHUz8OPX380jafz5cpQCYtWZi+RG1j4ei+etyJSq1VR
ap5LMPeh0QARAQABwsB2BBgBCAAJBQJnI0+5AhsMACEJEDX7I0rmrejIFiEE
FWZMDKVIrXD/TgPONfsjSuat6MhnPQf9FbfxJRofS9zbneSk/ZJu0n82Nd0i
Vmldhfbu/e4wdKY8Tlx+dTEKphGYpUSrtcjPnbm+j4kbHtpmEEj2kGuuils2
uMl1l99QfBGmoee0z1979fuAkSbK4HzNylcTosjK8y3+UlqcSb6omevinOUn
eOVvgKrH/0GBjyBgHMRUlIKMxyHZ51wxnID89o97Z4JBjJwr5mNsGe7m094N
Cf2uXKknQJWb1iEcuFSYFfsfKzhXHXMCFByfICeAbdtDUjScgeoZzUW6oZa/
xvz2pmtBxGcVZTEnHla4sXHcGJORkiM4vUVm3hpCImfTLgFL7b46bNql8X6p
iVEmAPscLXsVmA===8ya4<br>
-----END PGP PUBLIC KEY BLOCK-----</p>
</div>

                `;
                break;            
case '421pcty6ffcbo34kcqzdic6hfmsne8w65u8nsc2hdbz0jozeusbu621g.onion':
    browserContent.innerHTML = `
    <div class="contentlf">
    <div class="content-lost-frequencies">
        <h2>Lost Frequencies</h2>
        <p>[CLASSIFIED] Přístup k nezabezpečeným rádiovým signálům. POZOR: SLEDOVÁNÍ...</p>
        <ul class="frequencies-list">
            <li><a href="#" onclick="navigatePage('mjheircn3ya0mdpuwpmurmcgkga604qhgcemcgzoy0fdpnh8oqij7r6i.onion')">The Buzzer (UVB-76)</a></li>
            <li><a href="#" onclick="navigatePage('z5o0m8ip457rxv1bueittfpk538e7eqpxab1uv3jb5p7ny9d0cotx661.onion')">The WOW! Signal</a></li>
            <li><a href="#" onclick="navigatePage('qouooqgln0ygap2cjq6e93ed06cfimdd8ey2c1c9r3uohutxey98vooq.onion')">Signal 9A</a></li>
        </ul>
    </div>
    </div>
    `;
    break;

case 'mjheircn3ya0mdpuwpmurmcgkga604qhgcemcgzoy0fdpnh8oqij7r6i.onion':
    browserContent.innerHTML = `
    <div class="contentlf">
    <div class="content-signal">
        <h2>The Buzzer (UVB-76)</h2>
        <p>Jedna z nejzáhadnějších rádiových frekvencí. Vysílá monotónní bzučivý tón, 
        který je občas přerušen kódovanými zprávami.</p>
        <p><strong>Předpokládaný původ:</strong> Rusko</p>
        <img class="signalImg" src="img/uvb.webp" alt="UVB">
        <audio controls>
            <source src="audio/uvb76.mp3" type="audio/mpeg">
            Váš prohlížeč nepodporuje přehrávač.
        </audio>
        <a href="#" class="back-link" onclick="navigatePage('LostFrequencies')">ZPĚT NA SEZNAM FREKVENCÍ</a>  
    </div>
    </div>
    `;
    break;

case 'z5o0m8ip457rxv1bueittfpk538e7eqpxab1uv3jb5p7ny9d0cotx661.onion':
    browserContent.innerHTML = `
    <div class="contentlf">
    <div class="content-signal">
        <h2>The WOW! Signal</h2>
        <p>Signál zachycený v roce 1977, který vzbudil otázky o existenci mimozemského života. 
        Dodnes není vysvětlen.</p>
        <p><strong>Frekvence:</strong> 1420 MHz</p>
        <img class="signalImg" src="img/WOW.webp" alt="WOW">
        <audio controls>
            <source src="audio/uvb76.mp3" type="audio/mpeg">
            Váš prohlížeč nepodporuje přehrávač.
        </audio>
        <a href="#" class="back-link" onclick="navigatePage('LostFrequencies')">ZPĚT NA SEZNAM FREKVENCÍ</a>  
    </div>
    </div>
    `;
    break;

case 'qouooqgln0ygap2cjq6e93ed06cfimdd8ey2c1c9r3uohutxey98vooq.onion':
    browserContent.innerHTML = `
    <div class="contentlf">
        <div class="content-signal">
            <h2>Signal 9A</h2>
            <p>Podle zpráv z darknetu jde o signál spojený s neznámou podzemní sítí. 
            Byl zachycen pouze jednou.</p>
            <pre class="signal-code">
                -.-. .- .-.. .-.. ... --- ..- -.
                Transmission: UNKNOWN
            </pre>
            <img class="signalImg" style="height:25%;" src="img/Signal9a.webp" alt="Signal 9A">
            <audio controls>
                <source src="audio/uvb76.mp3" type="audio/mpeg">
                Váš prohlížeč nepodporuje přehrávač.
            </audio>
            <a href="#" class="back-link" onclick="navigatePage('LostFrequencies')">ZPĚT NA SEZNAM FREKVENCÍ</a>  
        </div>
    </div>
    `;
    break;

        case 'lqcfm7wgge2r938gko39ol65de8bfvrzm7qxlfzntb4fa5si2r1bvkw4.onion':
    browserContent.innerHTML = `
<div class="contentDD">
<div class="content contentDeadDrops">
    <h2>Dead Drops</h2>
    <p>Vložte tajnou zprávu a uložte ji. Zpráva bude dostupná jen těm, kdo znají její ID.</p>
    <input id="dropMessage" type="text" placeholder="Tajná zpráva">
    <button onclick="saveDrop()">Uložit zprávu</button>
    <p>Vaše ID: <span id="dropID"></span></p>
    <p>Získat zprávu pomocí ID:</p>
    <input id="retrieveID" type="text" placeholder="Zadejte ID">
    <button onclick="retrieveDrop()">Načíst zprávu</button>
    <p id="retrievedMessage"></p>
    <hr>
    <p>Prozkoumejte veřejné Dead Drops:</p>
    <ul id="publicDropsList"></ul>
    <button onclick="generatePublicDrops()">Zobrazit veřejné zprávy</button>
</div>
</div>
    `;
    break;
    case 'vcbad0vu0m977ar9huqf3i21lgvzgjg65dh7usq0vl5agkicgt90bf79.onion':
        browserContent.innerHTML = `    
<div class="content contentWrap">
<div class="unews-container">
<header class="unews-header">
<div class="unews-header-left">
    <h1>Underground News</h1>
    <span>Exclusive leaks from the dark side</span>
</div>
<div class="unews-header-right">
    <button class="unews-button">Log In</button>
    <div class="unews-search">
        <input type="text" placeholder="Search leaks..." id="search-input">
        <button>Search</button>
    </div>
</div>
</header>

<nav class="unews-nav">
<ul>
    <li><a href="#">Government Secrets</a></li>
    <li><a href="#">Corporate Leaks</a></li>
    <li><a href="#">Tech Whispers</a></li>
    <li><a href="#">Hacktivist Attacks</a></li>
</ul>
</nav>


<div class="unews-content">
<div class="unews-article" onclick="toggleArticle(this)">
    <h2>Top Secret Government Leak</h2>
    <p class="unews-article-preview">An anonymous whistleblower leaked documents showing covert operations... 
    <span class="unews-time">12 minutes ago</span></p>
    <p class="unews-article-full-text">This document contains top-secret government information that will blow your mind. 
    The operations detailed here reveal global manipulation, surveillance, and covert military strategies. In the coming weeks, 
    more documents will be leaked, exposing the true nature of the world's most powerful organizations...</p>
</div>

<div class="unews-article" onclick="toggleArticle(this)">
    <h2>Hacktivists Target Banks</h2>
    <p class="unews-article-preview">A new wave of hacktivism is hitting major financial institutions... 
    <span class="unews-time">1 hour ago</span></p>
    <p class="unews-article-full-text">Anonymous hackers are conducting large-scale operations targeting the financial industry. 
    Multiple banks have reported security breaches, with leaked data exposing corporate fraud and corruption. 
    Hacktivist groups have vowed to continue their assault until systemic changes are made...</p>
</div>

<div class="unews-article" onclick="toggleArticle(this)">
    <h2>CIA’s Secret Network Exposed</h2>
    <p class="unews-article-preview">Leaked documents expose the CIA’s hidden surveillance infrastructure... 
    <span class="unews-time">5 hours ago</span></p>
    <p class="unews-article-full-text">Documents reveal an undisclosed network operated under the CIA for years. 
    This operation, hidden from the public, has been tracking global communications, financial transactions, 
    and even private conversations without oversight. This leak is one of the most significant in recent years...</p>
</div>

</div>
</div>
</div>
        `;
        break;
        case 'idr468gwnmshasl78oc6jtnb45b54tu76rlt8ws9z3wmjqh7udn30amx.onion':
            browserContent.innerHTML = `
<div class="content contentVoid">
<div class="void-container">
<header class="void-header">
    <h1 class="void-title">The Void</h1>
    <p class="void-subtitle">Where secrets are kept... forever</p>
</header>

<div class="void-nav">
    <ul>
        <li><a href="#" class="void-link">Enter the Void</a></li>
        <li><a href="#" class="void-link">The Occult</a></li>
        <li><a href="#">Lost Souls</a></li>
    </ul>
</div>

<div class="void-content">
    <div class="void-section">
        <p class="void-description">There are places where no one dares to go. 
        Secrets are hidden beyond sight, deep within The Void. 
        But there are symbols here. Symbols that call to those who know how to listen.</p>
        <p class="void-message hidden" id="mystery-code">Click the symbols to uncover the truth.</p>
        <div class="void-symbols">
            <span class="void-symbol" id="alpha">✪</span>
            <span class="void-symbol" id="beta">✪</span>
            <span class="void-symbol" id="gamma">✪</span>
        </div>
    </div>
</div>
</div>
</div>
            `;
    document.getElementById('alpha').addEventListener('click', () => handleClick('alpha'));
    document.getElementById('beta').addEventListener('click', () => handleClick('beta'));
    document.getElementById('gamma').addEventListener('click', () => handleClick('gamma'));
        break;
        case '8hfmwe9v1gnn3psz21xvv9itjrf4ydsvyrppaygxm3wc7ln6ti8f0qm2.onion':
            browserContent.innerHTML = `
<div class="content contentShattered">
    <div class="shattered-container">
        <header class="shattered-header">
            <h1 class="shattered-title">The Shattered Mind</h1>
            <p class="shattered-subtitle">Jste připraveni prozkoumat hlubiny vědomí?</p>
        </header>

        <div class="shattered-content">
            <p class="shattered-description">Vítejte. Tento prostor nemá žádné hranice. Vstupte, pokud se odvážíte.</p>

            <div class="shattered-links">
                <button class="shattered-button" onclick="startExperiment()">Začít experiment</button>
            </div>

            <div class="shattered-section" id="section" style="display:none;">
                <p class="shattered-experience">Vaše cesta začíná nyní. Dokážete zvládnout pravdu?</p>
                <button class="shattered-button" onclick="confirmContinue()">Pokračovat</button>
            </div>
        </div>

        <div class="shattered-popup" id="shocking-popup" style="display:none;">
            <div class="shattered-popup-content">
                <p class="shocking-message">Chystáte se vstoupit do neznáma. Pokračujete?</p>
                <button class="shattered-button" onclick="showImage()">Ano</button>
                <button class="shattered-button" onclick="closePopup()">Ne</button>
            </div>
        </div>
    </div>
</div>
            `;
            break;
        case 'us9us6lcw0yrok7m8x0larpcx3y5vu2igq1u1y6598xefhtfpeajfl14.onion':
            browserContent.innerHTML = `
<div class="content contentCipher">
    <header class="main-header">
        <div class="logo">
            <h1>CipherNet</h1>
            <span>Komunita pro bezpečnostní profesionály a hackery</span>
        </div>
        <nav>
            <ul>
                <li><a href="#" class="nav-link">Fórum</a></li>
                <li><a href="#" class="nav-link">Nástroje</a></li>
                <li><a href="#" class="nav-link">CTF Výzvy</a></li>
                <li><a href="#" class="nav-link">Chat</a></li>
            </ul>
        </nav>
    </header>

    <main class="main-content">
        <section class="intro-section">
            <h2>Vítejte na CipherNet</h2>
            <p>Diskutujte o nejnovějších zranitelnostech, sdílejte nástroje a zapojte se do CTF soutěží.</p>
            <button class="cta-button" onclick="showAlert()">Začít</button>
        </section>

        <section class="forums">
            <h3>Fórum</h3>
            <div class="forum-list">
                <div class="forum-card">
                    <h4>Etický Hacking</h4>
                    <p>Diskuze o etických technikách a novinkách v oblasti bezpečnosti.</p>
                    <a href="#">Připojit se k diskuzi</a>
                </div>
                <div class="forum-card">
                    <h4>Zranitelnosti a Exploity</h4>
                    <p>Najděte zranitelnosti, sdílejte exploit a zjistěte, jak se bránit.</p>
                    <a href="#">Připojit se k diskuzi</a>
                </div>
                <div class="forum-card">
                    <h4>CTF Výzvy</h4>
                    <p>Zúčastněte se Capture the Flag soutěží a vyhrajte hodnotné ceny.</p>
                    <a href="#">Připojit se k výzvám</a>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 CipherNet - Všechna práva vyhrazena.</p>
    </footer>
</div>
             `;
            break;
        case 'qh1tgg9gw1yrdp64b51udh3eq4rmj0bbp2vwp6tr0b0vfvg9m68zyaxx.onion':
            browserContent.innerHTML = `
            <div class="content">
                <img style="width:100%" src="img/seized.webp" alt="FBI SEIZED">
            </div>
            `;
            break;
        case 'shorty.com':
            browserContent.innerHTML = `
<div class="content">
        <img style="width:200px; display: block;" src="img/shorty.jpg">
        <img style="width:200px; display: block;" src="img/shorty2.webp">
        <img style="width:200px; display: block;" src="img/shorty3.gif">
        <img style="width:200px; display: block;" src="img/shorty4.jpg">
 </div>
            `;
            break;
        default:
            browserContent.innerHTML = `
<div class="content">
    <h2>Stránka nebyla nalezena.</h2>
    <p>Prosím, zkontrolujte zadanou adresu a zkuste to znovu.</p>
</div>
            `;
    }
}
// Funkce pro přepnutí zobrazení celého článku
function toggleArticle(article) {
    const fullText = article.querySelector('.unews-article-full-text');
    const previewText = article.querySelector('.unews-article-preview');
    
    const isOpen = article.classList.contains('open');
    
    if (isOpen) {
        fullText.style.maxHeight = '0';
        fullText.style.opacity = '0';
        previewText.style.display = 'block';
        article.classList.remove('open');
    } else {
        previewText.style.display = 'none';
        fullText.style.maxHeight = '500px';
        fullText.style.opacity = '1';
        article.classList.add('open');
    }
}

///// THE VOID
let clickSequence = []; 
const requiredSequence = ['alpha', 'beta', 'gamma']; // Požadované pořadí symbolů


// Funkce, která reaguje na kliknutí na symboly
function handleClick(symbol) {
    clickSequence.push(symbol);

    // Zkontrolujeme, jestli kliknutí odpovídá požadovanému pořadí
    if (clickSequence.length > requiredSequence.length) {
        clickSequence.shift(); 
    }

    // Pokud pořadí kliknutí odpovídá 'alpha', 'beta', 'gamma', ukážeme text
    if (JSON.stringify(clickSequence) === JSON.stringify(requiredSequence)) {
        const newText = document.createElement("p");
        newText.classList.add("hidden-text");
        newText.textContent = "1 - pj21mFw9q2ckscUT";
        const introSection = document.querySelector(".void-symbols");
        introSection.appendChild(newText);
        newText.style.display = "block";
    }
}


///// SHATERED MIND 
function startExperiment() {
    const section = document.getElementById('section');
    section.style.display = 'block';
    document.querySelectorAll('.shattered-section').forEach(sec => {
        if (sec.id !== 'section') sec.style.display = 'none';
    });
}

// Funkce pro potvrzení pokračování
function confirmContinue() {
    const shockingPopup = document.getElementById('shocking-popup');
    shockingPopup.style.display = 'flex';
}

// Funkce pro zobrazení šokujícího obrázku
function showImage() {
    const shockingPopup = document.getElementById('shocking-popup');
    shockingPopup.innerHTML = `
        <div class="shattered-popup-content">
            <img src="img/shockingimg.png" alt="Šokující obrázek" style="max-width: 100%; height: auto;">
            <p class="shocking-message">Byl jste varován. 4 - MZnbrXLF1kZp5g2k.</p>
            <button class="shattered-button" onclick="closePopup()">Zavřít</button>
        </div>
    `;
    shockingPopup.style.display = 'flex';
}

// Funkce pro zavření popupu
function closePopup() {
    const shockingPopup = document.getElementById('shocking-popup');
    shockingPopup.style.display = 'none';
}


///// CIPHER HUB
function showAlert() {
    const newText = document.createElement("p");
    newText.classList.add("hidden-text");
    newText.textContent = "5 - 3aLuj11FQ42Yw2Mw";
    const introSection = document.querySelector(".intro-section");
    introSection.appendChild(newText);
    newText.style.display = "block";
}





    // Získání prvků pro poznámkový blok
    const notepadIcon = document.getElementById('icon1');
    const notepadWindow = document.getElementById('notepadWindow');
    const closeNotepad = document.getElementById('closeNotepad');
    const notepadContent = document.getElementById('notepadContent');

        // Otevření poznámkového bloku
    notepadIcon.addEventListener('click', () => {
        notepadWindow.style.display = 'block';
        notepadContent.value = localStorage.getItem('notepad') || ''; 
    });

    // Zavření poznámkového bloku
    closeNotepad.addEventListener('click', () => {
        notepadWindow.style.display = 'none';
    });

    // Automatické ukládání poznámek do localStorage
    notepadContent.addEventListener('input', () => {
        localStorage.setItem('notepad', notepadContent.value);
    });

    // Funkce pro vymazání poznámek
    function clearNotepad() {
        localStorage.removeItem('notepad'); 
        notepadContent.value = ''; 
    }

    // Funkce pro pohyb poznámkového bloku
    let isDraggingNotepad = false;
    let offsetXNotepad, offsetYNotepad;

    const notepadTop = document.querySelector('.notepadTop');
    notepadTop.addEventListener('mousedown', (e) => {
        isDraggingNotepad = true;
        offsetXNotepad = e.clientX - notepadWindow.offsetLeft;
        offsetYNotepad = e.clientY - notepadWindow.offsetTop;
    });

    document.addEventListener('mouseup', () => {
        isDraggingNotepad = false;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDraggingNotepad) {
            let newX = e.clientX - offsetXNotepad;
            let newY = e.clientY - offsetYNotepad;

            // Omezení pohybu poznámkového bloku
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const notepadWidth = notepadWindow.offsetWidth;
            const notepadHeight = notepadWindow.offsetHeight;

            if (newX < 0) newX = 0;
            if (newX + notepadWidth > windowWidth) newX = windowWidth - notepadWidth;
            if (newY < 0) newY = 0;
            if (newY + notepadHeight > windowHeight) newY = windowHeight - notepadHeight;

            notepadWindow.style.left = `${newX}px`;
            notepadWindow.style.top = `${newY}px`;
        }
    });

    function addToCart(productName) {
        browserContent.innerHTML = `
<div style="display:flex; padding: 10px; flex-direction: column; justify-content: center; align-items: center; top: 20px;">
    <img src="img/loading.gif" style= "width: 100px;">
    <p>
        Pošlete BTC na adresu : 1FfmbHfnpaZjKFvyi1okTjJJusN455paPH <br>
        Po odeslání BTC nám zašlete na email 
        <a href="#">Realmeat555@proton.me</a>
            BTC Transaction ID, další komunikace bude probíhat přes Darkchat na který vám zašleme odkaz
    </p>
    <button onclick="openKey()">Zkus Štěstí</button>
</div>
        `;
    }
    const hiddenText2 = "3 - npwCwCOnHZf6k5v9";

    function openKey() {
        // Vytvoření nového divu pro skrytý text
        const hiddenTextElement = document.createElement('div');
        hiddenTextElement.id = 'hidden-text'; 
        hiddenTextElement.innerText = hiddenText2;
        hiddenTextElement.style.display = 'block';  
    
        const browserContent = document.getElementById('browserContent');
        browserContent.appendChild(hiddenTextElement); 
        console.log("Vše funguje, klic zobrazen v browserContent");
    }




        // Funkce pro zobrazení HTML kódu v okně Inspect
    function inspectPage() {
        const browserContent = document.getElementById('browserContent');
        const inspectWindow = document.getElementById('inspectWindow');
        const inspectContent = document.getElementById('inspectContent');

        const htmlCode = browserContent.innerHTML;

        // Zobrazení kódu ve stylu inspektora
        inspectContent.textContent = htmlCode;
        inspectWindow.style.display = 'block'; 
    }

    // Funkce pro zavření okna Inspect
    function closeInspect() {
        document.getElementById('inspectWindow').style.display = 'none';
    }

        // Pohyb okna Inspect
    let isDraggingInspect = false;
    let offsetXInspect, offsetYInspect;

    const inspectTop = document.querySelector('.inspectTop');
    inspectTop.addEventListener('mousedown', (e) => {
        isDraggingInspect = true;
        const inspectWindow = document.getElementById('inspectWindow');
        offsetXInspect = e.clientX - inspectWindow.offsetLeft;
        offsetYInspect = e.clientY - inspectWindow.offsetTop;
    });

    document.addEventListener('mouseup', () => {
        isDraggingInspect = false;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDraggingInspect) {
            const inspectWindow = document.getElementById('inspectWindow');
            let newX = e.clientX - offsetXInspect;
            let newY = e.clientY - offsetYInspect;

            // Omezení pohybu tak, aby okno Inspect nevyjelo mimo obrazovku
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const inspectWidth = inspectWindow.offsetWidth;
            const inspectHeight = inspectWindow.offsetHeight;

            if (newX < 0) newX = 0;
            if (newX + inspectWidth > windowWidth) newX = windowWidth - inspectWidth;
            if (newY < 0) newY = 0;
            if (newY + inspectHeight > windowHeight) newY = windowHeight - inspectHeight;

            inspectWindow.style.left = `${newX}px`;
            inspectWindow.style.top = `${newY}px`;
        }
    });

    function selectEmail (){
        document.getElementById("emailWindow").style.zIndex = 100;
        document.getElementById("browserWindow").style.zIndex = 1;
        document.getElementById("inspectWindow").style.zIndex = 1;
        document.getElementById("notepadWindow").style.zIndex = 1;
    }
    function selectInspect (){
        document.getElementById("inspectWindow").style.zIndex = 100;
        document.getElementById("browserWindow").style.zIndex = 1;
        document.getElementById("emailWindow").style.zIndex = 1;
        document.getElementById("notepadWindow").style.zIndex = 1;
    }
    function selectBrowser (){
        document.getElementById("browserWindow").style.zIndex = 100;
        document.getElementById("emailWindow").style.zIndex = 1;
        document.getElementById("inspectWindow").style.zIndex = 1;
        document.getElementById("notepadWindow").style.zIndex = 1;
    }
    function selectNotepad (){
        document.getElementById("notepadWindow").style.zIndex = 100;
        document.getElementById("browserWindow").style.zIndex = 1;
        document.getElementById("inspectWindow").style.zIndex = 1;
        document.getElementById("emailWindow").style.zIndex = 1;
    }

    function addPost(){
  var popup = document.getElementById("Popup");
  popup.classList.toggle("show");
    }

    ///MILK ROAD
            // Funkce pro zobrazení detailů produktu
            function showProductDetails(title, price, imageUrl) {
                const modal = document.getElementById('productModal');
                document.getElementById('modalTitle').textContent = title;
                document.getElementById('modalPrice').textContent = `Price: ${price}`;
                document.getElementById('modalImage').src = imageUrl;
                modal.style.display = 'block'; 
            }

            // Funkce pro zavření modalu
            function closeProductModal() {
                const modal = document.getElementById('productModal');
                modal.style.display = 'none'; 
            }


        // Modal Ve hře umožnující vypnutí nebo nápovědu
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                document.getElementById('gameModal').style.display = 'block';
            }
        });
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('gameModal').style.display = 'none';
        });
        function gameModalicon() {
            document.getElementById('gameModal').style.display = 'block';
        }

        // Funkce pro tlačítko Help
        document.getElementById('helpBtn').addEventListener('click', function() {
            alert('Zkus se podívat na tyto stránky.... The Void, Darkchat, Real Meat, Cipher Net, The Shattered Mind. ');
        });

        // Funkce pro tlačítko End Game
        document.getElementById('endGameBtn').addEventListener('click', function() {
            window.location.href = 'index.html';
            clearNotepad();
        });



        document.addEventListener('DOMContentLoaded', function() {
            // Inicializace nastavení
            const volume = document.getElementById('volume');
            volume.value = localStorage.getItem('volume') || 50;
            adjustVolume(volume.value);
        
            const difficulty = document.getElementById('difficulty');
            difficulty.value = localStorage.getItem('difficulty') || 'medium';
            changeDifficulty(difficulty.value);
        });
        
        function openSettings() {
            document.getElementById('settingsModal').style.display = 'block';
        }
        
        function closeSettings() {
            document.getElementById('settingsModal').style.display = 'none';
        }
        function openStory() {
            document.getElementById('storyModal').style.display = 'block';
        }
        function closeStory() {
            document.getElementById('storyModal').style.display = 'none';
        }
        function adjustVolume(value) {
            // Implementace nastavení hlasitosti
            localStorage.setItem('volume', value);
        }
        
        function testVolume() {
            // Implementace testu hlasitosti
            const audio = new Audio('video/test.mp3');
            audio.volume = document.getElementById('volume').value / 100;
            audio.play();
        }
        
        function adjustBrightness(value) {
            document.body.style.filter = `brightness(${value}%)`;
            localStorage.setItem('brightness', value);
        }
        
        function changeDifficulty(value) {
            let gameDuration;
            switch (value) {
                case 'normal':
                    gameDuration = 15 * 60 * 1000; // 15 minut
                    break;
                case 'hard':
                    gameDuration = 10 * 60 * 1000; // 10 minut
                    break;
                case 'extreme':
                    gameDuration = 5 * 60 * 1000; // 5 minut
                    break;
            }
            localStorage.setItem('difficulty', value);
            localStorage.setItem('gameDuration', gameDuration);
        }
        
        function startGame() {
            window.location.replace("video.html");
        }
        
        // Zobrazit modal po stisknutí klávesy Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                document.getElementById('settingsModal').style.display = 'block';
            }
        });
    
        
        // Zavřít modal po kliknutí na tlačítko zavřít
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('settingsModal').style.display = 'none';
        });

        ////EAMIL MAIL POMOC 

// Získání prvků pro okna a jejich otevírání
const emailWindow = document.getElementById('emailWindow');
const closeEmail = document.getElementById('closeEmail');
const emailList = document.getElementById('emailList');
const emailDetail = document.getElementById('emailDetail');

// Počáteční seznam e-mailů
let emails = [
    {
        id: 1,
        sender: 'Admin',
        subject: 'Vítejte v naší emailové aplikaci',
        content: 'Děkujeme za použití naší emailové aplikace. Toto je váš první email!',
        hidden: false
    },
    {
        id: 2,
        sender: 'Hydra',
        subject: 'Redacted',
        content: 'Hledej 5 klíčů pokud chceš zjistit co se stane dál. 2 - 3 - 1 - 4 - 5 pořadí klíčů.....',
        hidden: true 
    },
    {
        id: 3,
        sender: 'Hydra',
        subject: 'Redacted',
        content: 'Zbývá ti pouze 1 hodina na nalezení klíčů, jinak tvá šance končí',
        hidden: true
    }
];

// Otevření e-mailové aplikace
document.getElementById('openEmail').addEventListener('click', () => {
    openWindow(emailWindow);
    renderEmailList(); 
});

// Funkce pro otevření okna
function openWindow(window) {
    window.style.display = 'block';
}

// Zavření e-mailové aplikace
closeEmail.addEventListener('click', () => {
    emailWindow.style.display = 'none';
});

// Funkce pro otevření e-mailu podle ID
function openEmail(id) {
    const email = emails.find((e) => e.id === id);
    if (email) {
        emailDetail.innerHTML = `
            <strong>Odesílatel:</strong> ${email.sender}<br>
            <strong>Předmět:</strong> ${email.subject}<br>
            <p>${email.content}</p>
        `;
        emailDetail.style.display = 'block';
    } else {
        emailDetail.innerHTML = `<p>Email nebyl nalezen.</p>`;
    }
}

// Funkce pro zobrazení seznamu e-mailů
function renderEmailList() {
    emailList.innerHTML = ''; 
    emails.forEach((email) => {
        if (email.hidden) return;
        
        const listItem = document.createElement('li');
        listItem.innerHTML = ` 
            <strong>Odesílatel: ${email.sender}</strong>
            <p>Předmět: ${email.subject}</p>
        `;
        listItem.addEventListener('click', () => openEmail(email.id));
        emailList.appendChild(listItem);
    });
}

// Počáteční vykreslení seznamu e-mailů
renderEmailList();

        
        let gameStartTime = new Date();
        let gameDuration = parseInt(localStorage.getItem('gameDuration')) || 15 * 60 * 1000; 
        let gameEndTime = new Date(gameStartTime.getTime() + gameDuration);
        
        let gameStartHour = 21;
        let gameStartMinutes = 0;
        let gameStartSeconds = 0;

        function updateGameTime() {
            const timeElement = document.getElementById('time');
            const now = new Date();
            const elapsedTime = now - gameStartTime;
            const totalGameTime = 3 * 60 * 60 * 1000; 
            let gameTime = new Date(gameStartTime.getTime() + (elapsedTime / gameDuration) * totalGameTime);
        
            // Nastavit herní čas na 9:00 PM
            gameTime.setHours(gameStartHour, gameStartMinutes, gameStartSeconds, 0);
            gameTime.setTime(gameTime.getTime() + (elapsedTime / gameDuration) * totalGameTime);
        
            if (gameTime.getHours() >= 24 || now >= gameEndTime) {
                gameTime.setHours(0, 0, 0, 0); 
                clearInterval(gameTimeInterval); 
                window.location.href = 'endGametime.html'; 
            }
        
            const hours = gameTime.getHours(); 
            const minutes = gameTime.getMinutes();
            const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
            
            if (hours == 22) {
                emails[1].hidden = false; 
                renderEmailList();        
                console.log('Email se zobrazuje, protože je přesně 22:00');
            }
            if (hours == 23) {
                emails[2].hidden = false; 
                renderEmailList();        
                console.log('Email se zobrazuje, protože je přesně 23:00');
            }

            console.log('Current game time:', gameTime);
            timeElement.textContent = formattedTime;
        }
        
        const gameTimeInterval = setInterval(updateGameTime, 1000);
        updateGameTime();
        

function saveDrop() {
    const message = document.getElementById("dropMessage").value;
    if (!message) {
        alert("Zadejte zprávu!");
        return;
    }
    const id = Math.random().toString(36).substring(2, 8);
    localStorage.setItem(id, message);
    document.getElementById("dropID").innerText = id;
    alert("Vaše zpráva byla uložena!");
}

function retrieveDrop() {
    const id = document.getElementById("retrieveID").value;
    const message = localStorage.getItem(id);
    const output = message ? `Zpráva: ${message}` : "Zpráva nebyla nalezena!";
    document.getElementById("retrievedMessage").innerText = output;
}

function generatePublicDrops() {
    const publicDrops = [
        { id: "drop123", message: "Setkání ve 3 ráno u Staré haly." },
        { id: "drop789", message: "Operace začne za 24 hodin." }
    ];
    const list = document.getElementById("publicDropsList");
    list.innerHTML = "";
    publicDrops.forEach(drop => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#" onclick="viewPublicDrop('${drop.id}', '${drop.message}')">${drop.id}</a>`;
        list.appendChild(listItem);
    });
}

function viewPublicDrop(id, message) {
    alert(`ID: ${id}\nZpráva: ${message}`);
}



    let isDraggingEmail = false;
    let offsetXEmail, offsetYEmail;

    const emailTop = document.querySelector('.emailTop');
    emailTop.addEventListener('mousedown', (e) => {
        isDraggingEmail = true;
        offsetXEmail = e.clientX - emailWindow.offsetLeft;
        offsetYEmail = e.clientY - emailWindow.offsetTop;
    });

    document.addEventListener('mouseup', () => {
        isDraggingEmail = false;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDraggingEmail) {
            let newX = e.clientX - offsetXEmail;
            let newY = e.clientY - offsetYEmail;

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const emailWidth = emailWindow.offsetWidth;
            const emailHeight = emailWindow.offsetHeight;

            if (newX < 0) newX = 0;
            if (newX + emailWidth > windowWidth) newX = windowWidth - emailWidth;
            if (newY < 0) newY = 0;
            if (newY + emailHeight > windowHeight) newY = windowHeight - emailHeight;

            emailWindow.style.left = `${newX}px`;
            emailWindow.style.top = `${newY}px`;
        }
    });

    //// HYDRA TUNNEL

    const hydraWindow = document.getElementById('hydraWindow');
    const closeHydra = document.getElementById('closeHydra');

    document.getElementById('openHydra').addEventListener('click', () => {
        openWindow(hydraWindow);
    });
    
    // Funkce pro otevření okna
    function openWindow(window) {
        window.style.display = 'block';
    }
    
    // Zavření aplikace
    closeHydra.addEventListener('click', () => {
        hydraWindow.style.display = 'none';
    });
    

    let isDraggingHydra = false;
    let offsetXHydra, offsetYHydra;

    const hydraTop = document.querySelector('.hydraTop');
    hydraTop.addEventListener('mousedown', (e) => {
        isDraggingHydra = true;
        offsetXHydra = e.clientX - hydraWindow.offsetLeft;
        offsetYHydra = e.clientY - hydraWindow.offsetTop;
    });

    document.addEventListener('mouseup', () => {
        isDraggingHydra = false;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDraggingHydra) {
            let newX = e.clientX - offsetXHydra;
            let newY = e.clientY - offsetYHydra;

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const hydraWidth = hydraWindow.offsetWidth;
            const hydraHeight = hydraWindow.offsetHeight;

            if (newX < 0) newX = 0;
            if (newX + hydraWidth > windowWidth) newX = windowWidth - hydraWidth;
            if (newY < 0) newY = 0;
            if (newY + hydraHeight > windowHeight) newY = windowHeight - hydraHeight;

            hydraWindow.style.left = `${newX}px`;
            hydraWindow.style.top = `${newY}px`;
        }
    });

    function sendHydra() {
        if (document.getElementById('hydraContent').value === 'AbYeQ34mMFQ5WwLknpwCwCOnHZf6k5v9pj21mFw9q2ckscUTMZnbrXLF1kZp5g2k3aLuj11FQ42Yw2Mw') {
            alert('Správně! Přístup povolen.');
            window.location.href = 'hydra.html';
            clearNotepad();
        }
    }
