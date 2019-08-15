(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html{\n  background-color: #1C67C4;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: gill-sans-nova, sans-serif;\n  font-weight: 300;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

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

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Title */ "./src/Title.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/ericbrown/Documents/Portfolio2/portfolio2/src/App.js";




var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));

    _this.renderPageHandler = function () {
      var pageState = _this.state.pageState;

      if (_this.state.pageState === 0) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          id: "title-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, _this.renderTitle()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "content-selector",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          id: "projects",
          className: "underlined",
          onClick: function onClick() {
            return _this.fadeOutToProjects();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, "projects"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          id: "articles",
          onClick: function onClick() {
            return _this.fadeOutToArticles();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, "articles"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          id: "travel",
          onClick: function onClick() {
            return _this.fadeOutToTravel();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "travel")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          id: "content-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, _this.renderContentBox()));
      }

      if (pageState === 1) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "about-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          id: "about-me-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "about-me-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Hi, I'm Eric. I search for ways to approach global challenges by utilizing emerging technologies. These technologies present incredible opportunities and unique challenges which will forever change how we lead our lives. If you love discussing the ways technology will reshape our world, give me a call. I look forward our conversations!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "about-me-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "specifics-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "technology-about",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "lego",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "technology-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "Amongst the only Gen-Zs to have a non-digital childhood, Legos taught me to love building and creating. As an autodidact, I couldn\u2019t be more thankful to be a part of the digital-era where learning, building, and creating has never been easier.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "environment-about",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "scuba",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "technology-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, "Outside of technology, I have a passion for our protecting the environment. This has been fostered by the many nights backpacking in the mountains, discovering our oceans and exploring the worlds natural landscapes. For now, Earth is our only home...")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "golf-about",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "golf-logo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "golf-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "If the remaining hours allow, I love to golf. I have dreams of playing Augusta National, crossing Rae's Creek and making it through Amen corner at even par. If you can get a tee time, you have considerable leverage."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "line",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "reach-out-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "reach-out-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Reach Out"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "reach-out-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, "Please feel free to contact me, whether it be for an interview, work, or to set a tee time!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "contact-type",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "Phone:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "contact-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "+1.858.335.7850"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "contact-type",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, "Email:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "email-contact-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, "ericbrown.connect@gmail.com"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "contact-type",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, "Resume:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "resume-contact-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          className: "resume-link",
          href: "./PDFs/Jan19-Resume.pdf",
          target: "blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, "Open PDF of Resume"))));
      }

      if (pageState === 3) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectHeader-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description-box-live",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-live",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "live-placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date-live",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, " 2018 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "live-description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "Ethereum Enabled Marketplace of Online Stores"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "subtitle-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, "Distribution Empowers Owners"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "subtitle-description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, "Generating online revenue can be intimidating for small business owners. Maat's utilzes blockchain to provide security & removes the need to build trust with consumers through codified escrow payments. Maats strives to empower the women and minority business owners vital to our communities. Please view the", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "https://github.com/ericbrown99/MaatsNetwork",
          target: "blank",
          className: "link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, " Github Repo ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "underlined-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, "here")), " to follow my progress. ")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
          autoPlay: "true",
          loop: "true",
          class: "picture",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
          type: "video/mp4",
          src: __webpack_require__(/*! ./MaatsGovernance.mov */ "./src/MaatsGovernance.mov"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-right-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-title-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, "Security & Governance"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }, "Maats automatically provides tailored user functionality based on the visitor's Ethereum account which acts as the user's \"Sign-In\" information. An account can be an Owner/Admin for the Maats network as a whole, an Owner/Admin for an individual store, or simply an unassociated account browsing products. In this way, Ethereum accounts enable Maats governance. The clip to the left illustrates this governance when switching between accounts associated with various levels of access. In practice, a visitor wouldn't switch between accounts.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./MaatsPurchase.png */ "./src/MaatsPurchase.png"),
          className: "picture",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-right-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-title-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, "Codified Escrow Payments"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, "Developing trust when selling online can be challenging and time consuming for small businesses. By codifying escrow payments in an ethereum smart contract, trust gets built in. When purchasing a product, the buyer's funds are placed in an independent escrow contract. These funds aren't released to the seller until they provide proof they have shipped the product. A timeout is enabled to release funds to the buyer if the seller doesn't provide proof of shipping.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-wrap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "first-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./react-logo.png */ "./src/react-logo.png"),
          className: "big-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, "React.js"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, "This was my first project using the React.js library. It changed my whole perspective on front-end development and quickly became my prefered scripting tool.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "first-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./bug-icon.png */ "./src/bug-icon.png"),
          className: "big-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, "Test, test, test"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, "One of the powerful features of blockchain is its immutability. That said, it creates unique challenges when debugging contract code because once deployed on the blockchain, the contract can't be edited. Comprehensive testing was vital this project.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "first-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./truffle-logo.png */ "./src/truffle-logo.png"),
          className: "big-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, "truffle suite"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, "Truffe Suite is essential for ethereum blockchain development. It provides a personal blockchain to deploy and test contracts. Truffle has an incredible community providing helpful tutorials and boilerplates to get you on your way.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "the-team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, "The Team"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "left-team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./consensys-logo.png */ "./src/consensys-logo.png"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, "Consensys Academy")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "right-team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./Headshot.jpeg */ "./src/Headshot.jpeg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }, "Eric Brown (me)"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "my-role-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, "My Work"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "me-image-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "https://github.com/ericbrown99/MaatsNetwork",
          target: "blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./GitHub.png */ "./src/GitHub.png"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "my-role",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, "GitHub Link"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          __self: this
        }, "This was my final project for the ConsenSys Academy course. I am continually improving upon that foundation and would love to eventually deploy on the Ropsten Test Network. There, Maats can be tested and its market value can be better understood and developed."))))));
      }

      if (pageState === 4) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectHeader-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description-box-live",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-live",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "live-placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date-live",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          },
          __self: this
        }, " 2018 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "live-description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, "Emergency Department Automatic Nurse Staffing"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "subtitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          },
          __self: this
        }, "unsatisfied nurses and wasted time"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "subtitle-description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        }, "Archaic scheduling methods meant wasted time and repetative staffing for nurses, leading to costly turnover rates for Northwestern Memeorial Hospital\u2019s Emergency Department staff.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./NMHSheet.png */ "./src/NMHSheet.png"),
          className: "picture",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312
          },
          __self: this
        }, "Handwritten Staffing"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }, "Each day, a nurse was assigned to fill out the printed excel sheet to staff the department. This seldom accounted for the positions nurses had recently worked, leading to duplicated shifts and unbalanced schedules.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
          autoPlay: "true",
          loop: "true",
          class: "picture",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
          type: "video/mp4",
          src: __webpack_require__(/*! ./SDvideo.mov */ "./src/SDvideo.mov"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328
          },
          __self: this
        }, "STREAMLINED DAILY STAFFING"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          __self: this
        }, "We increased position variability and reduced staffing time by writing an Excel Macro in VBA. By automating the daily staffing, nurses were able to redirect ~3.5 hours a day to patient care.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-wrap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 337
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "first-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./people-icon.png */ "./src/people-icon.png"),
          className: "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341
          },
          __self: this
        }, "staffing randomization"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          },
          __self: this
        }, "Nurses were staffed using uniform randomization to create equal likelihood of jobs worked, minimizing weekly repeated positions and allowing nurses to gain experience throughout the department.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "first-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./ExcelLogo.png */ "./src/ExcelLogo.png"),
          className: "big-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352
          },
          __self: this
        }, "all excel, no imports"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355
          },
          __self: this
        }, "The client was most comfortable opperating in excel leading us to write the entire pogram in Excel\u2019s Visual Basic Application (VBA) language.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "first-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 361
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./clipboard-icon.png */ "./src/clipboard-icon.png"),
          className: "big-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          },
          __self: this
        }, "qualification management"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 366
          },
          __self: this
        }, "Positions throughout the department require various trainings. When staffing nurses, we ensure that they are only staffed in positions for which they are qualified.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "the-team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376
          },
          __self: this
        }, "The Team"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "left-team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 379
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./Igor.jpg */ "./src/Igor.jpg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 381
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 383
          },
          __self: this
        }, "Igor Alfomov"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 386
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./Shanon.jpg */ "./src/Shanon.jpg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 387
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 389
          },
          __self: this
        }, "Shanon Carlson")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "right-team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 393
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 394
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./malek.jpg */ "./src/malek.jpg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 395
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 397
          },
          __self: this
        }, "Malek Saman"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./nathan.jpg */ "./src/nathan.jpg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 403
          },
          __self: this
        }, "Nathan Mills"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "my-role-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 408
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 409
          },
          __self: this
        }, "My Role"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "me-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./Headshot.jpeg */ "./src/Headshot.jpeg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 413
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "my-role",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 415
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416
          },
          __self: this
        }, "Lead Data Analyst"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 419
          },
          __self: this
        }, "I coordinated data collection and analysis, ensuring clarity and statistical significance of our results. I lead the VBA development, organizing coding sessions to ideate unique solutions to handling qualifications and position restrictions to ensure the final product was efficient and intuitive."))))));
      }

      if (pageState === 5) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 435
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectHeader-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 436
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description-box-live",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 437
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-live",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 438
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "live-placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 439
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date-live",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440
          },
          __self: this
        }, " 2018 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "live-description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          },
          __self: this
        }, "Meme Merchant"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "subtitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 445
          },
          __self: this
        }, "Blockchain enabled meme trading"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "subtitle-description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 448
          },
          __self: this
        }, "Meme Merchant enables users to create, collect, trade and share memes (digital IP), driving monitary value. Anticipated alpha-release in early June 2019.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 455
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 456
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./MemeMarket 600.png */ "./src/MemeMarket 600.png"),
          className: "picture",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 457
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 459
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 460
          },
          __self: this
        }, "ERC721 Tokens"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 463
          },
          __self: this
        }, "Every meme on Meme Merchant is an ERC721 token. ERC721\u2019s are non-fungible, meaning that they can not be replaced by another equal part or quantity. If you own a meme, you are the sole owner and the token can\u2019t be split into smaller pieces to be sold or bought as parts. Think of it like owning a one-of-a-kind baseball card.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./MemeSale.png */ "./src/MemeSale.png"),
          className: "picture",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 472
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 474
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-title-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 475
          },
          __self: this
        }, "DESCENDING CLOCK AUCTION"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 478
          },
          __self: this
        }, "A key limitation of the blockchain is that each interaction, such as submiting a bid, requires a transaction fee. We use a \u201CDutch Auction\u201D to avoid these fees. The price decreases uniformly from a high price to the reserve price over the course of the auction. No bids are submitted and the first buyer to click buy wins the meme for the current listed price.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-wrap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 487
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 488
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "first-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 489
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./grad.png */ "./src/grad.png"),
          className: "big-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 490
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 491
          },
          __self: this
        }, "Education"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 494
          },
          __self: this
        }, "Meme Merchant was started as an educational tool for the creators. We knew the best way to improve our blockchain development skills was to get our hands dirty and code.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "first-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 500
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./people.png */ "./src/people.png"),
          className: "big-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 501
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 502
          },
          __self: this
        }, "Public Engagement"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 505
          },
          __self: this
        }, "We want to help bring blockchain and its applications to the mainstream dialogue by leveraging the online meme community. Ideally, Meme Merchant will demystify distributed technologies.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "first-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 511
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./laugh.png */ "./src/laugh.png"),
          className: "big-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 512
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 513
          },
          __self: this
        }, "Just Some Laughs"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 516
          },
          __self: this
        }, "We have a deep-rooted love for memes\u2014for their versatility, their unifying presence on the internet and their democratic decentralization. We hope to bring a breath of fresh air to a serious world.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 525
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "the-team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 526
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 527
          },
          __self: this
        }, "The Team"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "left-team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 530
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 531
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./shaan.jpg */ "./src/shaan.jpg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 532
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 534
          },
          __self: this
        }, "Shaan Savarirayan")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "right-team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 538
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 539
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./Headshot.jpeg */ "./src/Headshot.jpeg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 540
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 542
          },
          __self: this
        }, "Eric Brown (me)"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "my-role-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 547
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 548
          },
          __self: this
        }, "Our Work"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "me-image-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 551
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "./PDFs/MemeMerchant v0.1.pdf",
          target: "blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 552
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./WhitePaper.png */ "./src/WhitePaper.png"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 553
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "my-role",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 556
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 557
          },
          __self: this
        }, "White Paper PDF"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 560
          },
          __self: this
        }, "The Meme Merchant team is just Shaan and me. From website design to Solidity development, we've each been involved with every piece of this project. Check out our white paper to get an indepth breakdown of the project."))))));
      }

      if (pageState === 6) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 575
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectHeader-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 576
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description-box-live",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 577
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-live",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 578
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "live-placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 579
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date-live",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 580
          },
          __self: this
        }, " 2017 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "live-description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 582
          },
          __self: this
        }, "NHS-111 Staffing Using Simio Simulations"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "subtitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 585
          },
          __self: this
        }, "IMPROVING CALL RESPONSE TIME"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "subtitle-description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 588
          },
          __self: this
        }, "For this engineering case, we generated a staffing model which would improve call response time and minimize operating costs for the NHS-111 call centers.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 596
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 597
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./Risk2.png */ "./src/Risk2.png"),
          className: "picture",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 598
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 600
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 601
          },
          __self: this
        }, "REPRESENTING THE REAL WORLD"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 604
          },
          __self: this
        }, "Given a dataset of incoming calls to NHS-111, we can create a heuristic of the real world using statistical distributions. We \u2018fit\u2019 the dataset to various distributions and analyzed various metrics to determine the ideal distribution.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 611
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./Simio2.png */ "./src/Simio2.png"),
          className: "picture",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 612
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "project-content-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 614
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-title-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 615
          },
          __self: this
        }, "ENSURING STABILITY"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 618
          },
          __self: this
        }, "Once we had the distributions, we created a simulation of the NHS-111 call center. This allowed us to test how the system would react to various staffing levels and arrival rates over the course of a day. When trying to optimize the system, we had to ensure that it wouldn\u2019t be overwhelmed by a period of high workload.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-wrap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 626
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 627
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "first-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 628
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./Risk-logo.png */ "./src/Risk-logo.png"),
          className: "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 629
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 630
          },
          __self: this
        }, "PROBABILITY DISTRIBUTIONS"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 633
          },
          __self: this
        }, "In order to properly determine how to staff the calling center, we fit the incoming call data to various probability distributions and found the best fit was a Gamma distribution.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "first-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 639
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./simio-logo.png */ "./src/simio-logo.png"),
          className: "long-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 640
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 641
          },
          __self: this
        }, "SIMULATED STAFFING"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 644
          },
          __self: this
        }, "Using the fits for probabilities of incoming calls and call completions, we generated a Simio model which showed us the impact of various staffing setups.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "first-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 650
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./tornado.png */ "./src/tornado.png"),
          className: "big-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 651
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "icon-section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 652
          },
          __self: this
        }, "SENSITIVITY ANALYSIS"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 655
          },
          __self: this
        }, "While running the simulations, we could use Simio\u2019s sensitivity analysis functions to ensure that the staffing model wouldn\u2019t be easily overrun by outlier scenarios.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 663
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "the-team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 664
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 665
          },
          __self: this
        }, "The Team"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "left-team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 668
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 669
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./BenProf.jpeg */ "./src/BenProf.jpeg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 670
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 672
          },
          __self: this
        }, "Ben Wagner")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "right-team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 676
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "team-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 677
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./jonathanProf.jpeg */ "./src/jonathanProf.jpeg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 678
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 680
          },
          __self: this
        }, "Jonathan Shenkman"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "my-role-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 685
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 686
          },
          __self: this
        }, "My Role"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "me-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 689
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__(/*! ./Headshot.jpeg */ "./src/Headshot.jpeg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 690
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "my-role",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 692
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 693
          },
          __self: this
        }, "Statistical Analysis"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "section-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 696
          },
          __self: this
        }, "I focused my efforts on finding the ideal distribution to represent the real world call data. These distributions were essential to running an accurate simulation, optimizing our results."))))));
      }

      if (pageState === 7) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "travel-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 710
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "travel-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 711
          },
          __self: this
        }, "August in Amsterdam"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "ProjectHeader-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 714
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "TravelHeader-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 715
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 716
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 717
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "travel-image-expand",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 718
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "otherProjects",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 724
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 725
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 726
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 727
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 728
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 729
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 734
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 735
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 736
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 737
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 738
          },
          __self: this
        }, " "))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 743
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 744
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 745
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 746
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 747
          },
          __self: this
        }, " "))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 752
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 753
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 754
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 755
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 756
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 761
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 762
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 763
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 764
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 765
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 770
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 771
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 772
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 773
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 774
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 779
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image7",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 780
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 781
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 782
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 783
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 788
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 789
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 790
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 791
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 792
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 797
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 798
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 799
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 800
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 801
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 806
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 807
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 808
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 809
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 810
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 815
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image11",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 816
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 817
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 818
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 819
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 824
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 825
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 826
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 827
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 828
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 833
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image13",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 834
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 835
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 836
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 837
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 842
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image14",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 843
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 844
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 845
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 846
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 851
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image15",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 852
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 853
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 854
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 855
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 860
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image16",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 861
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 862
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 863
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 864
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 869
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image17",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 870
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 871
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 872
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 873
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 878
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image18",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 879
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 880
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 881
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 882
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 887
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image19",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 888
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 889
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 890
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 891
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 896
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image20",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 897
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 898
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 899
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 900
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 905
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image21",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 906
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 907
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 908
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 909
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 914
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image22",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 915
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 916
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 917
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 918
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 923
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image23",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 924
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 925
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 926
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 927
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 932
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ams-travel ams-image24",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 933
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 934
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 935
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 936
          },
          __self: this
        })))))));
      }

      if (pageState === 8) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 947
          },
          __self: this
        }, "Enter Travel template for Zambia Here");
      }

      if (pageState === 9) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 954
          },
          __self: this
        }, "Enter Travel template for South Africa Here");
      }

      if (pageState === 10) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 961
          },
          __self: this
        }, "Enter Travel template for Prague Here");
      }
    };

    _this.renderTitle = function () {
      var currentState = _this.state.titleState;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
        titleState: _this.state.titleState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 971
        },
        __self: this
      });
    };

    _this.fadeOutToProjects = function () {
      if (_this.state.titleState === 1) {
        document.getElementById('articles').className = "remove-underline";
      }

      if (_this.state.titleState === 2) {
        document.getElementById('travel').className = "remove-underline";
      }

      var x = document.getElementById('span-3');
      document.getElementById('content-box').className = 'transition-out-3';
      document.getElementById('span-1').className = 'transition-out-1';
      document.getElementById('span-2').className = 'transition-out-2';
      document.getElementById('span-3').className = 'transition-out-3';
      x.addEventListener("animationend", function () {
        _this.setState({
          titleState: 0
        });

        console.log("Project " + _this.state.titleState);
        document.getElementById('span-1').className = "";
        document.getElementById('span-2').className = "";
        document.getElementById('span-3').className = "";
        document.getElementById('content-box').className = "";
        document.getElementById('projects').className = "underlined";
        document.getElementById('articles').className = "generic";
        document.getElementById('travel').className = "generic";
      });
      console.log("projfade");
    };

    _this.fadeOutToArticles = function () {
      if (_this.state.titleState === 0) {
        document.getElementById('projects').className = "remove-underline";
      }

      if (_this.state.titleState === 2) {
        document.getElementById('travel').className = "remove-underline";
      }

      var y = document.getElementById('span-3');
      document.getElementById('content-box').className = 'transition-out-3';
      document.getElementById('span-1').className = 'transition-out-1';
      document.getElementById('span-2').className = 'transition-out-2';
      document.getElementById('span-3').className = 'transition-out-3';
      y.addEventListener("animationend", function () {
        _this.setState({
          titleState: 1
        });

        document.getElementById('span-1').className = "";
        document.getElementById('span-2').className = "";
        document.getElementById('span-3').className = "";
        document.getElementById('content-box').className = "";
        document.getElementById('projects').className = "generic";
        document.getElementById('articles').className = "underlined";
        document.getElementById('travel').className = "generic";
      });
      console.log("artfade");
    };

    _this.fadeOutToTravel = function () {
      if (_this.state.titleState === 1) {
        document.getElementById('articles').className = "remove-underline";
      }

      if (_this.state.titleState === 0) {
        document.getElementById('projects').className = "remove-underline";
      }

      var z = document.getElementById('span-3');
      document.getElementById('span-1').className = 'transition-out-1';
      document.getElementById('span-2').className = 'transition-out-2';
      document.getElementById('span-3').className = 'transition-out-3';
      document.getElementById('content-box').className = 'transition-out-3';
      z.addEventListener("animationend", function () {
        _this.setState({
          titleState: 2
        });

        console.log("travel " + _this.state.titleState);
        document.getElementById('span-1').className = "";
        document.getElementById('span-2').className = "";
        document.getElementById('span-3').className = "";
        document.getElementById('content-box').className = "";
        document.getElementById('projects').className = "generic";
        document.getElementById('articles').className = "generic";
        document.getElementById('travel').className = "underlined";
      });
      console.log("travelfade");
      {
        _this.renderContentBox();
      }
    };

    _this.renderContentBox = function () {
      var state = _this.state.titleState;
      console.log("renderContentbox");

      if (_this.state.titleState === 0) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1067
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "ProjectHeader-Link",
          onClick: function onClick() {
            return _this.fadeOutToProject1();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1068
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectHeader",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1069
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1070
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1071
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1072
          },
          __self: this
        }, " 2018 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "header-description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1074
          },
          __self: this
        }, "Maat's Network: A 100% distributed marketplace for women & minority owners")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "otherProjects",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1080
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          onClick: function onClick() {
            return _this.Project2Handler();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1081
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "Project1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1082
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1083
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1084
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1085
          },
          __self: this
        }, " 2018 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1087
          },
          __self: this
        }, "Automated Staffing @ Northwestern Memorial Hospital")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          onClick: function onClick() {
            return _this.Project3Handler();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1093
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "Project2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1094
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1095
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1096
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1097
          },
          __self: this
        }, " 2018 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1099
          },
          __self: this
        }, "Meme Merchant: blockchain enabled digital IP trading")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "Project-Link",
          onClick: function onClick() {
            return _this.Project4Handler();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1105
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "Project3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1106
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1107
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1109
          },
          __self: this
        }, " 2017 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1111
          },
          __self: this
        }, "NHS-111 Stafing using SIMIO")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "./Portfolio/index.html",
          target: "blank",
          className: "Project-Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1117
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "Project4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ProjectN",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1119
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1120
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1121
          },
          __self: this
        }, " 2018-2019 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1123
          },
          __self: this
        }, "Check out Version 1.0 of my portfolio here"))))));
      }

      if (_this.state.titleState === 1) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1135
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "https://www.dimensionless.tech",
          target: "blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1136
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "article1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1137
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1139
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1140
          },
          __self: this
        }, " 2019 - present ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "header-description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1142
          },
          __self: this
        }, "Co-created tech blog @ the intersection of AI, Blockchain & IoT")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "https://medium.com/@ericbrown99",
          target: "blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1148
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "article2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1149
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1150
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1151
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1152
          },
          __self: this
        }, " 2018 - present ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "header-description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1154
          },
          __self: this
        }, "All of my individual articles have moved to my Medium page. Check them out here!")))));
      }

      if (_this.state.titleState === 2) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1165
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "ProjectHeader-Link",
          onClick: function onClick() {
            return _this.Travel1Handler();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1166
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "travel1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1167
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1168
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1169
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1170
          },
          __self: this
        }, " 2017 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "header-description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1172
          },
          __self: this
        }, "August in Amsterdam: a week spent roaming the city & countryside")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "ProjectHeader-Link",
          onClick: function onClick() {
            return _this.Travel2Handler();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1178
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "travel2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1179
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1180
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1181
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1182
          },
          __self: this
        }, " 2016 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "header-description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1184
          },
          __self: this
        }, "Zambia, Botswana & Zimbabwe: Exploring Africa's natural wonders")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "ProjectHeader-Link",
          onClick: function onClick() {
            return _this.Travel3Handler();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1190
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "travel3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1191
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1192
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1193
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1194
          },
          __self: this
        }, " 2016 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "header-description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1196
          },
          __self: this
        }, "South Africa: Friends, Cliffs, & Sharks")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "ProjectHeader-Link",
          onClick: function onClick() {
            return _this.Travel4Handler();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1202
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "travel4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1203
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1204
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "placeholder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1205
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "description-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1206
          },
          __self: this
        }, " 2016 ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "header-description-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1208
          },
          __self: this
        }, "Prague: The perfect city for a spontaneous adventure")))));
      }
    };

    _this.pageTransitionHandler = function () {
      var a = document.getElementById('container');
      document.getElementById.className = "transition-out-3";
      a.addEventListener("animationend", function () {
        _this.aboutHandler();
      });
    };

    _this.aboutHandler = function () {
      if (_this.state.pageState === 0) {
        _this.setState({
          pageState: 1
        });

        console.log("e");
      }

      if (_this.state.pageState !== 0) {
        _this.setState({
          pageState: 0,
          titleState: 0
        });
      }
    };

    _this.homeHandler = function () {
      _this.setState({
        pageState: 0,
        titleState: 0
      });
    };

    _this.renderAbout = function () {
      var pageState = _this.state.pageState;

      if (pageState === 0) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "about-paragraph",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1258
          },
          __self: this
        }, " about me ");
      }

      if (pageState !== 0) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "about-paragraph",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1263
          },
          __self: this
        }, " home ");
      }
    };

    _this.fadeOutToProject1 = function () {
      _this.setState({
        pageState: 3
      });

      {
        window.scrollTo(0, 0);
      }
    };

    _this.Project2Handler = function () {
      _this.setState({
        pageState: 4
      });

      {
        window.scrollTo(0, 0);
      }
    };

    _this.Project3Handler = function () {
      _this.setState({
        pageState: 5
      });

      {
        window.scrollTo(0, 0);
      }
    };

    _this.Project4Handler = function () {
      _this.setState({
        pageState: 6
      });

      {
        window.scrollTo(0, 0);
      }
    };

    _this.Travel1Handler = function () {
      _this.setState({
        pageState: 7
      });

      {
        window.scrollTo(0, 0);
      }
    };

    _this.Travel2Handler = function () {
      _this.setState({
        pageState: 8
      });

      {
        window.scrollTo(0, 0);
      }
    };

    _this.Travel3Handler = function () {
      _this.setState({
        pageState: 9
      });

      {
        window.scrollTo(0, 0);
      }
    };

    _this.Travel4Handler = function () {
      _this.setState({
        pageState: 10
      });

      {
        window.scrollTo(0, 0);
      }
    };

    _this.state = {
      titleState: 0,
      pageState: 0
    };
    return _this;
  }

  Object(_Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1328
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "App-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1329
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logo-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1330
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ./logo-1.png */ "./src/logo-1.png"),
        className: "App-logo",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1331
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "year",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1332
        },
        __self: this
      }, "2019")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "about-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1336
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "about",
        onClick: function onClick() {
          return _this2.aboutHandler();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1337
        },
        __self: this
      }, this.renderAbout()))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1342
        },
        __self: this
      }, this.renderPageHandler()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: function onClick() {
          window.scrollTo(0, 0);
        },
        className: "back-to-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1346
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1347
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/BenProf.jpeg":
/*!**************************!*\
  !*** ./src/BenProf.jpeg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/BenProf.76698077.jpeg";

/***/ }),

