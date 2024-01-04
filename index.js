const animals = [
  "\u9f20",
  "\u725b",
  "\u864e",
  "\u5154",
  "\u9f99",
  "\u86c7",
  "\u9a6c",
  "\u7f8a",
  "\u7334",
  "\u9e21",
  "\u72d7",
  "\u732a",
];
const gan = [
  "\u7532",
  "\u4e59",
  "\u4e19",
  "\u4e01",
  "\u620a",
  "\u5df1",
  "\u5e9a",
  "\u8f9b",
  "\u58ec",
  "\u7678",
];
const lTermInfo = [
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c3598082c95f8c965cc920f",
  "97bd0b06bdb0722c965ce1cfcc920f",
  "b027097bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd0b06bdb0722c965ce1cfcc920f",
  "b027097bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd0b06bdb0722c965ce1cfcc920f",
  "b027097bd097c36b0b6fc9274c91aa",
  "9778397bd19801ec9210c965cc920e",
  "97b6b97bd19801ec95f8c965cc920f",
  "97bd09801d98082c95f8e1cfcc920f",
  "97bd097bd097c36b0b6fc9210c8dc2",
  "9778397bd197c36c9210c9274c91aa",
  "97b6b97bd19801ec95f8c965cc920e",
  "97bd09801d98082c95f8e1cfcc920f",
  "97bd097bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c91aa",
  "97b6b97bd19801ec95f8c965cc920e",
  "97bcf97c3598082c95f8e1cfcc920f",
  "97bd097bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c3598082c95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c3598082c95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd097bd07f595b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9210c8dc2",
  "9778397bd19801ec9210c9274c920e",
  "97b6b97bd19801ec95f8c965cc920f",
  "97bd07f5307f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c920e",
  "97b6b97bd19801ec95f8c965cc920f",
  "97bd07f5307f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bd07f1487f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c9274c920e",
  "97bcf7f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c91aa",
  "97b6b97bd197c36c9210c9274c920e",
  "97bcf7f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c920e",
  "97b6b7f0e47f531b0723b0b6fb0722",
  "7f0e37f5307f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36b0b70c9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e37f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc9210c8dc2",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0787b0721",
  "7f0e27f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c91aa",
  "97b6b7f0e47f149b0723b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c8dc2",
  "977837f0e37f149b0723b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e37f5307f595b0b0bc920fb0722",
  "7f0e397bd097c35b0b6fc9210c8dc2",
  "977837f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e37f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc9210c8dc2",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f149b0723b0787b0721",
  "7f0e27f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14998082b0723b06bd",
  "7f07e7f0e37f149b0723b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e37f1487f595b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e37f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e37f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f149b0723b0787b0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14998082b0723b06bd",
  "7f07e7f0e47f149b0723b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14998082b0723b06bd",
  "7f07e7f0e37f14998083b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14898082b0723b02d5",
  "7f07e7f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e36665b66aa89801e9808297c35",
  "665f67f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e36665b66a449801e9808297c35",
  "665f67f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e36665b66a449801e9808297c35",
  "665f67f0e37f14898082b072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e26665b66a449801e9808297c35",
  "665f67f0e37f1489801eb072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
];

