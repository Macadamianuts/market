package request

type Avatar struct {
	Oppid     string `json:"open_id"`
	JsCode    string `json:"js_code"`
	GrantType string `json:"grant_type"`
	Secret    string `json:"secret"`
}

type Analysis struct {
	Code string `json:"code"`
}
