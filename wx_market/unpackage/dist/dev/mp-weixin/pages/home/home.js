"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_search_bar2 + _easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_section2 + _easycom_uni_tag2 + _easycom_uni_load_more2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_section + _easycom_uni_tag + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const swiperOption = common_vendor.reactive({
      indicatorDots: false,
      autoplay: true,
      interval: 2e3,
      duration: 500
    });
    const swiperList = common_vendor.ref([
      "https://img2.baidu.com/it/u=573255891,3781003769&fm=253&fmt=auto&app=138&f=JPEG?w=1250&h=500",
      "https://img1.baidu.com/it/u=3878505612,1891851307&fm=253&fmt=auto&app=138&f=JPEG?w=1250&h=500",
      "https://img0.baidu.com/it/u=3809117071,2668689623&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=172"
    ]);
    common_vendor.ref(false);
    common_vendor.ref("");
    common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(_ctx.search),
        b: common_vendor.p({
          radius: "5",
          placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5546\u54C1\u540D\u79F0",
          clearButton: "auto",
          cancelButton: "none"
        }),
        c: common_vendor.f(swiperList.value, (swiper, k0, i0) => {
          return {
            a: swiper
          };
        }),
        d: swiperOption.indicatorDots,
        e: swiperOption.autoplay,
        f: swiperOption.interval,
        g: swiperOption.duration,
        h: common_vendor.p({
          column: 4,
          showBorder: false
        }),
        i: common_vendor.p({
          title: "\u4E3A\u4F60\u63A8\u8350",
          type: "line"
        }),
        j: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: "3770cca0-7-" + i0
          };
        }),
        k: common_vendor.p({
          text: "\u5F3A\u54E5\u63A8\u8350",
          inverted: true,
          type: "warning"
        }),
        l: common_vendor.p({
          status: "more"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "G:/Project/market/wx_market/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
