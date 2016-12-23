export const FOOTER_TYPE = {
  0: 'boxoffice',
  1: 'production',
  2: 'news',
  3: 'calendar',
};

export const TABLE_TITLE = {
  film:[{
    title: '影片名称',
    key: 'filmName',
  }, {
    title: '实时票房',
    key: 'boxoffice',
  }, {
    title: '排片占比',
    key: 'schedulesPercent',
  }, {
    title: '上座率',
    key: 'seatPercent',
  }, {
    title: '累计票房',
    key: 'totalBoxoffice',
  }],
  cinema:[{
    title: '影院名称',
    key: 'cinemaName',
  }, {
    title: '总票房',
    key: 'boxoffice',
  }, {
    title: '总人次',
    key: 'person',
  }, {
    title: '场均人次',
    key: 'averagePerson',
  }, {
    title: '平均票价',
    key: 'averagePrice',
  }],
    cinemaLine:[{
    title: '院线名称',
    key: 'cinemaLineName',
  }, {
    title: '总票房',
    key: 'boxoffice',
  }, {
    title: '总人次',
    key: 'person',
  }, {
    title: '场均人次',
    key: 'averagePerson',
  }, {
    title: '平均票价',
    key: 'averagePrice',
  }],
  schedules:[{
    title: '影片名称',
    key: 'filmName',
  }, {
    title: '排片占比',
    key: 'schedulesPercent',
  }, {
    title: '黄金场占比',
    key: 'gold',
  }, {
    title: '上座率',
    key: 'seatPercent',
  }, {
    title: '排片占比',
    key: 'schedules',
  }]
};

export const BOXOFFICE_PIE_COLORS = [
  '#FF5937',
  '#FDAF29',
  '#1985CD',
  '#4D5E70',
];

export const SCHEDULES_PIE_COLORS = [
  '#FF5937',
  '#FCB029',
  '#1587CD',
  '#34B898',
  '#CACEDA',
  '#EDEDED',
];

export const BOXOFFICE_TYPE = {
  film: 0,
  cinema: 1,
  cinemaLine: 2,
};

