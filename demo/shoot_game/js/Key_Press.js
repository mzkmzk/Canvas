/**
 * Created by maizhikun on 16/6/6.
 */
var KeyPress = {
    init_key_up: function() {
        document.onkeyup = function(e) {
            e = e || window.event;
            Lead.more_direction[e.keyCode] = false;
        }
    },
    init_key_down: function() {
        document.onkeydown = function(e) {
            e = e || window.evnet;
            Lead.more_direction[e.keyCode] = true;
        }
    },
    init: function(){
        this.init_key_down();
        this.init_key_up();
    }
}