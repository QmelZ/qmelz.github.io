async function getIPs(){
    const PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    const conn = new PeerConnection({iceServers: []});
    const ips = new Set();
    const regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    
    conn.createDataChannel("");
    
    const {sdp} = await conn.createOffer();
    
    sdp.split('\n').forEach(e => {
        if(e.indexOf("candidate") === -1) return;
        e.match(ipRegex).forEach(e => ips.add(e));
    });
    
    return ips;
}

const cont = document.querySelector(".cont");
const ips = await getIPs();
cont.innerText = `your ip addresses are:
${(...ips).join("\n")}`;
