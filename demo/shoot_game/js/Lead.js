/**
 * 主角
 * @type {{x: number, y: number, RADIUS: number, ACCELERATED_VELOCITY: number, velocity: {x: number, y: number}, MAX_VELOCITY: number, draw_screen: Function, draw_ball: Function, change_velocity: Function, more_left: Function, more_right: Function, more_up: Function, more_down: Function, more: Function}}
 */
var Lead = {
    /**
     * x坐标
     */
    x: 15,
    /**
     * y坐标
     */
    y: document.body.scrollHeight - 15,
    /**
     * 半径
     */
    RADIUS: 10,
    /**
     * 加速度
     */
    ACCELERATED_VELOCITY: 0.09,
    /**
     * 初始速度
     */
    velocity: {'x':0,'y':0},
    /**
     * 最大速度
     */
    MAX_VELOCITY: 3,
    /**
     * 重绘画布
     */
    draw_screen: function(){
        this.change_velocity();
        this.more();
        this.draw_ball();
    },
    /**
     * 绘制小球
     */
    draw_ball: function(){
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.x +this.RADIUS, this.y+this.RADIUS, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    },
    /**
     * 根据键盘按键改变速度
     */
    change_velocity: function() {
        if (Key_Press.key_press[65] === true) {
            this.more_left();
        }
        if (Key_Press.key_press[68] === true) {
            this.more_right();
        }
        if (Key_Press.key_press[83] === true) {
            this.more_up();
        }
        if (Key_Press.key_press[87] === true) {
            this.more_down();
        }
    },
    more_left: function(){
        this.velocity['x'] -= this.ACCELERATED_VELOCITY;
    },
    more_right: function(){
        this.velocity['x'] += this.ACCELERATED_VELOCITY;
    },
    more_up: function(){
        this.velocity['y'] += this.ACCELERATED_VELOCITY;
    },
    more_down: function(){
        this.velocity['y'] -= this.ACCELERATED_VELOCITY;
    },
    more: function() {
        //增加反弹
        this.velocity['x'] *= (this.x > base_1.width || this.x < 0)? -1 : 1;
        this.velocity['y'] *= (this.y > base_1.height || this.y < 0)? -1 : 1;
        this.x += this.velocity['x'];
        this.y += this.velocity['y'];
    },
}