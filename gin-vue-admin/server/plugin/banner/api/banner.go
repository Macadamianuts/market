package api

import (
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/banner/model/request"
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/banner/response"
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/banner/service"
	"github.com/gin-gonic/gin"
	"net/http"
)

var Banner = new(banner)

type banner struct{}

func (b *banner) Create(c *gin.Context) response.Response {
	var info request.BannerCreate
	err := c.ShouldBindJSON(&info)
	if err != nil {
		return response.Response{Code: http.StatusBadRequest, Error: err, Message: "请求参数错误"}
	}
	err = service.Banner.Create(info)
	if err != nil {
		return response.Response{Code: http.StatusInternalServerError, Error: err}
	}
	return response.Response{Code: http.StatusOK, Message: "创建成功"}
}

func (b banner) GetList(c *gin.Context) response.Response {
	var pageInfo request.BannerList
	err := c.ShouldBindJSON(&pageInfo)
	if err != nil {
		return response.Response{
			Code:    http.StatusBadRequest,
			Message: "传递参数类型有误",
		}
	}
	list, ok := service.Banner.GetList(pageInfo)
	if ok != nil {
		return response.Response{
			Code:  http.StatusInternalServerError,
			Error: err,
		}
	}
	return response.Response{
		Code:    http.StatusOK,
		Data:    list,
		Message: "查询成功",
	}
}
