module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //------------------------------------------------------------

        less: {
            options: {
                expand: true
            },

            main: {
                dest: 'css/main.css',
                src: [
                    'less/main.less'
                ]
            },

            print: {
                dest: 'css/print.css',
                src: [
                    'less/print.less'
                ]
            },

            ie8: {
                dest: 'css/ie8.css',
                src: [
                    'less/ie8.less'
                ]
            }
        },

        //------------------------------------------------------------

        watch: {
            less: {
                files: [
                    'less/**'
                ],
                tasks: [
                    'less'
                ]
            }
        }
        //------------------------------------------------------------

    });

    // Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', [
        'less'
    ]);

};