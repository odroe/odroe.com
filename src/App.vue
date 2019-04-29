<template>
  <div id="app">
    <header class="header" ref="header">
      <div class="wrapper">
        <div class="logo">&lt;Byte Gem/&gt; &sdot; <span>字节琳琅</span></div>
        <div class="menu">
          <a class="menu-item" href="#home">首页</a>
          <a class="menu-item" href="#product">产品</a>
          <a class="menu-item" href="#technology">技术</a>
          <a class="menu-item" href="">解决方案</a>
          <a class="menu-item" href="">合作伙伴</a>
          <a class="menu-item" href="">关于我们</a>
        </div>
      </div>
    </header>
    <main class="main">
      <!-- 首页 -->
      <div class="home" id="home">
        <h3>我们的<span>理念</span></h3>
        <h4>用字节将你将想法转化为现实</h4>
      </div>

      <!-- 产品 -->
      <div class="product" id="product">
        <h3 class="module-title">快捷的方式 - 产品</h3>
        <div class="wrapper">
          <div class="product-item">
            <div
              class="logo"
              :style="{
                backgroundImage: `url(${require('./assets/fans.svg')})`
              }"
            />
            <h3 class="name">Fans 2</h3>
            <div class="desc">
              Fans 2 是 Fans 程序的 2.0
              重新开发版本，主要已社区为中心。可以快速搭建以社区为主题的程序，其优秀的设计可以通过简单的配置模式和修改前端
              UI 进行各类社区程序的构建。<br />主体优秀的解耦设计可以在官方商店中进行更多应用的购买与部署。
            </div>
            <a
              class="link"
              href="https://github.com/medz/fans"
              target="_blank"
              rel="noopener noreferrer"
              >查看更多</a
            >
          </div>
          <div class="product-item">
            <div
              class="logo"
              :style="{
                backgroundImage: `url(http://www.zhiyicx.com/Public/images/home/h-img1.jpg)`
              }"
            />
            <h3 class="name">ThinkSNS +</h3>
            <div class="desc">
              国内最大的开源社交SNS系统，丰富的社交功能，移动端支持多版本。ThinkSNS帮你快速的搭建你需要的社交产品。<br />用户UGC动态内容分享，支持付费，分享升值；实时信息推广，多端同步展示支持推送／推荐／置顶／热门等分类，支持图文音视频，提升活跃度。
            </div>
            <a
              class="link"
              href="https://github.com/medz/fans"
              target="_blank"
              rel="noopener noreferrer"
              >查看更多</a
            >
          </div>
          <div class="product-item">
            <div
              class="logo"
              :style="{
                backgroundImage: `url(http://www.zhiyicx.com/Public/images/home/h-img3.jpg)`
              }"
            />
            <h3 class="name">Eduline</h3>
            <div class="desc">
              Eduline是目前国内功能最强大、企业用户最多的在线教育系统，为在线教育行业提供了全套解决方案。<br />全新体验，随时随地想学就学，为你打造专属的教育平台。
            </div>
            <a
              class="link"
              href="https://github.com/medz/fans"
              target="_blank"
              rel="noopener noreferrer"
              >查看更多</a
            >
          </div>
        </div>
      </div>

      <!-- 技术 -->
      <div class="technology" id="technology">
        <h3 class="module-title">技术 - 自由的想象</h3>
        <div class="wrapper desc">
          &nbsp;有更自由的技术，才会有更多想象的可能！实力的证明就是任何形态的产品都能选择合适的技术将其变为利器，指尖流转的代码最终会成为字节运行在我们生活的任何设备之上。享受自由技术、自由软件带来的愉悦！编码也是一种艺术。<br />❤️I'm
          love Coding, And love free software.
        </div>
        <div class="wrapper open-source">
          <div class="app-frame">
            <div class="app-bg" />
          </div>
          <div>
            <div class="lang">
              <div class="logo">
                <img
                  src="https://www.php.net/images/logos/php-logo.svg"
                  alt="PHP"
                />
              </div>
              <div>
                <h3 class="name">PHP</h3>
                <div class="desc">
                  PHP
                  是一种流行的通用脚本语言，其快速开发、可维护性高、性能不逊色与变异性语言等特点，成为目前全球最广泛的服务端开发语言。
                </div>
              </div>
            </div>

            <div class="lang">
              <div class="logo">
                <img
                  src="https://assets.zabbix.com/img/brands/nodejs.svg"
                  alt="ES6 +"
                />
              </div>
              <div>
                <h3 class="name">ECMAScript & Node.js</h3>
                <div class="desc">
                  ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会,英文名称是European
                  Computer Manufacturers
                  Association）通过ECMA-262标准化的脚本程序设计语言。
                </div>
              </div>
            </div>

            <div class="lang">
              <div class="logo">
                <img
                  src="https://developer.apple.com/assets/elements/icons/swift/swift-64x64_2x.png"
                  alt="Swift"
                />
              </div>
              <div>
                <h3 class="name">Swift & iOS</h3>
                <div class="desc">
                  Swift是一款易学易用的编程语言，而且它还是第一套具有与脚本语言同样的表现力和趣味性的系统编程语言。Swift的设计以安全为出发点，以避免各种常见的编程错误类别。
                </div>
              </div>
            </div>

            <div class="lang">
              <div class="logo">
                <img src="./assets/java.jpeg" alt="Java" />
              </div>
              <div>
                <h3 class="name">Java & Android</h3>
                <div class="desc">
                  Java具有简单性、面向对象、分布式、健壮性、安全性、平台独立与可移植性、多线程、动态性等特点。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
    const { header } = this.$refs;
    if (window.scrollY >= 100) {
      header.style.backgroundColor = "#fff";
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 100) {
        header.style.backgroundColor = `rgba(255, 255, 255, ${window.scrollY /
          100})`;
      } else {
        header.style.backgroundColor = "#fff";
      }
    });
  }
};
</script>
<style lang="stylus">
html, body, *
  margin 0
  padding 0
  box-sizing border-box
