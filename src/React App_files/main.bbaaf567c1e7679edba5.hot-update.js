webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n/* FONTS\n\nDidot LT Pro Bold\n\nfont-family: linotype-didot, serif;\n\nfont-weight: 700;\n\nfont-style: normal;\n\n\nDidot LT Pro Bold Italic\n\nfont-family: linotype-didot, serif;\n\nfont-weight: 700;\n\nfont-style: italic;\n\n\nDidot LT Pro Italic\n\nfont-family: linotype-didot, serif;\n\nfont-weight: 400;\n\nfont-style: italic;\n\n\nDidot LT Pro Roman\n\nfont-family: linotype-didot, serif;\n\nfont-weight: 400;\n\nfont-style: normal;\n*/\n\n\n/*\n**** Header ****\n*/\n\n.App-header {\n  margin-top: 12vh;\n  margin-bottom: 6vw;\n  display: flex;\n  font-size: 2vw;\n  color: white;\n  font-family: gill-sans-nova, sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  -webkit-animation: fade-in 3s forwards;\n}\n\n.logo-box{\n  float: right;\n  width: 50%;\n  margin-left: 8vw;\n  max-height: 100px;\n}\n\n.App-logo {\n  /* look up animation css class*/\n  height: 7.5vw;\n  width: 7.5vw;\n  margin-right: 9px;\n  float: left;\n}\n\n .year {\n  float: left;\n  line-height: 7.5vw;\n  margin: 0;\n}\n\n.about-box{\n  float: right;\n  width: 50%;\n  max-height: 100px;\n  margin-right: 9.5vw;\n}\n\n.about {\n  float:right;\n  margin-top: 0;\n  border: none;\n  background:none;\n  font-family: gill-sans-nova, sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #ffffff;\n  font-size: 2.5vw;\n  transition: font-size .3s ;\n\n}\n\n.about-content{\n  -webkit-animation: fade-in 2.5s forwards;\n  -webkit-animation-delay: 0s;\n  margin-top: 0;\n  border: none;\n  background:none;\n  font-family: gill-sans-nova, sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #ffffff;\n  font-size: 2.4vw;\n  transition: font-size .3s ;\n}\n\n.about-paragraph {\n  margin-top: 2vw;\n  border-bottom: 2px solid #1C67C4;\n  transition: border-bottom 1s;\n  cursor: pointer;\n}\n\n.about p:hover{\n  border-bottom: 2px solid #fff;\n  transition: border-bottom 1s;\n}\n\n\n.about:focus{\n  outline:none;\n}\n\n/*\n**** Title Box\n*/\n\n#title-box {\n  margin-left: 12vw;\n  text-align: left;\n  color: #fff;\n}\n\n\n.title-container {\n  font-family: linotype-didot, serif;\n  font-weight: 400;\n  font-size: 3.3vw;\n  line-height: 4vw;\n}\n\n/*\n*** Generic styles\n*/\n.bold{\n  font-weight:700;\n}\n\n.italics{\n  font-style: italic;\n}\n\n@-webkit-keyframes add-underline{\n  from{\n    /*font-size: 40px;*/\n    border-bottom: 2px solid #1C67C4;\n  }\n  to{\n    /*font-size: 33px;*/\n    border-bottom: 2px solid #fff;\n  }\n}\n\n.underlined {\n  -webkit-animation: add-underline 1s forwards ;\n}\n.underlined:hover{\n  font-size:2.58vw !important;\n  transition: font-size 5s;\n}\n\n.underlined-link{\n  border-bottom: 2px solid #1c67c4;\n}\n\n.generic{\n  border-bottom: none;\n  font-size: 33px;\n  transition: font-size 2s border-bottom .3s\n}\n\n@-webkit-keyframes remove-underline{\n  from{\n    border-bottom: 2px solid #fff;\n  }\n  to {\n    border-bottom: 2px solid #1C67C4;\n  }\n}\n\n.remove-underline{\n  -webkit-animation: remove-underline 1s;\n}\n\n\n\n/*\n**** Content Selection\n*/\n\n.content-selector{\n  opacity: 0;\n  font-size: 4vw;\n  float: left;\n  margin-top: 4vw;\n  margin-left: 9vw;\n  -webkit-animation: fade-in 1.5s forwards;\n  -webkit-animation-delay: .8s;\n}\n\n.content-selector button{\n  font-family: gill-sans-nova, sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  background: none;\n  border:none;\n  color: #ffffff;\n  font-size: 2.58vw;\n  margin-right: 1vw;\n  transition: font-size .3s;\n}\n\n.content-selector\n button:hover{\n  font-size: 3vw;\n  transition: font-size .4s;\n}\n\n.content-selector button:focus{\n  outline: none;\n}\n\n/*\n*** ContentBox\n*/\n\n#content-box {\n  opacity: 0;\n  margin-left: 8.3vw;\n  margin-right: 8.3vw;\n  margin-top: 10vw;\n  -webkit-animation: fade-in 1.5s forwards;\n  -webkit-animation-delay: .8s;\n}\n\n.ProjectHeader{\n  background-image: url(" + escape(__webpack_require__(/*! ./maatsTitle.png */ "./src/maatsTitle.png")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 36vw;\n  border-radius: 10px;\n  margin-bottom: 2.4vw\n}\n\n\n.ProjectN{\n  width: 100%;\n  height: 36vw;\n  border-radius: 10px;\n  margin-bottom: 2.4vw;\n  background-image:linear-gradient(to bottom, rgba(30,30,30,.5), rgba(30,30,30,1));\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity .4s, visibility .4s;\n  color: #fff;\n  text-align: left;\n}\n\n.Project1:hover .ProjectN{\n  visibility: visible;\n  opacity: 1;\n}\n\n.Project1{\n  width: 100%;\n  float:left;\n  height: 36vw;\n  background-image: url(" + escape(__webpack_require__(/*! ./NWMH 640.jpeg */ "./src/NWMH 640.jpeg")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n}\n\n.Project2{\n  width:100%;\n  height: 36vw;\n  float:right;\n  background-image: url(" + escape(__webpack_require__(/*! ./Solidity.png */ "./src/Solidity.png")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n}\n\n.Project2:hover .ProjectN{\n  visibility: visible;\n  opacity: 1;\n}\n\n.Project3{\n  width:100%;\n  height: 36vw;\n  float:left;\n  background-image: url(" + escape(__webpack_require__(/*! ./Risk1 640.png */ "./src/Risk1 640.png")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  margin-top: 2.4vw;\n}\n\n.Project3:hover .ProjectN{\n  visibility: visible;\n  opacity: 1;\n}\n\n.Project4{\n  width:100%;\n  height: 36vw;\n  float:right;\n  background-image: url(" + escape(__webpack_require__(/*! ./PortfolioV1.0.png */ "./src/PortfolioV1.0.png")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  margin-top: 2.4vw;\n}\n\n.Project4:hover .ProjectN{\n  visibility: visible;\n  opacity: 1;\n}\n\n.placeholder{\n  height: 25vw;\n  width: 100%;\n  padding-top: 2.5vw;\n}\n\n.description-box{\n  color: #fff;\n  background-image: linear-gradient(to bottom, rgba(30,30,30,.5), rgba(30,30,30,1));\n  height: 100.1%;\n  width: 100%;\n  float: right;\n  margin:0;\n  border-radius: 10px;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity .4s, visibility .4s;\n  text-align: left;\n}\n\n.header-description-text{\n  margin: 0 3vw;\n  font-size: 2.8vw;\n  line-height: 2.5vw;\n  vertical-align: text-bottom;\n  text-align: center;\n}\n\n.description-text{\n  margin: 0 3vw;\n  font-size: 2.3vw;\n  /*line-height: 30px;*/\n  vertical-align: text-bottom;\n  text-align: center;\n}\n\n.description-date{\n  font-size: 1.8vw;\n  margin: 0 4vw;\n  text-align: right;\n  color: #fff;\n  font-weight: bold;\n}\n\n.ProjectHeader:hover .description-box{\n  visibility: visible;\n  opacity: 1;\n}\n\n\n.ProjectHeader-Link{\n  text-decoration: none;\n  border: none;\n  background-color: inherit;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n}\n\n.Project-Link:nth-child(odd) {\n  text-decoration: none;\n  border: none;\n  background-color: inherit;\n  margin: 0px;\n  padding: 0;\n  width: 48%;\n  float: left;\n  font:inherit;\n  cursor: pointer;\n}\n\n.Project-Link:nth-child(even){\n  text-decoration: none;\n  border: none;\n  background-color: inherit;\n  margin: 0;\n  padding: 0;\n  width: 48%;\n  float: right;\n  font: inherit;\n  cursor: pointer;\n}\n\n\n\n/*\n*** articles\n*/\n\n.article1{\n  background-image: url(" + escape(__webpack_require__(/*! ./Dimensionless.png */ "./src/Dimensionless.png")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 36vw;\n  border-radius: 10px;\n  margin-bottom: 2.4vw;\n}\n\n.article1:hover .description-box{\n  visibility: visible;\n  opacity: 1;\n}\n\n.article2{\n  background-image: url(" + escape(__webpack_require__(/*! ./Medium-Wordmark.jpg */ "./src/Medium-Wordmark.jpg")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 36vw;\n  border-radius: 10px;\n  margin-bottom: 2.5vw;\n}\n\n.article2:hover .description-box{\n  visibility: visible;\n  opacity: 1;\n}\n\n.article2 .header-description-text{\n  line-height:3vw;\n}\n\n/*\n*** TRAVEL\n*/\n.travel1{\n  background-image: url(" + escape(__webpack_require__(/*! ./AMSHead.jpg */ "./src/AMSHead.jpg")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 39vw;\n  border-radius: 10px;\n  margin-bottom: 2.5vw\n}\n\n.travel1:hover .description-box{\n  visibility: visible;\n  opacity: 1;\n}\n\n.travel2{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Zambia/Zambia-Header.jpg */ "./src/Travel/Zambia/Zambia-Header.jpg")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 39vw;\n  border-radius: 10px;\n  margin-bottom: 2.5vw\n}\n\n.travel2:hover .description-box{\n  visibility: visible;\n  opacity: 1;\n}\n\n.travel3{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/South Africa/SouthAfrica-Header.jpg */ "./src/Travel/South Africa/SouthAfrica-Header.jpg")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 39vw;\n  border-radius: 10px;\n  margin-bottom: 2.5vw\n}\n\n.travel3:hover .description-box{\n  visibility: visible;\n  opacity: 1;\n}\n\n.travel4{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Prague/PragueHeader.jpg */ "./src/Travel/Prague/PragueHeader.jpg")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 39vw;\n  border-radius: 10px;\n  margin-bottom: 2.5vw;\n}\n\n.travel4:hover .description-box{\n  visibility: visible;\n  opacity: 1;\n}\n\n\n\n/*\n*** span render\n*/\n\n@-webkit-keyframes fade-in{\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(15px);\n            transform: translateY(15px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes fade-out{\n  from{\n    opacity: 1;\n    -webkit-transform:translateY(0px);\n            transform:translateY(0px)\n  }\n  to{\n    opacity: 0;\n    -webkit-transform:translateY(15px);\n            transform:translateY(15px)\n  }\n}\n\n#span-1{\n  opacity: 0;\n  -webkit-animation: fade-in 1.5s forwards;\n  -webkit-animation-delay: .0s;\n}\n\n#span-2{\n  opacity: 0;\n  -webkit-animation: fade-in 1.5s forwards;\n  -webkit-animation-delay: .3s;\n}\n\n#span-3{\n  opacity: 0;\n  -webkit-animation: fade-in 1.5s forwards;\n  -webkit-animation-delay: .6s;\n}\n\n.transition-out-1{\n  opacity:1 !important;\n -webkit-animation: fade-out 1.6s forwards !important;\n -webkit-animation-delay: .9s !important;\n}\n.transition-out-2{\n  opacity: 1 !important;\n -webkit-animation: fade-out 1.3s forwards !important;\n -webkit-animation-delay: .6s !important;\n}\n.transition-out-3{\n  opacity: 1 !important;\n -webkit-animation: fade-out 1s forwards !important;\n -webkit-animation-delay: .3s !important;\n}\n\n\n\n/*\n*** ABOUT ME\n*/\n\n#about-me-box{\n  height: 35vw;\n  text-align: left;\n  color: #fff;\n  margin-left: 10.8vw;\n}\n\n.about-me-text{\n  margin-top: 4%;\n  font-family: linotype-didot, serif;\n  font-weight: 400;\n  font-size: 2vw;\n  line-height: 2.6vw;\n  float: left;\n  width: 40%;\n\n}\n\n.about-me-image{\n  background-image: url(" + escape(__webpack_require__(/*! ./aboutMe2.jpg */ "./src/aboutMe2.jpg")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  float: right;\n  width: 40%;\n  height: 33vw;\n  margin-right: 8vw;\n  border-radius: 15px;\n}\n\n\n.specifics-box{\n  margin-top: 10vw;\n}\n\n.line{\n  border-bottom: .5vw dotted #fff;\n  width: 50%;\n  margin: auto;\n}\n\n.technology-about{\n  width: 100%;\n  height: 15vw;\n}\n\n.technology-text{\n  text-align: left;\n  font-size: 2vw;\n  line-height: 2.4vw;\n  margin-right: 10vw;\n  margin-bottom: 10vw;\n}\n\n\n\n.lego{\n  float: left;\n  width: 20%;\n  height: 10vw;\n  background-image: url(" + escape(__webpack_require__(/*! ./lego.png */ "./src/lego.png")) + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-left: 14vw;\n}\n\n.scuba{\n  float: left;\n  width: 20%;\n  height: 10vw;\n  background-image: url(" + escape(__webpack_require__(/*! ./scuba.png */ "./src/scuba.png")) + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-left: 14vw;\n}\n\n\n\n.golf-logo{\n  float: left;\n  width: 18%;\n  height: 10vw;\n  background-image: url(" + escape(__webpack_require__(/*! ./golf-logo.png */ "./src/golf-logo.png")) + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-top: 15px;\n  margin-left: 11.3vw;\n}\n\n.golf-text{\n  text-align: left;\n  font-size: 2vw;\n  line-height: 2.4vw;\n  margin-right: 10vw;\n  margin-bottom: 10vw;\n  margin-left: 34%;\n}\n\n.reach-out-title{\n  margin-top: 8vw;\n  font-family: linotype-didot, serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 5vw;\n\n}\n\n.reach-out-body{\n  width: 45%;\n  margin: auto;\n  line-height: 2.4vw;\n  margin-bottom: 5.5vw;\n}\n\n.contact-type{\n  float: left;\n  margin-left: 20%;\n  line-height: 4vw;\n}\n\n.contact-info{\n  float: left;\n  margin-left: 4.5vw;\n  margin-right: 33%;\n  margin-top: auto;\n  line-height: 4vw;\n}\n\n.email-contact-info{\n  float: left;\n  margin-left: 5.7vw;\n  line-height: 4.5vw;\n  margin-right: 33%;\n}\n\n.resume-contact-info{\n  float: left;\n  margin-left: 3.1vw;\n  line-height: 4.5vw;\n  margin-bottom: 5vw;\n}\n\n.resume-link{\n  text-decoration: none;\n  color: #fff;\n  border-bottom: 2px solid #1C67C4;\n  transition: border-bottom 1s;\n}\n\n.resume-link:hover{\n  border-bottom: 2px solid #fff;\n  transition: border-bottom 1;\n}\n\n.link{\n  text-decoration: none;\n  color: #000;\n}\n\n/*\n*** Project Pages Display\n*/\n.project-content{\n  -webkit-animation: fade-in 2.5s forwards;\n  margin-top: 0;\n  border: none;\n  background:none;\n  font-family: gill-sans-nova, sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  color: #ffffff;\n  font-size: 2.4vw;\n  transition: font-size .3s ;\n  width: 90vw;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.description-box-live{\n  color: #fff;\n  background-color:rgb(242, 242, 242,1);\n  height: 100%;\n  width: 45vw;\n  float: right;\n  margin:0;\n  border-radius: 10px;\n  opacity: 1;\n  transition: opacity .4s, visibility .4s;\n  text-align: left;\n}\n\n.box-live{\n  width: 100%;\n  float: right;\n  margin: 0;\n  align-items: center;\n  height: 450px;\n}\n\n.live-description-text{\n  margin:auto;\n  width: 80%;\n  margin-bottom: 0;\n  margin-left: 40px;\n  font-size: 35px;\n  line-height: 30px;\n  vertical-align: text-bottom;\n  text-align: center;\n  color: #000;\n\n}\n\n.live-description-text::after{\n  border-bottom: 2px solid #1C67C4;\n  width: 60%;\n  margin: 0 auto;\n  padding-top: 20px;\n  content: \"\";\n  display: block;\n}\n\n.subtitle{\n  margin: auto;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 300;\n  margin-top: 50px;\n  padding-bottom: 3px;\n  padding-left: 0%;\n  padding-right: 0%;\n  padding-top: 5px;\n  text-transform: uppercase;\n  width: 80%;\n  clear: both;\n  color: #1C67C4;\n}\n.subtitle-2{\n  margin: auto;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 300;\n  margin-top: 18px;\n  padding-bottom: 3px;\n  padding-left: 0%;\n  padding-right: 0%;\n  padding-top: 5px;\n  text-transform: uppercase;\n  width: 80%;\n  clear: both;\n  color: #1C67C4;\n}\n\n.subtitle-description{\n  font-size: 20px;\n  line-height: normal;\n  font-style: normal;\n  width: 80%;\n  color: #000;\n  margin: auto;\n}\n\n.live-placeholder{\n    height: 20%;\n    width: 100%;\n    margin: 0;\n}\n\n.description-date-live{\n  font-size: 20px;\n  margin: 0px 50px;\n  text-align: right;\n  color: #1C67C4;\n  font-weight: bold;\n  line-height: 100px;\n}\n\n.project-image{\n  float: left;\n  width: 45vw;\n  height: 36vw;\n  background-image: url(" + escape(__webpack_require__(/*! ./maatsTitle.png */ "./src/maatsTitle.png")) + ");\n}\n\n.ProjectHeader-1{\n  width: 100%;\n  height: 36vw;\n  border-radius: 10px;\n  margin-bottom: 30px\n}\n\n.ProjectHeader-2{\n  background-image: url(" + escape(__webpack_require__(/*! ./NWMH 640.jpeg */ "./src/NWMH 640.jpeg")) + ");\n  background-repeat: no-repeat;\n  background-size:contain;\n  width: 100%;\n  height: 450px;\n  border-radius: 10px;\n  margin-bottom: 30px\n}\n\n.ProjectHeader-3{\n  background-image: url(" + escape(__webpack_require__(/*! ./Solidity.png */ "./src/Solidity.png")) + ");\n  background-repeat: no-repeat;\n  background-size:contain;\n  width: 100%;\n  height: 450px;\n  border-radius: 10px;\n  margin-bottom: 30px\n}\n\n.ProjectHeader-4{\n  background-image: url(" + escape(__webpack_require__(/*! ./Risk1 640.png */ "./src/Risk1 640.png")) + ");\n  background-repeat: no-repeat;\n  background-size:contain;\n  width: 100%;\n  height: 450px;\n  border-radius: 10px;\n  margin-bottom: 30px\n}\n\n\n/*\n*** Project Body Content\n*/\n\n.project-body{\n  width: 100%;\n  margin-top: 50px;\n}\n.picture{\n  width: 100%;\n  height: auto;\n  margin: auto;\n  box-shadow: -2px 2px 2px #222222;\n  border-radius: 5px;\n}\n\n.project-content-left{\n  display: block;\n  float: left;\n  width: 45.2%;\n  margin: auto;\n  padding-left: 3%;\n  height: 400px;\n  object-fit: fill;\n  overflow: hidden;\n  margin-bottom: 50px;\n}\n\n.project-content-right{\n  float: right;\n  width: 50%;\n  margin: auto;\n  margin-bottom: 200px;\n}\n\n.project-content-right-2{\n  float: right;\n  width: 50%;\n  margin: auto;\n  margin-bottom: 130px;\n}\n\n.section-title{\n  text-transform: uppercase;\n  color: rgb(242,242,242);\n  font-size: 21px;\n  margin-top: 15%;\n  margin-left: 14%;\n  text-align: left;\n}\n\n.section-title-2{\n  text-transform: uppercase;\n  color: rgb(242,242,242);\n  font-size: 21px;\n  margin-top: 0%;\n  margin-left: 14%;\n  text-align: left;\n}\n\n.section-content{\n  color: #fff;\n  float: none;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 350;\n  line-height: 25px;\n  margin: auto;\n  margin-top: 0px;\n  margin-left: 14%;\n  padding-top: 4px;\n  text-align: left;\n  text-transform: none;\n  width: 80%;\n  margin-bottom: 50px;\n}\n\n\n.icon-wrap{\n  background-color: #F2F2F2;\n  margin: 0px auto 0 auto;\n  padding-left: 0%;\n  padding-right: 0%;\n  padding-bottom: 0;\n  padding-top: 0;\n  height: 400px;\n  float: right;\n  width: 100%;\n  border-radius: 10px;\n}\n\n.icon-section{\n  margin: 30px auto 20px auto;\n  padding-right: 3%;\n  padding-left: 3%;\n  width: 94%;\n}\n\n.first-icon{\n  width: 31%;\n  margin:1% .2% 1% 1.6%;\n  float: left;\n  display: block;\n}\n\n.first-icon:first-child{\n  margin-left: 3%;\n}\n\n.icon{\n  width: 70px;\n  height: 70px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  display: block;\n}\n\n.long-icon{\n  width: 90px;\n  height: 60px;\n  margin-bottom: 10px;\n  margin-top: 20px;\n  margin-left: 3%;\n  display: block;\n}\n\n.icon-section-title{\n  float: none;\n  font-size: 21px;\n  font-style: normal;\n  font-weight: 300;\n  margin: auto;\n  margin-left: 3%;\n  padding-bottom: 3px;\n  padding-left: 0%;\n  padding-right: 0%;\n  padding-top: 0px;\n  text-align: left;\n  text-transform: uppercase;\n  width: 100%;\n  clear: both;\n  color: #1C67C4;\n}\n\n.icon-section .section-content{\n  margin-left: 3%;\n  color: #000;\n}\n\n.big-icon{\n  width: 60px;\n  height: 60px;\n  margin-bottom: 20px;\n  margin-top: 10px;\n  display: block;\n  margin-left:3%;\n}\n\n/*\n*** Team section\n*/\n\n.team-box{\n  margin: 100px auto 15px;\n  padding-right: 0%;\n  padding-left: 0%;\n  width: 100%;\n}\n\n.the-team{\n  margin-left: 0;\n  width: 48.2%;\n  float: left;\n  margin: 1% 0 1% 1.6%;\n  margin-top: 70px;\n  margin-bottom: 80px;\n}\n\n.team-box .title:after {\n    content: \"\";\n    display: block;\n    margin: 0 auto;\n    width: 30%;\n    padding-top: 15px;\n    border-bottom: 2px solid #fff;\n}\n\n.team-box .title{\n  float: none;\n  font-size: 33px;\n  font-style: normal;\n  font-weight: 300;\n  margin: auto;\n  padding-bottom: 3px;\n  padding-left: 0%;\n  padding-right: 0%;\n  padding-top: 0px;\n  text-align: center;\n  text-transform: none;\n  width: 100%;\n  clear: both;\n}\n\n.left-team{\n  float: left;\n  margin: auto;\n  width: 49%;\n  align-content: center;\n}\n\n.right-team{\n  float:right;\n  margin: auto;\n  width: 49%;\n  align-content: center;\n}\n\n.team-image{\n  margin: 30px auto 1px auto;\n  align-content: center;\n  text-align: center;\n}\n\n.team-image img {\n  border-radius: 50%;\n  width: 50%;\n  align-content: center;\n}\n\n.name{\n  font-size: 20px;\n  margin-top: 0;\n}\n\n.my-role-section{\n  width: 48.2%;\n  float:right;\n  margin: 1% 0 1% 1.6%;\n  margin-top: 70px;\n}\n\n.me-image{\n  padding-top: 25px;\n  align-content: center;\n  text-align: center;\n}\n\n.me-image img {\n    border-radius: 50%;\n    width: 25%;\n    align-content: center;\n}\n\n.me-image-1{\n  padding-top: 25px;\n  align-content: center;\n  text-align: center;\n}\n\n.me-image-1 img {\n    background-color: #f2f2f2;\n    border-radius: 50%;\n    width: 25%;\n    align-content: center;\n}\n\n.my-role{\n  display: block;\n  width: 85%;\n  margin-left: 7%;\n  margin-right: 7.4%;\n}\n\n.my-role .section-title{\n  margin-top: 20px;\n}\n\n.my-role .section-content-1{\n  color: #fff;\n  float: none;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 350;\n  line-height: 25px;\n  margin: auto;\n  margin-top: 0px;\n  margin-left: 5%;\n  padding-top: 4px;\n  text-align: left;\n  text-transform: none;\n  width: 100%;\n  margin-bottom: 50px;\n}\n\n\n\n/*\n*** Back to Top button\n*/\n\n\n\n.arrow{\n  background-image: url(" + escape(__webpack_require__(/*! ./return-arrow.png */ "./src/return-arrow.png")) + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin: auto;\n  width: 2.4vw;\n  height: 3.2vw;\n  margin-top: 5px;\n}\n\n.back-to-top{\n  background-color: #f2f2f2;\n  border-radius: 50%;\n  display: block;\n  height: 6.3vw;\n  width: 6.3vw;\n  margin-left: 70%;\n  margin-top: 3vw;\n  margin-right: 5%;\n  margin-bottom: 30px;\n  text-align: center;\n  float: right;\n  decoration: none;\n  border: none;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  cursor: pointer;\n}\n\n.back-to-top:focus{\n  outline: none;\n}\n\n.back-to-top:hover{\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n}\n\n\n\n/**\n** Travel Pages\n**/\n\n\n.travel-box{\n  width: 84%;\n  margin: auto;\n  outline: none;\n}\n\n.travel-title{\n  margin: auto;\n  color: #fff;\n  font-size: 50px;\n  margin-bottom: 30px;\n  font-family: linotype-didot, serif;\n}\n\n\n.TravelHeader-1{\n  background-image: url(" + escape(__webpack_require__(/*! ./AMSHead.jpg */ "./src/AMSHead.jpg")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 500px;\n  border-radius: 10px;\n  margin-bottom: 30px;\n  cursor: default;\n}\n\n\n.travel-image-expand{\n  font-size: 50px;\n  margin: 0px 50px;\n  text-align: right;\n  color: #fff;\n  font-weight: normal;\n  line-height: 100px;\n}\n\n.ams-travel{\n  width: 100%;\n  float:left;\n  height: 450px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n  cursor: auto;\n  margin-bottom: 30px;\n}\n\n.ams-image1{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/1.jpg */ "./src/Travel/Amsterdam'17/1.jpg")) + ");\n}\n\n.ams-image2{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/2.jpg */ "./src/Travel/Amsterdam'17/2.jpg")) + ");\n}\n\n.ams-image3{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/3.jpg */ "./src/Travel/Amsterdam'17/3.jpg")) + ");\n}\n\n.ams-image4{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/4.jpg */ "./src/Travel/Amsterdam'17/4.jpg")) + ");\n}\n\n.ams-image5{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/5.jpg */ "./src/Travel/Amsterdam'17/5.jpg")) + ");\n}\n\n.ams-image6{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/6.jpg */ "./src/Travel/Amsterdam'17/6.jpg")) + ");\n}\n.ams-image7{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/7.jpg */ "./src/Travel/Amsterdam'17/7.jpg")) + ");\n}\n\n.ams-image8{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/8.jpg */ "./src/Travel/Amsterdam'17/8.jpg")) + ");\n}\n\n.ams-image9{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/9.jpg */ "./src/Travel/Amsterdam'17/9.jpg")) + ");\n}\n.ams-image10{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/10.jpg */ "./src/Travel/Amsterdam'17/10.jpg")) + ");\n}\n.ams-image11{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/11.jpg */ "./src/Travel/Amsterdam'17/11.jpg")) + ");\n}\n.ams-image12{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/12.jpg */ "./src/Travel/Amsterdam'17/12.jpg")) + ");\n}\n.ams-image13{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/13.jpg */ "./src/Travel/Amsterdam'17/13.jpg")) + ");\n}\n.ams-image14{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/14.jpg */ "./src/Travel/Amsterdam'17/14.jpg")) + ");\n}\n.ams-image15{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/15.jpg */ "./src/Travel/Amsterdam'17/15.jpg")) + ");\n}\n.ams-image16{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/16.jpg */ "./src/Travel/Amsterdam'17/16.jpg")) + ");\n}\n.ams-image17{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/17.jpg */ "./src/Travel/Amsterdam'17/17.jpg")) + ");\n}\n.ams-image18{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/18.jpg */ "./src/Travel/Amsterdam'17/18.jpg")) + ");\n}\n.ams-image19{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/19.jpg */ "./src/Travel/Amsterdam'17/19.jpg")) + ");\n}\n.ams-image20{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/20.jpg */ "./src/Travel/Amsterdam'17/20.jpg")) + ");\n}\n.ams-image21{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/21.jpg */ "./src/Travel/Amsterdam'17/21.jpg")) + ");\n}\n.ams-image22{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/22.jpg */ "./src/Travel/Amsterdam'17/22.jpg")) + ");\n}\n.ams-image23{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/23.jpg */ "./src/Travel/Amsterdam'17/23.jpg")) + ");\n}\n.ams-image24{\n  background-image: url(" + escape(__webpack_require__(/*! ./Travel/Amsterdam'17/24.jpg */ "./src/Travel/Amsterdam'17/24.jpg")) + ");\n}\n\n\n\n.Project1:hover .ProjectN{\n  visibility: visible;\n  opacity: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/AMSHead.jpg":
/*!*************************!*\
  !*** ./src/AMSHead.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/AMSHead.52eeef7e.jpg";

/***/ }),

