package router

import (
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/banner/api"
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/banner/response"
	"github.com/gin-gonic/gin"
)

type Banner struct {
	router *gin.RouterGroup
}

func NewBanner(router *gin.RouterGroup) *Banner {
	return &Banner{router}
}

func (r Banner) Init() {
	group := r.router.Group("banner")
	{
		group.POST("create", response.Handler()(api.Banner.Create))
		group.POST("delete", response.Handler()(api.Banner.DeleteById))
	}
}
