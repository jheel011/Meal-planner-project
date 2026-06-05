document.addEventListener("DOMContentLoaded",function(){

    const createFamBtn = document.querySelector('.create_fam_button button');
    const joinFamBtn = document.querySelector('.join_fam_button button');


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

        const code = familyName.slice(0,4).toUpperCase() + Math.floor(Math.random()*100);

        localStorage.setItem('familyCode',code);
        localStorage.setItem('familyName',familyName);
        localStorage.setItem('userName',yourName);
        localStorage.setItem('userRole',yourRole);

        
        document.getElementById('generatedCode').innerText = code;
        document.getElementById('hidden').style.display = 'block';
    }
    

    function joinFamily(event){
        event.preventDefault();

        const famCode = document.getElementById('fam_Code').value;
        const userName= document.getElementById('your_Name').value;
        const userRole = document.getElementById('your_Role').value;

        const savedCode = localStorage.getItem('familyCode');

        if(famCode === savedCode){
            localStorage.setItem('userName', userName);
            localStorage.setItem('userRole', 'member');
            window.location.href ="home.html";
        }else if(famCode ===''|| userName===''){
            alert('Fill your details!')
        }
        else{
            alert('Invalid Family Code! Please check and try again!')
        }
    }


    if (createFamBtn) {
        createFamBtn.addEventListener('click', createFamily);
    }

    if (joinFamBtn) {
        joinFamBtn.addEventListener('click', joinFamily);
    }

})
