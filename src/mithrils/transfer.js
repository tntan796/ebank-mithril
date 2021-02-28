var m = require("mithril")

module.exports = {
    oninit: function(vnode) {
    },
    oncreate: function(vnode) {
        document.querySelector('head').innerHTML += '<link rel="stylesheet" href="./src/styles/transfer.css"/>';
    },
    view: function(vnode) {
        return m("div.content-wrap", [
            m("div", {"class":"list-card-link"},
              [
                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                  m("a", {"class":"card-link","style":{"position":"relative"}},
                    [
                      m("div", {"class":"card-img"}, 
                        m("img", {"src":"./src/images/icons/transfer/internal.png"})
                      ),
                      m("div", {"class":"card-name card-color"}, 
                        "Chuyển tiền trong TPBank"
                      )
                    ]
                  )
                ),
                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                  m("a", {"class":"card-link","style":{"position":"relative"}},
                    [
                      m("div", {"class":"card-img"}, 
                        m("img", {"src":"./src/images/icons/transfer/interbank.png"})
                      ),
                      m("div", {"class":"card-name card-color"}, 
                        "Chuyển tiền liên ngân hàng"
                      )
                    ]
                  )
                ),
                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                  m("a", {"class":"card-link","style":{"position":"relative"}},
                    [
                      m("div", {"class":"card-img"}, 
                        m("img", {"src":"./src/images/icons/transfer/napas.png"})
                      ),
                      m("div", {"class":"card-name card-color"}, 
                        "Chuyển tiền qua thẻ ATM"
                      )
                    ]
                  )
                ),
                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                  m("a", {"class":"card-link","style":{"position":"relative"}},
                    [
                      m("div", {"class":"card-img"}, 
                        m("img", {"src":"./src/images/icons/transfer/icons-stock.png"})
                      ),
                      m("div", {"class":"card-name card-color"}, 
                        "Chuyển tiền chứng khoán"
                      )
                    ]
                  )
                ),
                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                  m("a", {"class":"card-link","style":{"position":"relative"}},
                    [
                      m("div", {"class":"card-img"}, 
                        m("img", {"src":"./src/images/icons/transfer/batch.png"})
                      ),
                      m("div", {"class":"card-name card-color"}, 
                        "Chuyển tiền theo danh sách"
                      )
                    ]
                  )
                ),
                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                  m("a", {"class":"card-link","style":{"position":"relative"}},
                    [
                      m("div", {"class":"card-img"}, 
                        m("img", {"src":"./src/images/icons/transfer/schedule.png"})
                      ),
                      m("div", {"class":"card-name card-color"}, 
                        "Chuyển tiền theo lịch"
                      )
                    ]
                  )
                ),
                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                  m("a", {"class":"card-link","style":{"position":"relative"}},
                    [
                      m("div", {"class":"card-img"}, 
                        m("img", {"src":"./src/images/icons/transfer/form.png"})
                      ),
                      m("div", {"class":"card-name card-color"}, 
                        "Mẫu chuyển tiền"
                      )
                    ]
                  )
                )
              ]
            ), 
            m("div", {"class":"transfer-detail"},
              [
                m("div", {"class":"list-mobile list-mobile-hidden text-link"},
                  [
                    " Xem danh bạ ",
                    m("span", 
                      m("i", {"class":"icon-right"})
                    )
                  ]
                ),
                m("div", {"class":"transfer-body"}, 
                  m("div", {"class":"empty-favorites text-center"},
                    [
                      m("span", {"class":"title"}, 
                        "Danh sách chuyển tiền ưa thích"
                      ),
                      m("img", {"class":"mt-3","src":"./src/images/icons/transfer/contact-list.png"}),
                      m("span", {"class":"text-center mt-2 content"},
                        [
                          "Danh sách còn trống. ",
                          m("span", {"class":"content-action hover-action","data-toggle":"modal","data-target":"#app-favorites"}, 
                            "Bấm vào đây "
                          ),
                          " để thêm tài khoản thường xuyên sử dụng giao dịch"
                        ]
                      )
                    ]
                  )
                )
              ]
            ), 
            m("div", {"class":"modal fade","id":"app-favorites","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}, 
              m("div", {"class":"modal-dialog","role":"document"}, 
                m("div", {"class":"modal-content"},
                  [
                    m("div", {"class":"modal-header"},
                      [
                        m("h5", {"class":"modal-title","id":"exampleModalLabel"}, 
                          "Danh bạ chuyển tiền"
                        ),
                        m("button", {"class":"close","type":"button","data-dismiss":"modal","aria-label":"Close"}, 
                          m("span", {"aria-hidden":"true"}, 
                            m.trust("&times;")
                          )
                        )
                      ]
                    ),
                    m("div", {"class":"modal-body"}, 
                      m("div", {"class":"favorite-container"},
                        [
                          m("div", {"class":"favorite-body-responsive"}, 
                            m("div", {"class":"favorite-body favorite-padding"},
                              [
                                m("div", {"class":"favorite-tabs favorite-actived"}, 
                                  m("span", {"class":"favorite-key"}, 
                                    " Trong TPBank "
                                  )
                                ),
                                m("div", {"class":"favorite-tabs"}, 
                                  m("span", {"class":"favorite-key"}, 
                                    " Liên Ngân Hàng "
                                  )
                                ),
                                m("div", {"class":"favorite-tabs"}, 
                                  m("span", {"class":"favorite-key"}, 
                                    " Thẻ ATM"
                                  )
                                ),
                                m("div", {"class":"favorite-tabs"}, 
                                  m("span", {"class":"favorite-key"}, 
                                    " Chứng Khoán "
                                  )
                                )
                              ]
                            )
                          ),
                          m("div", {"class":"favorite-content"},
                            [
                              m("div", {"class":"favorite-padding"}, 
                                m("div", {"class":"searching-container ng-untouched ng-pristine ng-valid"},
                                  [
                                    m("img", {"class":"searching-icon","src":"./src/images/icons/transfer/ic_search.svg"}),
                                    m("input", {"class":"searching-input ng-untouched ng-pristine ng-valid","formcontrolname":"object","placeholder":"Tìm kiếm"})
                                  ]
                                )
                              ),
                              m("div", {"class":"favorite-scroll"},
                                [
                                  m("div", {"class":"favorite-detail"},
                                    [
                                      m("div", {"class":"favorite-name favorite-margin-bottom"},
                                        [
                                          m("span", {"class":"favorite-text-bold favorite-text-size"}, 
                                            "FPT SOFTWARE COMPANY LIMITED"
                                          ),
                                          m("img", {"class":"favorite-icon","src":"./src/images/icons/transfer/icons-star.svg"})
                                        ]
                                      ),
                                      m("div", {"class":"favorite-account"},
                                        [
                                          m("span", {"class":"favorite-text-size"}, 
                                            "0000 8889 006"
                                          ),
                                          m("img", {"class":"favorite-icon","src":"./src/images/icons/transfer/icons-trash.svg"})
                                        ]
                                      )
                                    ]
                                  ),
                                  m("div", {"class":"favorite-detail"},
                                    [
                                      m("div", {"class":"favorite-name favorite-margin-bottom"},
                                        [
                                          m("span", {"class":"favorite-text-bold favorite-text-size"}, 
                                            "NGUYEN TIEN DOAN"
                                          ),
                                          m("img", {"class":"favorite-icon","src":"./src/images/icons/transfer/icons-star.svg"})
                                        ]
                                      ),
                                      m("div", {"class":"favorite-account"},
                                        [
                                          m("span", {"class":"favorite-text-size"}, 
                                            "0416 6846 601"
                                          ),
                                          m("img", {"class":"favorite-icon","src":"./src/images/icons/transfer/icons-trash.svg"})
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          m("img", {"class":"icon-add","routerlink":"/main/transfer/contact/create","src":"./src/images/icons/transfer/ic_add-fund-transfer.svg","tabindex":"0"})
                        ]
                      )
                    )
                  ]
                )
              )
            )
          ])
    }
}