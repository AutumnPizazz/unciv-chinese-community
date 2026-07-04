---
title: UncivCN 更新日志
---

## UncivCN 更新日志

记录 UncivCN（基于 Unciv 自立门户的中国版）各版本的更新内容。

::: tip 关于 UncivCN
UncivCN 继承自 Unciv，针对中文玩家进行深度定制与优化。
:::

---

## v4.20.17.1<Badge type="tip" text="最新" />

**发布日期**：2026.7.4

- 跟进Unciv原版一个多月的更新

---

## v4.20.8.4

**发布日期**：2026.5.26

- 原生模组检查器可筛查模组的lua错误
- 轮询联机功能可查看其他玩家的在线状态

---

## v4.20.8.3

**发布日期**：2026.5.23

- 增强lua系统
- event可挂载lua

---

## v4.20.8.2

**发布日期**：2026.5.22

- 修复 众神与国王 精英教育 政策不送伟人的bug
- Amount 参数兼容 Countables
- 新增多个 Countables 参数类型
- 模组支持[lua脚本](/开发者专区/模组开发/Lua脚本.md)
- 修复 TRY_INJECT 单位时将造价覆盖为0的bug

---

## v4.20.8.1

**发布日期**：2026.5.21

- 重磅更新！新增[轮询联机功能](/更新日志/UncivCN/轮询联机.md)

---

## v4.20.7.4

**发布日期**：2026.5.19

- 中心对称地图现在让资源数量也对称分布

---

## v4.20.7.3

**发布日期**：2026.5.19

- 扩展模组 json 系统，详见 [文档](/开发者专区/模组开发/UncivCN扩展JSON-MergeAction教程.md)

---

## v4.20.7.2

**发布日期**：2026.5.19

- 安卓端安装包不再自带模组 CoeHarMod/和合共生
- 新增三种镜像地图模式，按两瓣/三瓣/六瓣中心对称分布

---

## v4.20.6.3

**发布日期**：2026.5.17

- 新增模组特性：

| 英文原文 | 中文释义 |
|---------|----------|
| `Hidden from city screen` | 不再显示在城市面板中 |
| `Can be built [amount] times in each city` | 可以在单个城市中重复建造[amount]次 |

---

## v4.20.6.1

**发布日期**：2026.5.16

- 同步两个月来 Unciv 原版的更新内容
- 将前几个版本对随机性结果可变性的改动收束到设置页面，可选择是否启用

---

## v4.19.16.2

**发布日期**：2026.3.2

- 远古遗迹产出随机性结果可以通过读档重载改变

---

## v4.19.16.1

**发布日期**：2026.3.1

- 城邦任务随机性结果可以通过读档重载改变

---

## v4.19.15-cn2

**发布日期**：2026.2.28

- 新增模组特性：

| 英文原文 | 中文释义 |
|---------|----------|
| `Attacks also target [mapUnitFilter] units within [positiveAmount] tiles` | 攻击也会同时攻击 [positiveAmount] 格内满足 [mapUnitFilter] 的单位 |
| `Attacks also target [mapUnitFilter] units within [positiveAmount] tiles, with damage decreasing by distance` | 攻击也会同时攻击 [positiveAmount] 格内满足 [mapUnitFilter] 的单位，伤害随距离递减 |
| `Takes [relativeAmount]% damage from own area attacks` | 受到自身范围攻击时，仅承受 [relativeAmount]% 的伤害 |
| `Takes [relativeAmount]% counter damage from each unit hit by its area attacks` | 其范围攻击每击中一个单位，自身就会承受该单位 [relativeAmount]% 的反击伤害 |

- 添加统计面板数据导出为 csv 表格的功能

---

## v4.19.15

**发布日期**：2026.2.26

- 为安卓端安装包加入内置模组 [CoeHarMod/和合共生](https://github.com/AutumnPizazz/CoeHarMod)
- 允许相邻城市切换地块，需要在模组的 ModOptions.json 文件中声明 uniques "Allow cities to claim tiles"

---

::: tip 参与反馈
欢迎通过 [GitHub](https://github.com/AutumnPizazz/unciv-chinese-community) 提交 Issue 或加入社区群反馈问题。
:::
