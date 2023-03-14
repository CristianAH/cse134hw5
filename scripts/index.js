const toggleBut = document.getElementsByClassName('menuToggle')[0];
const navbarLinks = document.getElementsByClassName('navMenu')[0];

const toggleNight = document.querySelector('.toggle input[type="checkbox"]');
const currTheme = localStorage.getItem('theme');

if(currTheme)
{
    document.documentElement.setAttribute('data-theme', currTheme);
    if(currTheme === 'dark')
    {
        toggleNight.checked = true;

    }
}

toggleBut.addEventListener('click', () => 
{
    navbarLinks.classList.toggle('active');
});

function switchTheme(e)
{
    if(e.target.checked)
    {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else
    {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }

    console.log("Toggled");
}
toggleNight.addEventListener('change', switchTheme, false);