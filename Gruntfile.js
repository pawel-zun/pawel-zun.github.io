module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'style.css': 'sass/style.scss'
  			}
  		}
		},

		autoprefixer: {
			target_file: {
				src: 'style.css'
			},
		},
	
		watch: {
			scripts: {
				files: ['sass/**/*.scss'],
				tasks: ['sass', 'autoprefixer'],
				options: {
					spawn: false,
				},
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'*.css',
						'*.html'
					]
				},
				options: {
					watchTask: true,
					server: './'
				}
			}
		}

  });
  // Load the plugins tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).

	grunt.registerTask('default', ['browserSync', 'watch']);
};