/***/ "./src/Dimensionless.png":
/*!*******************************!*\
  !*** ./src/Dimensionless.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Dimensionless.76816364.png";

/***/ }),

/***/ "./src/ExcelLogo.png":
/*!***************************!*\
  !*** ./src/ExcelLogo.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ExcelLogo.864708e8.png";

/***/ }),

/***/ "./src/GitHub.png":
/*!************************!*\
  !*** ./src/GitHub.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAC/VBMVEX////8/Pzp6enW1tbAwMCtrKyamZmLiop8e3ttbGxfXV1QT09EQ0NAPj4zMTEsKiolIyMdGxsXFRUtKytFRESbmprX19fq6urx8fHS0tKysbGWlZV7enpiYGBHRkYYFhZIR0fy8vL7+/vd3d22traPjo5raWlJR0cpJydLSUlsamrv7u7DwsJqaWkcGhqXlpbw7+/19fXHxsaUk5NjYWEyMTGVlJTIx8fn5+evrq53dXVCQEAaGBhDQUF4d3epqalvbm43NTVxcHCqqqro6Oi7uro+PDw/PT19fHy8u7vh4eGcm5tXVVUcGxtYVladnJzi4uL+/v7Ozc2DgoI8Ozs9PDzQz8/9/f16eXkxMDDNzc0uLCx+fX3Pzs7c3NyIh4c2NDSko6NNS0sfHR3w8PDT09NubW1wb2/U1NS0tLRPTk61tbX09PSYl5c0MjKZmJjr6+uGhYUmJCQmJSWHhobs7Ozk4+N2dHQeHBze3t4bGRlycXEhHx+lpKS+vr7g4OBgXl729vYwLy/j4+NbWlpdXFwgHh5EQkL5+fnMzMw6OTk7Ojr6+voZFxcqKCi9vLz6+flKSEgnJiYoJiaJiIhZV1ezs7OOjY34+PhpaGjb2trc29vIyMizsrKKiYl5eHj39/dSUVFhX1+4t7e5uLjKysrLy8s6ODhRUFC/v7/z8/NjYmJVU1OQj4+RkJAjISG9vb3m5uZUUlIrKSmVlZVGRUV/fn5mZWXEw8Nta2usq6vJycmFhIRlZGSBf3/a2dk5NzdeXV04NjZOTEyEg4OMi4toZ2dZWFjt7e0vLS3Y2Nh1dHQiICCAf3+SkZGjoqK6ubnGxcXf39+TkpKBgIC3t7fS0dHl5OTBwcGnpqbu7u6op6c1MzOioaEkIiLZ2NhzcnJcW1vCwsKhoKDFxMRBPz9OTU3m5eXV1dV0c3OenZ0wLi6mpaV3dnagoKBTUlJWVFSpqKiCgYGNjIyfn5+rq6uxsLBkY2Ofnp5nZmZaWVmwr6/R0NBMSkqura1uBeqMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDItMDFUMTc6MjU6MzYtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAyLTAxVDE3OjI2OjA1LTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTAyLTAxVDE3OjI2OjA1LTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMiIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzNDBjMDRmLTgwMjctNDBjZi04ZjA0LTE3MjgyOWMyNDBkMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MzQwYzA0Zi04MDI3LTQwY2YtOGYwNC0xNzI4MjljMjQwZDAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRp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"

/***/ }),

