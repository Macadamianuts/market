package response

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"net/http"
)

type Response struct {
	Code    int    `json:"code"`
	Err     string `json:"err"`
	Error   error  `json:"-"`
	Data    any    `json:"data"`
	Message string `json:"message"`
}

type handler func(c *gin.Context) Response

func Handler() func(h handler) gin.HandlerFunc {
	return func(h handler) gin.HandlerFunc {
		return func(c *gin.Context) {
			response := h(c)
			if response.Error != nil {
				response.Err = response.Error.Error()
				if response.Message == "" {
					response.Message = response.Error.Error()
				}
				zap.L().Error(fmt.Sprintf("%+v", response.Error))
			}
			if response.Data == nil {
				type empty struct{}
				response.Data = empty{}
			}
			c.JSON(http.StatusOK, response)
		}
	}
}
