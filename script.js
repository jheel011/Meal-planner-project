document.addEventListener("DOMContentLoaded",function(){

    const createFamBtn = document.querySelector('.create_fam_button button');







    function createFamily (e) {
        e.preventDefault();
        // 1. read values
        const familyName = document.getElementById('famName').value;
        const yourName = document.getElementById('yourName').value;
        const yourRole = document.getElementById('yourRole').value;

        if (familyName ==='' || yourName === ''){
            alert('Please fill all the fields!');
            return;
        }

        console.log(familyName);
        console.log(yourName);
        console.log(yourRole);

        const code = familyName.slice(4,8).toUpperCase() + Math.floor(Math.random()*100);

        localStorage.setItem('familyCode',code);
        localStorage.setItem('familyName',familyName);
        localStorage.setItem('userName',yourName);
        localStorage.setItem('userRole',yourRole);

        
        document.getElementById('generatedCode').innerText = code;
        document.getElementById('hidden').style.display = 'block';
    }
    
    createFamBtn.addEventListener('click',createFamily);




})
