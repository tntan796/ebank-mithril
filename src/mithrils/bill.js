var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m("main.layout", [
            m("div", {"class":"search-area"}, 
              m("div", {"class":"tab-main"}, 
                m("div", {"class":"nav-tab"},
                  [
                    m("div", {"class":"nav-tab-button active","routerlinkactive":"active","tabindex":"0"}, 
                      "Thanh toán hoá đơn "
                    ),
                    m("div", {"class":"nav-tab-button","routerlinkactive":"active","tabindex":"0","style":{"display":"flex"}}, 
                      "Lệnh định kỳ "
                    )
                  ]
                )
              )
            ), 
            m("div", {"class":"mt-4"}), 
            m("div", {"class":"container-bill"},
              [
                m("div", {"style":{"width":"50%","margin-bottom":"20px"}}, 
                  m("div", {"class":"search-input"}, 
                    m("input", {"class":"form-control","type":"text","placeholder":"Tìm kiếm dịch vụ"})
                  )
                ),
                m("div", {"class":"list-card-link"},
                  [
                    m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                      m("a", {"class":"card-link","style":{"position":"relative"}},
                        [
                          m("div", {"class":"card-img"}, 
                            m("img", {"src":"./assets/images/icons/bill/electricity.png"})
                          ),
                          m("div", {"class":"card-name card-color"}, 
                            "Điện"
                          )
                        ]
                      )
                    ),
                    m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                      m("a", {"class":"card-link","style":{"position":"relative"}},
                        [
                          m("div", {"class":"card-img"}, 
                            m("img", {"src":"./assets/images/icons/bill/water.png"})
                          ),
                          m("div", {"class":"card-name card-color"}, 
                            "Nước"
                          )
                        ]
                      )
                    ),
                    m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                      m("a", {"class":"card-link","style":{"position":"relative"}},
                        [
                          m("div", {"class":"card-img"}, 
                            m("img", {"src":"./assets/images/icons/bill/landline-phone.png"})
                          ),
                          m("div", {"class":"card-name card-color"}, 
                            "Điện thoại cố định"
                          )
                        ]
                      )
                    ),
                    m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                      m("a", {"class":"card-link","style":{"position":"relative"}},
                        [
                          m("div", {"class":"card-img"}, 
                            m("img", {"src":"./assets/images/icons/bill/phone-bill.png"})
                          ),
                          m("div", {"class":"card-name card-color"}, 
                            "Điện thoại di động trả sau"
                          )
                        ]
                      )
                    ),
                    m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                      m("a", {"class":"card-link","style":{"position":"relative"}},
                        [
                          m("div", {"class":"card-img"}, 
                            m("img", {"src":"./assets/images/icons/bill/adsl-internet.png"})
                          ),
                          m("div", {"class":"card-name card-color"}, 
                            "Cước Internet ADSL"
                          )
                        ]
                      )
                    ),
                    m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                      m("a", {"class":"card-link","style":{"position":"relative"}},
                        [
                          m("div", {"class":"card-img"}, 
                            m("img", {"src":"./assets/images/icons/bill/cable-tv.png"})
                          ),
                          m("div", {"class":"card-name card-color"}, 
                            "Cước Truyền hình"
                          )
                        ]
                      )
                    ),
                    m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                      m("a", {"class":"card-link","style":{"position":"relative"}},
                        [
                          m("div", {"class":"card-img"}, 
                            m("img", {"src":"./assets/images/icons/bill/train-ticket.png"})
                          ),
                          m("div", {"class":"card-name card-color"}, 
                            "Vé tàu"
                          )
                        ]
                      )
                    ),
                    m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                      m("a", {"class":"card-link","style":{"position":"relative"}},
                        [
                          m("div", {"class":"card-img"}, 
                            m("img", {"src":"./assets/images/icons/bill/air-ticket.png"})
                          ),
                          m("div", {"class":"card-name card-color"}, 
                            "Vé máy bay trả sau"
                          )
                        ]
                      )
                    ),
                    m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                      m("a", {"class":"card-link","style":{"position":"relative"}},
                        [
                          m("div", {"class":"card-img"}, 
                            m("img", {"src":"./assets/images/icons/bill/mask_group.png"})
                          ),
                          m("div", {"class":"card-name card-color"}, 
                            "Bảo hiểm Sun Life"
                          ),
                          m("img", {"src":"./assets/images/icons/bill/ic_new.png","style":{"position":"absolute","top":"15px","right":"20px"}})
                        ]
                      )
                    ),
                    m("div", {"class":"card-link-wrapper card-customize  shadow-btn"}, 
                      m("a", {"class":"card-link","style":{"position":"relative"}},
                        [
                          m("div", {"class":"card-img"}, 
                            m("img", {"src":"./assets/images/icons/bill/tuition.png"})
                          ),
                          m("div", {"class":"card-name card-color"}, 
                            "Học phí"
                          )
                        ]
                      )
                    ),
                    m("div", {"class":"card-link-wrapper card-customize shadow-btn"}, 
                      m("a", {"class":"card-link","style":{"position":"relative"}},
                        [
                          m("div", {"class":"card-img"}, 
                            m("img", {"src":"./assets/images/icons/bill/hospital-fee.png"})
                          ),
                          m("div", {"class":"card-name card-color"}, 
                            "Viện phí"
                          )
                        ]
                      )
                    )
                  ]
                ),
                m("div", {"style":{"background":"#E6E9EE","width":"100%","height":"3px","margin-bottom":"30px"}}, 
                )
              ]
            )
          ])
    }
}