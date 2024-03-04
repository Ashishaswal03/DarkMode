const screenMode=document.getElementById('screen-input')

screenMode.addEventListener('change', (e)=>{
    console.log(document.body.classList.add('dark'));
})