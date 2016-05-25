/**
 * Created by maizhikun on 16/5/24.
 */
(/**
 * 1. 基本demo
 */
    function () {
    var ctx = document.getElementById('base').getContext('2d');
    ctx.beginPath();

    //直线
    ctx.moveTo(20, 20);
    ctx.lineTo(200, 20);
    ctx.lineWidth = 1.0;
    ctx.strokeStyle = "#CC0000";
    ctx.stroke();

    //矩形
    ctx.fillStyle = 'yellow'
    ctx.fillRect(20, 30, 180, 100);//左上角坐标,宽高

    //空心矩形
    ctx.strokeRect(20, 140, 180, 100);

    //空心矩形
    ctx.strokeRect(20, 250, 180, 100); //空心矩形,加了下面的clear代码,会把线变细 而清除普通矩形就能全部清除掉
    ctx.clearRect(20, 250, 180, 100);

    //字体
    ctx.font = 'Bold 20px Arial';
    ctx.textAlign = "left";
    ctx.fillStyle = "#008600";
    ctx.fillText('404_K', 20, 390); //只支持单行文本
    ctx.strokeText('404_K', 20, 420);
})();

(/**
 * 2. 扇形
 */
    function () {
    var ctx = document.getElementById('arc').getContext('2d');
    ctx.beginPath();

    //实体圆形
    ctx.arc(50, 30, 30, 0, Math.PI * 2, true); //宽,高,半径,起始角度,终止角度,是否逆时针
    ctx.fill();

    //空心圆形
    ctx.beginPath();
    ctx.arc(50, 100, 30, 0, Math.PI * 2, true);
    ctx.strokeStyle = "#000";
    ctx.stroke();
})();

(/**
 * 3. 高级
 */
    function () {
    var ctx = document.getElementById('advanced').getContext('2d');

    //设置渐变色
    var my_gradient = ctx.createLinearGradient(0, 0, 0, 160); //x1 y1 x2 y2
    my_gradient.addColorStop(0, '#BABABA');
    my_gradient.addColorStop(1, "#636363");

    //使用渐变色
    ctx.fillStyle = my_gradient;
    ctx.fillRect(20, 20, 200, 100);

    //设置阴影
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 5;//设置模糊度
    ctx.shadowColor = "rgba(0,0,0,0.5)";

    //使用阴影
    ctx.fillStyle = "#CC0000";
    ctx.fillRect(20, 130, 200, 100);

    //保存一个节点
    ctx.save();
    ctx.fillStyle = "#FFFBBB";
    ctx.fillRect(20, 130, 200, 100);
    ctx.restore(); //恢复到上一个点 这里恢复不起作用
})();

(/**
 * 4. 图像
 */
    function () {
    var canvas = document.getElementById('image_canvas');
    var ctx = canvas.getContext('2d');
    //console.log(ctx);
    //载入图片
    var img = new Image();

    img.onload = function () { //必须图片load后才可画入图版
        ctx.drawImage(img, 20, 20);

        //get
        //修改像素 提交像素方法 image_data有一个data属性,长度为宽x高x4 4表示包含每个像素的红蓝绿 alpha通道值
        var image_data = ctx.getImageData(0, 0, canvas.width, canvas.height);

        for (var index = 0; index < 20000; index++) {
            image_data.data[index] = (Math.random() * (255 - 0)) + 0;
        }
        //console.log(image_data.data);
        ctx.putImageData(image_data, 0, 0); //如果卸载onload方法里,会显示无法获取image_data的数据.????????

        //toDataUrl
        var canvas_to_image = document.getElementById('canvas_to_image');
        canvas_to_image.src = canvas.toDataURL('image/png'); //拷贝只拷了部分,黑色部分没拷贝上
    }

    img.src = "http://www.404mzk.com/Image/Index/index.jpg";



})();

(/**
 * 5. 动画
 */
    function () {
    var canvas = document.getElementById('animation')
    ctx = canvas.getContext('2d'),
        pos_x = 20,
        pos_y = 100,
        vx = 10 ,
        vy = -10
    gravity = 1;


    setInterval(function () {

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height); //还原掉上次的白色球

        pos_x += vx;
        pos_y += vy;

        if (pos_y > canvas.height * 0.75) {
            vy *= -0.6;
            vx *= 0.75;
            pos_y = canvas.height * 0.75
        }

        vy += gravity;

        ctx.beginPath();
        ctx.fillStyle = 'white';

        ctx.arc(pos_x, pos_y, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

    }, 30);
})();

(/**
 * 6. 像素处理
 */
    function () {

    var canvas_prxel = document.getElementById('pixel')
        ctx_prxel = canvas_prxel.getContext('2d'), //定时器设置会设计到全局域污染.
        img = new Image();

    img.onload = function () {
        ctx_prxel.drawImage(img, 20, 20);

        if (canvas_prxel.width >0 && canvas_prxel.height > 0) {
            var image_data = ctx_prxel.getImageData(0,0,canvas_prxel.width,canvas_prxel.height);
            console.log(image_data);
            ctx_prxel.putImageData(Handel_Pixel.grayscale(image_data),0,0);
        }
    }

    //img.crossOrigin = '*';
    img.src = 'http://404mzk.com/image/common/mzk.jpg';


})();

