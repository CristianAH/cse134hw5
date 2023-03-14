

window.onload = function()
{
    const alertButton = document.getElementById('alertB');
    const confirmButton = document.getElementById('confirmB');
    const promptButton = document.getElementById('promptB');
    const spromptButton = document.getElementById('spromptB');

    const conResult = document.getElementById('conRes');

    alertButton.addEventListener('click' , ()=> 
    {
        alert('Alert Pressed!');
    });

    confirmButton.addEventListener('click' , () =>
    {
        let result = confirm('Did you confirm this?');
        if(result == true)
        {
            conResult.style.display = "block";
        }
        else
        {
            conResult.innerHTML = 'Confirm result: false';
            conResult.style.display = 'block';
        }
    });
    
    promptButton.addEventListener('click' , () => 
    {
        let result = prompt('What is your name?');
        if(result != null)
        {
            conResult.innerHTML = 'Prompt result: ' + result;
            conResult.style.display = 'block';
        }
        else
        {
            conResult.innerHTML = 'Prompt result: User did not enter anything';
            conResult.style.display = 'block';
        }

    });
}

