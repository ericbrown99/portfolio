import React, { Component } from 'react';
import Title from './Title';
import resumePDF from "./PDFs/Aug 14,'19Resume.pdf";
import memeMerchPDF from "./PDFs/Meme Merchant v0.1.pdf";
import './App.css';



class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      titleState: 0,
      pageState: 0,
    }
  }


  renderPageHandler = () => {
    let pageState = this.state.pageState;
    if(this.state.pageState=== 0){
      return(
        <div>
          <div id="title-box">
              {this.renderTitle()}
          </div>
          <div className="content-selector">
            <button id="projects" className="underlined"
              onClick={() => this.fadeOutToProjects()}>
              projects
            </button>
            <button id="articles" onClick={() => this.fadeOutToArticles()}>
              articles
            </button>
            <button id="travel" onClick={() => this.fadeOutToTravel()}>
              travel
            </button>
          </div>
          <div id="content-box">
            {this.renderContentBox()}
          </div>
        </div>
      )
    }
    if(pageState===1){
      return(
        <div className="about-content">
          <div id="about-me-box">
            <div className="about-me-text">
              Hi, I'm Eric. I search for ways to approach global challenges by utilizing emerging technologies.
              These technologies present incredible opportunities and unique challenges which
              will forever change how we lead our lives. If you love discussing the ways
              technology will reshape our world, give me a call. I look forward our conversations!
            </div>
            <div className="about-me-image">
            </div>
          </div>
          <div className="specifics-box">
            <div className="technology-about">
              <div className="lego">
              </div>
              <div className="technology-text">
                Amongst the only Gen-Zs to have a non-digital childhood, Legos
                taught me to love building and creating. As an autodidact, I couldn’t
                be more thankful to be a part of the digital-era where learning, building,
                and creating has never been easier.
              </div>
            </div>
            <div className="environment-about">
              <div className="scuba">
              </div>
              <div className="technology-text">
              Outside of technology, I have a passion for protecting the environment. This has been
              fostered by the many nights backpacking in the mountains, discovering our oceans
              and exploring the worlds natural landscapes. For now, Earth is our
              only home...
              </div>
            </div>
            <div className="golf-about">
              <div className="golf-logo">
              </div>
              <div className="golf-text">
              If the remaining hours allow, I love to golf. I have dreams of playing
              Augusta National, crossing Rae's Creek and making it through Amen corner at even par.
              If you can get a tee time, you have considerable leverage.
              </div>
            </div>
          </div>
          <div className="line">
          </div>
          <div className="reach-out-box">
            <div className="reach-out-title">
              Reach Out
            </div>
            <div className="reach-out-body">
              Please feel free to contact me, whether it be for an interview,
              work, or to set a tee time!
            </div>
            <div className="contact-type">
              Phone:
            </div>
            <div className="contact-info">
              +1.858.335.7850
            </div>
            <div className="contact-type">
              Email:
            </div>
            <div className="email-contact-info">
              ericbrown.connect@gmail.com
            </div>
            <div className="contact-type">
              Resume:
            </div>
            <div className="resume-contact-info">
              <a className="resume-link" href={resumePDF} target="_blank">
              Open PDF of Resume
              </a>
            </div>
            </div>
          </div>
      )
    }
    if(pageState === 3){
      return(
        <div className="project-content">
          <div className="ProjectHeader">
            <div className="project-image projectimg-1">
            </div>
            <div className="description-box-live">
              <div className="box-live">
                <div className="live-placeholder">
                  <p className="description-date-live"> 2018 </p>
                </div>
                <p className="live-description-text">
                  Ethereum Enabled Marketplace of Online Stores
                </p>
                <div className="subtitle-2">
                  Distribution Empowers Owners
                </div>
                <div className="subtitle-description">
                  Generating online revenue can be intimidating for small business owners.
                  Maat's utilzes blockchain to provide security &
                  removes the need to build trust with consumers through codified
                  escrow payments. Maats strives to empower the women and minority
                  business owners vital to our communities. Please view the
                  <a href="https://github.com/ericbrown99/MaatsNetwork" target="blank" className="link">
                    {" Github Repo "}
                    <span className="underlined-link">
                      {"here"}
                    </span>
                  </a>
                   {" to follow my progress. "}
                </div>
              </div>
            </div>
          </div>
          <div className="project-body">
            <div className="project-content-left">
              <video autoPlay="true" loop="true" class="picture">
                <source type="video/mp4" src={require("./MaatsGovernance.mov")}/>
              </video>
            </div>
            <div className="project-content-right-2">
              <div className="section-title-2">
              Security & Governance
              </div>
              <div className="section-content">
                Maats automatically provides tailored
                user functionality based on the visitor's Ethereum account which
                acts as the user's "Sign-In" information.
                An account can be an Owner/Admin for the Maats network as a whole,
                an Owner/Admin for an individual store, or simply an unassociated
                account browsing products. In this way, Ethereum accounts enable Maats governance.
                The clip to the left illustrates this governance when switching between
                accounts associated with various levels of access. In practice,
                a visitor wouldn't switch between accounts.
              </div>
            </div>
            <div className="project-content-left">
                <img src={require("./MaatsPurchase.png")} className="picture" />
            </div>
            <div className="project-content-right-2">
              <div className="section-title-2">
                Codified Escrow Payments
              </div>
              <div className="section-content">
                Developing trust when selling online can be challenging and time
                consuming for small businesses. By codifying escrow payments in
                an ethereum smart contract, trust gets built in. When purchasing
                a product, the buyer's funds are placed in an independent escrow
                contract. These funds aren't released to the seller until they
                provide proof they have shipped the product. A timeout is enabled
                to release funds to the buyer if the seller doesn't provide proof
                of shipping.
              </div>
            </div>
            <div className="icon-wrap">
              <div className="icon-section">
                <div className="first-icon">
                  <img src={require("./react-logo.png")} className="big-icon"/>
                  <div className="icon-section-title">
                    React.js
                  </div>
                  <div className="section-content">
                    This was my first project using the React.js library. It
                    changed my whole perspective on front-end development and
                    quickly became my prefered scripting tool.
                  </div>
                </div>
                <div className="first-icon">
                  <img src={require("./bug-icon.png")} className="big-icon"/>
                  <div className="icon-section-title">
                    Test, test, test
                  </div>
                  <div className="section-content">
                    One of the powerful features of blockchain is its immutability.
                    That said, it creates unique challenges when debugging contract
                    code because once deployed on the blockchain, the contract can't be
                    edited. Comprehensive testing was vital this project.
                  </div>
                </div>
                <div className="first-icon">
                  <img src={require("./truffle-logo.png")} className="big-icon"/>
                  <div className="icon-section-title">
                    truffle suite
                  </div>
                  <div className="section-content">
                    Truffe Suite is essential for ethereum blockchain development. It
                    provides a personal blockchain to deploy and test contracts.
                    Truffle has an incredible community providing helpful tutorials
                    and boilerplates to get you on your way.
                  </div>
                </div>
              </div>
            </div>
            <div className="team-box">
              <div className="the-team">
                <div className="title">
                  The Team
                </div>
                <div className="left-team">
                  <div className="team-image">
                    <img src={require('./consensys-logo.png')}/>
                  </div>
                  <div className="name">
                    Consensys Academy
                  </div>
                </div>
                <div className="right-team">
                  <div className="team-image">
                    <img src={require('./Headshot.jpeg')}/>
                  </div>
                  <div className="name">
                    Eric Brown (me)
                  </div>
                </div>
              </div>
              <div className="my-role-section">
                <div className="title">
                  My Work
                </div>
                <div className="me-image-1">
                  <a href="https://github.com/ericbrown99/MaatsNetwork" target="blank">
                    <img src={require('./GitHub.png')}/>
                  </a>
                </div>
                <div className="my-role">
                  <div className="name">
                    GitHub Link
                  </div>
                  <div className="section-content-1">
                    This was my final project for the ConsenSys Academy course. I am
                    continually improving upon that foundation and would
                    love to eventually deploy on the Ropsten Test Network. There,
                    Maats can be tested and its market value can be better understood
                    and developed.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    if(pageState === 4){
      return(
        <div className="project-content">
          <div className="ProjectHeader">
            <div className="project-image projectimg-2">
            </div>
            <div className="description-box-live">
              <div className="box-live">
                <div className="live-placeholder">
                  <p className="description-date-live"> 2018 </p>
                </div>
                <p className="live-description-text">
                  Emergency Department Automatic Nurse Staffing
                </p>
                <div className="subtitle">
                  unsatisfied nurses and wasted time
                </div>
                <div className="subtitle-description">
                  Archaic scheduling methods meant wasted time and repetative staffing
                  for nurses, leading to costly turnover rates for Northwestern Memeorial
                  Hospital’s Emergency Department staff.
                </div>
              </div>
            </div>
          </div>
          <div className="project-body">
            <div className="project-content-left">
              <img src={require("./NMHSheet.png")} className="picture" />
            </div>
            <div className="project-content-right">
              <div className="section-title">
              Handwritten Staffing
              </div>
              <div className="section-content">
                Each day, a nurse was assigned to fill out the printed excel sheet
                to staff the department. This seldom accounted for the positions
                nurses had recently worked, leading to duplicated shifts and
                 unbalanced schedules.
              </div>
            </div>
            <div className="project-content-left">
              <video autoPlay="true" loop="true" class="picture">
                <source type="video/mp4" src={require("./SDvideo.mov")}/>
              </video>
            </div>
            <div className="project-content-right">
              <div className="section-title">
                STREAMLINED DAILY STAFFING
              </div>
              <div className="section-content">
                We increased position variability and reduced staffing time by
                writing an Excel Macro in VBA. By automating the daily staffing,
                nurses were able to redirect ~3.5 hours a day to patient care.
              </div>
            </div>
            <div className="icon-wrap">
              <div className="icon-section">
                <div className="first-icon">
                  <img src={require("./people-icon.png")} className="icon"/>
                  <div className="icon-section-title">
                    staffing randomization
                  </div>
                  <div className="section-content">
                    Nurses were staffed using uniform randomization to create equal
                    likelihood of jobs worked, minimizing weekly repeated positions
                    and allowing nurses to gain experience throughout the department.
                  </div>
                </div>
                <div className="first-icon">
                  <img src={require("./ExcelLogo.png")} className="big-icon"/>
                  <div className="icon-section-title">
                    all excel, no imports
                  </div>
                  <div className="section-content">
                    The client was most comfortable opperating in excel leading
                    us to write the entire pogram in Excel’s Visual Basic
                    Application (VBA) language.
                  </div>
                </div>
                <div className="first-icon">
                  <img src={require("./clipboard-icon.png")} className="big-icon"/>
                  <div className="icon-section-title">
                    qualification management
                  </div>
                  <div className="section-content">
                    Positions throughout the department require various trainings.
                    When staffing nurses, we ensure that they are only staffed in
                    positions for which they are qualified.
                  </div>
                </div>
              </div>
            </div>
            <div className="team-box">
              <div className="the-team">
                <div className="title">
                  The Team
                </div>
                <div className="left-team">
                  <div className="team-image">
                    <img src={require('./Igor.jpg')}/>
                  </div>
                  <div className="name">
                    Igor Alfomov
                  </div>
                  <div className="team-image">
                    <img src={require('./Shanon.jpg')}/>
                  </div>
                  <div className="name">
                    Shanon Carlson
                  </div>
                </div>
                <div className="right-team">
                  <div className="team-image">
                    <img src={require('./malek.jpg')}/>
                  </div>
                  <div className="name">
                    Malek Saman
                  </div>
                  <div className="team-image">
                    <img src={require('./nathan.jpg')}/>
                  </div>
                  <div className="name">
                    Nathan Mills
                  </div>
                </div>
              </div>
              <div className="my-role-section">
                <div className="title">
                  My Role
                </div>
                <div className="me-image">
                  <img src={require('./Headshot.jpeg')}/>
                </div>
                <div className="my-role">
                  <div className="section-title">
                    Lead Data Analyst
                  </div>
                  <div className="section-content">
                    I coordinated data collection and analysis, ensuring clarity
                    and statistical significance of our results. I lead the VBA development,
                    organizing coding sessions to ideate unique solutions to handling
                    qualifications and position restrictions to ensure the final
                    product was efficient and intuitive.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    if(pageState === 5){
      return(
        <div className="project-content">
          <div className="ProjectHeader">
            <div className="project-image projectimg-3">
            </div>
            <div className="description-box-live">
              <div className="box-live">
                <div className="live-placeholder">
                  <p className="description-date-live"> 2018 </p>
                </div>
                <p className="live-description-text">
                  Meme Merchant
                </p>
                <div className="subtitle">
                  Blockchain enabled meme trading
                </div>
                <div className="subtitle-description">
                  Meme Merchant enables users to create, collect, trade and share memes
                  (digital IP), driving monitary value. Anticipated alpha-release in early June 2019.
                </div>
              </div>
            </div>
          </div>
          <div className="project-body">
            <div className="project-content-left">
              <img src={require("./MemeMarket 600.png")} className="picture" />
            </div>
            <div className="project-content-right">
              <div className="section-title">
              ERC721 Tokens
              </div>
              <div className="section-content">
                Every meme on Meme Merchant is an ERC721 token. ERC721’s are non-fungible,
                meaning that they can not be replaced by another equal part or quantity.
                If you own a meme, you are the sole owner and the token can’t be split
                into smaller pieces to be sold or bought as parts. Think of it like
                owning a one-of-a-kind baseball card.
              </div>
            </div>
            <div className="project-content-left">
                <img src={require("./MemeSale.png")} className="picture" />
            </div>
            <div className="project-content-right">
              <div className="section-title">
                DESCENDING CLOCK AUCTION
              </div>
              <div className="section-content">
                A key limitation of the blockchain is that each interaction, such
                as submiting a bid, requires a transaction fee. We use a “Dutch Auction”
                to avoid these fees. The price decreases uniformly from a high price
                to the reserve price over the course of the auction. No bids are
                submitted and the first buyer to click buy wins the meme for the
                current listed price.
              </div>
            </div>
            <div className="icon-wrap">
              <div className="icon-section">
                <div className="first-icon">
                  <img src={require("./grad.png")} className="big-icon"/>
                  <div className="icon-section-title">
                    Education
                  </div>
                  <div className="section-content">
                    Meme Merchant was started as an educational tool for the creators.
                    We knew the best way to improve our blockchain development skills
                    was to get our hands dirty and code.
                  </div>
                </div>
                <div className="first-icon">
                  <img src={require("./people.png")} className="big-icon"/>
                  <div className="icon-section-title">
                    Public Engagement
                  </div>
                  <div className="section-content">
                    We want to help bring blockchain and its applications to the
                    mainstream dialogue by leveraging the online meme community.
                    Ideally, Meme Merchant will demystify distributed technologies.
                  </div>
                </div>
                <div className="first-icon">
                  <img src={require("./laugh.png")} className="big-icon"/>
                  <div className="icon-section-title">
                    Just Some Laughs
                  </div>
                  <div className="section-content">
                    We have a deep-rooted love for memes—for their versatility,
                    their unifying presence on the internet and their democratic
                    decentralization. We hope to bring a breath of fresh air to
                    a serious world.
                  </div>
                </div>
              </div>
            </div>
            <div className="team-box">
              <div className="the-team">
                <div className="title">
                  The Team
                </div>
                <div className="left-team">
                  <div className="team-image">
                    <img src={require('./shaan.jpg')}/>
                  </div>
                  <div className="name">
                    Shaan Savarirayan
                  </div>
                </div>
                <div className="right-team">
                  <div className="team-image">
                    <img src={require('./Headshot.jpeg')}/>
                  </div>
                  <div className="name">
                    Eric Brown (me)
                  </div>
                </div>
              </div>
              <div className="my-role-section">
                <div className="title">
                  Our Work
                </div>
                <div className="me-image-1">
                  <a href={memeMerchPDF} target="blank">
                    <img src={require('./WhitePaper.png')}/>
                  </a>
                </div>
                <div className="my-role">
                  <div className="name">
                    White Paper PDF
                  </div>
                  <div className="section-content-1">
                    The Meme Merchant team is just Shaan and me. From website design
                    to Solidity development, we've each been involved with every
                    piece of this project. Check out our white paper to get an
                    indepth breakdown of the project.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    if(pageState === 6){
      return(
        <div className="project-content">
          <div className="ProjectHeader">
            <div className="project-image projectimg-4">
            </div>
            <div className="description-box-live">
              <div className="box-live">
                <div className="live-placeholder">
                  <p className="description-date-live"> 2017 </p>
                </div>
                <p className="live-description-text">
                  NHS-111 Staffing Using Simio Simulations
                </p>
                <div className="subtitle">
                  IMPROVING CALL RESPONSE TIME
                </div>
                <div className="subtitle-description">
                  For this engineering case, we generated a staffing model which
                  would improve call response time and minimize operating costs
                  for the NHS-111 call centers.
                </div>
              </div>
            </div>
          </div>
          <div className="project-body">
            <div className="project-content-left">
              <img src={require("./Risk2.png")} className="picture" />
            </div>
            <div className="project-content-right">
              <div className="section-title">
                REPRESENTING THE REAL WORLD
              </div>
              <div className="section-content">
                Given a dataset of incoming calls to NHS-111, we can create a heuristic
                of the real world using statistical distributions. We ‘fit’ the
                dataset to various distributions and analyzed various metrics to
                determine the ideal distribution.
              </div>
            </div>
            <div className="project-content-left">
              <img src={require("./Simio2.png")} className="picture" />
            </div>
            <div className="project-content-right">
              <div className="section-title-2">
                ENSURING STABILITY
              </div>
              <div className="section-content">
                Once we had the distributions, we created a simulation of the NHS-111
                call center. This allowed us to test how the system would react
                to various staffing levels and arrival rates over the course of
                a day. When trying to optimize the system, we had to ensure that
                it wouldn’t be overwhelmed by a period of high workload.
              </div>
            </div>
            <div className="icon-wrap">
              <div className="icon-section">
                <div className="first-icon">
                  <img src={require("./Risk-logo.png")} className="icon"/>
                  <div className="icon-section-title">
                    PROBABILITY DISTRIBUTIONS
                  </div>
                  <div className="section-content">
                    In order to properly determine how to staff the calling center,
                    we fit the incoming call data to various probability distributions
                    and found the best fit was a Gamma distribution.
                  </div>
                </div>
                <div className="first-icon">
                  <img src={require("./simio-logo.png")} className="long-icon"/>
                  <div className="icon-section-title">
                    SIMULATED STAFFING
                  </div>
                  <div className="section-content">
                    Using the fits for probabilities of incoming calls and call
                    completions, we generated a Simio model which
                    showed us the impact of various staffing setups.
                  </div>
                </div>
                <div className="first-icon">
                  <img src={require("./tornado.png")} className="big-icon"/>
                  <div className="icon-section-title">
                    SENSITIVITY ANALYSIS
                  </div>
                  <div className="section-content">
                    While running the simulations, we could use Simio’s sensitivity
                    analysis functions to ensure that the staffing model wouldn’t
                    be easily overrun by outlier scenarios.
                  </div>
                </div>
              </div>
            </div>
            <div className="team-box">
              <div className="the-team">
                <div className="title">
                  The Team
                </div>
                <div className="left-team">
                  <div className="team-image">
                    <img src={require('./BenProf.jpeg')}/>
                  </div>
                  <div className="name">
                    Ben Wagner
                  </div>
                </div>
                <div className="right-team">
                  <div className="team-image">
                    <img src={require('./jonathanProf.jpeg')}/>
                  </div>
                  <div className="name">
                    Jonathan Shenkman
                  </div>
                </div>
              </div>
              <div className="my-role-section">
                <div className="title">
                  My Role
                </div>
                <div className="me-image">
                  <img src={require('./Headshot.jpeg')}/>
                </div>
                <div className="my-role">
                  <div className="section-title">
                    Statistical Analysis
                  </div>
                  <div className="section-content">
                    I focused my efforts on finding the ideal distribution to
                    represent the real world call data. These distributions were
                    essential to running an accurate simulation, optimizing our results.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    if(pageState === 7){
      return(
        <div className="travel-box">
          <div className="travel-title">
            August in Amsterdam
          </div>
          <button className="ProjectHeader-Link">
            <div className="TravelHeader-1">
              <div className="description-box">
                <div className="placeholder">
                  <p className="travel-image-expand">
                  </p>
                </div>
              </div>
            </div>
          </button>
          <div className="otherProjects">
            <button className="Project-Link" >
              <div className="ams-travel ams-image1">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image2">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> </p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image3">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> </p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image4">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image5">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image6">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image7">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image8">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image9">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image10">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image11">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image12">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image13">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image14">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image15">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image16">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image17">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image18">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image19">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image20">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image21">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image22">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image23">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel ams-image24">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      )
    }
    if(pageState === 8){
      return(
        <div className="travel-box">
          <div className="travel-title">
            Zambia, Botswana, & Zimbabwe
          </div>
          <button className="ProjectHeader-Link">
            <div className="TravelHeader-2">
              <div className="description-box">
                <div className="placeholder">
                  <p className="travel-image-expand">
                  </p>
                </div>
              </div>
            </div>
          </button>
          <div className="otherProjects">
            <button className="Project-Link" >
              <div className="ams-travel zam-image1">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image2">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> </p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image3">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> </p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel">
                  <video autoPlay="true" loop="true"  muted={true} className="travelVideo">
                    <source type="video/mp4" src={require("./Travel/Zambia/4.m4v")}/>
                  </video>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image5">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image6">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image7">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image8">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image9">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image10">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image11">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image12">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image13">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image14">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image15">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image16">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image17">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image18">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image19">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image20">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image21">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image22">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image23">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image24">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image25">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image26">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image27">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image28">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image29">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel zam-image30">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      )
    }
    if(pageState === 9){
      return(
        <div className="travel-box">
          <div className="travel-title">
            South Africa: Adrenaline & Friends
          </div>
          <button className="ProjectHeader-Link">
            <div className="TravelHeader-3">
              <div className="description-box">
                <div className="placeholder">
                  <p className="travel-image-expand">
                  </p>
                </div>
              </div>
            </div>
          </button>
          <div className="otherProjects">
            <button className="Project-Link" >
              <div className="ams-travel sou-image1">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image2">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> </p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image3">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> </p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image4">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> </p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image5">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image6">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image7">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image8">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image9">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image10">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image11">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image12">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image13">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image14">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image15">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image16">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image17">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image18">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image19">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel sou-image20">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      )
    }
    if(pageState === 10){
      return(
        <div className="travel-box">
          <div className="travel-title">
            Prague: A Spontaneous Adventure
          </div>
          <button className="ProjectHeader-Link">
            <div className="TravelHeader-4">
              <div className="description-box">
                <div className="placeholder">
                  <p className="travel-image-expand">
                  </p>
                </div>
              </div>
            </div>
          </button>
          <div className="otherProjects">
            <button className="Project-Link" >
              <div className="ams-travel pra-image1">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image2">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> </p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image3">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> </p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image4">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> </p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image5">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image6">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image7">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image8">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image9">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image10">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image11">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image12">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image13">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image14">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
            <button className="Project-Link" >
              <div className="ams-travel pra-image15">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"></p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      )
    }
  }


  renderTitle = () =>{
    let currentState = this.state.titleState;
    return(
      <Title
      titleState = {this.state.titleState}/>
    )
  }

  fadeOutToProjects = () => {
    if(this.state.titleState === 1){
      document.getElementById('articles').className="remove-underline";
    }
    if(this.state.titleState === 2){
      document.getElementById('travel').className="remove-underline";
    }
    let x = document.getElementById('span-3');
    document.getElementById('content-box').className='transition-out-3';
    document.getElementById('span-1').className='transition-out-1';
    document.getElementById('span-2').className='transition-out-2';
    document.getElementById('span-3').className='transition-out-3';
    x.addEventListener("animationend", () => {
      this.setState({
          titleState : 0,
      });
      console.log("Project " + this.state.titleState);
      document.getElementById('span-1').className=""
      document.getElementById('span-2').className=""
      document.getElementById('span-3').className=""
      document.getElementById('content-box').className=""
      document.getElementById('projects').className="underlined"
      document.getElementById('articles').className="generic"
      document.getElementById('travel').className="generic"
    });
    console.log("projfade");
  }

  fadeOutToArticles = () => {
    if(this.state.titleState === 0){
      document.getElementById('projects').className="remove-underline";
    }
    if(this.state.titleState === 2){
      document.getElementById('travel').className="remove-underline";
    }
    let y = document.getElementById('span-3');
    document.getElementById('content-box').className='transition-out-3';
    document.getElementById('span-1').className='transition-out-1';
    document.getElementById('span-2').className='transition-out-2';
    document.getElementById('span-3').className='transition-out-3';
    y.addEventListener("animationend", () => {
      this.setState({
        titleState : 1,
      });
      document.getElementById('span-1').className=""
      document.getElementById('span-2').className=""
      document.getElementById('span-3').className=""
      document.getElementById('content-box').className=""
      document.getElementById('projects').className="generic"
      document.getElementById('articles').className="underlined"
      document.getElementById('travel').className="generic"
    });
    console.log("artfade");
  }

  fadeOutToTravel = () =>{
    if(this.state.titleState === 1){
      document.getElementById('articles').className="remove-underline";
    }
    if(this.state.titleState === 0){
      document.getElementById('projects').className="remove-underline";
    }
    let z = document.getElementById('span-3');
    document.getElementById('span-1').className='transition-out-1';
    document.getElementById('span-2').className='transition-out-2';
    document.getElementById('span-3').className='transition-out-3';
    document.getElementById('content-box').className='transition-out-3';
    z.addEventListener("animationend", () => {
      this.setState({
        titleState : 2,
      });
      console.log("travel " + this.state.titleState);
      document.getElementById('span-1').className=""
      document.getElementById('span-2').className=""
      document.getElementById('span-3').className=""
      document.getElementById('content-box').className=""
      document.getElementById('projects').className="generic"
      document.getElementById('articles').className="generic"
      document.getElementById('travel').className="underlined"
    });
    console.log("travelfade");
    {this.renderContentBox()}
  }



  renderContentBox = () => {
    let state = this.state.titleState;
    console.log("renderContentbox");
    if(this.state.titleState === 0){
      return(
        <div>
          <button className="ProjectHeader-Link" onClick={() => this.fadeOutToProject1()}>
            <div className="ProjectHeader">
              <div className="description-box">
                <div className="placeholder">
                  <p className="description-date"> 2018 </p>
                </div>
                <p className="header-description-text">
                  Maat's Network: A 100% distributed marketplace for women & minority owners
                </p>
              </div>
            </div>
          </button>
          <div className="otherProjects">
            <button className="Project-Link" onClick={() => this.Project2Handler()}>
              <div className="Project1">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> 2018 </p>
                  </div>
                  <p className="description-text">
                  Automated Staffing @ Northwestern Memorial Hospital
                  </p>
                </div>
              </div>
            </button>
            <button className="Project-Link" onClick={() => this.Project3Handler()}>
              <div className="Project2">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> 2018 </p>
                  </div>
                  <p className="description-text">
                    Meme Merchant: blockchain enabled digital IP trading
                  </p>
                </div>
              </div>
            </button>
            <button className="Project-Link" onClick={() => this.Project4Handler()}>
              <div className="Project3">
                <div className="ProjectN">
                  <div className="placeholder">
                    <p className="description-date"> 2017 </p>
                  </div>
                  <p className="description-text">
                    NHS-111 Stafing using SIMIO
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      )
    }
    if(this.state.titleState === 1){
      return(
          <div>
            <a href="https://www.dimensionless.tech" target="blank">
              <div className="article1">
                <div className="description-box">
                  <div className="placeholder">
                    <p className="description-date"> 2019 - present </p>
                  </div>
                  <p className="header-description-text">
                    Co-created tech blog @ the intersection of AI, Blockchain & IoT
                  </p>
                </div>
              </div>
            </a>
            <a href="https://medium.com/@ericbrown99" target="blank">
              <div className="article2">
                <div className="description-box">
                  <div className="placeholder">
                    <p className="description-date"> 2018 - present </p>
                  </div>
                  <p className="header-description-text">
                    All of my individual articles have moved to my Medium page. Check them out here!
                  </p>
                </div>
              </div>
            </a>
          </div>
      )
    }
    if(this.state.titleState === 2){
      return(
        <div>
          <button className="ProjectHeader-Link" onClick={() => this.Travel1Handler()}>
            <div className="travel1">
              <div className="description-box">
                <div className="placeholder">
                  <p className="description-date"> 2017 </p>
                </div>
                <p className="header-description-text">
                  August in Amsterdam: a week spent roaming the city & countryside
                </p>
              </div>
            </div>
          </button>
          <button className="ProjectHeader-Link" onClick={() => this.Travel2Handler()}>
            <div className="travel2">
              <div className="description-box">
                <div className="placeholder">
                  <p className="description-date"> 2016 </p>
                </div>
                <p className="header-description-text">
                  Zambia, Botswana & Zimbabwe: Exploring Africa's natural wonders
                </p>
              </div>
            </div>
          </button>
          <button className="ProjectHeader-Link" onClick={() => this.Travel3Handler()}>
            <div className="travel3">
              <div className="description-box">
                <div className="placeholder">
                  <p className="description-date"> 2016 </p>
                </div>
                <p className="header-description-text">
                  South Africa: Adrenaline & Friends
                </p>
              </div>
            </div>
          </button>
          <button className="ProjectHeader-Link" onClick={() => this.Travel4Handler()}>
            <div className="travel4">
              <div className="description-box">
                <div className="placeholder">
                  <p className="description-date"> 2016 </p>
                </div>
                <p className="header-description-text">
                  Prague: The perfect city for a spontaneous adventure
                </p>
              </div>
            </div>
          </button>
        </div>
      )
    }
  }


  //////////
  // Page Transition Handlers
  //////////

  pageTransitionHandler = () =>{
    let a = document.getElementById('container');
    document.getElementById.className="transition-out-3";
    a.addEventListener("animationend", () => {this.aboutHandler()});
  }


  aboutHandler = () =>{
    let rerender = this.state.rerenderState;
    if(this.state.pageState===0){
      this.setState({
        pageState: 1,
      });
    }
    if(this.state.pageState!==0){
      this.setState({
        pageState: 0,
        titleState: 0,
      });
    }
  }


  renderAbout = () => {
    let pageState = this.state.pageState;
    if(pageState === 0){
      return(
        <p className="about-paragraph"> about me </p>
      )
    }
    if(pageState !== 0){
      return(
        <p className="about-paragraph"> home </p>
      )
    }
  }

  fadeOutToProject1 = () =>{
    this.setState({
      pageState:3,
    });
    {window.scrollTo(0,0)}
  }

  Project2Handler = () =>{
    this.setState({
      pageState:4,
    });
    {window.scrollTo(0,0)}
  }

  Project3Handler = () =>{
    this.setState({
      pageState:5,
    });
    {window.scrollTo(0,0)}
  }

  Project4Handler = () =>{
    this.setState({
      pageState:6,
    });
    {window.scrollTo(0,0)}
  }

  Travel1Handler = () => {
    this.setState({
      pageState: 7,
    });
    {window.scrollTo(0,0)}
  }

  Travel2Handler = () => {
    this.setState({
      pageState: 8,
    });
    {window.scrollTo(0,0)}
  }

  Travel3Handler = () => {
    this.setState({
      pageState: 9,
    });
    {window.scrollTo(0,0)}
  }

  Travel4Handler = () => {
    this.setState({
      pageState: 10,
    });
    {window.scrollTo(0,0)}
  }


  render() {
    return (

      <div className="App">
        <header className="App-header">
          <div className="logo-box">
            <img src={require("./sketch.png")} className="App-logo" alt="logo" />
            <p className="year">
              2019
            </p>
          </div>
          <div className="about-box">
            <button className="about" onClick={() => this.aboutHandler()}>
              {this.renderAbout()}
            </button>
          </div>
        </header>
        <main id="container">
          {this.renderPageHandler()}
        </main>
        <footer>
            <button onClick={() => {window.scrollTo(0,0)}} className="back-to-top">
              <div className="arrow">
              </div>
            </button>
        </footer>
      </div>

    );
  }
}

export default App;
