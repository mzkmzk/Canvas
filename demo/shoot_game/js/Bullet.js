var Bullets = {
    /**
     * 发射过的子弹
     */
    bullets: [],
    /**
     * 绘制子弹
     */
    draw_bullet: function() {
        //console.log(this.bullets);
        this.bullets.forEach(function (element) {
            switch (element.type) {
                case 'CIRCULAR_MOTION': //匀速圆周
                    ctx.beginPath();
                    ctx.fillStyle = 'white';
                    element.x = element.circle.x + Math.cos(element.circle.angle) * element.circle.radius
                    element.y = element.circle.y + Math.sin(element.circle.angle) * element.circle.radius
                    element.circle.angle +=element.speed
                    ctx.arc(element.x , element.y, 10, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.fill();
                    break;
                case 'SPIRAL' : //螺旋
                    var RADIUS_INC = 2; //设置每次增加的半径
                    ctx.beginPath();
                    ctx.fillStyle = 'yellow';
                    element.x = element.circle.x + Math.cos(element.circle.angle) * element.circle.radius;
                    element.y = element.circle.y + Math.sin(element.circle.angle) * element.circle.radius;
                    element.circle.angle +=element.speed;
                    element.circle.radius += RADIUS_INC;
                    ctx.arc(element.x , element.y, 10, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.fill();
                    break;
            }
        })
    },
    /**
     * 发射子弹
     */
    send: function(){
        if (Key_Press.key_press[74] === true) {
            var bullet = new Bullet('CIRCULAR_MOTION');
            this.bullets.push(bullet);
            Music.play('bullet');
        } else if (Key_Press.key_press[75] === true) {
            var bullet = new Bullet('SPIRAL');
            this.bullets.push(bullet);
            Music.play('bullet');
        }
    },
    draw_screen: function(){

        this.send()
        this.draw_bullet()
    },
}

var Bullet = function(type){
    /**
     * 子弹射出时跟主角的x
     */
    this.x = Lead.x;
    /**
     * 子弹射出时跟主角的y
     */
    this.y = Lead.y;
    /**
     * 子弹和主角的半径一样
     */
    this.Radius = Lead.RADIUS;
    /**
     * 子弹类型
     */
    this.type = type;
    /**
     * 子弹遵循的圆
     */
    this.circle ={
        x: Lead.x,
        y: Lead.y,
        radius: 125,
        angle: 0,
        radius_inc: 2,
    },
    /**
     * 角速度
     */
    this.speed= .1;
}