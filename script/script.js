


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


// Funkce pro změnu obsahu celé stránky
function navigatePage(page) {
    const browserContent = document.getElementById('browserContent');
    switch (page) {
        case 'home':
            browserContent.innerHTML = `
<div id="browserContent">
    <h2>Vítejte na Darknet Home</h2>
    <p>Toto je první wiki. Vyberte další odkaz.</p>
    <ul>
        <li><a href="#" onclick="navigatePage('RealMeat')">Real Meat</a></li>
        <li><a href="#" onclick="navigatePage('Father')">The Father</a></li>
        <li><a href="#" onclick="navigatePage('Darkchat')">Darkchat</a></li>
        <li><a href="#" onclick="navigatePage('BlackMarket')">Black Market</a></li>
    </ul>
</div>
            `;
            break;
        case 'RealMeat':
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
        case 'Father':
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
        case 'Darkchat':
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
                <p style="color:black;">nevim furt se smeju</p>
            </div>
        </div>
    </div>


</div>
            `;
            break;
            case 'BlackMarket':
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
        case 'shorty':
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
</div>
            `;
    }
}

    // Získání prvků pro poznámkový blok
    const notepadIcon = document.getElementById('icon1');
    const notepadWindow = document.getElementById('notepadWindow');
    const closeNotepad = document.getElementById('closeNotepad');
    const notepadContent = document.getElementById('notepadContent');

    // Otevření poznámkového bloku
    notepadIcon.addEventListener('click', () => {
        notepadWindow.style.display = 'block';
        notepadContent.value = localStorage.getItem('notepad') || ''; // Načtení uloženého obsahu
    });

    // Zavření poznámkového bloku
    closeNotepad.addEventListener('click', () => {
        notepadWindow.style.display = 'none';
    });

    // Automatické ukládání poznámek do localStorage
    notepadContent.addEventListener('input', () => {
        localStorage.setItem('notepad', notepadContent.value);
    });

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

    // Získání prvků pro okna a jejich otevírání
    const emailWindow = document.getElementById('emailWindow');
    const closeEmail = document.getElementById('closeEmail');
    
    // Otevření e-mailové aplikace
    document.getElementById('openEmail').addEventListener('click', () => {
        openWindow(emailWindow);
    });
    
    // Funkce pro otevření okna a zvýšení jeho z-indexu
    function openWindow(window) {
        window.style.display = 'block';
    }
    
    closeEmail.addEventListener('click', () => {
        emailWindow.style.display = 'none';
    });
    
    // Zobrazení emailu po kliknutí
    function openEmail(id) {
        const emailDetail = document.getElementById('emailDetail');
        if (id === 1) {
            emailDetail.innerHTML = `
                <strong>Odesílatel:</strong> Admin<br>
                <strong>Předmět:</strong> Vítejte v naší emailové aplikaci<br>
                <p>Děkujeme za použití naší emailové aplikace. Toto je váš první email!</p>
            `;
        }else if (id === 2) {
            emailDetail.innerHTML = `
                <strong>Odesílatel:</strong> Vendetta<br>
                <strong>Předmět:</strong>Už ti zbýva jenom 1 hodina...<br>
                <p>Hledej secret keys pokud chceš přežít!</p>
            `;
        }
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

            // Omezení pohybu poznámkového bloku
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const emailWidth = notepadWindow.offsetWidth;
            const emailHeight = notepadWindow.offsetHeight;

            if (newX < 0) newX = 0;
            if (newX + emailWidth > windowWidth) newX = windowWidth - emailWidth;
            if (newY < 0) newY = 0;
            if (newY + emailHeight > windowHeight) newY = windowHeight - emailHeight;

            emailWindow.style.left = `${newX}px`;
            emailWindow.style.top = `${newY}px`;
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
</div>
        `;
    }


        // Funkce pro zobrazení HTML kódu v okně Inspect
    function inspectPage() {
        const browserContent = document.getElementById('browserContent');
        const inspectWindow = document.getElementById('inspectWindow');
        const inspectContent = document.getElementById('inspectContent');

        const htmlCode = browserContent.innerHTML;

        // Zobrazení kódu ve stylu inspektora
        inspectContent.textContent = htmlCode;
        inspectWindow.style.display = 'block'; // Zobrazení okna Inspect
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


        // Zobrazit modal po stisknutí klávesy Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                document.getElementById('gameModal').style.display = 'block';
            }
        });

        // Zavřít modal po kliknutí na tlačítko zavřít
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('gameModal').style.display = 'none';
        });

        // Funkce pro tlačítko Help
        document.getElementById('helpBtn').addEventListener('click', function() {
            alert('Help content goes here.');
        });

        // Funkce pro tlačítko End Game
        document.getElementById('endGameBtn').addEventListener('click', function() {
            window.location.href = 'index.html';
        });



        document.addEventListener('DOMContentLoaded', function() {
            // Inicializace nastavení
            const volume = document.getElementById('volume');
            volume.value = localStorage.getItem('volume') || 50;
            adjustVolume(volume.value);
        
            const brightness = document.getElementById('brightness');
            brightness.value = localStorage.getItem('brightness') || 50;
            adjustBrightness(brightness.value);
        
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
        
        function adjustVolume(value) {
            // Implementace nastavení hlasitosti
            localStorage.setItem('volume', value);
        }
        
        function testVolume() {
            // Implementace testu hlasitosti
            const audio = new Audio('path/to/test/sound.mp3');
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
        
        let gameStartTime = new Date();
        let gameDuration = parseInt(localStorage.getItem('gameDuration')) || 15 * 60 * 1000; 
        let gameEndTime = new Date(gameStartTime.getTime() + gameDuration);
        
        // Nastavit herní čas na 9:00 PM
        let gameStartHour = 21; // 9 PM
        let gameStartMinutes = 0;
        let gameStartSeconds = 0;
        
        function updateGameTime() {
            const timeElement = document.getElementById('time');
            const now = new Date();
            const elapsedTime = now - gameStartTime;
            const totalGameTime = 3 * 60 * 60 * 1000; // 3 hodiny v milisekundách
            const gameTime = new Date(gameStartTime.getTime() + (elapsedTime / gameDuration) * totalGameTime);
        
            // Nastavit herní čas na 9:00 PM
            gameTime.setHours(gameStartHour, gameStartMinutes, gameStartSeconds, 0);
            gameTime.setTime(gameTime.getTime() + (elapsedTime / gameDuration) * totalGameTime);
        
            if (gameTime.getHours() >= 24 || now >= gameEndTime) {
                gameTime.setHours(0, 0, 0, 0); // Nastavit čas na půlnoc
                clearInterval(gameTimeInterval); // Zastavit aktualizaci času
                window.location.href = 'endGametime.html'; 
            }
        
            const hours = gameTime.getHours();
            const minutes = gameTime.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
            timeElement.textContent = formattedTime;
        }
        
        const gameTimeInterval = setInterval(updateGameTime, 1000);
        updateGameTime();