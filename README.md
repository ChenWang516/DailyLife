# src/utils 工具函数

## Validation 数据校验

### 电邮地址

`isEmail(email: string)`

### 中国大陆手机号码

`isChinaMainlandPhoneNumber(phoneNumber: number | string)`

### 中国大陆固话号码

`isChinaMainlandLandlineNumber(landlineNumber: number | string)`

### 网址

`isURL(url: string)`

### 日期格式

`isDate(date: number | string | Date)`

### 汉字

`isChineseCharacter(chineseCharacter: string)`

### 数据类型判断

`isType(value: any, constructor: { new(...data: any[]) })`

## Conversion 数据转换

### 分转元

`CentToYuan(cent: number | string, keepPrecision: boolean)`

### 元转分

`YuanToCent(yuan: number | string)`

### 克转千克

`gramToKiloGram(gram: number | string, keepPrecision: boolean = false)`

### 阿拉伯数字转中文

`ArabicToChinese(number: number)`

### 文件大小转换

`fileSizeFormat(size: number)`
