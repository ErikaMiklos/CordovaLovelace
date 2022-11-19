//Random Background Image
setInterval(() => {
    var imgArray = [
        '../src/assets/img/logan.jpg',
        '../src/assets/img/squid-game.jpg',
        '../src/assets/img/thor-love-and-thunder.png',
        '../src/assets/img/Johnny-English-Strikes-Again.jpg',
        '../src/assets/img/extraction.jpg',
        '../src/assets/img/all-of-us-are-dead.png'
    ];
    
    var backgroundImage = document.getElementById('backgroundImage');
    
    function randomBackgroundImage(num){
        var num = Math.floor(Math.random() * 6);
        backgroundImage.style.backgroundImage = 'url("' + imgArray[num] + '")';
        backgroundImage.style.backgroundRepeat = "no-repeat";
    }
    randomBackgroundImage();
}, 2000);

//Page Navigator
const pageTitle = document.getElementById('pageTitle');
pageTitle.addEventListener('click', () => {
    window.location = './';
});

const dropDownMenuAboutIconText = document.getElementById('dropDownMenuAboutIconText');
dropDownMenuAboutIconText.addEventListener('click', () => {
    window.location = 'https://github.com/softDev28/Lovelace';
});

//Search Drawer
const searchIcon = document.getElementById('searchIcon');
searchIcon.addEventListener('click', () => {
    document.getElementById('searchDrawerContainer').classList.toggle('active');
    $('#searchDrawerOverlay').fadeIn('fast');
});

const hideSearchDrawer = document.getElementById('searchBackIcon');
hideSearchDrawer.addEventListener('click', () => {
    document.getElementById('searchDrawerContainer').classList.toggle('active');
    $('#searchDrawerOverlay').fadeOut('fast');
});

//Drop Down Menu Drawer
const dropDownMenuIcon = document.getElementById('dropDownMenuIcon');
dropDownMenuIcon.addEventListener('click', () => {
    $('#dropDownMenuContainer').show('fast');
    $('#dropDownMenuOverlay').show('fast');
});

const hideDropDownMenuDrawer = document.getElementById('dropDownMenuOverlay');
hideDropDownMenuDrawer.addEventListener('click', () => {
    $('#dropDownMenuOverlay').fadeOut('fast');
    $('#dropDownMenuContainer').fadeOut('fast');
});

//Settings Drawer
const showSettingsDrawer = document.getElementById('dropDownMenuSettingsIconText');
showSettingsDrawer.addEventListener('click', () => {
    document.getElementById('settingsDrawer').classList.toggle('active');
    $('#settingsDrawerOverlay').fadeIn('fast');
});

const hideSettingsDrawer = document.getElementById('settingsDrawerBackIcon');
hideSettingsDrawer.addEventListener('click', () => {
    document.getElementById('settingsDrawer').classList.toggle('active');
    $('#settingsDrawerOverlay').fadeOut('fast');
    $('#dropDownMenuContainer').hide();
});