#app
  width 100%
.wrapper
  width 1200px
  margin 0 auto
.header
  position fixed
  top 0
  width 100%
  border-bottom 1px solid #f7f7f7
  z-index 100
  background-color rgba(255, 255, 255, 0)
  .wrapper
    height 80px
    display flex
    align-items center
    justify-content space-between
    .logo
      font-size 36px
      font-weight lighter
      span
        text-decoration overline solid #91e8e8
    .menu
      height 80px
      .menu-item
        height 80px
        line-height 80px
        padding 0 24px
        text-decoration none
        color #777
        font-size 18px
        font-weight lighter
        &:first-child
          padding-left 0
        &:last-child
          padding-right 0
        &:hover
          font-weight unset
.main
  min-height 100vh
  width 100%
  margin-top 80px
  position relative
  .module-title
    text-align center
    color #565656
    font-size 38px
    font-weight 300
    margin-bottom 30px
.home
  width 100%
  height 100vh
  margin-top -80px
  background-image url("./assets/bg.png")
  background-size cover
  background-position center
  padding-top 80px
  display flex
  align-content center
  justify-content center
  flex-direction column
  & > *
    text-align center
  h3
    padding-bottom 12px
    font-size 24px
    font-weight 300
    color #444
    span
      font-weight 700
  h4
    font-size 36px
    font-weight 300
    color #444
    letter-spacing 4px
.product
  width 100%
  padding: 80px 0 36px;
  .wrapper
    display flex
    .product-item
      width 100%
      margin 24px
      padding 12px
      flex-shrink 1
      position relative
      transition all 0.4s ease-in-out
      border 1px solid #f7f7f7
      border-radius 4px
      &:first-child
        margin-left 0
      &:last-child
        margin-right 0
      &:hover
        width 50%
        flex-shrink 0
        background-color #f7f7f7
        border-width 0
        padding-bottom 80px
        &:after
          opacity 0 !important
        .logo
          padding-bottom 0 !important
          width 0
        .name
          font-size 36px
        .desc
          width 100%
          height auto
        .link
          display: inline-block;
          height 48px
          opacity 1
      &:after
        transition opacity 0.4s ease-in-out
      .logo
        width 100%
        height 0
        padding-bottom 56.25%
        background-size cover
        background-position center
        transition all 0.6s ease-in-out
      .name
        text-align center
        padding 12px
        font-weight 400
        font-size 24px
        transition all 0.6s ease-in-out
      .desc
        overflow hidden
        display -webkit-box
        word-break break-word
        color #666
        -webkit-line-clamp 4
        -webkit-box-orient vertical
        transition all 0.6s ease-in-out
        font-size 18px
        width 0
        height 0
      .link
        display none
        height: 48px;
        line-height: 28px;
        padding: 8px 32px;
        border: 1px solid #a0a0a0;
        text-decoration: none;
        color: #a0a0a0;
        position: absolute;
        bottom: 16px;
        right: 26px;
        opacity 0
        z-index 1
        &:hover
          color #91e8e8
          border-color #91e8e8
    &:hover
      .product-item:after
        content ""
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        background-color #fff
        opacity .6


.technology
  width 100%
  padding: 80px 0 36px;
  background-color #f7f7f7
  .wrapper.desc
    padding 0 200px
    text-align center
    font-family Roboto
    font-size 20px
    font-weight 300
    line-height 1.5
    color #444
  .open-source
    display flex
    padding-top 48px
    .app-frame
      border: 2px solid #d1d9db;
      border-top-width: 20px;
      border-radius: 4px;
      background-color: #FAFAFA;
      box-shadow: 0 25px 30px -18px rgba(0,0,0,0.28);
      width 100%;
      .app-bg
        width 100%
        height 100%
        background-image url("./assets/技术.jpg")
        background-size cover
        background-position center
    .lang
      margin-left 24px
      width 100%
      display flex
      padding 12px
      .logo
        width 64px
        height 64px
        background-color: #fff;
        border-radius: 50%;
        display: inline-flex;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        padding: 12px;
        margin-right 16px
        box-shadow: 0 1px 5px rgba(27,31,35,.15);
        flex-shrink 0
        img
          width 100%
      .name
        font-weight 400
        font-size 24px
      .desc
        color #6a737d
        font-size 14px
</style>
