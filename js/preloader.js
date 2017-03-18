//$(document).ready(function () {
//    
//    var preload = $("#overlay");
//    var loading = 0;
//    var id = setInterval(openWelcome, 64);
//    
//    function openWelcome() {
//        
//        if(loading >= 100) {
//            clearInterval(id);
//            window.open("welcome.html", "_self");
//        } else {
//            loading = loading + 1;
//            if(loading == 90) {
//                preload.css("animation", "fadeOut 1s ease");
//            }
//        }   
//    }
//});
//    