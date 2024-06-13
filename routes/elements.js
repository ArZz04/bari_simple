class VideoResource extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        const path = this.getAttribute('path');
        const name = this.getAttribute('name');

        this.render(path, name);
    }


    render(path, name){
        this.shadowRoot.innerHTML = `
            <style>
                img{
                    width: 1920px;
                    height: auto;
                }
            </style>
            <video name="${name}" src="${path}" alt="Video">
        `;
    }
}

// VIDEO RESOURCE
window.customElements.define('video-resource', VideoResource);

// ----------------------------------------------------------

class ImageResource extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        const path = this.getAttribute('path');
        const name = this.getAttribute('name');

        this.render(path, name);
    }

    render(path, name){
        this.shadowRoot.innerHTML = `
            <style>
                img{
                    width: 1920px;
                    height: auto;
                }
            </style>
            <img name="${name}" src="${path}" alt="Imagen">
        `;
    }
}

// IMAGE RESOURCE
window.customElements.define('image-resource', ImageResource);
