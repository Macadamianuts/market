package service

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/banner/model"
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/banner/model/request"
	"github.com/pkg/errors"
)

var Banner = new(banner)

type banner struct{}

func (b *banner) Create(info request.BannerCreate) (err error) {
	create := info.Create()
	err = global.GVA_DB.Create(&create).Error
	if err != nil {
		return errors.Wrap(err, "创建轮播图失败")
	}
	return
}

func (b *banner) GetList(pageInfo request.BannerList) (list []model.Banner, err error) {
	var entities []model.Banner
	var count int64
	err = global.GVA_DB.Scopes(pageInfo.Paginate()).Count(&count).Find(&entities).Error
	if err != nil {
		return nil, errors.Wrap(err, "查询轮播图数据失败")
	}
	return entities, nil
}
