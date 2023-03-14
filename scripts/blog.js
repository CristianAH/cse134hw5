



window.onload = function()
{
    const addButton = document.getElementById('addB');
    let deletePostButton = document.querySelectorAll('#blogPosts .delete');

    listItem();
    addButton.addEventListener('click' , () => 
    {
        window.blogD.showModal();
        document.getElementById('blogD').addEventListener('close', () => 
        {
            let retVal = document.getElementById('blogD').returnValue;
            if(retVal === 'Save')
            {
                let testTitle = document.getElementById('title').value;
                let testDate = document.getElementById('date').value;
                let testSum = document.getElementById('sum').value;

                let cleanTitle = DOMPurify.sanitize(testTitle);
                let cleanDate = DOMPurify.sanitize(testDate);
                let cleanSum = DOMPurify.sanitize(testSum);
  
                let titleCon = (testTitle === '' || cleanTitle === null);
                let dateCon = (testDate === '' || cleanDate === null);
                let sumCon = (testSum === '' || cleanSum === null);

                if(!titleCon && !dateCon && !sumCon)
                {
                    document.getElementById('title').value = '';
                    document.getElementById('date').value = '';
                    document.getElementById('sum').value = '';
                    addItem(cleanTitle, cleanDate, cleanSum);
                    console.log('added');
                }

            }
        });
    });


}

let arr = JSON.parse(localStorage.getItem("postCRUD")) || [];

function addItem(pTitle, pDate, pSum)
{
    let myObj = 
    {
        postTitle: pTitle,
        postDate: pDate,
        postSum: pSum
    };

    arr.push(myObj);
    localStorage.setItem("postCRUD", JSON.stringify(arr));
    listItem();
}
function listItem()
{
    let obj = "";
    
    if(arr.length === 0)
    {
        document.querySelector('#blogPosts').style.listStyleType = "none";
        obj = "<li class='none'> No posts currently listed </li>";
    }
    else
    {
        document.querySelector('#blogPosts').style.listStyleType = "disc";
        if(document.querySelector('#none') !== null)
        {
            document.querySelector('#none').style = 'none';
        }
    }
    for(let i = 0; i < arr.length; i++)
    {
        obj += "<li class=titlePost>" ; 
        obj += "Title: " + arr[i].postTitle +  "</br>";
        obj += "Date: " + arr[i].postDate + "</br>" ;
        obj += "Summary: " + arr[i].postSum + "</br>";
        obj += "<span class='label alert' onclick='updateItem(" + i +")'>edit</span></li>";
        obj += "<span class='label alert' onclick='removeItem(" + i +")'>delete</span></li>";
    }
    document.querySelector('#blogPosts').innerHTML = obj;
}

function removeItem(index)
{
    arr.splice(index, 1);
    localStorage.setItem('postCRUD', JSON.stringify(arr))
    listItem();
}

function updateItem(index)
{
    window.blogD.showModal();
    document.getElementById('blogD').addEventListener('close', () => 
    {
        let retVal = document.getElementById('blogD').returnValue;
        if(retVal === 'Save')
        {
            let testTitle = document.getElementById('title').value;
            let testDate = document.getElementById('date').value;
            let testSum = document.getElementById('sum').value;

            let cleanTitle = DOMPurify.sanitize(testTitle);
            let cleanDate = DOMPurify.sanitize(testDate);
            let cleanSum = DOMPurify.sanitize(testSum);
  
            let titleCon = (testTitle === '' || cleanTitle === null);
            let dateCon = (testDate === '' || cleanDate === null);
            let sumCon = (testSum === '' || cleanSum === null);

                if(!titleCon && !dateCon && !sumCon)
                {
                    document.getElementById('title').value = '';
                    document.getElementById('date').value = '';
                    document.getElementById('sum').value = '';

                    arr[index].postTitle = cleanTitle;
                    arr[index].postDate = cleanDate;
                    arr[index].postSum = cleanSum;
                    localStorage.setItem('postCRUD', JSON.stringify(arr));

                    listItem();
                }

            }
        });
}
