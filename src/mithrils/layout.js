// src/views/Layout.js
var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m("div", {"class":"main-container","ondragstart":"return false;","ondrop":"return false;"},
        [
          m("div", {"class":"left","id":"main-menu"},
            [
              m("div", {"class":"main-logo"}, 
                m("a", {"href":"https://tpb.vn","target":"_blank"}, 
                  m("img", {src:"./src/images/icons/main/logo.png"})
                )
              ),
              m("div", {"class":"menu"},
                [
                  m("div", {"class":"menu-group"},
                    [
                      m("a", {"class":"menu-item parent active","href":"#!/index"},
                        [
                          m("div", {"class":"menu-icon"}, 
                            m("img", {"src":"./src/images/icons/main/home-active.png"})
                          ),
                          m("div", {"class":"menu-name"}, 
                            "Trang chủ"
                          ),
                          m("i", {"class":"fas fa-chevron-up"})
                        ]
                      ),
                      m("div", {"class":"menu-item-list active"},
                        [
                          m("a", {"class":"menu-item","href":"#!/transfer"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Chuyển khoản"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/bill"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Hoá đơn"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/mobile"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Nạp tiền điện thoại"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/saving"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Tiết kiệm"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/card"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Quản lý thẻ"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/loan"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Khoản vay"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/loyalty"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Khách hàng thân thiết"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/ewallet"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Ví điện tử"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/overseas-study"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Chuyển Tiền Du Học"
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  m("div", {"class":"menu-group"},
                    [
                      m("a", {"class":"menu-item parent","href":"/retail/vX/main/inquiry"},
                        [
                          m("div", {"class":"menu-icon"}, 
                            m("img", {"src":"./src/images/icons/main/inquiry-inactive.png"})
                          ),
                          m("div", {"class":"menu-name"}, 
                            "Tra cứu"
                          ),
                          m("i", {"class":"fas fa-chevron-down"})
                        ]
                      ),
                      m("div", {"class":"menu-item-list"},
                        [
                          m("a", {"class":"menu-item","href":"/retail/vX/main/inquiry/account"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Tài khoản"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/inquiry/saving"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Tiết kiệm"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/inquiry/loan"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Khoản vay"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/inquiry/credit-card"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Thẻ tín dụng"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/inquiry/transfer"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Lệnh chuyển tiền"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/inquiry/general"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Thông Tin Tổng Hợp"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/inquiry/vat"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Hóa Đơn VAT"
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  m("div", {"class":"menu-group"},
                    [
                      m("a", {"class":"menu-item parent","href":"/retail/vX/main/setting"},
                        [
                          m("div", {"class":"menu-icon"}, 
                            m("img", {"src":"./src/images/icons/main/setting-inactive.png"})
                          ),
                          m("div", {"class":"menu-name"}, 
                            "Cài Đặt"
                          ),
                          m("i", {"class":"fas fa-chevron-down"})
                        ]
                      ),
                      m("div", {"class":"menu-item-list"},
                        [
                          m("a", {"class":"menu-item","href":"/retail/vX/main/setting/upgrade"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Nâng cấp tài khoản"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/setting/user"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Thông tin tài khoản"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/setting/change-password"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Đổi mật khẩu"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/setting/auth-method"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Phương thức xác thực GD"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/setting/default-account"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Tài khoản liên kết với SĐT"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/setting/device-management"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Quản lý thiết bị"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/setting/faq"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Câu hỏi thường gặp"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/setting/support"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Liên hệ hỗ trợ"
                              )
                            ]
                          ),
                          m("a", {"class":"menu-item","href":"/retail/vX/main/setting/referring"},
                            [
                              m("div", {"class":"menu-icon"}),
                              m("div", {"class":"menu-name"}, 
                                "Giới thiệu bạn bè"
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              m("div", {"class":"menu-logo"}, 
                m("img", {"src":"./src/images/icons/main/ic_menu_overlay.png"})
              )
            ]
          ),
          m("div", {"class":"right"},
            [
              m("div", {"class":"main-head-body"},
                [
                  m("div", {"class":"page-header"},
                    [
                      m("div", {"class":"top-header"},
                        [
                          m("img", {"id":"hamburger-menu","src":"./src/images/icons/main/ic_menu.png"}),
                          m("a", {"href":"https://tpb.vn","target":"_blank"}, 
                            m("img", {"class":"logo","src":"./src/images/icons/main/logo.png"})
                          )
                        ]
                      ),
                      m("div", {"class":"left-text"}, 
                        m("div",
                          [
                            m("div", {"class":"breadcrumb"},
                              [
                                m("a", {"class":"cursor-pointer"},
                                  [
                                    "Trang chủ ",
                                    m("i", {"class":"fas fa-chevron-right"})
                                  ]
                                ),
                                m("a", {"class":"cursor-pointer"}, 
                                  "Chuyển khoản "
                                )
                              ]
                            ),
                            m("h1", {"class":"page-title"}, 
                              "Chuyển Khoản"
                            )
                          ]
                        )
                      ),
                      m("div", {"class":"user-info","id":"globalUserInfo"},
                        [
                          m("i", {"class":"fas fa-bell","id":"notification-btn","tabindex":"0"}, 
                            m("div", {"class":"notification-active-icon"})
                          ),
                          m("div", {"id":"user-btn"},
                            [
                              m("span", {"class":"avatar"}, 
                                m("div", {"class":"avatar-container","style":{"width":"30px","height":"30px"}}, 
                                  m("div", {"class":"avatar-content","style":{"text-align":"center","border-radius":"100%","text-transform":"uppercase","color":"rgb(255, 255, 255)","background-color":"rgb(127, 140, 141)","font-size":"12px","line-height":"30px","font-weight":"500"}}, 
                                    " TT "
                                  )
                                )
                              ),
                              m("span", {"class":"user-name"}, 
                                "TRAN NGOC TAN"
                              ),
                              m("i", {"class":"fas fa-chevron-down"})
                            ]
                          ),
                          m("div", {"class":"user-menu","hidden":"hidden"}, 
                            m("a",
                              [
                                m("i", {"class":"fas fa-power-off"}),
                                " Thoát "
                              ]
                            )
                          )
                        ]
                      )
                    ]
                  ),
                  m("div", {"class":"page-body"},
                    [
                      m("div", {"class":"left"}, 
                        m("div", {"class": "content-wrap"},
                          vnode.children
                        )
                      ),
                      m("div", {"class":"right"},
                        [
                          m("div", {"class":"quick-links"},
                            [
                              m("div", {"class":"title"}, 
                                " Tiện ích nhanh "
                              ),
                              m("div", {"class":"body"},
                                [
                                  m("a", {"routerlink":"/main/transfer/internal","href":"/retail/vX/main/transfer/internal"},
                                    [
                                      "Chuyển tiền trong TPBank ",
                                      m("i", {"class":"fas fa-chevron-right"})
                                    ]
                                  ),
                                  m("a", {"routerlink":"/main/transfer/interbank","href":"/retail/vX/main/transfer/interbank"},
                                    [
                                      "Chuyển tiền liên ngân hàng ",
                                      m("i", {"class":"fas fa-chevron-right"})
                                    ]
                                  ),
                                  m("a", {"routerlink":"/main/bill","href":"/retail/vX/main/bill"},
                                    [
                                      "Thanh toán hoá đơn ",
                                      m("i", {"class":"fas fa-chevron-right"})
                                    ]
                                  ),
                                  m("a", {"routerlink":"/main/inquiry/credit-card","href":"/retail/vX/main/inquiry/credit-card"},
                                    [
                                      "Tra cứu thẻ tín dụng ",
                                      m("i", {"class":"fas fa-chevron-right"})
                                    ]
                                  ),
                                  m("a", {"routerlink":"/main/mobile","href":"/retail/vX/main/mobile"},
                                    [
                                      "Nạp tiền điện thoại ",
                                      m("i", {"class":"fas fa-chevron-right"})
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          m("div", {"class":"mt-4"}, 
                            m("div", {"class":"banner-swiper-container swiper-container swiper-container-initialized swiper-container-horizontal"},
                              [
                                m("div", {"class":"swiper-wrapper","style":{"transition-duration":"0ms","transform":"translate3d(-300px, 0px, 0px)"}},
                                  [
                                    m("div", {"class":"swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev swiper-slide-duplicate-next","data-swiper-slide-index":"1","style":{"width":"270px","margin-right":"30px"}}, 
                                      m("a", {"target":"_blank","href":"https://tpb.vn/khuyen-mai/ebanking/vui-tet-moi-ca-nam-phoi-phoi-khi-gui-tiet-kiem-tren-app-tpbank"}, 
                                        m("img", {"class":"w-100","alt":"","src":"https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/86a4d975-712f-49f0-9ae0-bded776fc4d7","style":{"border-radius":"5px","height":"100%"}})
                                      )
                                    ),
                                    m("div", {"class":"swiper-slide swiper-slide-active","data-swiper-slide-index":"0","style":{"width":"270px","margin-right":"30px"}}, 
                                      m("a", {"target":"_blank","href":"https://tpb.vn/khuyen-mai/ebanking/tung-con-hung-54665-mon-qua-gia-tri-tren-app-tpbank"}, 
                                        m("img", {"class":"w-100","alt":"","src":"https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/acdd6d66-7b82-4265-95ee-c6d4021e9c28","style":{"border-radius":"5px","height":"100%"}})
                                      )
                                    ),
                                    m("div", {"class":"swiper-slide swiper-slide-next swiper-slide-duplicate-prev","data-swiper-slide-index":"1","style":{"width":"270px","margin-right":"30px"}}, 
                                      m("a", {"target":"_blank","href":"https://tpb.vn/khuyen-mai/ebanking/vui-tet-moi-ca-nam-phoi-phoi-khi-gui-tiet-kiem-tren-app-tpbank"}, 
                                        m("img", {"class":"w-100","alt":"","src":"https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/86a4d975-712f-49f0-9ae0-bded776fc4d7","style":{"border-radius":"5px","height":"100%"}})
                                      )
                                    ),
                                    m("div", {"class":"swiper-slide swiper-slide-duplicate","data-swiper-slide-index":"0","style":{"width":"270px","margin-right":"30px"}}, 
                                      m("a", {"target":"_blank","href":"https://tpb.vn/khuyen-mai/ebanking/tung-con-hung-54665-mon-qua-gia-tri-tren-app-tpbank"}, 
                                        m("img", {"class":"w-100","alt":"","src":"https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/acdd6d66-7b82-4265-95ee-c6d4021e9c28","style":{"border-radius":"5px","height":"100%"}})
                                      )
                                    )
                                  ]
                                ),
                                m("div", {"class":"swiper-pagination button-pag swiper-pagination-clickable swiper-pagination-bullets"},
                                  [
                                    m("span", {"class":"swiper-pagination-bullet swiper-pagination-bullet-active","tabindex":"0","role":"button","aria-label":"Go to slide 1"}),
                                    m("span", {"class":"swiper-pagination-bullet","tabindex":"0","role":"button","aria-label":"Go to slide 2"})
                                  ]
                                ),
                                m("div", {"class":"button-area"},
                                  [
                                    m("div", {"class":"btn-slider swiper-button-next","tabindex":"0","role":"button","aria-label":"Next slide"}, 
                                      m("div", {"class":"circle right"})
                                    ),
                                    m("div", {"class":"btn-slider swiper-button-prev","tabindex":"0","role":"button","aria-label":"Previous slide"}, 
                                      m("div", {"class":"circle left"})
                                    )
                                  ]
                                ),
                                m("span", {"class":"swiper-notification","aria-live":"assertive","aria-atomic":"true"})
                              ]
                            )
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              m("app-footer", 
                m("div",
                  [
                    m("div", {"class":"footer-1 d-flex justify-content-between"},
                      [
                        m("div", {"class":"phone-col"},
                          [
                            m("div", {"class":"call-center-text"}, 
                              "Tổng đài hỗ trợ"
                            ),
                            m("div", {"class":"phone-1"},
                              [
                                m("a", {"href":"tel:1900585885"}, 
                                  "1900 58 58 85"
                                ),
                                m("span", {"class":"c247"}, 
                                  "24/7"
                                )
                              ]
                            ),
                            m("div", 
                              m("a", {"href":"tel:02437683683"}, 
                                "(024) 37 683683"
                              )
                            )
                          ]
                        ),
                        m("div", {"class":"footer-column-2"},
                          [
                            m("div", 
                              m("a", {"routerlink":"/main/setting/faq","href":"/retail/vX/main/setting/faq"}, 
                                "Câu hỏi thường gặp"
                              )
                            ),
                            m("div", {"class":"mt-1"}, 
                              m("a", {"href":"https://tpb.vn/quy-dinh-su-dung","target":"_blank"}, 
                                "Điều khoản sử dụng"
                              )
                            ),
                            m("div", {"class":"mt-1"}, 
                              m("a", {"href":"https://tpb.vn/bao-mat-thong-tin-khach-hang","target":"_blank"}, 
                                "Bảo mật thông tin khách hàng"
                              )
                            )
                          ]
                        ),
                        m("div", {"class":"footer-column-3"},
                          [
                            m("div", 
                              m("a", {"href":"https://tpb.vn/lien-he/tim-diem-giao-dich","target":"_blank"}, 
                                "Tìm điểm giao dịch"
                              )
                            ),
                            m("div", {"class":"mt-1"}, 
                              m("a", {"href":"https://tpb.vn/lien-he/tim-vi-tri-live-bank","target":"_blank"}, 
                                "Tìm kiếm vị trí livebank"
                              )
                            )
                          ]
                        ),
                        m("div", {"class":"app-store-col"},
                          [
                            m("div", {"class":"download-desc"}, 
                              "Tải và cài đặt ứng dụng TPBank eBank lên thiết bị di động"
                            ),
                            m("a", {"href":"https://itunes.apple.com/vn/app/tpbank-mobile/id450464147?mt=8","target":"_blank"}, 
                              m("img", {"src":"./src/images/icons/main/download-ios.png"})
                            ),
                            m("a", {"class":"ml-4","href":"https://play.google.com/store/apps/details?id=com.tpb.mb.gprsandroid&amp;hl=en","target":"_blank"}, 
                              m("img", {"src":"./src/images/icons/main/download-android.png"})
                            )
                          ]
                        )
                      ]
                    ),
                    m("div", {"class":"footer-2"},
                      [
                        m("div", {"class":"copyright-text"}, 
                          " © 2019 Ngân hàng TMCP Tiên Phong (TPBank) | www.tpb.vn "
                        ),
                        m("div", {"class":"social text-right"},
                          [
                            m("a", {"href":"https://www.facebook.com/TPBank","target":"_blank"}, 
                              m("i", {"class":"fab fa-facebook-square"})
                            ),
                            m("a", {"class":"ml-3","href":"https://www.youtube.com/user/TienPhongBank","target":"_blank"}, 
                              m("i", {"class":"fab fa-youtube"})
                            ),
                            m("a", {"class":"ml-3","href":"https://www.linkedin.com/company/tpbank","target":"_blank"}, 
                              m("i", {"class":"fab fa-linkedin"})
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              )
            ]
          )
        ]
      )
    }
}