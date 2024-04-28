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
      title: "「喵星人之友」",
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

  return { navRoute, donate, news };
});
