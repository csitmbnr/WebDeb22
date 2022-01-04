function horsebreed(sw) {
    var pic;
    if (sw == 0) {
        pic = " https://cdn.pixabay.com/photo/2014/12/08/17/52/horse-561221_960_720.jpg"
    } else {
        pic = " https://cdn.pixabay.com/photo/2018/05/21/19/15/white-horse-3419146_960_720.jpg"
    }
    document.getElementById('horse_change').src = pic;
}