const cont = document.querySelector(".cont");
cont.innerText = await navigator.clipboard.readText();