/***/ "./src/Headshot.jpeg":
/*!***************************!*\
  !*** ./src/Headshot.jpeg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Headshot.7f25c12a.jpeg";

/***/ }),

/***/ "./src/Igor.jpg":
/*!**********************!*\
  !*** ./src/Igor.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Igor.882e4478.jpg";

/***/ }),

/***/ "./src/MaatsGovernance.mov":
/*!*********************************!*\
  !*** ./src/MaatsGovernance.mov ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/MaatsGovernance.13c48416.mov";

/***/ }),

/***/ "./src/MaatsPurchase.png":
/*!*******************************!*\
  !*** ./src/MaatsPurchase.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/MaatsPurchase.e29de5f1.png";

/***/ }),

/***/ "./src/Medium-Wordmark.jpg":
/*!*********************************!*\
  !*** ./src/Medium-Wordmark.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Medium-Wordmark.2cd51abb.jpg";

/***/ }),

/***/ "./src/MemeMarket 600.png":
/*!********************************!*\
  !*** ./src/MemeMarket 600.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/MemeMarket 600.53e6eb16.png";

/***/ }),

/***/ "./src/MemeSale.png":
/*!**************************!*\
  !*** ./src/MemeSale.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/MemeSale.157fdbfc.png";

/***/ }),

/***/ "./src/NMHSheet.png":
/*!**************************!*\
  !*** ./src/NMHSheet.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/NMHSheet.e10b0c08.png";

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

/***/ "./src/Risk-logo.png":
/*!***************************!*\
  !*** ./src/Risk-logo.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Risk-logo.ee024052.png";

/***/ }),

