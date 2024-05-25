export default defineEventHandler((event) => {
  const navRoute = {
    advocate: {
      name: "候選人主張",
      key: "advocate",
      href: "/",
      patch: "/",
      children: null,
    },
    news: {
      name: "最新活動",
      key: "name",
      href: "/",
      patch: "/",
      children: null,
    },
    policy: {
      name: "政策議題",
      key: "policy",
      href: "/",
      patch: "/",
      children: null,
    },
    donate: {
      name: "小額捐款",
      key: "donate",
      href: "/",
      patch: "/",
      children: null,
    },
    suggestion: {
      name: "服務信箱",
      key: "suggestion",
      href: "/",
      patch: "/",
      children: null,
    },
  };

  const donate = [
    {
      id: 1,
      title: "「喵星人之友」",
      price: "600",
      people: "9,957",
    },
    {
      id: 2,
      title: "「喵星大使」",
      price: "6,000",
      people: "2,000",
    },
    {
      id: 3,
      title: "「喵星傳奇」",
      price: "60,000",
      people: "999",
    },
  ];

  const news = [
    {
      id: 1,
      title: "參與台北寵物論壇，爭取貓咪友善環境",
      date: "12/26",
      images: "news-1",
      content:
        "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的VIP休憩空間。",
    },
    {
      id: 2,
      title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
      date: "12/24",
      images: "news-2",
      content:
        "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。",
    },
    {
      id: 3,
      title: "收容所模特兒大比拼！",
      date: "12/20",
      images: "news-3",
      content:
        "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    },
  ];

  const policy = [
    {
      id: 1,
      no: "政策 No.1",
      no_text: "為毛孩子謀福利！推動寵物醫療保障方案",
      no_images: "no-1",
      images: "policy-1",
      content: [
        {
          number: "01",
          title: "設立寵物醫療基金",
          text: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。",
        },
        {
          number: "02",
          title: "提供醫療補助",
          text: "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。",
        },
        {
          number: "03",
          title: "合作動物醫院",
          text: "目前已有和超過 200 家動物醫院進行初步的合作討論。",
        },
      ],
    },
    {
      id: 2,
      no: "政策 No.2",
      no_text: "打造休閒天堂！推廣寵物休閒與娛樂場所",
      no_images: "no-2",
      images: "policy-2",
      content: [
        {
          number: "01",
          title: "建立寵物公園",
          text: "每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。",
        },
        {
          number: "02",
          title: "推廣寵物友善商家",
          text: "鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。 預計在政策實施後的首年，將有超過 500 家商家加入此計畫。",
        },
        {
          number: "03",
          title: "舉辦寵物活動和工作坊",
          text: "與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動， 包括寵物才藝比賽、飼養知識工作坊等。",
        },
      ],
    },
    {
      id: 3,
      no: "政策 No.3",
      no_text: "推廣寵物飼養教育，讓愛更加專業！",
      no_images: "no-3",
      images: "policy-3",
      content: [
        {
          number: "01",
          title: "建立寵物飼養教育中心",
          text: "每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。 預計在第一年內，在全國至少 5 大城市設立教育中心。",
        },
        {
          number: "02",
          title: "推廣寵物飼養課程",
          text: "與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。 預計每年將有超過 10,000 名市民受益。",
        },
        {
          number: "03",
          title: "製作教育資料",
          text: "出版寵物飼養手冊、影片和線上課程， 讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識。",
        },
      ],
    },
  ];

  return { navRoute, donate, news, policy };
});
