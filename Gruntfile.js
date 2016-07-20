module.exports=function(grunt){
	console.log(grunt.version);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
		    options: {
		      separator: ';',
		    },
		    dist: {
		      src: ['public/app/**/*.js'],
		      dest: 'dist/build.js',
		    },
  		},
	})
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default',['concat'])
};