/***/ "./src/Risk1 640.png":
/*!***************************!*\
  !*** ./src/Risk1 640.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Risk1 640.6ef02595.png";

/***/ }),

/***/ "./src/Risk2.png":
/*!***********************!*\
  !*** ./src/Risk2.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Risk2.925d14e2.png";

/***/ }),

/***/ "./src/SDvideo.mov":
/*!*************************!*\
  !*** ./src/SDvideo.mov ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/SDvideo.27bdb932.mov";

/***/ }),

/***/ "./src/Shanon.jpg":
/*!************************!*\
  !*** ./src/Shanon.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Shanon.dd2bf49f.jpg";

/***/ }),

/***/ "./src/Simio2.png":
/*!************************!*\
  !*** ./src/Simio2.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Simio2.1fb3cfc7.png";

/***/ }),

/***/ "./src/Solidity.png":
/*!**************************!*\
  !*** ./src/Solidity.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Solidity.ed272bad.png";

/***/ }),

/***/ "./src/Title.js":
/*!**********************!*\
  !*** ./src/Title.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/ericbrown/Documents/Portfolio2/portfolio2/src/Title.js";



var Title =
/*#__PURE__*/
function (_Component) {
  Object(_Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Title, _Component);

  function Title(props) {
    var _this;

    Object(_Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Title);

    _this = Object(_Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Title).call(this, props));

    _this.displayLine1 = function () {
      if (_this.props.titleState == 0) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, " Eric Brown "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, "is an "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "italics",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, " emerging technology"));
      }

      if (_this.props.titleState == 1) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, " Writing "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, " & storytelling "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, " provide an outlet "));
      }

      if (_this.props.titleState == 2) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, "The gift of exploration"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, ": to travel is "));
      }
    };

    _this.displayLine2 = function () {
      if (_this.props.titleState == 0) {
        return "consultant & developer specialized";
      }

      if (_this.props.titleState == 1) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, " to "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "italics",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, " explore "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "complex ideas, particularly "));
      }

      if (_this.props.titleState == 2) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "to seek "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "italics",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "perspective, growth,"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, "& "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "italics",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "life."));
      }
    };

    _this.displayLine3 = function () {
      if (_this.props.titleState == 0) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, "in "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "italics",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, " healthcare"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, ", based out of"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "italics",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, " NYC. "));
      }

      if (_this.props.titleState == 1) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "italics",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, " life, technology,"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, " & "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "italics",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, "the future. "));
      }

      if (_this.props.titleState == 2) {
        return "There is no greater gift.";
      }
    };

    _this.setClass = function () {};

    _this.state = {
      titleState: _this.props.titleState // passing down title state from App, changes upon clicking title bar

    };
    return _this;
  }

  Object(_Users_ericbrown_Documents_Portfolio2_portfolio2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Title, [{
    key: "render",
    value: function render() {
      this.setClass();
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "title-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "span-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, this.displayLine1()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "span-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.displayLine2()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "span-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, this.displayLine3()));
    }
  }]);

  return Title;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Title);

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

