function createCard(index,title, cName, views, monthsOld, duration, thumbnail) {
    
    let viewStr
    if(views<1000000){
         viewStr=views/1000 + "k";
    }
    else if(view>1000000){
         viewStr= views/1000000 + "M"

    }
    let html = `<div class="card">
    <div class="index">${index}</div>
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h2>${title}</h2>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div>
</div>`
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html;
}

    
    createCard(2,"Introduction to Backend | Sigma Web Dev", "Code With Chandan", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")
