let darkmode = localStorage.getItem('darkmode')
let checkbox = localStorage.getItem('checkbox')
const themeSwitch = document.getElementById('darkmode-toggle')
const themeSwitch_ham = document.getElementById('darkmode-toggle-ham')
const dark_html = document.getElementById('html')
const dark_linkedin = document.getElementById('linkedin_p')
const dark_footer_linkedin = document.getElementById('linkedin_f')
const dark_github = document.getElementById('github_p')
const dark_exp = document.getElementById('experience')
const dark_edu = document.getElementById('education')
const dark_css = document.getElementById('css')
const dark_js = document.getElementById('js')
const dark_ts = document.getElementById('ts')
const dark_dj = document.getElementById('django')
const dark_py = document.getElementById('python')
const dark_sql = document.getElementById('mysql')
const dark_arrow = document.querySelectorAll('.arrow')
const dark_email = document.getElementById("email")


const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
    dark_html.src = './assets/darkassets/html-5.png'
    dark_linkedin.src = './assets/darkassets/linkedin.png'
    dark_footer_linkedin.src = './assets/darkassets/linkedin.png'
    dark_github.src = './assets/darkassets/github.png'
    dark_exp.src = './assets/darkassets/exp.png'
    dark_edu.src = './assets/darkassets/education.png'
    dark_css.src = './assets/darkassets/css-3.png'
    dark_js.src = './assets/darkassets/js.png'
    dark_ts.src = './assets/darkassets/typescript.png'
    dark_dj.src = './assets/darkassets/django.png'
    dark_py.src = './assets/darkassets/python.png'
    dark_sql.src = './assets/darkassets/mysql.png'
    dark_email.src='./assets/darkassets/email.png'
    for ( i=0 ; i< dark_arrow.length ; i++) {
        dark_arrow[i].src = './assets/darkassets/down-arrow.png';
    }
}

const disableDarkmode = () => {
    dark_html.src = './assets/html.png'
    dark_linkedin.src = './assets/linkedin.png'
    dark_github.src = './assets/github.png'
    dark_exp.src = './assets/experience.png'
    dark_edu.src = './assets/education.png'
    dark_css.src = './assets/css-3.png'
    dark_js.src = './assets/java-script.png'
    dark_ts.src = './assets/typescript.png'
    dark_dj.src = './assets/django.png'
    dark_py.src = './assets/python.png'
    dark_sql.src = './assets/mysql.png'
    dark_email.src='./assets/email.png'
    dark_footer_linkedin.src = './assets/linkedin.png'
    for ( i=0 ; i< dark_arrow.length ; i++) {
        dark_arrow[i].src = './assets/arrow.png';
    }
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
}

if(darkmode === "active") enableDarkmode()

if(checkbox === 'true') {
    themeSwitch.checked = true ;
    themeSwitch_ham.checked = true ;
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    localStorage.setItem('checkbox',themeSwitch.checked)
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

themeSwitch_ham.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    localStorage.setItem('checkbox',themeSwitch_ham.checked)
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

