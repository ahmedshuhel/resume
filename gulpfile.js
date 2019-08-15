var markdownpdf = require("markdown-pdf")
  , fs = require("fs")
  , gulp = require("gulp");
 
var options = {
  cssPath: './pdf.css',
  paperBorder: '1.5cm'
};

gulp.task('default', function(cb){
markdownpdf(options)
  .from("resume.md")
  .to("resume.pdf", function () {
     cb(); 
  });
});
