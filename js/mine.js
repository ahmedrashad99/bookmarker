var bnameinput = document.getElementById("sitename")
var burlinput = document.getElementById("siteurl")
var allbookmark = [];

 if(localStorage.getItem("allbookmarkstorage") !=null)
{
    allbookmark = JSON.parse(localStorage.getItem("allbookmarkstorage"))
    disblaybookmark()
}

// add book mark=======

function addbookmark ()

{
    var bname = bnameinput.value;
    var burl = burlinput.value;
    var onebookmark ={name :bname , url : burl}

    allbookmark.push(onebookmark)

    localStorage.setItem ("allbookmarkstorage" , JSON.stringify(allbookmark));
    
    clearinput ()
    
    disblaybookmark()

    
}

function clearinput ()

{
    bnameinput.value="";
    burlinput.value="";
}



function disblaybookmark()
{
    var container=``
    for(var i=0; i<allbookmark.length;i++)
    {
        container=container + ` <tr>
        <th scope="row">`+allbookmark[i].name+`</th>
        <td><a class="btn btn-primary"  href="`+allbookmark[i].url+`">Visit</a></td>
        <td><button onclick="remove(`+i+`)" class=" btn btn-danger">Delete</button></td>
      </tr>`

    }
    document.getElementById("submit").innerHTML=container
}


function remove(pindex)

{

    allbookmark.splice(pindex ,1)
    disblaybookmark()
    localStorage.setItem("allbookmarkstorage" , JSON.stringify(allbookmark))
}
