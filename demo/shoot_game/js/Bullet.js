var Bullets = {
    /**
     * 发射过的子弹
     */
    bullets: [],
    /**
     * 绘制子弹
     */
    draw_bullet: function() {
        console.log(this.bullets);
        this.bullets.forEach(function (element, index) {
            switch (element.type) {
                case 'CIRCULAR_MOTION':
                    ctx.beginPath();
                    ctx.fillStyle = 'white';
                    element.x = element.circle.x + Math.cos(element.circle.angle) * element.circle.radius
                    element.y = element.circle.y + Math.sin(element.circle.angle) * element.circle.radius
                    element.circle.angle +=element.speed
                    //element.circle.radius  += element.circle.radius_inc
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
            console.log('send');
            var bullet = new Bullet('CIRCULAR_MOTION');
            this.bullets.push(bullet);
            console.log(bullet);
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