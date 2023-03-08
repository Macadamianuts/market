package common

import (
	"gorm.io/gorm"
)

type GetById struct {
	ID uint `json:"id" form:"id"`
}

type GetByIds struct {
	IDs []uint `json:"ids" form:"ids"`
}

// PageInfo Paging common input parameter structure
type PageInfo struct {
	Page     int    `json:"page" form:"page"`         // 页码
	PageSize int    `json:"pageSize" form:"pageSize"` // 每页大小
	Keyword  string `json:"keyword" form:"keyword"`   //关键字
}

func (c *PageInfo) Paginate() func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		switch {
		case c.PageSize > 100:
			c.PageSize = 100
		case c.PageSize <= 0:
			c.PageSize = 10
		}

		offset := (c.Page - 1) * c.PageSize
		return db.Offset(offset).Limit(c.PageSize)
	}
}