/***/ "./src/Dimensionless.png":
/*!*******************************!*\
  !*** ./src/Dimensionless.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Dimensionless.76816364.png";

/***/ }),

/***/ "./src/Medium-Wordmark.jpg":
/*!*********************************!*\
  !*** ./src/Medium-Wordmark.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Medium-Wordmark.2cd51abb.jpg";

/***/ }),

/***/ "./src/NWMH 640.jpeg":
/*!***************************!*\
  !*** ./src/NWMH 640.jpeg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/NWMH 640.e4d1004f.jpeg";

/***/ }),

/***/ "./src/PortfolioV1.0.png":
/*!*******************************!*\
  !*** ./src/PortfolioV1.0.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/PortfolioV1.0.f3f56034.png";

/***/ }),

/***/ "./src/Risk1 640.png":
/*!***************************!*\
  !*** ./src/Risk1 640.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Risk1 640.6ef02595.png";

/***/ }),

/***/ "./src/Solidity.png":
/*!**************************!*\
  !*** ./src/Solidity.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Solidity.ed272bad.png";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/1.jpg":
/*!***************************************!*\
  !*** ./src/Travel/Amsterdam'17/1.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/1.ff0819ca.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/10.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/10.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/10.2f1c73ee.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/11.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/11.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/11.840f070a.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/12.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/12.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/12.8e70ddf1.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/13.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/13.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/13.277a2205.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/14.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/14.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/14.c00e1a13.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/15.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/15.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/15.dde77ede.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/16.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/16.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/16.8cb2c797.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/17.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/17.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/17.206b58db.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/18.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/18.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/18.ca6e5dc5.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/19.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/19.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/19.7ed0ed2b.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/2.jpg":
/*!***************************************!*\
  !*** ./src/Travel/Amsterdam'17/2.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/2.f7796cff.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/20.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/20.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/20.2d821eda.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/21.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/21.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/21.ae843f59.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/22.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/22.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/22.47fd6680.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/23.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/23.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/23.32a9d5bc.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/24.jpg":
/*!****************************************!*\
  !*** ./src/Travel/Amsterdam'17/24.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/24.b3f6a0f6.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/3.jpg":
/*!***************************************!*\
  !*** ./src/Travel/Amsterdam'17/3.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/3.dbcff26c.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/4.jpg":
/*!***************************************!*\
  !*** ./src/Travel/Amsterdam'17/4.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/4.e2424ee9.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/5.jpg":
/*!***************************************!*\
  !*** ./src/Travel/Amsterdam'17/5.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/5.3c4df2ef.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/6.jpg":
/*!***************************************!*\
  !*** ./src/Travel/Amsterdam'17/6.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/6.8c10fa45.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/7.jpg":
/*!***************************************!*\
  !*** ./src/Travel/Amsterdam'17/7.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/7.bb59da3f.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/8.jpg":
/*!***************************************!*\
  !*** ./src/Travel/Amsterdam'17/8.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/8.23ff115e.jpg";

/***/ }),