const lunarInfo = [
  0x04bd8,
  0x04ae0,
  0x0a570,
  0x054d5,
  0x0d260,
  0x0d950,
  0x16554,
  0x056a0,
  0x09ad0,
  0x055d2, //1900-1909
  0x04ae0,
  0x0a5b6,
  0x0a4d0,
  0x0d250,
  0x1d255,
  0x0b540,
  0x0d6a0,
  0x0ada2,
  0x095b0,
  0x14977, //1910-1919
  0x04970,
  0x0a4b0,
  0x0b4b5,
  0x06a50,
  0x06d40,
  0x1ab54,
  0x02b60,
  0x09570,
  0x052f2,
  0x04970, //1920-1929
  0x06566,
  0x0d4a0,
  0x0ea50,
  0x06e95,
  0x05ad0,
  0x02b60,
  0x186e3,
  0x092e0,
  0x1c8d7,
  0x0c950, //1930-1939
  0x0d4a0,
  0x1d8a6,
  0x0b550,
  0x056a0,
  0x1a5b4,
  0x025d0,
  0x092d0,
  0x0d2b2,
  0x0a950,
  0x0b557, //1940-1949
  0x06ca0,
  0x0b550,
  0x15355,
  0x04da0,
  0x0a5b0,
  0x14573,
  0x052b0,
  0x0a9a8,
  0x0e950,
  0x06aa0, //1950-1959
  0x0aea6,
  0x0ab50,
  0x04b60,
  0x0aae4,
  0x0a570,
  0x05260,
  0x0f263,
  0x0d950,
  0x05b57,
  0x056a0, //1960-1969
  0x096d0,
  0x04dd5,
  0x04ad0,
  0x0a4d0,
  0x0d4d4,
  0x0d250,
  0x0d558,
  0x0b540,
  0x0b6a0,
  0x195a6, //1970-1979
  0x095b0,
  0x049b0,
  0x0a974,
  0x0a4b0,
  0x0b27a,
  0x06a50,
  0x06d40,
  0x0af46,
  0x0ab60,
  0x09570, //1980-1989
  0x04af5,
  0x04970,
  0x064b0,
  0x074a3,
  0x0ea50,
  0x06b58,
  0x05ac0,
  0x0ab60,
  0x096d5,
  0x092e0, //1990-1999
  0x0c960,
  0x0d954,
  0x0d4a0,
  0x0da50,
  0x07552,
  0x056a0,
  0x0abb7,
  0x025d0,
  0x092d0,
  0x0cab5, //2000-2009
  0x0a950,
  0x0b4a0,
  0x0baa4,
  0x0ad50,
  0x055d9,
  0x04ba0,
  0x0a5b0,
  0x15176,
  0x052b0,
  0x0a930, //2010-2019
  0x07954,
  0x06aa0,
  0x0ad50,
  0x05b52,
  0x04b60,
  0x0a6e6,
  0x0a4e0,
  0x0d260,
  0x0ea65,
  0x0d530, //2020-2029
  0x05aa0,
  0x076a3,
  0x096d0,
  0x04afb,
  0x04ad0,
  0x0a4d0,
  0x1d0b6,
  0x0d250,
  0x0d520,
  0x0dd45, //2030-2039
  0x0b5a0,
  0x056d0,
  0x055b2,
  0x049b0,
  0x0a577,
  0x0a4b0,
  0x0aa50,
  0x1b255,
  0x06d20,
  0x0ada0, //2040-2049
  /**Add By JJonline@JJonline.Cn**/
  0x14b63,
  0x09370,
  0x049f8,
  0x04970,
  0x064b0,
  0x168a6,
  0x0ea50,
  0x06b20,
  0x1a6c4,
  0x0aae0, //2050-2059
  0x092e0,
  0x0d2e3,
  0x0c960,
  0x0d557,
  0x0d4a0,
  0x0da50,
  0x05d55,
  0x056a0,
  0x0a6d0,
  0x055d4, //2060-2069
  0x052d0,
  0x0a9b8,
  0x0a950,
  0x0b4a0,
  0x0b6a6,
  0x0ad50,
  0x055a0,
  0x0aba4,
  0x0a5b0,
  0x052b0, //2070-2079
  0x0b273,
  0x06930,
  0x07337,
  0x06aa0,
  0x0ad50,
  0x14b55,
  0x04b60,
  0x0a570,
  0x054e4,
  0x0d160, //2080-2089
  0x0e968,
  0x0d520,
  0x0daa0,
  0x16aa6,
  0x056d0,
  0x04ae0,
  0x0a9d4,
  0x0a4d0,
  0x0d150,
  0x0f252, //2090-2099
  0x0d520,
]; //2100;
const lunarTerm = [
  "\u5c0f\u5bd2",
  "\u5927\u5bd2",
  "\u7acb\u6625",
  "\u96e8\u6c34",
  "\u60ca\u86f0",
  "\u6625\u5206",
  "\u6e05\u660e",
  "\u8c37\u96e8",
  "\u7acb\u590f",
  "\u5c0f\u6ee1",
  "\u8292\u79cd",
  "\u590f\u81f3",
  "\u5c0f\u6691",
  "\u5927\u6691",
  "\u7acb\u79cb",
  "\u5904\u6691",
  "\u767d\u9732",
  "\u79cb\u5206",
  "\u5bd2\u9732",
  "\u971c\u964d",
  "\u7acb\u51ac",
  "\u5c0f\u96ea",
  "\u5927\u96ea",
  "\u51ac\u81f3",
];

