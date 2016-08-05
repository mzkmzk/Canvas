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
                case 'SPIRAL': //螺旋
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
                case 'BEZIER': //贝塞尔  
                    var p1 = {x: element.circle.x, y: element.circle.y}; //起点
                    var p2 = {x: 0, y: base_1.height }; //贝塞尔点1
                    var p3 = {x: base_1.width, y: base_1.height }; //贝塞尔点2
                    var p4 = {x: base_1.width, y: 0 };  //终点

                    var cx = 3 * (p2.x - p1.x),
                        bx = 3 * (p3.x - p2.x) - cx,
                        ax = p4.x - p1.x - cx - bx,
                        cy = 3 * (p2.y -p1.y),
                        by = 3 * (p3.y - p2.y) - cy,
                        ay = p4.y - p1.y - cy -by,
                        t = element.t,
                        xt = ax*(t*t*t) + bx*(t*t) + cx*t + p1.x,
                        yt = ay*(t*t*t) + by*(t*t) + cy*t + p1.y;
                    element.x = xt;
                    element.y = yt;
                    console.log(xt);
                    console.log(yt);
                    if(element.t<=1)
                        element.t += element.speed;     
                    ctx.beginPath();
                    ctx.fillStyle = 'red';
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
        if(Key_Press.key_press[74] === true) {
            this.bullets.push(new Bullet('CIRCULAR_MOTION'));
            Music.play('bullet');
        } else if(Key_Press.key_press[75] === true) {
            this.bullets.push(new Bullet('SPIRAL'));
            Music.play('bullet');
        } else if(Key_Press.key_press[76] === true) {
            this.bullets.push(new Bullet('BEZIER'));
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
    this.circle = {
        x: Lead.x,
        y: Lead.y,
        radius: 125,
        angle: 0,
        radius_inc: 2,
    },
    /**
     * 角速度
     */
    this.speed = .1;
    /**
     * 用于布尔尔记录行程, 为1时已经到终点
     */
    this.t = 0;
}