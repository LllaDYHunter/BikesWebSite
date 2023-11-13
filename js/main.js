
let cssFiles = new Map([
    ["desktop", "css/style.css"],
    ["tablet", "css/tablet.css"],
    ["phone", "css/phone.css"]]
    );

let elemetsCreationStates = new Map([
    ["CompanyHeaderInfoExists", false],
    ["NavigationExists", false]
]);

let siteState = "";

window.addEventListener("resize", function(event) {
    updateSiteState();
    updateCssFile();
    createHtmlContent();
});

window.addEventListener("load", function(event){
    updateSiteState();
    updateCssFile();
    createHtmlContent();
});

function updateCssFile(){
    document.querySelector("link").href = cssFiles.get(siteState);
}

function updateSiteState(){
    if(document.body.clientWidth >= 1024) {
        siteState == "desktop" ? bUpdate = false : bUpdate = true;
        siteState = "desktop";
    }
    else if(document.body.clientWidth < 1024 && document.body.clientWidth >= 768){
        siteState == "tablet" ? bUpdate = false : bUpdate = true;
        siteState = "tablet";
    }else{
        siteState == "phone" ? bUpdate = false : bUpdate = true;
        siteState = "phone";
    }
}

function createHtmlContent(){
    if(bUpdate){
        createCompanyHeaderInfo();
        createNavigation();
    }
}


function createCompanyHeaderInfo(){
    if(siteState != "phone"){
        if(!elemetsCreationStates.get("CompanyHeaderInfoExists")){
            let company_header_info_text = document.getElementById("company_header_info_text");

            let h11 = document.createElement("h1");
            let h12 = document.createElement("h1");
            let p = document.createElement("p");

            h11.textContent = "Мы продаем";
            h12.textContent = "велосипеды";
            p.textContent = "Наш магазин отбирает только самые лучшие велосипеды для продажи";

            h11.id = "company_header_info_text_h11";
            h12.id = "company_header_info_text_h12";
            p.id = "company_header_info_text_p";

            company_header_info_text.appendChild(h11);
            company_header_info_text.appendChild(h12);
            company_header_info_text.appendChild(p);

            elemetsCreationStates.set("CompanyHeaderInfoExists", true);
        }
    }else{
        if(elemetsCreationStates.get("CompanyHeaderInfoExists")){
            let h11 = document.getElementById("company_header_info_text_h11");
            let h12 = document.getElementById("company_header_info_text_h12");
            let p = document.getElementById("company_header_info_text_p");

            h11.parentNode.removeChild(h11);
            h12.parentNode.removeChild(h12);
            p.parentNode.removeChild(p);

            elemetsCreationStates.set("CompanyHeaderInfoExists", false);
        }
    }
}


function createNavigation(){
    if(siteState != "phone"){
        if(!elemetsCreationStates.get("NavigationExists")){
            let header = document.getElementById("header");
            let navigation = document.createElement("nav");
            navigation.id = "main_navigation";
            let ul = document.createElement("ul");
            let lis_content = ["О нас", "Виды велосипедов", "Видео про велосипеды", "Контакты"];
            let lis = [];

            for(i = 0; i < 4; ++i){
                lis.push(document.createElement("li"));
    
                let el = lis[i];
                el.className = "navigation_element";
                el.textContent = lis_content[i];
    
                ul.appendChild(el);
            }
            navigation.appendChild(ul);
    
            header.insertBefore(navigation, header.firstChild);
            elemetsCreationStates.set("NavigationExists", true);
        }
    }else{
        if(elemetsCreationStates.get("NavigationExists")){
            let navigation = document.getElementById("main_navigation");
            navigation.parentNode.removeChild(navigation);




            elemetsCreationStates.set("NavigationExists", false);
        }
    }
}