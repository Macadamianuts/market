package api

import (
	"fmt"
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/wechat/model/request"
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/wechat/service"
	"github.com/gin-gonic/gin"
	"net/http"
)

var Wechat = new(wechat)

type wechat struct{}

func (w wechat) Analysis(c *gin.Context) {
	var info request.Analysis
	err := c.ShouldBindJSON(&info)
	if err != nil {
		return
	}
	analysis, err := service.Wechat.Analysis(info)
	if err != nil {
		fmt.Printf("%+v", err)
		return
	}
	c.JSON(http.StatusOK, analysis)
}
