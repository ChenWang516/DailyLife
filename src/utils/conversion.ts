/**
 * name: 数据转换
 * author: Chen Wang
 * updated on: 2020/07/16
 * created on: 2020/07/16
 */

// 分转元
export const centToYuan = (cent: number | string, keepPrecision: boolean = false) => {
    if (!+cent && !keepPrecision) {
        return cent;
    }
    if (keepPrecision) {
        return (+cent / 100).toFixed(2);
    }
    return parseFloat((+cent / 100).toFixed(2));
}

// 元转分
export const yuanToCent = (yuan: number | string) => {
    return (+yuan * 100).toFixed(0);
}

// 克转千克
export const gramToKiloGram = (gram: number | string, keepPrecision: boolean = false) => {
    if (!+gram && !keepPrecision) {
        return gram;
    }
    if (keepPrecision) {
        return (+gram / 1000).toFixed(3);
    }
    return parseFloat((+gram / 1000).toFixed(3));
}

// 阿拉伯数字转中文
export const arabicToChinese = (number: number) => {
    return new Intl.NumberFormat('zh-Hans-u-nu-hanidec').format(number);
}

// 文件大小转换
export const fileSizeFormat = (size: number) => {
    const unitsHash = "B,KB,MB,GB".split(",");
    let index = 0
    while (size > 1024 && index < unitsHash.length) {
        size /= 1024
        index++
    }
    return Math.round(size * 100) / 100 + unitsHash[index]
}