document.addEventListener("DOMContentLoaded", function() {
    const iframeContainer = document.getElementById('video-placeholder');
    const iframe = document.createElement('iframe');
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = "https://www.rtve.es/play/videos/alaska-y-segura/alaska-segura-bistecs-historia-del-arte/3048186/";
    iframe.title = "Video de Alaska y Segura";
    iframe.allow = "encrypted-media; web-share";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframeContainer.appendChild(iframe);
});