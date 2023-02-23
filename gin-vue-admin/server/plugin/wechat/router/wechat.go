package router

import (
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/wechat/api"
	"github.com/gin-gonic/gin"
)

type Wechat struct {
	router *gin.RouterGroup
}

func NewWechat(router *gin.RouterGroup) *Wechat {
	return &Wechat{router: router}
}

func (r Wechat) Init() {
	group := r.router.Group("wechat")
	{
		group.POST("analysis", api.Wechat.Analysis)
	}
}
