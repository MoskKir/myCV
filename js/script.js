// Render 
function render() {
    const container = document.createElement('div');
    container.innerHTML = `<div class="container nav">        
    <div class="row ">
        <div class="nine columns main">
            <div id="tabs">
                <div class="tab whiteborder">profile</div>                    
                <div class="tab">unusual sites</div>
                <div class="tabContent">
                        <time>2019-09-11</time>  
    
                        <h2>Kirill Moskalevich</h2>
                            <ul>
                                <li><span>Telephone number:</span> <a href="tel:+375447504152">+375447504152</a></li>
                                <li><span>E-mail:</span> <a href="mailto:mosk9364@gmail.com" >mosk9364@gmail.com</a></li>
                                <li><span>LinkedIn profile:</span> <a href="http://thermoval.akgroup.by/">http://thermoval.akgroup.by/</a></li>
                                <li><span>job.tut.by</span> <a href="https://jobs.tut.by/resume/8371d52bff07594fce0039ed1f3049464b3159">https://jobs.tut.by/resume/8371d52bff07594fce0039ed1f3049464b3159</a></li>                                
                                <li><span>Github:</span> <a href="https://github.com/MoskKir" target="_blank">https://github.com/MoskKir</a></li>        
                                <li><span>English:</span> pre-intermediate (A2+)</li>   
                            </ul> 

                        <h2>Summary of Qualifications </h2>
                            <p>
                                Novice frontend-developer with technical education. Confident knowledge of HTML, 
                                CSS/SCSS, JavaScript, React, Redux, NodeJS, ReactNative, MySQL, MongoDB, CMS. 
                            </p>                            
                        <h2>Technical Skills</h2>
                            <ul>
                                <li><span>Programming languages and technologies:</span> JavaScript, Python, HTML, HUML, PUG, CSS/SCSS</li>
                                <li><span>Operating systems</span> Windows, linux</li>
                                <li><span>Programming practices:</span> Agile, Kanban, Waterfall, Code review</li>
                                <li><span>Frameworks and Libraries:</span> React, Redux, react-router-dom, lodash, Bootstrap, React Bootstrap, Materialize, face-api.js, Selenium, express, 
                                    mongoose, bcrypt, express-validator, short-id, cross-env, react-calendar-heatmap</li>
                                <li><span>Tools:</span> GIT, Webpack, VS Code, PyCharm, Photoshop, Figma, Expo.</li>
                                <li><span>Other skills:</span> AutoCAD</li>
                            </ul>                            
                        <h2>Code examples</h2>
                            <div class="row">
                                <div class="three columns">
                                    <div class="item-list item-1"></div>
                                    <span>URL: </span><a href="http://react-app.akgroup.by/" target="_blank">loanReactApp</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/tree/master/loan/src" target="_blank">APP.JS</a>
                                </div>
                                <div class="three columns">
                                    <div class="item-list item-2"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/codejam-virtual-keyboard/" target="_blank">Virtual Keyboard</a>
                                    <br>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/codejam-virtual-keyboard/tree/codejam-virtual-keyboard" target="_blank">repo</a>
                                </div>
                                <div class="three columns">
                                    <div class="item-list item-3"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/myLernJS/todoJS/" target="_blank">todoJS</a>                                    
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/blob/master/todoJS/js/app.js" target="_blank">APP.JS</a>
                                </div>
                                <div class="three columns">
                                    <div class="item-list item-4"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/Fancy-weather/" target="_blank">Fancy weather</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/Fancy-weather/tree/work-branch/fancy-weather" target="_blank">repo</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="three columns">
                                    <div class="item-list item-5"></div>
                                    <span>URL: </span><a href="http://moskkir.ru/" target="_blank">Short Link</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/short-link-project" target="_blank">repo</a>
                                </div>                                    
                                <div class="three columns">
                                    <div class="item-list item-6"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/myLernJS/weekBudget/" target="_blank">WeekBudget</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/blob/master/weekBudget/js/app.js" target="_blank">APP.JS</a>
                                </div>
                                <div class="three columns">
                                    <div class="item-list item-7"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/myLernJS/JSONAPI/" target="_blank">JSONAPI</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/blob/master/JSONAPI/app.js" target="_blank">APP.JS</a>
                                </div>
                                <div class="three columns">
                                    <div class="item-list item-8"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/myLernJS/kinopoisk-client/" target="_blank">KPClient</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/blob/master/kinopoisk-client/js/script.js" target="_blank">APP.JS</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="three columns">
                                    <div class="item-list item-9"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/myLernJS/nameGenerator/" target="_blank">nameGenerator</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/blob/master/nameGenerator/js/app.js" target="_blank">APP.JS</a>
                                </div>
                                <div class="three columns">
                                    <div class="item-list item-10"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/myLernJS/lyrics/" target="_blank">lyrics</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/blob/master/lyrics/js/app.js" target="_blank">APP.JS</a>
                                </div>
                                <div class="three columns">
                                    <div class="item-list item-11"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/myLernJS/IndexedDB/" target="_blank">IndexedDB</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/blob/master/IndexedDB/js/app.js" target="_blank">APP.JS</a>
                                </div>
                                <div class="three columns">
                                    <div class="item-list item-12"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/myLernJS/HigherOrderFunctions/" target="_blank">Filters</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/blob/master/HigherOrderFunctions/js/search.js" target="_blank">APP.JS</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="three columns">
                                    <div class="item-list item-13"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/myLernJS/cryptocurrencies/" target="_blank">cryptoC</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/blob/master/cryptocurrencies/js/app.js" target="_blank">APP.JS</a>
                                </div>
                                <div class="three columns">
                                    <div class="item-list item-14"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/myLernJS/eventsInCity/" target="_blank">eventsInCity</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/blob/master/eventsInCity/js/app.js" target="_blank">APP.JS</a>
                                </div>
                                <div class="three columns">
                                    <div class="item-list item-15"></div>
                                    <span>URL: </span><a href="https://moskkir.github.io/myLernJS/quiz_api/" target="_blank">QuizApp</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/blob/master/quiz_api/js/quiz.js" target="_blank">APP.JS</a>
                                </div>
                                <div class="three columns">
                                    <div class="item-list item-16"></div>
                                    <span>URL: </span><a href="http://react-app.akgroup.by/" target="_blank">loanReactApp</a>
                                    <span>GITHUB: </span><a href="https://github.com/MoskKir/myLernJS/tree/master/loan/src" target="_blank">APP.JS</a>
                                </div>
                            </div>
                                                      
                        <h2>Experience</h2>
                            <span>Yaroslavl, Russia</span>
                            <p>Worked in the company as a technician of Automated Information Systems</p>
                            <span>Minsk, Belarus</span>
                            <p>Сo-founder of the company as well сreation, content and administration of sites:</p>
                            <ul>
                                <li><a href="http://akgroup.by/">http://akgroup.by/</a></li>
                                <li><a href="http://lepnina.akgroup.by/">http://lepnina.akgroup.by/</a></li>
                                <li><a href="http://thermoval.akgroup.by/">http://thermoval.akgroup.by/</a></li>
                                <li><a href="http://oracdecor.by/">http://oracdecor.by/</a></li>
                                <li><a href="http://videovminske.by/">http://videovminske.by/</a></li>        
                            </ul>                            
                        <h2>Education</h2>
                            Среднеспециальное “Автоматизированные информационные системы и управление” 
                            В Ярославском градостроительном колледже
                        <h3>Additional education:</h3>
                            <ul>
                                <li>Programmable logic controllers WAGO I/O, FASTWEL I/O» (basic course) ООО “Прософт”</li>
                                <li>Design basics SCADA on base GENESIS 32 V9(ICONICS)» (basic course) ООО “Прософт”</li>
                            </ul>                       
                    </div>
                <div class="tabContent">
                        <div class="row">
                            <div class="six columns">
                                <span>UNUSUAL MECHANICS </span>                                        
                                <ul>
                                    <li><a href="http://www.windows93.net/" target="_blank">http://www.windows93.net/</a></li>                                        
                                    <li><a href="https://radio.garden/" target="_blank">https://radio.garden/</a></li>            
                                    <li><a href="http://www.everest3d.de/" target="_blank">http://www.everest3d.de/</a></li>
                                    <li><a href="http://dinosaurpictures.org/ancient-earth/#240" target="_blank">http://dinosaurpictures.org/</a></li>
                                    <li><a href="https://demos.algorithmia.com/" target="_blank">https://demos.algorithmia.com/</a></li>
                                    <li><a href="http://internet-map.net/" target="_blank">http://internet-map.net/</a></li>
                                    <li><a href="http://radiooooo.com/" target="_blank">http://radiooooo.com/</a></li>
                                    <li><a href="http://www.savethesounds.info/" target="_blank">http://www.savethesounds.info/</a></li>
                                    <li><a href="http://weavesilk.com/" target="_blank">http://weavesilk.com/</a></li>
                                    <li><a href="http://www.rememberspook.com/" target="_blank">http://www.rememberspook.com/</a></li>
                                    <li><a href="http://www.mapcrunch.com/" target="_blank">http://www.mapcrunch.com/</a></li>
                                    <li><a href="https://www.pointerpointer.com/" target="_blank">https://www.pointerpointer.com/</a></li>
                                    <li><a href="https://ilooklikebarackobama.com/" target="_blank">https://ilooklikebarackobama.com/</a></li>
                                    <li><a href="http://www.peopleofwalmart.com/" target="_blank">http://www.peopleofwalmart.com/</a></li>
                                    <li><a href="https://theuselessweb.com/" target="_blank">https://theuselessweb.com/</a></li>
                                    <li><a href="http://www.drawastickman.com" target="_blank">http://www.drawastickman.com</a></li>
                                    <li><a href="http://www.patience-is-a-virtue.org/" target="_blank">http://www.patience-is-a-virtue.org/</a></li>
                                    <li><a href="http://www.fliptext.org/" target="_blank">http://www.fliptext.org/</a></li>
                                    <li><a href="http://www.staggeringbeauty.com/" target="_blank">http://www.staggeringbeauty.com/</a></li>
                                    <li><a href="http://eelslap.com/" target="_blank">http://eelslap.com/</a></li>
                                    <li><a href="http://www.pixelthoughts.co/" target="_blank">http://www.pixelthoughts.co/</a></li>
                                    <li><a href="https://dictation.io/speech" target="_blank">https://dictation.io/speech</a></li>                                        
                                </ul>
                            </div>
                            <div class="six columns">                                   
                                <span>AMAZING DESING </span>
                                <ul>                                        
                                    <li><a href="http://www.sbs.com.au/kgari/" target="_blank" class="link"><img src="./img/design/kgari.jpg" alt="kgari">http://www.sbs.com.au/kgari/</a></li>                                       
                                    <li><a href="https://www.sbs.com.au/aviolentact/" target="_blank" class="link"><img src="./img/design/aviolentact.jpg" alt="aviolentact">https://www.sbs.com.au/aviolentact/</a></li>
                                    <li><a href="http://after64.sbs.com.au/" target="_blank" class="link"><img src="./img/design/after64.jpg" alt="after64">http://after64.sbs.com.au/</a></li>
                                    <li><a href="http://residente.com/en/" target="_blank" class="link"><img src="./img/design/residente.jpg" alt="residente">http://residente.com/en/</a></li>
                                    <li><a href="http://www.sbs.com.au/theboat/" target="_blank" class="link"><img src="./img/design/theboat.jpg" alt="theboat">http://www.sbs.com.au/theboat/</a></li>
                                    <li><a href="https://www.stockholmdesignlab.se/" target="_blank" class="link"><img src="./img/design/stockholmdesignlab.jpg" alt="stockholmdesignlab">https://www.stockholmdesignlab.se/</a></li>
                                    <li><a href="https://www.duroc.ma/en/" target="_blank" class="link"><img src="./img/design/duroc.jpg" alt="duroc">https://www.duroc.ma/en/</a></li>
                                    <li><a href="https://ncase.me/" target="_blank" class="link"><img src="./img/design/ncase.jpg" alt="ncase">https://ncase.me/</a></li>
                                    <li><a href="https://notdotteam.github.io/trust/" target="_blank" class="link"><img src="./img/design/trust.jpg" alt="trust">https://notdotteam.github.io/trust/</a></li>
                                    <li><a href="https://www.catchfishandchips.com.au/" target="_blank" class="link"><img src="./img/design/catchfishandchips.jpg" alt="catchfishandchips">https://www.catchfishandchips.com.au/</a></li>
                                    <li><a href="http://www.thehappyforecast.com/" target="_blank" class="link"><img src="./img/design/thehappyforecast.jpg" alt="thehappyforecast">http://www.thehappyforecast.com/</a></li>
                                    <li><a href="http://www.species-in-pieces.com/" target="_blank" class="link"><img src="./img/design/species-in-pieces.jpg" alt="species-in-pieces">http://www.species-in-pieces.com/</a></li>
                                    <li><a href="http://digital-deadly-sins.theguardian.com/" target="_blank" class="link"><img src="./img/design/sins.jpg" alt="sins">http://digital-sins.theguardian.com/</a></li>
                                    <li><a href="https://chekhov.withgoogle.com/" target="_blank" class="link"><img src="./img/design/chekhov.jpg" alt="chekhov">https://chekhov.withgoogle.com/</a></li>
                                    <li><a href="https://apps.ua/ru/" target="_blank" class="link"><img src="./img/design/apps.jpg" alt="apps">https://apps.ua/ru/</a></li>
                                    <li><a href="http://www.allamardesign.com/" target="_blank" class="link"><img src="./img/design/allamardesign.jpg" alt="allamardesign">http://www.allamardesign.com/</a></li>
                                    <li><a href="http://www.tunkideas.com/" target="_blank" class="link"><img src="./img/design/tunkideas.jpg" alt="tunkideas">http://www.tunkideas.com/</a></li>
                                    <li><a href="http://www.uncubemagazine.com/" target="_blank" class="link"><img src="./img/design/uncubemagazine.jpg" alt="uncubemagazine">http://www.uncubemagazine.com/</a></li>
                                    <li><a href="https://easterneuropeanmovies.com/" target="_blank" class="link"><img src="./img/design/easterneuropeanmovies.jpg" alt="easterneuropeanmovies">https://easterneuropeanmovies.com/</a></li>                                        
                                    <li><a href="http://pixudio.com/" target="_blank" class="link"><img src="./img/design/pixudio.jpg" alt="pixudio">http://pixudio.com/</a></li>
                                    <li><a href="http://2016.makemepulse.com/" target="_blank" class="link"><img src="./img/design/makemepulse.jpg" alt="makemepulse">http://2016.makemepulse.com/</a></li>
                                    <li><a href="https://district13.co.in/" target="_blank" class="link"><img src="./img/design/district13.jpg" alt="district13">https://district13.co.in/</a></li>
                                    <li><a href="http://www.sound-of-change.com/#/" target="_blank" class="link"><img src="./img/design/sound-of-change.jpg" alt="sound-of-change">http://www.sound-of-change.com/#/</a></li>
                                    <li><a href="https://www.jam3.com/" target="_blank" class="link"><img src="./img/design/jam3.jpg" alt="jam3">https://www.jam3.com/</a></li>
                                    <li><a href="http://www.because-recollection.com/" target="_blank" class="link"><img src="./img/design/because-recollection.jpg" alt="because-recollection">http://www.because-recollection.com/</a></li>
                                    <li><a href="https://granola.com.ua/" target="_blank" class="link"><img src="./img/design/granola.jpg" alt="granola">https://granola.com.ua/</a></li>
                                    <li><a href="http://70ans.inra.fr/en/" target="_blank" class="link"><img src="./img/design/70ans.jpg" alt="70ans">http://70ans.inra.fr/en/</a></li>
                                    <li><a href="http://i-remember.fr/en" target="_blank" class="link"><img src="./img/design/remember.jpg" alt="remember">http://i-remember.fr/en</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>     
                                   
            </div>
        </div>    
        <div class="three columns">
            <div class="right-side-bar">
                                       
                <img class="myPhoto" src="./img/photo.jpg" alt="my photo">
    
                    <h1>Kirill, Moskalevich</h1>
                    <span>AGE: </span> 26 <span>LOCATION: </span>  MINSK
                    <p><img class="codewars-badget" src="https://www.codewars.com/users/MoskKir/badges/micro" alt=""></p>
                    <ul>
                        <li>
                            <i class="fab fa-github-square"></i> <a href="https://github.com/MoskKir" target="_blank">GitHub</a>
                        </li>                    
                        <li>
                            <img class="codewars-logo" src="./img/codewars.png" alt="codewars logo"> <a href="https://www.codewars.com/users/MoskKir/" target="_blank">CodeWars</a>                                                        
                        </li>
                        <li>
                            <i class="fab fa-codepen"></i> <a href="https://codepen.io/moskkir/">Codepen</a>
                        </li>
                    </ul>
                    <h2>Contacts</h2>
                    <ul>
                        <li><i class="fas fa-at"></i> <a href="mailto:mosk9364@gmail.com" >mosk9364@gmail.com</a></li>
                        <li><i class="fas fa-paper-plane"></i> <a href="https://t.me/JoniJonson" >Telegram</a></li>
                        <li><i class="fas fa-phone-square-alt"></i> <a href="tel:+375447504152">+375447504152</a></li>
                        
                    </ul>
                    
            </div>  
            
        </div>
    </div>      
    
    </div>`;
    
    document.body.appendChild(container);
}
render();

// Tabs
let tab;
let tabContent;

window.onload = function () {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function (event) {
    let target = event.target;
    
    if (target.className == 'tab') {
        for (let i = 0; i < tab.length; i++) {
            
            if (target == tab[i]) {
                showTabsContent(i);
                break;    
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}