/***/ "./src/Travel/Amsterdam'17/9.jpg":
/*!***************************************!*\
  !*** ./src/Travel/Amsterdam'17/9.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/9.392b1df0.jpg";

/***/ }),

/***/ "./src/Travel/Prague/PragueHeader.jpg":
/*!********************************************!*\
  !*** ./src/Travel/Prague/PragueHeader.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/PragueHeader.71d61ea1.jpg";

/***/ }),

/***/ "./src/Travel/South Africa/SouthAfrica-Header.jpg":
/*!********************************************************!*\
  !*** ./src/Travel/South Africa/SouthAfrica-Header.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/SouthAfrica-Header.1c29ab86.jpg";

/***/ }),

/***/ "./src/Travel/Zambia/Zambia-Header.jpg":
/*!*********************************************!*\
  !*** ./src/Travel/Zambia/Zambia-Header.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Zambia-Header.6ed60ba9.jpg";

/***/ }),

/***/ "./src/aboutMe2.jpg":
/*!**************************!*\
  !*** ./src/aboutMe2.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/aboutMe2.a80c114b.jpg";

/***/ }),

/***/ "./src/golf-logo.png":
/*!***************************!*\
  !*** ./src/golf-logo.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/golf-logo.b841cb22.png";

/***/ }),

