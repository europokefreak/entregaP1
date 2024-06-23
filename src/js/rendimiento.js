document.addEventListener("DOMContentLoaded", function() {
    let video = document.getElementById('myVideo');

    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                video.load();
                observer.unobserve(video);
            }
        });
    });

    observer.observe(video);
});