const nStr1 = [
  "\u65e5",
  "\u4e00",
  "\u4e8c",
  "\u4e09",
  "\u56db",
  "\u4e94",
  "\u516d",
  "\u4e03",
  "\u516b",
  "\u4e5d",
  "\u5341",
];
const nStr2 = ["\u521d", "\u5341", "\u5eff", "\u5345"];
const nStr3 = [
  "\u6b63",
  "\u4e8c",
  "\u4e09",
  "\u56db",
  "\u4e94",
  "\u516d",
  "\u4e03",
  "\u516b",
  "\u4e5d",
  "\u5341",
  "\u51ac",
  "\u814a",
];

const nStr4 = [
  "\u96f6",
  "\u4e00",
  "\u4e8c",
  "\u4e09",
  "\u56db",
  "\u4e94",
  "\u516d",
  "\u4e03",
  "\u516b",
  "\u4e5d",
  "\u5341",
];
const solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const zhi = [
  "\u5b50",
  "\u4e11",
  "\u5bc5",
  "\u536f",
  "\u8fb0",
  "\u5df3",
  "\u5348",
  "\u672a",
  "\u7533",
  "\u9149",
  "\u620c",
  "\u4ea5",
];

function monthDays(y, m) {
  if (m > 12 || m < 1) {
    return -1;
  } //月份参数从1至12，参数错误返回-1
  return lunarInfo[y - 1900] & (0x10000 >> m) ? 30 : 29;
}
function leapMonth(y) {
  //闰字编码 \u95f0
  return lunarInfo[y - 1900] & 0xf;
}
function leapDays(y) {
  if (leapMonth(y)) {
    return lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
  }
  return 0;
}

function monthDays(y, m) {
  if (m > 12 || m < 1) {
    return -1;
  } //月份参数从1至12，参数错误返回-1
  return lunarInfo[y - 1900] & (0x10000 >> m) ? 30 : 29;
}
function toGanZhi(offset) {
  return gan[offset % 10] + zhi[offset % 12];
}
function solarDays(y, m) {
  if (m > 12 || m < 1) {
    return -1;
  } //若参数错误 返回-1
  var ms = m - 1;
  if (ms == 1) {
    //2月份的闰平规律测算后确认返回28或29
    return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ? 29 : 28;
  } else {
    return solarMonth[ms];
  }
}
function lYearDays(y) {
  var i,
    sum = 348;
  for (i = 0x8000; i > 0x8; i >>= 1) {
    sum += lunarInfo[y - 1900] & i ? 1 : 0;
  }
  return sum + leapDays(y);
}
function getTerm(y, n) {
  if (y < 1900 || y > 2100) {
    return -1;
  }
  if (n < 1 || n > 24) {
    return -1;
  }
  var _table = lTermInfo[y - 1900];
  var _info = [
    parseInt("0x" + _table.substr(0, 5)).toString(),
    parseInt("0x" + _table.substr(5, 5)).toString(),
    parseInt("0x" + _table.substr(10, 5)).toString(),
    parseInt("0x" + _table.substr(15, 5)).toString(),
    parseInt("0x" + _table.substr(20, 5)).toString(),
    parseInt("0x" + _table.substr(25, 5)).toString(),
  ];
  var _calDay = [
    _info[0].substr(0, 1),
    _info[0].substr(1, 2),
    _info[0].substr(3, 1),
    _info[0].substr(4, 2),

    _info[1].substr(0, 1),
    _info[1].substr(1, 2),
    _info[1].substr(3, 1),
    _info[1].substr(4, 2),

    _info[2].substr(0, 1),
    _info[2].substr(1, 2),
    _info[2].substr(3, 1),
    _info[2].substr(4, 2),

    _info[3].substr(0, 1),
    _info[3].substr(1, 2),
    _info[3].substr(3, 1),
    _info[3].substr(4, 2),

    _info[4].substr(0, 1),
    _info[4].substr(1, 2),
    _info[4].substr(3, 1),
    _info[4].substr(4, 2),

    _info[5].substr(0, 1),
    _info[5].substr(1, 2),
    _info[5].substr(3, 1),
    _info[5].substr(4, 2),
  ];
  return parseInt(_calDay[n - 1]);
}

