import "../css/style.scss";

let profileImg = document.getElementById('profile-img');
let inputFile = document.getElementById('input-file');

inputFile.onchange = function(){
    profileImg.src = URL.createObjectURL(inputFile.files[0]);
}