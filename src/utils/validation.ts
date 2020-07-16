/**
 * name: 数据校验
 * author: Chen Wang
 * updated on: 2020/07/16
 * created on: 2020/07/16
 */

// 电邮地址
export const isEmail = (email: string) => {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
}

// 中国大陆手机号码
export const isChinaMainlandPhoneNumber = (phoneNumber: number | string) => {
    return /^1[3-9]\d{9}$/.test(phoneNumber.toString());
}

// 中国大陆固话号码
export const isChinaMainlandLandlineNumber = (landlineNumber: number | string) => {
    return /^((0\d{2}-)?\d{8}|(0\d{3}-)?\d{7})$/.test(landlineNumber.toString());
}

// 网址
export const isURL = (url: string) => {
    return /^\w+:\/\/\S+$/.test(url);
}

// 日期格式
export const isDate = (date: number | string | Date) => {
    return !!isNaN(+new Date(date));
}

// 汉字
export const isChineseCharacter = (chineseCharacter: string) => {
    return /\p{Unified_Ideograph}/u.test(chineseCharacter);
}

// 数据类型判断
export const isType = (value: any, constructor: { new(...data: any[]) }) => {
    return Object(value) instanceof constructor;
}