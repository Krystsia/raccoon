module.exports = function(grunt) {

    
    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),

        
        concat: {
            dist: {
                src: [
                    'js/*.js'
                ],
                dest: 'js/production/main.js'
            }
        },
        uglify: {
            build: {
                src: 'js/production/main.js',
                dest: 'js/production/main.min.js',
                
            }
        },
        sass: {
            dist: {
                files:[{
                    src: ['css/*.scss'],
                    dest: 'css/prod.css',
                }]
            }
        },
        watch:{
            sass: {
                files:['css/main.scss'],
                tasks: ['sass'],
            },
            
        }
        
        

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    

    
    grunt.registerTask('hello', ['sass','concat','uglify']);
    grunt.registerTask('watch', ['watch']);
  

};