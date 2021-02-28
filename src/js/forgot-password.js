

var ForgotPassword = {
    view: function(vnode) {
        return m("div", {"class":"reset-password-container"},
        [
          m("div", {"class":"reset-password"},
            [
              m("div", {"class":"reset-header"},
                [
                  m("div", {"class":"logo-header"}, 
                    m("div", {"class":"header-non-login"}, 
                      m("div", {"class":"bg-header"}, 
                        m("a", {"href":"https://tpb.vn","target":"_blank"}, 
                          m("img", {"src":"./src/images/icons/forgot-password/logo.svg"})
                        )
                      )
                    )
                  ),
                  m("div", {"class":"col-sm-8 breadscrumb"}, 
                    m("div", {"class":"breadscrumb-wrapper"}, 
                      m("div", {"class":"breadscrumb"}, 
                        m("a", {"class":"back-btn","href":"./login.html"},
                          [
                            m("img", {"src":"./src/images/icons/forgot-password/back.png"}),
                            " Trở về trang trước "
                          ]
                        )
                      )
                    )
                  )
                ]
              ),
              m("div", {"class":"reset-content"},
                [
                  m("div", {"class":"header-page"}, 
                    "Khôi phục mật khẩu"
                  ),
                  m("div", {"class":"col-sm-8 content-page"}, 
                    m("div", {"class":"enter-ic"},
                      [
                        m("div", {"class":"title"}, 
                          " Nhập số CMND/CCCD/Hộ chiếu "
                        ),
                        m("div", {"class":"group-input"},
                          [
                            m("div", {"class":"input-type select-container"}, 
                              m("div", {"class":"select-container"},
                                [
                                  m("div", {"class":"select-container__wrap-top"},
                                    [
                                      m("span", {"class":"select-container__placeholder"}, 
                                        "Loại giấy tờ"
                                      ),
                                      m("img", {"class":"select-container__icon","src":"./src/images/icons/forgot-password/chevron-right-solid.svg","width":"8px"})
                                    ]
                                  ),
                                  m("div", {"class":"select-container__wrap-items"},
                                    [
                                      m("div", {"class":"select-container__select-option"}, 
                                        m("div", {"class":"text"}, 
                                          "CMND 9/12 Số"
                                        )
                                      ),
                                      m("div", {"class":"select-container__select-option"}, 
                                        m("div", {"class":"text"}, 
                                          "CCCD 12 Số"
                                        )
                                      ),
                                      m("div", {"class":"select-container__select-option"}, 
                                        m("div", {"class":"text"}, 
                                          "Hộ Chiếu"
                                        )
                                      )
                                    ]
                                  )
                                ]
                              )
                            ),
                            m("div", {"class":"input input-ic"}, 
                              m("input", {"class":"input-ic-1","type":"text","placeholder":"Số CMND/CCCD/Hộ Chiếu"})
                            )
                          ]
                        ),
                        m("div", {"class":"btn-action"}, 
                          m("button", {"class":"btn btn-primary btn-next"}, 
                            "Tiếp tục"
                          )
                        )
                      ]
                    )
                  )
                ]
              )
            ]
          ),
          m("div", {"class":"footer"}, 
            m("div",
              [
                m("div", {"class":"footer-1"},
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
                          m("img", {"src":"./src/images/icons/forgot-password/download-ios.svg"})
                        ),
                        m("a", {"class":"ml-4","href":"https://play.google.com/store/apps/details?id=com.tpb.mb.gprsandroid&amp;hl=en","target":"_blank"}, 
                          m("img", {"src":"./src/images/icons/forgot-password/download-android.svg"})
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
      );
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    m.mount(document.body, ForgotPassword);

    window.onclick = function(event) {
        console.log(event.target);

        // Loại bỏ hiển thị item khi click ra ngoài Loại giấy tờ
        const container = document.querySelector('.select-container__wrap-top');
        if (!container.contains(event.target)) {
            document.querySelector('.select-container__wrap-items').classList.remove('active');
            document.querySelector('.select-container__icon').classList.remove('rotate-icon');
        }
       
      }
    
    // Click on select document type
    document.querySelector('.select-container__wrap-top').addEventListener("click", function() {
        const documentTypeItems = document.querySelector('.select-container__wrap-items');
        const icon = document.querySelector('.select-container__icon');
        if (documentTypeItems && documentTypeItems.classList.contains('active')) {
            documentTypeItems.classList.remove('active');
            icon.classList.remove('rotate-icon');
        } else {
            documentTypeItems.classList.add('active');
            icon.classList.add('rotate-icon');
        }
    });

});