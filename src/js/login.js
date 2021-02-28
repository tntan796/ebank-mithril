var Login = {
    loginInfo: {
      userName: 'Tan',
      password: 'Tano',
      isSubmit: false,
      showPassword: false
    },
    toggleShowPassword: function() {
      Login.loginInfo.showPassword = !Login.loginInfo.showPassword;
    },
    onsumbit: function(vnode) {
      this.loginInfo.isSubmit = true;
      if (this.loginInfo.userName == 'Tan' && this.loginInfo.password == 'Tano') {
        m.route.prefix = "/index.html"
        m.route.set('#!/home')
      } else {
        alert('Nhập sai thông tin rồi');
      }
    },
    view: function(vnode) {
        return m("div", {"class":"login-page"},
        [
          m("div", {"class":"container"},
            [
              m("div", {"class":"top"},
                [
                  m("div", {"class":"left"}, 
                    m("a", {"href":"https://tpb.vn","target":"_blank"}, 
                      m("img", {"class":"login-logo","src":"./src/images/icons/login/logo.svg"})
                    )
                  ),
                  m("div", {"class":"right"},
                    [
                      m("a", {"href":"tel:1900585885"},
                        [
                          m("img", {"src":"./src/images/icons/login/ic_support.svg"}),
                          m("div", 
                            "1900 58 58 85"
                          )
                        ]
                      ),
                      m("a", {"class":"ml-5","href":"https://tpb.vn/lien-he/tim-diem-giao-dich","target":"_blank"},
                        [
                          m("img", {"src":"./src/images/icons/login/ic_search_location.svg"}),
                          m("div", 
                            "Tìm điểm giao dịch"
                          )
                        ]
                      ),
                      m("a", {"class":"ml-5","href":"https://tpb.vn/cong-cu-tinh-toan/ty-gia-ngoai-te","target":"_blank"},
                        [
                          m("img", {"src":"./src/images/icons/login/ic_scale.svg"}),
                          m("div", 
                            "Tra cứu tỷ giá"
                          )
                        ]
                      ),
                      m("a", {"class":"ml-5","href":"./login-en.html"}, 
                        m("img", {"class":"lang-icon","src":"./src/images/icons/login/flag-en.png"})
                      )
                    ]
                  )
                ]
              ),
              m("div", {"class":"content-wrap"},
                [
                  m("div", {"class":"welcome"}, 
                    "Chào mừng đến eBank!"
                  ),
                  m("div", {"class":"mt-4 username-container"},
                    [
                      m("input", {"class":"form-control ng-pristine ng-valid ng-touched","autofocus":"autofocus","maxlength":"50","spellcheck":"false","type":"text","placeholder":"Tên đăng nhập",
                      oninput: function(e) { vnode.state.loginInfo.userName = e.target.value; },
                      value: vnode.state.loginInfo.userName}),
                      m("div", {"class":"tooltip-wrapper","tpbtooltip":""}, 
                        m("i", {"class":"fas fa-info-circle tooltip-trigger"})
                      )
                    ]
                  ),
                  m("div", {"class":"mt-3 password-container"},
                    [
                      m("input", {"class":"form-control input-password ng-untouched ng-pristine ng-valid","maxlength":"32","spellcheck":"false","placeholder":"Mật khẩu",
                      "type":(vnode.state.loginInfo.showPassword ? "" : "password"),
                      oninput: function(e) { vnode.state.loginInfo.password = e.target.value;},
                      value: vnode.state.loginInfo.password}),
                      m("img", {"class": vnode.state.loginInfo.showPassword ? "" : "show-password",
                                "src":"./src/images/icons/login/ic_eye.svg",
                                onclick: vnode.state.toggleShowPassword}),
                      m("img", {"class": vnode.state.loginInfo.showPassword ? "show-password" : "",
                                "src":"./src/images/icons/login/ic_un-eye.svg",
                                onclick: vnode.state.toggleShowPassword})
                    ]
                  ),
                  m("div", {"class":"mt-3 text-center"}, 
                    m("a", {"class":"forget-password","href":"./forgot-password.html"}, 
                      "Quên mật khẩu?"
                    )
                  ),
                  m("div", {"class":"mt-4"}, 
                    m("button", {"class":"btn btn-primary btn-login", onclick : () => vnode.state.onsumbit(vnode)}, 
                      "Đăng Nhập"
                    )
                  ),
                  m("div", {"class":"mt-4 text-center"}, 
                  )
                ]
              )
            ]
          ),
          m("div", {"class":"bottom"}, 
            m("div", {"class":"container"},
              [
                m("div", {"class":"left"}, 
                  " © 2019 Ngân hàng TMCP Tiên Phong (TPBank) | www.tpb.vn "
                ),
                m("div", {"class":"right"},
                  [
                    m("a", {"href":"#"}, 
                      "Câu hỏi thường gặp"
                    ),
                    m("a", {"class":"ml-4","href":"#"}, 
                      "Điều khoản sử dụng"
                    ),
                    m("a", {"class":"ml-4","href":"#"}, 
                      m("img", {"src":"./src/images/icons/login/download-ios-dark.svg","alt":""})
                    ),
                    m("a", {"class":"ml-4","href":"#"}, 
                      m("img", {"src":"./src/images/icons/login/download-android-dark.svg","alt":""})
                    )
                  ]
                )
              ]
            )
          )
        ]
      );
    }
}


document.addEventListener("DOMContentLoaded", function(event) { 
  m.mount(document.body, Login);
});

// setTimeout(() => {
  
// }, 1000);