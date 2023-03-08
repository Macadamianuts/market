package banner

import (
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/banner/router"
	"github.com/gin-gonic/gin"
)

var Plugin = new(plugin)

type plugin struct{}

func (p plugin) Register(group *gin.RouterGroup) {
	router.NewBanner(group).Init()
}

func (p plugin) RouterPath() string {
	return ""
}
