"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_tag2 + _easycom_uni_popup2)();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    common_vendor.ref(null);
    const orderList = common_vendor.reactive({
      list: [
        {
          id: 0,
          url: "../../static/icon/order_list.png",
          title: "\u5168\u90E8\u8BA2\u5355"
        },
        {
          id: 1,
          url: "../../static/icon/order_pay.png",
          title: "\u5F85\u4ED8\u6B3E"
        },
        {
          id: 2,
          url: "../../static/icon/order_waitPay.png",
          title: "\u5F85\u53D1\u8D27"
        },
        {
          id: 3,
          url: "../../static/icon/order_wait.png",
          title: "\u5F85\u6536\u8D27"
        }
      ]
    });
    const modeList = common_vendor.reactive({
      list: [
        {
          id: 1,
          val: 200,
          text: "\u6536\u85CF"
        },
        {
          id: 2,
          val: 600,
          text: "\u6D4F\u89C8\u8DB3\u8FF9"
        }
      ]
    });
    const featureList = common_vendor.reactive({
      list: [
        {
          id: 1,
          url: "../../static/feature/record.png",
          name: "\u6D4F\u89C8\u8BB0\u5F55"
        },
        {
          id: 2,
          url: "../../static/feature/money.png",
          name: "\u6211\u7684\u94B1\u5305"
        },
        {
          id: 3,
          url: "../../static/feature/address.png",
          name: "\u5730\u5740\u7BA1\u7406"
        },
        {
          id: 4,
          url: "../../static/feature/feedback.png",
          name: "\u610F\u89C1\u53CD\u9988"
        },
        {
          id: 5,
          url: "../../static/feature/customer.png",
          name: "\u8054\u7CFB\u5BA2\u670D"
        },
        {
          id: 6,
          url: "../../static/feature/logout.png",
          name: "\u9000\u51FA\u767B\u5F55"
        }
      ]
    });
    function myDetail() {
      common_vendor.index.navigateTo({
        url: "/pages/my/detail"
      });
    }
    function orderDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/my/order/order?current=${id}`
      });
    }
    function modeDetail(id) {
      if (id == 1) {
        common_vendor.index.navigateTo({
          url: "/pages/my/collect"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/my/record/record"
        });
      }
    }
    function modeUrl(id) {
      if (id == 1) {
        common_vendor.index.navigateTo({
          url: "/pages/my/record/record"
        });
      } else if (id == 3) {
        common_vendor.index.navigateTo({
          url: "/pages/my/address/address"
        });
      } else if (id == 4) {
        common_vendor.index.navigateTo({
          url: "/pages/my/feedback/feedback"
        });
      }
    }
    const userData = common_vendor.reactive({
      avatarImg: "",
      nickName: "",
      isAuthor: false
    });
    function getWxFile() {
      wx.login({
        success: (res) => {
          console.log("success: " + JSON.stringify(res));
          let code = res.code;
          common_vendor.index.request({
            url: "http://localhost:8888/wechat/analysis",
            method: "POST",
            data: {
              code
            },
            success: (res2) => {
              console.log("success: " + JSON.stringify(res2));
              common_vendor.index.showToast({
                title: "\u767B\u5F55\u6210\u529F"
              });
            }
          });
        },
        fail: (err) => {
          console.log("fail: " + JSON.stringify(err));
        }
      });
    }
    const popup = common_vendor.ref(null);
    function openPopup() {
      popup.value.open();
    }
    function closePopup() {
      popup.value.close();
    }
    function onChooseAvatar(e) {
      userData.avatarImg = e.detail.avatarUrl;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: userData.isAuthor == false
      }, userData.isAuthor == false ? {
        b: common_vendor.o(openPopup)
      } : {
        c: userData.avatarImg,
        d: common_vendor.t(userData.nickName),
        e: common_vendor.p({
          text: "\u666E\u901A\u7528\u6237",
          type: "warning"
        }),
        f: common_vendor.o(($event) => myDetail())
      }, {
        g: common_vendor.f(modeList.list, (mode, k0, i0) => {
          return {
            a: common_vendor.t(mode.val),
            b: common_vendor.t(mode.text),
            c: mode.id,
            d: common_vendor.o(($event) => modeDetail(mode.id), mode.id)
          };
        }),
        h: common_vendor.f(orderList.list, (order, k0, i0) => {
          return {
            a: order.url,
            b: common_vendor.t(order.title),
            c: common_vendor.o(($event) => orderDetail(order.id), order.id),
            d: order.id
          };
        }),
        i: common_vendor.f(featureList.list, (feature, k0, i0) => {
          return {
            a: feature.url,
            b: common_vendor.t(feature.name),
            c: feature.id,
            d: common_vendor.o(($event) => modeUrl(feature.id), feature.id)
          };
        }),
        j: userData.avatarImg,
        k: common_vendor.o(onChooseAvatar),
        l: common_vendor.o(closePopup),
        m: common_vendor.o(getWxFile),
        n: common_vendor.sr(popup, "3ba1d9e0-1", {
          "k": "popup"
        }),
        o: common_vendor.o(_ctx.onAuthorization),
        p: common_vendor.p({
          ["is-mask-click"]: false,
          type: "center",
          ["background-color"]: "#fff",
          animation: true
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "G:/Project/market/wx_market/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