/***/ "./src/WhitePaper.png":
/*!****************************!*\
  !*** ./src/WhitePaper.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/WhitePaper.af6eb122.png";

/***/ }),

/***/ "./src/aboutMe2.jpg":
/*!**************************!*\
  !*** ./src/aboutMe2.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/aboutMe2.a80c114b.jpg";

/***/ }),

/***/ "./src/bug-icon.png":
/*!**************************!*\
  !*** ./src/bug-icon.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bug-icon.c9272be4.png";

/***/ }),

/***/ "./src/clipboard-icon.png":
/*!********************************!*\
  !*** ./src/clipboard-icon.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/clipboard-icon.40c2f792.png";

/***/ }),

/***/ "./src/consensys-logo.png":
/*!********************************!*\
  !*** ./src/consensys-logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/consensys-logo.bd71bf58.png";

/***/ }),

/***/ "./src/golf-logo.png":
/*!***************************!*\
  !*** ./src/golf-logo.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/golf-logo.b841cb22.png";

/***/ }),

/***/ "./src/grad.png":
/*!**********************!*\
  !*** ./src/grad.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/ericbrown/Documents/Portfolio2/portfolio2/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/jonathanProf.jpeg":
/*!*******************************!*\
  !*** ./src/jonathanProf.jpeg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/jonathanProf.64dd85eb.jpeg";

/***/ }),

