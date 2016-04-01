var markdownpdf = require("markdown-pdf")
  , fs = require("fs")
  , gulp = require("gulp");
 
 
gulp.task('default', function(cb){
markdownpdf()
  .from("resume.md")
  .to("resume.pdf", function () {
     cb(); 
  });
});