function solar2lunar(y, m, d) {
  //参数区间1900.1.31~2100.12.31
  if (y < 1900 || y > 2100) {
    return -1;
  } //年份限定、上限
  if (y == 1900 && m == 1 && d < 31) {
    return -1;
  } //下限
  if (!y) {
    //未传参 获得当天
    var objDate = new Date();
  } else {
    var objDate = new Date(y, parseInt(m) - 1, d);
  }
  var i,
    leap = 0,
    temp = 0;
  //修正ymd参数
  var y = objDate.getFullYear(),
    m = objDate.getMonth() + 1,
    d = objDate.getDate();
  var offset =
    (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) -
      Date.UTC(1900, 0, 31)) /
    86400000;
  for (i = 1900; i < 2101 && offset > 0; i++) {
    temp = lYearDays(i);
    offset -= temp;
  }
  if (offset < 0) {
    offset += temp;
    i--;
  }

  //是否今天
  var isTodayObj = new Date(),
    isToday = false;
  if (
    isTodayObj.getFullYear() == y &&
    isTodayObj.getMonth() + 1 == m &&
    isTodayObj.getDate() == d
  ) {
    isToday = true;
  }
  //星期几
  var nWeek = objDate.getDay(),
    cWeek = nStr1[nWeek];
  if (nWeek == 0) {
    nWeek = 7;
  } //数字表示周几顺应天朝周一开始的惯例
  //农历年
  var year = i;

  var leap = leapMonth(i); //闰哪个月

  var isLeap = false;

  //效验闰月
  for (i = 1; i < 13 && offset > 0; i++) {
    //闰月
    if (leap > 0 && i == leap + 1 && isLeap == false) {
      --i;
      isLeap = true;
      temp = leapDays(year); //计算农历闰月天数
    } else {
      temp = monthDays(year, i); //计算农历普通月天数
    }
    //解除闰月
    if (isLeap == true && i == leap + 1) {
      isLeap = false;
    }
    offset -= temp;
  }

  if (offset == 0 && leap > 0 && i == leap + 1)
    if (isLeap) {
      isLeap = false;
    } else {
      isLeap = true;
      --i;
    }
  if (offset < 0) {
    offset += temp;
    --i;
  }
  //农历月
  var month = i;
  //农历日
  var day = offset + 1;

  //天干地支处理
  var sm = m - 1;
  var term3 = getTerm(y, 3); //该公历年立春日期
  var gzY = toGanZhi(y - 4); //普通按年份计算，下方尚需按立春节气来修正
  var termTimestamp = new Date(y, 1, term3).getTime();
  var dayTimestamp = new Date(y, sm, d).getTime();
  //依据立春日进行修正gzY
  if (dayTimestamp < termTimestamp) {
    gzY = toGanZhi(y - 5);
  }

  //月柱 1900年1月小寒以前为 丙子月(60进制12)
  var firstNode = getTerm(y, m * 2 - 1); //返回当月「节」为几日开始
  var secondNode = getTerm(y, m * 2); //返回当月「节」为几日开始

  //依据12节气修正干支月
  var gzM = toGanZhi((y - 1900) * 12 + m + 11);
  if (d >= firstNode) {
    gzM = toGanZhi((y - 1900) * 12 + m + 12);
  }

  //传入的日期的节气与否
  var isTerm = false;
  var term = "";
  if (firstNode == d) {
    isTerm = true;
    term = lunarTerm[m * 2 - 2];
  }
  if (secondNode == d) {
    isTerm = true;
    term = lunarTerm[m * 2 - 1];
  }
  //日柱 当月一日与 1900/1/1 相差天数
  var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
  var gzD = toGanZhi(dayCyclical + d - 1);
  return {
    lYear: year,
    lMonth: month,
    lDay: day,
    animal: getAnimal(year),
    yearCn: toChinaYear(year),
    monthCn: (isLeap && leap === month ? "\u95f0" : "") + toChinaMonth(month),
    dayCn: toChinaDay(day),
    cYear: y,
    cMonth: m,
    cDay: d,
    gzYear: gzY,
    gzMonth: gzM,
    gzDay: gzD,
    isToday: isToday,
    isLeap: isLeap,
    nWeek: nWeek,
    ncWeek: "\u661f\u671f" + cWeek,
    isTerm: isTerm,
    term: term,
  };
}
function getAnimal(y) {
  return animals[(y - 4) % 12];
}
function toChinaYear(y) {
  //年 => \u5E74
  var oxxx = parseInt(y / 1000);
  var xoxx = parseInt((y % 1000) / 100);
  var xxox = parseInt((y % 100) / 10);
  var xxxo = y % 10;

  return nStr4[oxxx] + nStr4[xoxx] + nStr4[xxox] + nStr4[xxxo] + "\u5E74";
}

