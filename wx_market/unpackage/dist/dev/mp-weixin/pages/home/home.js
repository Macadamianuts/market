"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_section2 + _easycom_uni_tag2)();
}
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_section + _easycom_uni_tag)();
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
    return (_ctx, _cache) => {
      return {
        a: swiperOption.indicatorDots,
        b: swiperOption.autoplay,
        c: swiperOption.interval,
        d: swiperOption.duration,
        e: common_vendor.p({
          column: 4,
          showBorder: false
        }),
        f: common_vendor.p({
          title: "\u4E3A\u4F60\u63A8\u8350",
          type: "line"
        }),
        g: common_vendor.p({
          text: "\u5F3A\u54E5\u63A8\u8350",
          inverted: true,
          type: "warning"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "G:/Project/market/wx_market/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
