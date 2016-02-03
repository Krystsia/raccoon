module.exports = function(grunt) {

    // 1. Всё конфигурирование тут
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'js/main.js',
                dest: 'js/main.min.js'
            }
        }

    });

    // 3. Здесь мы сообщаем Grunt, что мы планируем использовать этот плагин:
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Мы сообщаем Grunt, что нужно делать, когда мы введём "grunt" в терминале.
    grunt.registerTask('default', ['uglify']);

};