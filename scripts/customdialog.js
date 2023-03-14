
window.onload = function()
{
    const alertButton = document.getElementById('alertB');
    const confirmButton = document.getElementById('confirmB');
    const promptButton = document.getElementById('promptB');

    alertButton.addEventListener('click' , () => 
    {
        window.alertD.showModal();
    });

    confirmButton.addEventListener('click' , () =>
    {
        window.confirmD.showModal();
    });

    document.getElementById('confirmD').addEventListener('close' , () =>
    {
        let retVal= document.getElementById('confirmD').returnValue;
        document.getElementById('conRes').textContent = `Confirm result: ${retVal}`;

    });

}

