/**
 * Created by maizhikun on 16/5/25.
 */
/**
 * 像素效果设置
 * @type {{grayscale: Function, sepia: Function, red: Function, brightness: Function}}
 */
var Handel_Pixel = {
    /**
     * 灰度效果
     * @param pixels
     * @returns {*}
     */
    grayscale: function (pixels) {

        var d = pixels.data;

        for (var i = 0; i < d.length; i += 4) {
            var r = d[i];
            var g = d[i + 1];
            var b = d[i + 2];
            d[i] = d[i + 1] = d[i + 2] = (r + g + b) / 3;
        }

        return pixels;

    },
    /**
     * 复古效果
     * @param pixels
     * @returns {*}
     */
    sepia: function (pixels) {

        var d = pixels.data;

        for (var i = 0; i < d.length; i += 4) {
            var r = d[i];
            var g = d[i + 1];
            var b = d[i + 2];
            d[i] = (r * 0.393) + (g * 0.769) + (b * 0.189); // red
            d[i + 1] = (r * 0.349) + (g * 0.686) + (b * 0.168); // green
            d[i + 2] = (r * 0.272) + (g * 0.534) + (b * 0.131); // blue
        }

        return pixels;
    },
    /**
     * 红色蒙版效果
     * @param pixels
     * @returns {*}
     */
    red: function (pixels) {

        var d = pixels.data;

        for (var i = 0; i < d.length; i += 4) {
            var r = d[i];
            var g = d[i + 1];
            var b = d[i + 2];
            d[i] = (r + g + b) / 3;        // 红色通道取平均值
            d[i + 1] = d[i + 2] = 0; // 绿色通道和蓝色通道都设为0
        }
        return pixels;
    },
    /**
     * 亮度效果
     * @param pixels
     * @param delta
     * @returns {*}
     */
    brightness: function (pixels, delta) {

        var d = pixels.data;

        for (var i = 0; i < d.length; i += 4) {
            d[i] += delta;     // red
            d[i + 1] += delta; // green
            d[i + 2] += delta; // blue
        }

        return pixels;

    },
}
