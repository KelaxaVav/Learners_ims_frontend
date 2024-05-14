import React from 'react'

export default function loadScript(url) {
    const script = document.createElement('script');
    // console.log(document.getElementById(url));
    document.getElementById(url)?.remove();
    // console.log(document.getElementById(url));
    script.id = url;
    script.src = url;
    script.async = true;

    document.body.appendChild(script);
}
