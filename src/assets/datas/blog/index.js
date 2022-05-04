import data from './data.js'


class Base {
    constructor() { }

    static instance() {
        return new this()
    }

    getChildByIndex(index) {
        return data[index]?.children || [];
    }

    getTitles() {
        return data.map(o => o.title)
    }

    getDatas() {
        return data
    }

    getLength() {
        return data?.length || 0;
    }
}

export default Base.instance()