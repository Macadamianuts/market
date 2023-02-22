"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  _easycom_uni_number_box2();
}
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  _easycom_uni_number_box();
}
const _sfc_main = {
  __name: "car",
  setup(__props) {
    const changeValue = common_vendor.ref(0);
    const select = common_vendor.ref(false);
    function selectCheckbox() {
      select.value = !select.value;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: "69aa3c0c-0-" + i0
          };
        }),
        b: select.value,
        c: common_vendor.o(changeValue.value),
        d: common_vendor.o(($event) => selectCheckbox()),
        e: select.value,
        f: common_vendor.o(($event) => selectCheckbox())
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "G:/Project/market/wx_market/pages/car/car.vue"]]);
wx.createPage(MiniProgramPage);
