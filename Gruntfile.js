module.exports = function(grunt) {

    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        
        concat: {
            dist: {
                src: [
                    'js/*.js'
                ],
                dest: 'js/production/main.js',
            }
        },
        uglify: {
            build: {
                src: 'js/production/main.js',
                dest: 'js/production/main.min.js'
            }
        },

    });

    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    
    grunt.registerTask('default', ['concat','uglify']);

};