/***/ "./src/laugh.png":
/*!***********************!*\
  !*** ./src/laugh.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/laugh.3a078b9b.png";

/***/ }),

/***/ "./src/lego.png":
/*!**********************!*\
  !*** ./src/lego.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lego.774479cc.png";

/***/ }),

/***/ "./src/logo-1.png":
/*!************************!*\
  !*** ./src/logo-1.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF12lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTItMjlUMTg6MTg6MTAtMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTItMjlUMTg6MTg6MTAtMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTEyLTI5VDE4OjE4OjEwLTA4OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZjZGIwOTdlLTZhODItNDRhZC05OWYxLTcwOWJkN2MwOTIxMCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmVhYzNjY2RkLWE0MTgtODE0NC04ZjMwLTUzY2I3MjIwMTNkNiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA2MDdjMGU4LTMwMmUtNDNkNS04NmNhLTJiMzA5MzY2OWRmYiIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA2MDdjMGU4LTMwMmUtNDNkNS04NmNhLTJiMzA5MzY2OWRmYiIgc3RFdnQ6d2hlbj0iMjAxOC0xMi0yOVQxODoxODoxMC0wODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZjZGIwOTdlLTZhODItNDRhZC05OWYxLTcwOWJkN2MwOTIxMCIgc3RFdnQ6d2hlbj0iMjAxOC0xMi0yOVQxODoxODoxMC0wODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vcJY/AAAEVxJREFUeJztnXu0VVW9xz/nHA4HzuFcPHU0tKukKIGY9DRBxAQttUZd61pXkOxhjt4vb1k2ro1uLx/jPurexqjMUhHi9rimt9TIEJGEyhghkgolJkVCekUPAofX7I/vXrDWXGvvvfbe67nP/IyxBmfPvfZec6/1Zc7fnPP3+80OYwwjgDHAJGAycELl3+OAPmBsxDEGGAZ2Arus4zlgE7AB2Fj5dwOwJ7NfkyMdbSiYPuAU4LTKMRU4BuhI8ZoG2AysB1YDvwBWIcG1Fe0gmH7gPGAmEshLga48K1RhP7AWiWclcAcwlGuNEqCsgukCzgYuBs4HevKtTiyGgVuBG4E7gQP5Vqc5yiaYk4C3I6Ec0eBnnwYe9h3rgf9HdslODtkrO4HdyI4ZC/RWDu/vQeDFwJTKcRIwvsG6PAEsAq4HHmrws7lSFsHMBT4FnBXz/B2oK1iBuoOHgL+mUzUADgemATOA2ZWjN+Zn7wa+DPwsnaolS5EF04m6m88CL6lz7jDwUySQFcAaZEPkRRfwMuAM4Ewk+DF1PrMGuAr4IQXurooomNHAAuAKNPStxl5gKbAEuAUNd4vKOOCNwD8B5wDdNc7dCFyDbJ296VetMYommDnAN9GcSRT7URO+BPgB8ExG9UqSAeDNSDxnUn1E9wfgUmBZRvWKhzGmCMeRxpjFpjp7jTHfNsYcW4C6JnlMMsZcX/l91fieMWZCAeqKMSZ3wXQZYz5qjBmqcrOGjTFfN8Yck/eNSvmYWPmde6rchyFjzMcr9yvXuubZJR0J/C9wapX3fwJ8GHg0sxrlzyTgP4E3VHl/NfBWNKucC3kJ5vXAQtSf2zyK+u6fZ1qjYjEX2XJRRv8zwHz0HypzOjO+Xg/wFeDHhMWyA/g0mgwbyWIB/f6paO7JHv2NR/fvv8hhhjvLFmYSmhqfFvHeYuCfgb9kVZkScRQaZs+PeG898CY0osqErFqYBcADhMUyhH7wfJxYqrEFuAjdJ3vxchpa4FyQVWWyEMyXgJsIT5WvA6YDt2VQh3bgNnS/1lnlfej+XkO6LhxAuoLpBG5GdonNt4BXIUckR3w2oft2XcR7n0Bd+6g0K5CWDdODpuvPtcp3AZegH+ZojXnoP95Yq3wp8A/oXidOGoLpRwuBM6zyZ4HXobkERzK8ArgLOMwq/xW619uTvmDSgukH7kV9rZ+n0DrRA0lezAHAiWiF/vlW+VrgdBL28kvShhmNPMlssWxBrY0TSzr8Dt3fLVb5dOB26rtVNERSgulCfhwzrfJN6MdsTOg6jmg2ovtsDyJmIVsyMR/npASzkPD6hyeWxxO6hqM2j6P7ba+9nQPckNRFkhDM1cCFVtk25G22NYHvd8RnK/Kxse/7Reg5tUyrRu885MzsZwgpfX0rX+xoiZOA+9AgxM8CNDfWNK0IZgrwW4ILYLvRSut9rVTKkQizkGO53+gdRr7GTUcqNNsljUMrpn6x7EfrHU4sxWAlcqL3O8P3oCWGcc1+abOCWULY7/YKNMvoKA53ApdbZcfTwkx7M13Sx4B/t8qWoplFRzH5EWr9/VxG+DnWpVHBnIqaOv+4/o8onnl7oxd3ZEY/mjh9ka9sHwq4W9XIFzUimB40q+h3G9wLvBI3i1sGpgO/JhgTtRmlPxmO+yWN2DCXE/Yx/QhOLGVhLXpefo5Gtmds4rYwx6HWxT8qWo4miRzlYhnB5zaMFjBjRWfEbWG+RVAsw8C7Yn7WUSwuIdgF9aAIhVjEEcz5hFuSq3DecmXlUeQ262cuCt+tS70uaSzwCOrrPDahEIjYhpKjcHSjHDl+m3Qzmr2vmWatXgvzIYJiAXVFTizlZi/qmvwcTdgoDlGrhRkN/BllXPJYhFY+He3BzQTjnbYh4VTNCFqrhXknQbHsAz7TSu0cheOT6Ll6HAG8u9YHqgmmk3B4yHfRrK6jfdhC2D3lE9RoSKq98TZgou+1AT7fUtUcReVL6Pl6HIuefyTVbJgHCYa13opiXYrIicDJaC1rOwrqfw5Z+8Ooyd1b+TeJvHddaJQxCkUdHlY5BlFyxMMq9VhEAVOOVeEWgs/3AcLO/EC0YE4lvCD1CpS0r4hcjfrionE7SmtSBl6J1pn8zEKZSANEdUm2f+5aiisWUP7dIjI77wo0wP3Ab6yyeVEn2oLpQMn6/NyUUKXS4jrgG8iHuEjpSscRHGUWnYXW6wuJCE+xBTOXYIbtAxFfVDSeAt6LHJ8HkMF2Z641OsSL865AA3yXoI03gNLzB7AFYzdDS0k3g3bSPAt8DyUBuLaBz3Wh1rXe0QlMQDbdm4Ar0WRXNaY0Vv1c2YZi4v3Y5klAMN3ABdb7RW9davGdFL7ToJifNciZ+vPIi+0jROcMLpNgIPy8z8fKDuEXzGyC3uTPoSyXZeWJjK6zC/gqurn2MPrkjOqQFD9C0xIe/Sig/yC2YPwsQ3FGjnjcTXhB71VkkBUqQXYT3iQjoItaglmeQoXanZsIjioHUFhHmbjHeh0pmFGEEwAtT6lC7c5nCa72li38Zrn1ega+NGieYE4l6IK5A4XBOhrnMTQv5GHHAxWddQSTEAUaE08wZ1gfuptiTYKVjS8iXyLQvbWD4ovMAfT8/RzsljrtggrLU6zQSGAr2ur4ArQ5WNk2B11uvT6oD69vslcm7Q84Gmcn2tOpjNiG78u9PzqMMT2Eh8+jyHcLvCQYQJuAxqEL1wX76UBzSv61pF5gVycKlfTzR8ovFkdrGMLelSeAbBg7/HUk7U+UBJ1kvytMFthxZ8eBfqid58UJJj4LkEG7h/INn+thC+ZYkK3iWpjmeQ+HNt1ot2WUqi2MvcO8E0x8/IuLRfX8axZbB0eBBGNPKpXJ/yVPJqPd0Ty251SPtLBX+8dBtGCKvGF4kbBtlu15VCJFbB0cFIydUXEHjnpMBD5ulbWbDWMLph9k9NotzEgUzB0Eg7lqMR7NfI62ytstQUFkCxMlmJHYJb22xc8bRohgomyYkdjCtEpZIhwbwdZBP0gw9n467dYXZ0F3/VNKh62DMaAuaSeKEfboZeR1S+cRf/FxPHJb+EdfWQe6l/siP1FO7IZkGLRavZXg5N0LqB1rUxbSXK3uQDFbZ/nK+qiT7qtkDBKck3sKGOykinHjqIkhvBVwmbzq4hA53dJJ2LjpwxEHOxzjebnUIj2qCsa1MM3xNMH1FntX17ITWzCuhYnPvb6/R0QLM4pwlzQhk+q0B/+CPNP6aGGXs4Jipyo5KJi/WG/YDlWO6mxGgWvtiB2xuQ3UJW2oc6JjZGLrYANIMPYm5K6FcUBYMBvBCcZRncgWpsMY00V4SrsX5T0pM0WKSzocGY1luadVY9U6UQyS7b9ZptxsRedS4E9oav3KnOsSl6nW60epxKp58TT3Wye8HEcSDALXIGersZRnVdvOnPVb7w9PMPdaJ7wmxcqMJK4k6Ch+S14VaZA51uuD+vAygU8nmA/mCeDI1KuVLnnbMCeg3MFeq7KJcAxYUbE9GA5mgvdaGDuJzATcaKkVelH6V38X9P2c6tIoxxEUSyC5lCeYA2gDcz+vSbNWbUwHynP3Uqv8x9lXpSns/T1X4mt9/UHkth0zkrYYPiah7+kG/g14i1W+gwZ3oM8R+7kHdFFLMOcRkWu+RLywgXMvp/URzOmo6f5YxHtrKIf7ZifhHVgCuhjl+3sV8vEYqLweQKL5v7RqlzLvbODc9yJ3y0VoF90NyD1xN5ps200wMqAb2XhTUbbvU6i9n5S9U0hROQft9+SxHVjtP8EvmP3AYuADvrL5lEsw3ejBvwdl5m6E40lv5flXKX1v0tgbwC7BCqGxN9iaAdzne70LOYUXOanfIApbPQ1l3h5b+/RcOBalYy0yfcCTBKMFQpts2ZmTViEfD4+xxNwxPUcuRRuazqaYYnmc4osFFDbjF8sWYu7IdoP1en7EOUXi7/KuQB1+mHcFYmJ3R9+OOilqz8fjCbo8GGTY2Y5WReFENOcxVDmerfy7E/W/e3xHUiOVDrSiOwZN0vWiJn1c5eirHH8inCS5iNjPHDSBZ2ehqrqr7M8JricspvgtjaN5FhJsYe6hysRtNcGcRTDu5gAaRj6WSPUcReIY1JL4zZNzCO/OBlRPF3oXQZeHTuQh72g/riSog/VUEQtUb2FAoyO/wbYPZV7a0mIFHcXhSDQq9s/oX0CNlPe1EhLfQtDQHYWcgRztw1UExbKROqO6WoIxlS/0Mx9NkDnKz0zg7VbZl6mTuq1WlwRS34MEd0d9GO0R7fYjKC9dyFbx+24/AkyjznOtlyN/P+GNL6egbXcd5eVDhB3930WMRqBeC+NxE8qr7zFUuaAdZusoPhOQreIPtl9EeKY3kriCGUShBv6kOW4yr5wsAub5Xu9Ai6NPxvlw3G1bngQ+Y5XNo/128Gh3Xk9QLKDnGkssEL+FARlKawjGrAyhGKbfx/0SR25MQh6B/q5oHfAyGhjANLIx1H7gQoIhlP3AbYQzLjqKRQ/wE4JiGQbeRoOj3UZ3Evsd8H6rbCrwtQa/x5Et3yE8KvogTSRBaqRL8nMj4Umfi9FoylEsLiGc8fMHaAmgYZoVzBhkz/iDtvcAr8NtYVwkZiJ/HP9GGg+jSMamcgo3KxiQ081aDm1hR6USMyvljnyZjkJE/FMhOyvlTQ9SWtkN9feoWfPHJPci56vJLXyvo3Umo+fgF8sBNGhpaUTb6va5twPvs8qej5rBo1v8bkdzHI3uv503+FI0om2JJPZb/ibhVe2jkJufS+GaLS9A9/0oq/wq4PokLtCKDWOzBI3r/TyGYnUfS+oijqpMRGKZaJV/H3hrUhdJUjDdyLVztlW+DfkIr0vqQo4Q01A3dLhVvgyNXBOL605SMKAYoZXAS6zyIeBcIgKjHC0zA/ng2ruprEXObonufZWEDePnWVRJWxj9yGp/Q8LXG+mci+a9bLHcD5xBChulJS0YUGsyl3ACnR7gVuSl3pHCdUcSHcAV6B7bu9vegVKPPJPKhRPukvx0onDLiyPeuwsZyHFz0DkO8TzgfwjuBuexCC3ZpJZzOI0WxuMA8A7g6oj3zgIeQHlVHPE5Bd23KLFci7zm0kxQnapgPD6FfEjtpuyFyNa5LIM6tAMfRfcrKrPW+4FPZlGJNLskm9eiuZqBiPdWICfkP2RVmRIxCXXt9nQFKGPYAuTrkglZtDAeS9F8weqI92YjX5svIOPYIY+Az6H7EiWW1eh+ZiYWAIwxWR9dxph/NcbsN9FsMsbMyaFeRTrmVO5DFPsr968rj7pl2SXZzEJhmUdUeX8Z+h+2IrMa5c/pKOnB2VXe34ZSuto5lTMjyy7JZiUKivsa0Zb9HLQ2cg/tnzP4TDS1v4JosRwAvo7cFnITC5BLlxR1nGyM+WWVJtjjF8aYswtQ1ySPs40xq+r87vuNMdMKUNfcuySbDjTpdC3hRTQ/jwA3I7/izTXOKyoTUQDgxdR2NNuGpiRuoE6AfJYUSTAe45BT1mXIv6MaBs1LLEQzn6lMhSfEAPJOvAjZbrWWRrYC/wH8NymsBbVKEQXjMQZ5vF8O/H2dc/eh5Ml3I2P5PsJb0GVJD/JtPhPZYq8mmEQ7is2odb2OfOtekyILxqMbTU59mvhbJA8j0XiG5ENU9l1OiUGUAmUWEslpxJ9P2oiWT26kBPsRlEEwHp1oyX4+SkI8vvbpIZ5GIRbe8WClbBfypvf+3YkE14MSRXtpVb2/B1FQ2JTKcVITddmOphQWI/eEVNd/kqRMgvEzGgWWz0c+NmWYHd6N3BEWo9nZPflWpznKKhg/vcjrbHblmEExBLQb2VUrKsdKyrMNcVXaQTA2o9EmFZ6ApqJctGk6bRlktK5HwliBxFLKVqQW7SiYKHqQwXwCmvuYjFKj9yHbxD56kB2zK+LYgaIgNiCDdUPlaDtxRDFSBONIiL8BhrmUIJh/YL4AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/maatsTitle.png":
/*!****************************!*\
  !*** ./src/maatsTitle.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/maatsTitle.3fdcd54c.png";

/***/ }),

