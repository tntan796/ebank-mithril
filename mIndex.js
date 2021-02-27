var root = document.body;
import { toggleNav } from './src/js/index';

var Index = {
    view: function() {
        return m("main", [
            m("div", {"class":"sidenav pt-2","id":"mySidenav"},
              [
                m("div", {"class":"logo__menu d-flex justify-content-between pl-2 pr-2"},
                  [
                    m("img", {"class":"icon","src":"./src/images/008-call center.png","alt":""}),
                    m("i", {"class":"fas fa-bars",onclick: toggleNav()})
                  ]
                ),
                m("ul", {"class":"body__menu mt-2"},
                  [
                    m("li", 
                      m("a", {"href":""}, 
                        "About"
                      )
                    ),
                    m("li", 
                      m("a", {"href":""}, 
                        "Services"
                      )
                    ),
                    m("li",
                      [
                        m("button", {"class":"dropdown-btn"},
                          [
                            "Dropdown ",
                            m("i", {"class":"fa fa-caret-down"})
                          ]
                        ),
                        m("div", {"class":"dropdown-container"}, 
                          m("ul", {"class":"body__menu"},
                            [
                              m("li", 
                                m("a", {"href":""}, 
                                  "About"
                                )
                              ),
                              m("li", 
                                m("a", {"href":""}, 
                                  "About"
                                )
                              )
                            ]
                          )
                        )
                      ]
                    )
                  ]
                )
              ]
            ), 
            m("div", {"class":"container","id":"main"},
              [
                m("div", {"class":"row"}, 
                  m("div", {"class":"col-sm-12"}, 
                    m("div", {"class":"page-header d-flex justify-content-between align-items-center"},
                      [
                        m("label", 
                          "Trang chủ"
                        ),
                        m("div", {"class":"user-info d-flex justify-content-between align-items-center"},
                          [
                            m("i", {"class":"fas fa-bell mr-2"}),
                            m("img", {"class":"icon avatar mr-2","src":"./src/images/008-call center.png","alt":""}),
                            m("label", {"class":"username mr-2"}, 
                              "Tân Tano"
                            ),
                            m("i", {"class":"fas fa-chevron-down"})
                          ]
                        )
                      ]
                    )
                  )
                ),
                m("div", {"class":"row mt-3"}, 
                  m("div", {"class":"col-sm-12"}, 
                    m("div", {"class":"page-body"},
                      [
                        m("div", {"class":"row"}, 
                          m("div", {"class":"col-sm-6 m-auto"}, 
                            m("div", {"class":"account-info "}, 
                              m("div",
                                [
                                  m("div", {"class":"card-name"}, 
                                    " Trần Ngọc Tân "
                                  ),
                                  m("div", {"class":"card-number"}, 
                                    " 0210 5921 501 "
                                  ),
                                  m("div", {"class":"card-balances d-flex justify-content-between align-items-center"},
                                    [
                                      m("span", {"class":"d-flex align-items-center"},
                                        [
                                          m("span", {"class":"money mr-2"}, 
                                            "728,555"
                                          ),
                                          " VND ",
                                          m("i", {"class":"fas fa-eye ml-2 mr-2"}),
                                          m("i", {"class":"fas fa-eye-slash","hidden":"hidden"})
                                        ]
                                      ),
                                      m("span", {"class":"d-flex justify-content-between align-items-center"},
                                        [
                                          " Chi tiết ",
                                          m("i", {"class":"fas fa-chevron-right ml-2"})
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            )
                          )
                        ),
                        m("div", {"class":"row mt-2"}, 
                          m("div", {"class":"col-sm-6"}, 
                            m("div", {"class":"search-form"}, 
                              m("input", {"class":"form-control","type":"text","placeholder":"Tìm kiếm dịch vụ"})
                            )
                          )
                        ),
                        m("div", {"class":"row mt-2"}, 
                          m("div", {"class":"col-sm-12"}, 
                            m("div", {"class":"list-card-link"},
                              [
                                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                                  m("a", {"class":"card-link","style":{"position":"relative"}},
                                    [
                                      m("div", {"class":"card-img"}, 
                                        m("img", {"src":"./src/images/index/transfer.png"})
                                      ),
                                      m("div", {"class":"card-name card-color"}, 
                                        "Chuyển khoản"
                                      )
                                    ]
                                  )
                                ),
                                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                                  m("a", {"class":"card-link","style":{"position":"relative"}},
                                    [
                                      m("div", {"class":"card-img"}, 
                                        m("img", {"src":"./src/images/index/bill.png"})
                                      ),
                                      m("div", {"class":"card-name card-color"}, 
                                        "Hóa đơn"
                                      )
                                    ]
                                  )
                                ),
                                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                                  m("a", {"class":"card-link","style":{"position":"relative"}},
                                    [
                                      m("div", {"class":"card-img"}, 
                                        m("img", {"src":"./src/images/index/phone-topup.png"})
                                      ),
                                      m("div", {"class":"card-name card-color"}, 
                                        "Nạp tiền điện thoại"
                                      )
                                    ]
                                  )
                                ),
                                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                                  m("a", {"class":"card-link","style":{"position":"relative"}},
                                    [
                                      m("div", {"class":"card-img"}, 
                                        m("img", {"src":"./src/images/index/inquiry.png"})
                                      ),
                                      m("div", {"class":"card-name card-color"}, 
                                        "Tra Cứu"
                                      )
                                    ]
                                  )
                                ),
                                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                                  m("a", {"class":"card-link","style":{"position":"relative"}},
                                    [
                                      m("div", {"class":"card-img"}, 
                                        m("img", {"src":"./src/images/index/saving.png"})
                                      ),
                                      m("div", {"class":"card-name card-color"}, 
                                        "Tiết Kiệm"
                                      )
                                    ]
                                  )
                                ),
                                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                                  m("a", {"class":"card-link","style":{"position":"relative"}},
                                    [
                                      m("div", {"class":"card-img"}, 
                                        m("img", {"src":"./src/images/index/card.png"})
                                      ),
                                      m("div", {"class":"card-name card-color"}, 
                                        "Quản Lý Thẻ"
                                      )
                                    ]
                                  )
                                ),
                                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                                  m("a", {"class":"card-link","style":{"position":"relative"}},
                                    [
                                      m("div", {"class":"card-img"}, 
                                        m("img", {"src":"./src/images/index/loan.png"})
                                      ),
                                      m("div", {"class":"card-name card-color"}, 
                                        "Khoản Vay"
                                      )
                                    ]
                                  )
                                ),
                                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                                  m("a", {"class":"card-link","style":{"position":"relative"}},
                                    [
                                      m("div", {"class":"card-img"}, 
                                        m("img", {"src":"./src/images/index/loyalty.png"})
                                      ),
                                      m("div", {"class":"card-name card-color"}, 
                                        "Khách Hàng Thân Thiết"
                                      )
                                    ]
                                  )
                                ),
                                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                                  m("a", {"class":"card-link","style":{"position":"relative"}},
                                    [
                                      m("div", {"class":"card-img"}, 
                                        m("img", {"src":"./src/images/index/ewallet.png"})
                                      ),
                                      m("div", {"class":"card-name card-color"}, 
                                        "Ví Điện Tử"
                                      )
                                    ]
                                  )
                                ),
                                m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                                  m("a", {"class":"card-link","style":{"position":"relative"}},
                                    [
                                      m("div", {"class":"card-img"}, 
                                        m("img", {"src":"./src/images/index/abroad.png"})
                                      ),
                                      m("div", {"class":"card-name card-color"}, 
                                        "Chuyển Tiền Du Học"
                                      )
                                    ]
                                  )
                                )
                              ]
                            )
                          )
                        )
                      ]
                    )
                  )
                )
              ]
            )
          ])
    }
}

m.mount(root, Index)