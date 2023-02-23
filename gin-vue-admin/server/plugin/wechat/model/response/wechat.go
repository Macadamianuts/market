package response

type Avatar struct {
	SessionKey string `json:"session_key"`
	Unionid    string `json:"unionid"`
	Openid     string `json:"openid"`
}
