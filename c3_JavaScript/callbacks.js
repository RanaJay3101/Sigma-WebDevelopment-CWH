const callback = (name) => {
    console.log(`Hello ${name}`);
}

const loadScript = (src, callback) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback("jay");
    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js', callback);