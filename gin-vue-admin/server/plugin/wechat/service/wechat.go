package service

import (
	"encoding/json"
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/wechat/config"
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/wechat/model/request"
	"github.com/flipped-aurora/gin-vue-admin/server/plugin/wechat/model/response"
	"github.com/pkg/errors"
	"io"
	"net/http"
	"net/url"
)

var Wechat = new(wechat)

type wechat struct{}

func (w *wechat) Analysis(info request.Analysis) (*response.Avatar, error) {
	// GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
	baseUrl := "https://api.weixin.qq.com/sns/jscode2session?"
	value := make(url.Values, 4)
	value.Add("grant_type", "authorization_code")
	value.Add("appid", config.AppId)
	value.Add("secret", config.AppSecret)
	value.Add("js_code", info.Code)
	pushUrl := baseUrl + value.Encode()
	analysisResponse, err := http.Get(pushUrl)
	if err != nil {
		return nil, errors.Wrap(err, "http请求失败")
	}
	bytes, err := io.ReadAll(analysisResponse.Body)
	if err != nil {
		return nil, errors.Wrap(err, "获取解析数据失败")
	}
	type Avatar struct {
		SessionKey string `json:"session_key"`
		UnionId    string `json:"unionid"`
		ErrMsg     string `json:"errmsg"`
		ErrCode    string `json:"errcode"`
		OpenId     string `json:"openid"`
	}
	var avatar Avatar
	err = json.Unmarshal(bytes, &avatar)
	if err != nil {
		return nil, errors.Wrap(err, "反序列化失败")
	}
	if avatar.SessionKey == "" && avatar.OpenId == "" {
		return nil, errors.New(avatar.ErrMsg)
	}
	return &response.Avatar{
		SessionKey: avatar.SessionKey,
		Unionid:    avatar.UnionId,
		Openid:     avatar.OpenId,
	}, err
}