/***/ "./src/malek.jpg":
/*!***********************!*\
  !*** ./src/malek.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/malek.c1a97ef2.jpg";

/***/ }),

/***/ "./src/nathan.jpg":
/*!************************!*\
  !*** ./src/nathan.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nathan.b61c86d0.jpg";

/***/ }),

/***/ "./src/people-icon.png":
/*!*****************************!*\
  !*** ./src/people-icon.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/people-icon.df5beb1f.png";

/***/ }),

/***/ "./src/people.png":
/*!************************!*\
  !*** ./src/people.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/react-logo.png":
/*!****************************!*\
  !*** ./src/react-logo.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/react-logo.df556510.png";

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

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/shaan.jpg":
/*!***********************!*\
  !*** ./src/shaan.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/shaan.2b99f4f7.jpg";

/***/ }),

/***/ "./src/simio-logo.png":
/*!****************************!*\
  !*** ./src/simio-logo.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/simio-logo.b5789412.png";

/***/ }),

/***/ "./src/tornado.png":
/*!*************************!*\
  !*** ./src/tornado.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/truffle-logo.png":
/*!******************************!*\
  !*** ./src/truffle-logo.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/truffle-logo.afcc53db.png";

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ericbrown/Documents/Portfolio2/portfolio2/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ericbrown/Documents/Portfolio2/portfolio2/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map