const head = document.head;
const title = document.createElement("title");
title.textContent = "TamiBOLODEOKU"
head.appendChild(title);

const body = document.body;
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");                
const h3 = document.createElement("h3");                
const h4 = document.createElement("h4");                
const h5 = document.createElement("h5");    

const image = document.createElement("img");
const ul = document.createElement("ul");
const table = document.createElement("table");

h1.textContent = " Tami Bolodeoku ";
h2.textContent = " I am from Lagos, Nigeria. ";
h3.textContent = " I like learning laguages, reading and cooking and coding ";
h4.textContent = " Here are some websites that I like:  ";
h5.textContent = " Here are the books that I read last week and my ratings: ";

image.setAttribute("src","images/HEADSHOT.JPG");
image.setAttribute("width","200");

ul.innerHTML = `<li><a href="https://uk.linkedin.com/">
<img alt="test image" src="images/LINKEDN.png" width="50" />
</a></li>
<li><a href="https://about.me/">
<img alt="test image" src="images/ABOUTME.png" width="50" />
</a></li>
</li><a href="https://www.instagram.com/">
<img alt="test image" src="images/INSTAGRAM.png" width="50" />
</a></li>`;

table.innerHTML = ` <tr>
<th>Author </th>
<th>Title</th> 
<th>Rating</th>
</tr>
<tr>
<td>Jane Austen</td>
<td>Pride and Prejudice</td> 
<td>7/10</td>
</tr>
<tr>
<td>Mary Shelley</td>
<td>Frankenstein</td> 
<td>    6/10</td>
</tr>
<tr>
<td>Steve Silberman</td>
<td>Neurotribes</td> 
<td>9/10</td>
</tr>`

body.appendChild(h1);
body.appendChild(h2);
body.appendChild(h3);
body.appendChild(image);
body.appendChild(h4);
body.appendChild(ul);
body.appendChild(h5);
body.appendChild(table);

h1.style.color = "red";
h2.style.color = "orange";
h3.style.color = "green";
h4.style.color = "green";
h5.style.color = "blue";

body.style.background = "bisque";
body.style.marginLeft =  "50px";
body.style.marginRight = "50px";
body.style.fontFamily = "Verdana, Geneva, sans-serif";
body.style.fontWeight = "bold";
body.style.textShadow =  "#FC0  1px 0 10px";

let img = document.getElementsByTagName("img");
img = Array.from(img)
for (let image of img){
    image.style.borderRadius = "25px";
    image.style.border = "10px solid white";
} 
table.style.width = "300px";
table.style.height =  "100px";
table.style.margin = "10px";
table.style.padding = "25px";
table.style.border = "5px solid white";
table.style.borderRadius = "25px";



