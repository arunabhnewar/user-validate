
function nameValidation() {
    const userNameField = document.getElementById('user-name');
    const userNameInput = userNameField.value;
    const userNameInputPattern = /^[A-Za-z .]{3,15}$/;
    if (userNameInputPattern.test(userNameInput)) {
        document.getElementById('user-name').style.backgroundColor = 'white'
    }
    else {
        document.getElementById('user-name').style.backgroundColor = 'orange'
    }

}

const submitBtn = () => {
    const userEmailField = document.getElementById('user-email');
    const userEmailInputField = userEmailField.value;
    const userEmailInputPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userEmailInputPattern.test(userEmailInputField)) {
        location.assign('https://github.com/ArunabhNewar')
    }
    else {
        location.reload();
    }
}