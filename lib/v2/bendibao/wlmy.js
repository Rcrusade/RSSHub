const { rootUrl, ProcessItems } = require('./utils');

module.exports = async (ctx) => {
    const rootUrl = 'http://wlmq.bendibao.com/news';
    const apiUrl = `${rootUrl}/api/ajax/getlatest?page=1&pagesize=${ctx.query.limit ?? 30}`;

    const items = await ProcessItems(apiUrl, ctx.cache.tryGet);

    ctx.state.data = {
        title: '乌鲁木齐 - 即时咨询',
        link: rootUrl,
        item: items,
    };
};
