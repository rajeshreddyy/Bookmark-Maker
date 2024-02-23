// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarksList = [];
let bookmark = {
    siteName : "",
    siteUrl : ""
};

let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let bookmarkFormEl = document.getElementById("bookmarkForm");
let bookmarksListEl = document.getElementById("bookmarksList");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let submitBtnEl = document.getElementById("submitBtn");

function updateUI(){
    bookmarksListEl.classList.add("bookmark-form", "pb-2", "pt-2", "pl-4", "pr-4", "mt-4");
    
    let bookmarkEl = document.createElement("li");
    bookmarkEl.classList.add("bookmark");
    bookmarksListEl.appendChild(bookmarkEl);
    
    let siteNameEl = document.createElement("h1");
    siteNameEl.textContent = bookmark.siteName;
    siteNameEl.classList.add("bookmark-name");
    bookmarkEl.appendChild(siteNameEl);
    
    let siteUrlEl = document.createElement("a");
    let url = `${bookmark.siteUrl}`;
    siteUrlEl.classList.add("text-primary");
    siteUrlEl.textContent = url;
    siteUrlEl.setAttribute("href", url);
    bookmarkEl.appendChild(siteUrlEl);
    
    let line = document.createElement("hr");
    bookmarkEl.appendChild(line);
}

siteNameInputEl.addEventListener("blur", function(event){
    if(event.target.value === ""){
        siteNameErrMsgEl.textContent = "Required*";
    }
    else{
        siteNameErrMsgEl.textContent = "";
    }
    
});
siteUrlInputEl.addEventListener("blur", function(event){
    if(event.target.value === ""){
        siteUrlErrMsgEl.textContent = "Required*";
    }
    else{
        siteUrlErrMsgEl.textContent = "";
    }
    
});
siteNameInputEl.addEventListener("change", function(event){
    bookmark.siteName = event.target.value;
});
siteUrlInputEl.addEventListener("change", function(event){
    bookmark.siteUrl = event.target.value;
});
bookmarkFormEl.addEventListener("submit", function(event){
    event.preventDefault();
});
submitBtnEl.addEventListener("click", function(){
    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    }
    else{
        siteNameErrMsgEl.textContent = "";
    }
    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    }
    else{
        siteUrlErrMsgEl.textContent = "";
    }
    
    if (bookmark.siteName === "" || bookmark.siteUrl === "") {

    }
    else{
        bookmark.siteName = siteNameInputEl.value;
        bookmark.siteUrl = siteUrlInputEl.value;
        bookmarksList.push(bookmark);
        updateUI();
    }
    siteNameInputEl.value = "";
    siteUrlInputEl.value = "";
});
console.log(bookmarksList);
