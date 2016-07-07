/**
 * Created by maizhikun on 16/7/7.
 */
/**
 * 待修改为单例的
 * @type {{supported_audio_format: string, type: string[], save_music: Array, init: Function, get_supported_audio_format}}
 */
var Music = {
    supported_music_format: '',
    type: {
        'bullet': '../music/bullet/1',
    },
    save_music: [],
    add_music: function(type){
        var music = document.createElement("audio");
        document.body.appendChild(music);

        if(this.supported_music_format === '')
            this.supported_music_format =  this.get_supported_music_format(music);

        //music.addEventListener("canplaythrough",itemLoaded,false);
        //music.setAttribute("src", this.type[type] + this.supported_music_format);
        music.setAttribute("src", this.type[type] + '.mp3');
        this.save_music[type] = music;
    },
    init: function(){
        this.get_supported_music_format = this.get_supported_music_format();
    },
    play: function(type) {
        if (this.save_music[type] === undefined) this.add_music(type);

        this.save_music[type].play();
    },
    /**
     * 获取支持格式
     * @param music
     * @returns {string}
     */
    get_supported_music_format: function(music) {
        var returnExtension = "";
        if (music.canPlayType("audio/ogg") =="probably" || music.canPlayType("audio/ogg") == "maybe") {
            returnExtension = ".ogg";
        } else if(music.canPlayType("audio/wav") =="probably" || music.canPlayType("audio/wav") == "maybe") {
            returnExtension = ".wav";
        } else if(music.canPlayType("audio/mp3") == "probably" || music.canPlayType("audio/mp3") == "maybe") {
            returnExtension = ".mp3";
        }
        return returnExtension;
    }
}
