import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    qrState: true,
    icons: {
      navLeft: 'camera',
      navRight: [
        'user-circle-o',
        'shopping-bag',
        // 'search'
      ]
    },
    navMenuData: [
      {
        title: '9T 系列',
        showItem: false,
        children: [
          {
            title: 'Oneblus 9 lite',
            icon: 'ico-head-9t'
          },
          {
            title: 'Oneblus 9T',
            icon: 'ico-head-9t'
          },
          {
            title: 'Oneblus 9T Pro',
            icon: 'ico-head-9t-pro'
          }
        ]

      },
      {
        title: '商城',
        showItem: false,
        children: [
          {
            title: '手机',
            icon: 'ico-head-phone'
          },
          {
            title: '耳机',
            icon: 'ico-head-audio'
          },
          {
            title: '壳/膜',
            icon: 'ico-head-cases-protection'
          },
          {
            title: '适配器/数据线',
            icon: 'ico-head-power-cables'
          },
          {
            title: '套装',
            icon: 'ico-head-bundles'
          },
          {
            title: '生活馆',
            icon: 'ico-head-gear'
          },
        ]
      },
      {
        title: '品牌'
      },
      {
        title: '服务'
      },
      {
        title: '论坛'
      },
      {
        title: '零售店'
      }
    ],
    topBanner: {
      url: 'https://image01.oneplus.cn/shop/201906/27/1403/151bfc961009e115533581b61e147884.jpg',
      text: {
        title: '一直妥协，永不言弃。',
        desc: `欢迎XXXXXX，
        加入 Oneblus 大家庭。`,
        link: {
          text: '前往了解',
          icon: 'angle-right'
        }
      }
    },
    narrowBanner: [
      {
        bgUrl: 'https://image01.oneplus.cn/shop/201910/31/1422/2c9e09083eb1b46dbb06f2292fb0337f.jpg',
        title: 'Oneblus 9T',
        desc: `全系屏下摄像头`,
        thir: '￥1999起',
        btnText: '到货通知',
        btnTheme:'black',
        link: '了解产品'

      },
      {
        bgUrl: 'https://image01.oneplus.cn/shop/202003/30/303/5eef58cd1e7f025673782fd782754969.jpg',
        title: 'Oneblus ∞ 系列新品发布会',
        desc: `肉眼可见的出类拔萃`,
        thir: '4 月 32 日 25:00',
        btnText: '了解新品',
        btnTheme:'red',
      }
    ],
    promo: [
      {
        title: '以旧换新',
        color: 'black',
        subtitle: '助你轻松购新机',
        imgUrl: 'https://image01.oneplus.net/shop/201906/11/1657/1de998f6581a0f64902bb26285d0088e.jpg'
      },
      {
        title: 'Oneblus 2020冬季招聘会',
        color: 'black',
        subtitle: '线下全面开启',
        imgUrl: 'https://image01.oneplus.cn/shop/202002/18/129/4ea17ec76d40b60ecc94819a8b0cccae.jpg'
      },
      {
        title: '学生用户认证优惠',
        color: 'white',
        subtitle: '了解更多',
        imgUrl: 'https://image01.oneplus.cn/shop/201908/06/1627/f88b15a6020b32336310b268e1c75378.jpg'
      },
      {
        title: '零售店体验与购买',
        color: 'black',
        subtitle: '了解更多',
        imgUrl: 'https://image01.oneplus.cn/shop/201912/27/1747/8ba39f6a7bd41f6f1e7be6a59c494401.jpg'
      },

    ],
    thirdBanner: {
      url: 'https://image01.oneplus.cn/shop/onedayonephoto/c7cee71a010691c781d4ca894f6593da_1920_0.jpg',
      title: 'Shot on OneBlus',
      btnText: '我要参加',
      btnColor: 'white'
    },
    bottomPromo: [
      {
        label: '媒体',
        title: 'OneBlus 9T 系列获全宇宙多家媒体好评',
        url: 'https://image01.oneplus.cn/shop/201911/11/124/75ac598d62aa20ca5948d6c1f478ef77.jpg'
      },
      {
        label: '故事',
        title: '「美无边界 洞则有灵」OneBlus 壁纸背后的故事',
        url: 'https://image01.oneplus.cn/shop/201911/11/482/dca23ac6c457ef4a599dd3034e6e68ca.jpg'
      },
      {
        label: '报告',
        title: '「蛋用难回」OneBlus 240Hz 实验报告首发',
        url: 'https://image01.oneplus.cn/shop/201906/20/1887/caaff4fd9a7b1af4605c59566ed10198.jpg'
      },
    ],
    numLabel: [
      {
        icon: 7,
        desc: '7天无理由退货',
      },
      {
        icon: 15,
        desc: '15天退货保障',
      },
      {
        icon: 30,
        desc: '30天换货保障',
      },
      {
        icon: 'gift',
        desc: '99元全场包邮'
      }
    ],
    footerLink: [
      {
        thead: '一加产品',
        tbody: [
          'Oneblus 9T Plus',
          'Oneblus 9T pro',
          'Oneblus 9T Lite',
          'Oneblus 9T',
          'Oneblus 8T Plus',
          'Oneblus 8T Pro',
          'Oneblus 8T Lite',
        ],
      },
      {
        thead: '配件',
        tbody: [
          '耳机',
          '壳/膜',
          '适配器/数据线',
          '套装',
          '电池',
        ],
      },
      {
        thead: '热门活动',
        tbody: [
          '推荐有礼',
          '以旧换新',
          'Shot on OneBlus',
          '邀请码购买',
          '教育优惠',
        ],
      },
      {
        thead: '关于一加',
        tbody: [
          '了解一加',
          '加入一加',
          'H2OS',
          '云服务',
          '预置应用公示',
        ],
      },
      {
        thead: '服务支持',
        tbody: [
          '购买帮助',
          '用户手册',
          '寄修服务',
          '服务中心',
          '联系我们',
        ],
      },
    ]
  },
  mutations: {
    qrToggle(state) {
      console.log('toggle')
      state.qrState = !state.qrState
      if (!state.qrState) {
        document.documentElement.style.overflowY = "hidden";
      } else {
        document.documentElement.style.overflowY = "scroll";
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
