let names="Kyle Lunn,Ronda Edwards,Dana Jones,Brad Jones,Kerlin Blaise,Lanee Blaise,Anthony Robledo,Hailey Keene";

let namesArray=names.split(",").sort();

let namesOrdered=namesArray.sort(function(name1, name2) {
    return name1.slice(name1.indexOf(" ")+1) > name2.slice(name2.indexOf(" ")+1)});

let orderedList="";
for (i=0;i<namesOrdered.length;i++){
    html="<li>%name</li>"
    newHTML=html.replace("%name", namesOrdered[i]);
    orderedList=orderedList.concat(newHTML);
};

document.getElementById("names").innerHTML=orderedList;


/* console.log(namesOrdered); */
