package request

import (
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/banner/common"
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/banner/model"
)

type BannerCreate struct {
	Url         string `json:"url"`
	Path        string `json:"path"`
	Description string `json:"description"`
}

func (r BannerCreate) Create() model.Banner {
	return model.Banner{
		Url:         r.Url,
		Path:        r.Path,
		Description: r.Description,
	}
}

type BannerUpdate struct {
	Url         string `json:"url"`
	Path        string `json:"path"`
	Description string `json:"description"`
}

type BannerList struct {
	common.PageInfo
}
