let plus = document.querySelector(".plus");
let area = document.querySelector(".text-area");
let yesdelete = document.querySelector(".minus");
let delbtn = document.querySelectorAll(".delete-box");

let myid = 0;
plus.addEventListener("click", function (e) {
    let div = document.createElement("div");
    div.classList.add("added");
    div.setAttribute("id",myid)

    div.innerHTML = `<div class="content" id=${myid} spellcheck="false"></div>
    <div class="delete-box">
    <button id=${myid}> Delete </button>
    </div>`
    
    let content = div.querySelector(".content");
    content.addEventListener("click", function (e) {
        content.setAttribute("contenteditable","true")
    })
    content.addEventListener("blur", function (e) {
        // updatelocal();
        content.setAttribute("contenteditable","false")
            let arr=JSON.parse(localStorage.getItem("alldetails"));
            arr[e.target.id].text=e.target.outerText;
            localStorage.setItem("alldetails",JSON.stringify(arr))
    })
    
    let delbtn=div.querySelector("button");
    delbtn.addEventListener("click", function (e) {
        let arr=JSON.parse(localStorage.getItem("alldetails"));
        arr=arr.filter(obj => obj.id != e.target.id);
        localStorage.setItem("alldetails",JSON.stringify(arr))
        document.getElementById(e.target.id).remove();
    })

    let obj={"id":myid,"text":""};
    let arr=JSON.parse(localStorage.getItem("alldetails"));
    arr.push(obj);
    localStorage.setItem("alldetails",JSON.stringify(arr))
    myid++;
    area.append(div);
})

yesdelete.addEventListener("click", function (e) {
    area.innerHTML = "";
})


