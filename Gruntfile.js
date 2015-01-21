'use strict';

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        app: 'src',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= config.app %>/scripts/**/*.js'],
                tasks: ['newer:jshint']
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['newer:jshint']
            },
            less: {
                files: ['<%= config.app %>/styles/*.less'],
                tasks: ['less', 'autoprefixer']
            }
        },

        // grunt server settings
        connect: {
            dev: {
                options: {
                    port: 8000,
                    open: true,
                    // Change this to '0.0.0.0' to access the server from outside
                    hostname: 'localhost'
                }
            },
            build: {
                options: {
                    port: 9000,
                    open: true,
                    hostname: 'localhost'
                }
            }

        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.dist %>/*'
                    ]
                }]
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/scripts/**/*.js'
            ]
        },

        less: {
            dev: {
                options: {
                    paths: ['<%= config.app %>/styles'],
                    cleanncss: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.app %>/styles',
                        src: ['styles.less'],
                        dest: '<%= config.app %>/styles',
                        ext: '.css'
                    }
                ]
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>/styles',
                    src: 'styles.css',
                    dest: '<%= config.dist %>/styles'
                }]
            },
            app: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/styles/css',
                    src: '**/*.css',
                    dest: '<%= config.app %>/styles/css'
                }]
            }
        },

        injector: {
            app: {
                files: {
                    'src/index.html': ['bower.json','<%= config.app %>/styles/**/*.css']
                }
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/**/*.js',
                        '<%= config.dist %>/**/*.css',
                        '<%= config.dist %>/images/**/.*',
                        '<%= config.dist %>/fonts/**/*.*',
                        '<%= config.dist %>/*.{ico,png}'
                    ]
                }
            }
        },

        cssmin: {
            generated: {
                options: {
                    banner: '/*minified css file */'
                },
                files: [{
                    expand: true,
                    cwd: 'dist/build/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/',
                    ext: '.min.css'
                }]
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '**/*.{gif,jpeg,jpg,png}',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '**/*.svg',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '**/*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },

        copy: {
            //for copying dependencies into a lib folder
            app: {
                files: [{
                    expand: true,
                    dot: true,
                    flatten: true,
                    cwd: './bower_components',
                    dest: '<%= config.app %>/lib',
                    src: [
                        '**/dist/*.js',
                        '**/bin/pixi.js',
                        'underscore/*.js',
                        '!**/*.debug.js',
                        '!**/Gruntfile.js',
                        '!**/src/**/*.js',
                        '!**/build/**/*.js',
                        '!**/docs/**/*.js',
                        '!**/examples/**/*.js',
                        '!**/tasks/**/*.js',
                        '!**/trim/**/*.js'
                    ]
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '**/*.html'
                    ]
                }]
            }
        },

        concat: {
            generated: {
                files: [
                    {
                        dest: '<%= config.dist %>/build/build.js',
                        src: [

                            //This might need to be configured for a specific order
                            '<%= config.app %>/scripts/**/*.js'
                        ]
                    }, {
                        dest: '<%= config.dist %>/build/build.css',
                        src: [
                            '<%= config.app %>/styles/css/**/*.css'
                        ]
                    }
                ]
            }
        },

        uglify: {
            generated: {
                options: {
                    banner: '/* minified js file */'
                },
                files: [{
                    expand: true,
                    cwd: 'dist/build/',
                    src: ['*.js', '!*.min.js'],
                    dest: 'dist/',
                    ext: '.min.js'
                }]
            }
        }
    });


    grunt.registerTask('server', [
        'newer:less',
        'injector',
        'autoprefixer:app',
        'connect:dev',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'newer:less',
        'newer:autoprefixer',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'copy:dist',
        'rev',
        'htmlmin'
        //'imagemin',
        //'svgmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'build'
    ]);
};