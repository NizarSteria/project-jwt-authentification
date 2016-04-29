// Generated on 2016-02-27 using generator-angular 0.11.1
'use strict';
var path = require('path');
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {

        },
        express: {
            options: {
                port: 9001,
                hostname: 'localhost',
                server: path.resolve('./server/server.js')
            },
            livereload: {
                options: {
                    serverreload: false,
                    open:true,
                    bases: [path.resolve('./.tmp'), path.resolve(__dirname, '<%= yeoman.app %>')]
                }
            }
        },
        clean: {
            server: '.tmp'
        }




    });

    grunt.registerTask('serve', [
        'clean:server',
        'express',
        'watch'
    ]);


    grunt.registerTask('default', 'serve');
};
