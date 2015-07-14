#global module:false

"use strict"

module.exports = (grunt) ->
  grunt.loadNpmTasks "grunt-bower-task"
  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-exec"

  grunt.initConfig
    sass:
      dist:
        options:
          sourcemap: "none"
          style: "compressed"
          noCache: true
        files: [{
          expand: true
          cwd: "_sass/"
          src: ["*.scss"]
          dest: "assets/css/"
          ext: ".css"
        }]

    copy:
      jquery:
        files: [{
          expand: true
          cwd: "bower_components/jquery/dist/"
          src: "jquery.min.js"
          dest: "assets/js/"
        },
        {
          expand: true
          cwd: "bower_components/jquery/dist/"
          src: "jquery.min.map"
          dest: "assets/js/"
        }]
      bootstrap:
        files: [{
          expand: true
          cwd: "bower_components/bootstrap-sass/assets/javascripts/"
          src: "bootstrap.min.js"
          dest: "assets/js/"
        }]
      bootstrapFonts:
        files: [{
          expand: true
          cwd: "bower_components/bootstrap-sass/assets/fonts/"
          src: "**/*"
          dest: "assets/fonts/"
        }]
      fontAwesome:
        files: [{
          expand: true
          cwd: "bower_components/font-awesome/fonts/"
          src: "*"
          dest: "assets/fonts/"
        }]
      gsap:
        files: [{
          expand: true
          cwd: "bower_components/gsap/src/minified/"
          src: "TweenMax.min.js"
          dest: "assets/js/"
        }]
      scrollmagic:
        files: [{
          expand: true
          cwd: "bower_components/scrollmagic/scrollmagic/uncompressed/"
          src: "ScrollMagic.js"
          dest: "assets/js/"
        }]
      scrollmagicPluginsGSAP:
        files: [{
          expand: true
          cwd: "bower_components/scrollmagic/scrollmagic/uncompressed/plugins/"
          src: "animation.gsap.js"
          dest: "assets/js/"
        }]
      scrollmagicPluginsVelocity:
        files: [{
          expand: true
          cwd: "bower_components/scrollmagic/scrollmagic/uncompressed/plugins/"
          src: "animation.velocity.js"
          dest: "assets/js/"
        }]
      scrollmagicPluginsDebug:
        files: [{
          expand: true
          cwd: "bower_components/scrollmagic/scrollmagic/uncompressed/plugins/"
          src: "debug.addIndicators.js"
          dest: "assets/js/"
        }]
      requirejs:
        files: [{
          expand: true
          cwd: "node_modules/requirejs/"
          src: "require.js"
          dest: "assets/js/"
        }]
      velocity:
        files: [{
          expand: true
          cwd: "bower_components/velocity/"
          src: "velocity.min.js"
          dest: "assets/js/"
        }]
      all:
        files: [{
          expand: true
          cwd: "_javascript/"
          src: "**/*"
          dest: "assets/js/"
        }]
      images:
        files: [{
          expand: true
          cwd: "_images/*"
          src: "*"
          dest: "assets/images/"
        }]

    exec:
      jekyll:
        cmd: "jekyll build --trace"

    bower:
      install: {}

    watch:
      options:
        livereload: true
      css:
        files: [
          "_sass/**/*"
        ]
        tasks: [
          "sass"
          "copy"
          "exec:jekyll"
        ]
      js:
        files: [
          "assets/js/*"
        ]
        tasks: [
          "copy"
          "exec:jekyll"
        ]
      html:
        files: [
          "_includes/**/*"
          "_drafts/**/*"
          "_layouts/**/*"
          "_posts/**/*"
          "_images/**/*"
          "_config.yml"
          "*.html"
        ]
        tasks: [
          "copy"
          "exec:jekyll"
        ]

    connect:
      server:
        options:
          port: 4005
          base: '_site'
          hostname: "127.0.0.1"
          livereload: true
          open: true

  grunt.registerTask "build", [
    "sass"
    "copy"
    "exec:jekyll"
  ]

  grunt.registerTask "serve", [
    "build"
    "connect:server"
    "watch"
  ]

  grunt.registerTask "default", [
    "serve"
  ]