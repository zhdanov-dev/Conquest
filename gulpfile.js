const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');

const sync = require('browser-sync').create();

function html() {
	return src('src/**.html').pipe(include()).pipe(htmlmin({
		collapseWhitespace: true
	})).pipe(dest('dist'));
}

function scss() {
	return src('src/scss/**.scss').pipe(sass()).pipe(csso()).pipe(dest('dist'));
}

function imgs() {
	return src('src/static/images/**.png').pipe(dest('dist/static/images'));
}

function svgs() {
	return src('src/static/svgs/**.svg').pipe(dest('dist/static/svgs'));
}

exports.build = series(imgs, svgs, scss, html)