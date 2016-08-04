/**
 * 记录按键
 * @type {{key_press: Array, init_key_up: Function, init_key_down: Function, init: Function}}
 */
var Key_Press = {
    key_press: [],
    init_key_up: function() {
        document.onkeyup = function(e) {
            e = e || window.event;
            console.log('放松了' + e.keyCode);
            Key_Press.key_press[e.keyCode] = false;
        }
    },
    init_key_down: function() {
        document.onkeydown = function(e) {
            e = e || window.evnet;
            console.log('按下了' + e.keyCode);
            Key_Press.key_press[e.keyCode] = true;
        }
    },
    init: function(){
        this.init_key_down();
        this.init_key_up();
    }
}