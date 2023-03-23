const { series, parallel, src, dest } = require("gulp");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const cleancss = require("gulp-clean-css");

/* Destination dir */

const destDir = "./dist";

/* JS. Transpile with babel & minify */

const processJs = (baseName, isMin) => {
  let r = src("src/js/" + baseName + ".js").pipe(
    babel({
      presets: ["@babel/env"],
    })
  );

  if (isMin) {
    r = r.pipe(uglify()).pipe(rename(baseName + ".min.js"));
  }

  return r.pipe(dest(destDir + "/js"));
};

const processJsMain = () => {
  return processJs("main");
};

const processJsMainMin = () => {
  return processJs("main", true);
};

const processJsChartSample = () => {
  return processJs("chart.sample");
};

const processJsChartSampleMin = () => {
  return processJs("chart.sample", true);
};

/* CSS */

const processCss = () => {
  return src("src/css/main.css")
    .pipe(postcss())
    .pipe(cleancss())
    .pipe(dest(destDir + "/css"));
};

/* HTML */
const dateNowMillis = Date.now();

const concatHtml = (file) => {
  let replaceHtmlClassWith = "";
  const formScreenFiles = ["login"];

  if (formScreenFiles.indexOf(file) > -1) {
    replaceHtmlClassWith = "form-screen";
  }

  const sources = ["src/html/parts/head.html", "src/html/parts/app-open.html"];

  if (formScreenFiles.indexOf(file) < 0) {
    sources.push(
      "src/html/parts/navbar.html",
      "src/html/parts/aside.html"
      // "src/html/parts/title-bar.html",
      // "src/html/parts/hero-bar.html"
    );
  }

  sources.push(`src/html/${file}.html`);

  if (formScreenFiles.indexOf(file) < 0) {
    sources.push("src/html/parts/sample-modal.html");
  }

  sources.push(
    "src/html/parts/app-close.html",
    "src/html/parts/bottom-scripts.html"
  );

  if (file === "index") {
    sources.push("src/html/parts/bottom-scripts-home.html");
  }

  sources.push("src/html/parts/bottom.html");

  const titleStrings = {
    tables: "Tables",
    index: "Trang chủ",
    forms: "Forms",
    profile: "Profile",
    login: "Login",
    facebookBuffLikePost: "Buff Like Post",
    facebookBuffViewLivestream: "Buff Live",
    facebookBuffLikeCmt: "Buff Like Comment",
    facebookBuffViews: "Buff Views",
    facebookBuffCmt: "Buff Comment",
    facebookBuffSub: "Buff Sub/Follow",
    facebookBuffReviewPage: "Buff Review Page",
    facebookBuffViewStory: "Buff View Story",
    facebookBuffSubPage: "Buff Sub/Follow Page",
    facebookBuffLikePage: "Buff Like Page",
    facebookBuffMemberGroup: "Buff Member Group",
    facebookBuffShare: "Buff Share",
    fbvipBuffLike: "Vip Like",
    fbvipBuffCmt: "Vip Comment",
    fbvipBuffLive: "Vip Live",
    fbvipBuffShare: "Vip Share Live",
    instagramBuffSub: "Instagram Sub",
    instagramBuffLike: "Instagram Like",
    instagramBuffCmt: "Instagram Comment",
    instagramBuffView: "Instagram View",
    insvipBuffLike: "Instagram Vip Like",
    tiktokBuffSub: "TikTok Sub",
    tiktokBuffView: "TikTok View",
    tiktokBuffLike: "TikTok Like",
    tiktokBuffCmt: "TikTok Comment",
    tiktokvipBuffView: "TikTok Vip View",
  };

  const titleStringsLong = {
    tables: "Responsive Tables",
  };

  const titleStringReplacement = titleStrings[file] ? titleStrings[file] : "";
  const titleStringLongReplacement = titleStringsLong[file]
    ? titleStringsLong[file]
    : titleStringReplacement;

  return src(sources)
    .pipe(concat(`${file}.html`))
    .pipe(replace("--date-now-millis", dateNowMillis.toString()))
    .pipe(replace("--html-class", replaceHtmlClassWith))
    .pipe(
      replace(
        "--stylesheet-min-path",
        `css/main.css?v=${dateNowMillis.toString()}`
      )
    )
    .pipe(replace(`--set-active-${file}-html`, "active"))
    .pipe(replace(/ --set-active-[a-z-]+/gi, ""))
    .pipe(replace("{{ titleString }}", titleStringReplacement))
    .pipe(replace("{{ titleStringLong }}", titleStringLongReplacement))
    .pipe(dest(destDir));
};

/* Img */

const copyImgReaction = () => {
  return src("src/img/facebook-reaction-icons/*").pipe(
    dest(destDir + "/img/facebook-reaction-icons")
  );
};

const copyImgIconSideBar = () => {
  return src("src/img/icon-aside-bar/*").pipe(
    dest(destDir + "/img/icon-aside-bar")
  );
};

const copyTailwindFavicons = () => {
  return src("src/tailwind-favicons/*").pipe(dest(destDir));
};

const copyFont = () => {
  return src("src/Avant-Garde-Font/*").pipe(
    dest(destDir + "/public/Avant-Garde-Font")
  );
};

exports.default = series(
  parallel(
    () => concatHtml("index"),
    () => concatHtml("tables"),
    () => concatHtml("forms"),
    () => concatHtml("profile"),
    () => concatHtml("login"),
    () => concatHtml("facebookBuffLikePost"),
    () => concatHtml("facebookBuffLikeCmt"),
    () => concatHtml("facebookBuffViewLivestream"),
    () => concatHtml("facebookBuffViews"),
    () => concatHtml("facebookBuffCmt"),
    () => concatHtml("facebookBuffSub"),
    () => concatHtml("facebookBuffReviewPage"),
    () => concatHtml("facebookBuffViewStory"),
    () => concatHtml("facebookBuffSubPage"),
    () => concatHtml("facebookBuffLikePage"),
    () => concatHtml("facebookBuffMemberGroup"),
    () => concatHtml("facebookBuffShare"),
    () => concatHtml("fbvipBuffLike"),
    () => concatHtml("fbvipBuffCmt"),
    () => concatHtml("fbvipBuffLive"),
    () => concatHtml("fbvipBuffShare"),
    () => concatHtml("instagramBuffSub"),
    () => concatHtml("instagramBuffLike"),
    () => concatHtml("instagramBuffCmt"),
    () => concatHtml("instagramBuffView"),
    () => concatHtml("insvipBuffLike"),
    () => concatHtml("tiktokBuffSub"),
    () => concatHtml("tiktokBuffView"),
    () => concatHtml("tiktokBuffLike"),
    () => concatHtml("tiktokBuffCmt"),
    () => concatHtml("tiktokvipBuffView"),
    processJsMain,
    processJsMainMin,
    processJsChartSample,
    processJsChartSampleMin,
    copyImgIconSideBar,
    copyImgReaction,
    copyTailwindFavicons,
    copyFont
  ),
  processCss
);
