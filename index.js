async function getIP(){
    const ip = await fetch("https://icanhazip.com/").then(e => e.clone().text());
    return ip.slice(0, -1);
}

const cont = document.querySelector(".cont");
const ip = await getIP();
cont.innerText = `your ip address is: ${ip}`;
