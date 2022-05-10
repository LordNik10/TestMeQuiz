document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('nickname').focus();
});

function salvaNick()
{
    let nickname = document.getElementById('nickname');
    sessionStorage.setItem('nick',nickname.value);
    localStorage.removeItem('nick');
}

