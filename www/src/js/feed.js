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

const homeIcon = document.getElementById('homeIcon');
homeIcon.addEventListener('click', () => {
    window.location = './';
});

const dropDownMenuAboutIconText = document.getElementById('dropDownMenuAboutIconText');
dropDownMenuAboutIconText.addEventListener('click', () => {
    window.location = 'https://github.com/softDev28/Lovelace';
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

//Floating Action Button Drawer
const bottomNavigationBarFloatingActionButton = document.getElementById('bottomNavigationBarFloatingActionButton');
bottomNavigationBarFloatingActionButton.addEventListener('click', () => {
    document.getElementById('floatingActionButtonDrawerContainer').classList.toggle('active');
    $('#floatingActionButtonDrawerOverlay').fadeIn('fast');
});

const hideHomeFloatingActionButtonDrawer = document.getElementById('floatingActionButtonDrawerBackIcon');
hideHomeFloatingActionButtonDrawer.addEventListener('click', () => {
    document.getElementById('floatingActionButtonDrawerContainer').classList.toggle('active');
    $('#floatingActionButtonDrawerOverlay').fadeOut('fast');
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

//Side Navigation Drawer
const showSideNavDrawer = document.getElementById('appBarBarIcon');
showSideNavDrawer.addEventListener('click', () => {
    document.getElementById('sideNavDrawerContainer').classList.toggle('active');
    $('#sideNavDrawerOverlay').fadeIn('fast');
});

const hideSideNavDrawer = document.getElementById('sideNavDrawerOverlay');
hideSideNavDrawer.addEventListener('click', () => {
    document.getElementById('sideNavDrawerContainer').classList.toggle('active');
    $('#sideNavDrawerOverlay').fadeOut('fast');
});