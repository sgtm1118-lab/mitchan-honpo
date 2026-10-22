// メニューと料金（税込）。ここを書きかえると、両方のページの料金が変わります。
// max:"wall" は「壁掛けエアコンの台数まで」選べるもの
const SHOP = { name: "みっちゃん本舗", tel: "080-3531-5425" };
const MENU = {
  aircon: { name: "エアコン", groups: [
    { title: "エアコン本体", items: [
      { k: "wall",    name: "壁掛けエアコン",   price: 6490,  unit: "台", desc: "カバー・フィルター・本体内部の高圧洗浄・ドレンパン洗浄・簡易清掃" },
      { k: "ceiling", name: "天井埋込エアコン", price: 19800, unit: "台", desc: "天井に埋め込まれたタイプ" }
    ]},
    { title: "壁掛けに追加するもの", items: [
      { k: "auto",    name: "お掃除機能付き",   price: 7810, unit: "台", max: "wall", add: true },
      { k: "bunkai",  name: "完全分解洗浄",     price: 6600, unit: "台", max: "wall", add: true, desc: "ドレンパン・送風ファンを取り外して洗浄" },
      { k: "outdoor", name: "室外機洗浄",       price: 3300, unit: "台", max: "wall", add: true },
      { k: "coat",    name: "消臭抗菌コート",   price: 2200, unit: "台", max: "wall", add: true }
    ]}
  ]},
  house: { name: "水回り", groups: [
    { title: "ハウスクリーニング", items: [
      { k: "bath",    name: "お風呂（浴室）",     price: 19800, unit: "か所" },
      { k: "kitchen", name: "キッチン",           price: 15400, unit: "か所" },
      { k: "hood",    name: "レンジフード（換気扇）", price: 14300, unit: "か所" },
      { k: "furo",    name: "風呂釜洗浄",         price: 12100, unit: "か所" },
      { k: "toilet",  name: "トイレ",             price: 8800,  unit: "か所" },
      { k: "senmen",  name: "洗面所",             price: 7700,  unit: "か所" },
      { k: "akishitsu", name: "空室・職場の清掃", price: 0, check: true, desc: "料金はご相談のうえお知らせします" }
    ]}
  ]}
};
const yen = n => "¥" + Number(n).toLocaleString("ja-JP");
