# LRSTI

狼人杀主题的本地静态人格测试。

## 这是什么

LRSTI = Werewolf Game Role Style Indicator。

这是一个纯前端静态页面，用户通过回答一组狼人杀相关题目，系统根据本地规则匹配出一种“狼人杀玩家画像”。

它不依赖后端，不上传答案，所有计算都在浏览器本地完成。

## 运行方式

### 方式一：直接打开

直接打开：

```text
/data/users/Jozky/langrensha/LRSTI/index.html
```

### 方式二：本地静态服务

```bash
python3 -m http.server 8021 --directory /data/users/Jozky/langrensha/LRSTI
```

然后访问：

```text
http://localhost:8021/
```

## 文件说明

- `index.html`: 页面结构
- `styles.css`: 狼人杀主题样式
- `data.js`: 题库、人格类型、匹配 pattern
- `app.js`: 题目流程、答题状态、结果计算
- `assets/images/roles/`: 角色结果图目录，按角色 `code` 命名即可

## 当前规则

- 常规题：18 道
- 维度：6 个
- 每题分值：1 / 2 / 3
- 常规人格：21 种
- 特殊隐藏人格：7 种

## 图片命名

如果你要自己放图片，建议直接放到：

```text
/data/users/Jozky/langrensha/LRSTI/assets/images/roles/
```

文件名使用角色 `code`，例如：

```text
SEER.png
DIDI_SEER.png
MECH_WOLF.png
WOLF_BEAUTY.png
MAGICIAN.png
JY.png
```

支持扩展名：

```text
.png / .jpg / .jpeg / .webp
```

页面会优先尝试读取这些图片；如果没有找到，就自动回退到当前的纯文字海报样式。

## 可改方向

- 扩充题库
- 细化维度
- 增加更多狼人杀身份型结果
- 接入图片素材或分享海报
