package response

type Banner struct {
	Url         string `json:"url" gorm:"column:url;comment:图片地址"`
	Path        string `json:"path" gorm:"column:path;comment:轮播图跳转地址"`
	Description string `json:"description" gorm:"column:description;comment:轮播介绍"`
}
