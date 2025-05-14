window.onload = init;

function init() {
    var Today = new Date();
    //     9 / 9 / 2020
    document.getElementById('date').value = Today.getDate() + " / " + (Today.getMonth()+ 1) + " / " + Today.getFullYear();

    document.forms[0].onsubmit = function() {

        if(this.checkValidity()){
                (confirm("Are you sure that you would like to submit the order?")==1)
                }
            }
        }
    