/***/ "./src/lego.png":
/*!**********************!*\
  !*** ./src/lego.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lego.774479cc.png";

/***/ }),

/***/ "./src/maatsTitle.png":
/*!****************************!*\
  !*** ./src/maatsTitle.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/maatsTitle.3fdcd54c.png";

/***/ }),

/***/ "./src/return-arrow.png":
/*!******************************!*\
  !*** ./src/return-arrow.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAAGXCAYAAABx46EnAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGaGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMjdUMTc6MDU6NDQtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTI3VDE3OjA2OjQ4LTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTAxLTI3VDE3OjA2OjQ4LTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVmMTAyOWUyLWQ0MzItNDU1MC1hZTk4LWM3ODAyMDAyZGY0NCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjNhM2U0MjMxLTQyYTMtOTM0NC1hMzZmLWJjOTVkNTY4ZTg2ZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjJhMzMyM2E5LWVmMzEtNDE1ZS05ZWI2LWYxODljMTkwYzFlMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmEzMzIzYTktZWYzMS00MTVlLTllYjYtZjE4OWMxOTBjMWUwIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTI3VDE3OjA1OjQ0LTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZjEwMjllMi1kNDMyLTQ1NTAtYWU5OC1jNzgwMjAwMmRmNDQiIHN0RXZ0OndoZW49IjIwMTktMDEtMjdUMTc6MDY6NDgtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PifYDM4AAA1wSURBVHic7d3NkRzHeoXhAwUNkAE0ggbAGHLFrWSJ1lgRLsiCqwUNoAfawAB5AC3uVF2AwGD6p35OVj5PRK8qpuubzRsZmd3V7z5//hwAOv3b2QMA8DqRBigm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"

/***/ }),

/***/ "./src/scuba.png":
/*!***********************!*\
  !*** ./src/scuba.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/scuba.a9a900e3.png";

/***/ })

})
//# sourceMappingURL=main.bbaaf567c1e7679edba5.hot-update.js.map