package wechat

import (
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/wechat/router"
	"github.com/gin-gonic/gin"
)

var Plugin = new(plugin)

type plugin struct {
}

func (p plugin) Register(group *gin.RouterGroup) {
	router.NewWechat(group).Init()
}

func (p plugin) RouterPath() string {
	return ""
}
