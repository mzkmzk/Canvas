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
    radius: 10,
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
     * 记录移动路线
     */
    more_direction: [],
    /**
     * 画主角
     */
    draw_screen: function(){
        clear_base_1();
        this.change_velocity();
        this.more();
        this.draw_ball();
    },
    draw_ball: function(){
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.x +this.radius, this.y+this.radius, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    },
    /**
     * 根据键盘按键改变速度
     */
    change_velocity: function() {
        if (this.more_direction[65] === true) {
            this.more_left();
        }
        if (this.more_direction[68] === true) {
            this.more_right();
        }
        if (this.more_direction[83] === true) {
            this.more_up();
        }
        if (this.more_direction[87] === true) {
            this.more_down();
        }
    },
    more: function() {
        this.x += this.velocity['x'];
        this.y += this.velocity['y'];
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
}