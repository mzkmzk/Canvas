/**
 * 子弹
 */
var Bullet = {
    /**
     * 子弹射出时跟主角的x
     */
    x: Lead.x,
    /**
     * 子弹射出时跟主角的y
     */
    y: Lead.y,
    /**
     * 子弹和主角的半径一样
     */
    Radius: Lead.RADIUS,
    /**
     * 子弹类型
     */
    type: "",
    /**
     * 发射过的子弹
     */
    bullets: [],
    /**
     * 子弹旋转的源
     */
    circle:{
        x: Lead.x,
        y: Lead.y,
        radius: 125,
        angle: 0,
    },
    /**
     * 角速度
     */
    speed: .1,
    /**
     * 重绘子弹
     */
    draw_screen: function() {
        this.send()
        this.draw_bullet()
    },
    /**
     * 绘制子弹
     */
    draw_bullet: function() {
        Bullet.bullets.forEach(function (element, index) {
            switch (element.type) {
                case 'CIRCULAR_MOTION':
                    ctx.beginPath();
                    ctx.fillStyle = 'white';
                    element.x = element.circle.x + Math.cos(element.circle.angle) * element.circle.radius
                    element.y = element.circle.y + Math.sin(element.circle.angle) * element.circle.radius
                    element.circle.angle +=element.speed;
                    ctx.arc(element.x , element.y, 10, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.fill();
                    break
            }
        })
    },
    /**
     * 发射子弹
     */
    send: function(){
        if (Key_Press.key_press[75] === true) {
            Bullet.x = Lead.x;
            Bullet.y = Lead.y;
            Bullet.circle.x =Lead.x;
            Bullet.circle.y =Lead.y;
            Bullet.type = 'CIRCULAR_MOTION'; //匀速圆周
            Bullet.bullets.push(this);
        }
    },



}