function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  } else {
    return false;
  }
}

function toChinaMonth(m) {
  if (m > 12 || m < 1) {
    return -1;
  }
  var s = nStr3[m - 1];
  s += "\u6708";
  return s;
}

function toChinaDay(d) {
  //日 => \u65e5
  var s;
  switch (d) {
    case 10:
      s = "\u521d\u5341";
      break;
    case 20:
      s = "\u4e8c\u5341";
      break;
      break;
    case 30:
      s = "\u4e09\u5341";
      break;
      break;
    default:
      s = nStr2[Math.floor(d / 10)];
      s += nStr1[d % 10];
  }
  return s;
}
const monthNames = [
  "일월",
  "이월",
  "삼월",
  "사월",
  "오월",
  "유월",
  "칠월",
  "팔월",
  "구월",
  "시월",
  "십일월",
  "십이월",
];
const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

function lunar2solar(y, m, d, isLeapMonth) {
  var leapOffset = 0;
  var leap_Month = leapMonth(y);
  var leapDay = leapDays(y);
  if (isLeapMonth && leap_Month != m) {
    return -1;
  }
  if ((y == 2100 && m == 12 && d > 1) || (y == 1900 && m == 1 && d < 31)) {
    return -1;
  }
  var day = monthDays(y, m);
  if (y < 1900 || y > 2100 || d > day) {
    return -1;
  }

  var offset = 0;
  for (var i = 1900; i < y; i++) {
    offset += lYearDays(i);
  }
  var leap = 0,
    isAdd = false;
  for (var i = 1; i < m; i++) {
    leap = leapMonth(y);
    if (!isAdd) {
      if (leap <= i && leap > 0) {
        offset += leapDays(y);
        isAdd = true;
      }
    }
    offset += monthDays(y, i);
  }
  if (isLeapMonth) {
    offset += day;
  }
  var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
  var calObj = new Date((offset + d - 31) * 86400000 + stmap);
  var cY = calObj.getUTCFullYear();
  var cM = calObj.getUTCMonth() + 1;
  var cD = calObj.getUTCDate();

  return solar2lunar(cY, cM, cD);
}

function CalculateFromLunarToSolar(event) {
  event.preventDefault();
  const lunarDate = document.getElementById("lunarDate").value;

  const inputDate = new Date(lunarDate); 

  const year = inputDate.getFullYear(); 

  const month = inputDate.getMonth() + 1; 

  const day = inputDate.getDate();
  console.log({
    year,
    month,
    day,
  });
  const calendarData = lunar2solar(year, month, day, false);
  // output: { year: 2019, month: 6, day: 17 }

  const date = new Date(
    calendarData.cYear,
    calendarData.cMonth,
    calendarData.cDay
  );

  // Ottieni il mese, il giorno e l'anno
  const monthName = monthNames[date.getMonth()];
  const dayName = date.getDate();
  const dayOfWeek = dayNames[date.getDay()];

  // Crea la stringa nel formato richiesto
  let dateString = `${calendarData.cYear}년 ${calendarData.cMonth} 월  ${calendarData.cDay}일 (${dayOfWeek})`;
  console.log(calendarData);
  if (calendarData === -1) {
    dateString = "input not valid";
  }
  document.getElementById("result").innerHTML = dateString;
}
