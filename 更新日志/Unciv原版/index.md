---
title: Unciv 原版更新日志
---

## Unciv 原版更新日志

本文为 [Unciv 官方更新日志](https://github.com/yairm210/Unciv/blob/master/changelog.md) 的中文翻译。

---

## 4.20.7

- 大幅地图的渲染性能优化
- 修复军事存在检查的 Bug — by unciv-loof
- 新增 "cannot build xx buildings" unique — by chenxing61

## 4.20.6

By SeventhM:
- 允许在全局/政策/时代 unique 中启用大使馆，不再仅限于科技
- 修复派遣大使馆的冗余条件要求
- 新增已工作地块/人口的计数条件
- 修复大先知花费异常计算的边界情况

- 改进语言处理，优化首次运行语言选择器的体验 — By SomeTroglodyte
- CPU 性能优化 — By Ambeco

## 4.20.5

- **模组开发**：正确处理规则集禁用 unique 时的过滤 unique
- **模组开发**：检测 AI 可能陷入死循环的事件链

By SomeTroglodyte:
- 改进文明百科中与大使馆相关的外交概念说明
- 修复地图编辑器崩溃

- 新增"单位阵亡时触发" unique — By PLynx01
- 处理所有屏幕方向的显示裁切，修复旋转问题 — By Gatien-L

## 4.20.4

- **模组开发**：当 unique 在当前规则集中被禁用时，忽略与该规则集相关的错误

By SomeTroglodyte:
- 宗教/间谍系统被禁用时隐藏相关需求
- 修复在间谍界面将间谍移动到未知文明城市时的空指针异常

By unciv-loof:
- 补充城市抵抗状态的缺失表格行

By Ambeco:
- Unciv 可直接接收游戏邀请或好友添加链接
- 防止更多类型的随机结果被 SL 利用

- 新增选项：禁止工人移除植被 — By Emandac

## 4.20.3

- 从旧存档开始新游戏时，自定义地图将被保留
- 被摧毁城市中的间谍正确"撤离"
- 观察者可以再次查看建筑列表

By unciv-loof:
- 违背不再刺探承诺前弹出确认框
- ConstructImprovementInstantly 现在会清除地块改良队列

- 修复城市中单位选择的 Bug — By ValeraShimchuck

By Ambeco:
- AI：攻击前最小化移动
- PathingMap 现在支持 BFS，将移动消耗纳入考虑

## 4.20.2

By unciv-loof:
- 恢复显示设置中禁用单位模型渲染的选项
- 关闭新游戏界面警告后不再强制重置模组选择
- 点击勒索和征服城邦任务时，地图视角居中到目标首都
- 宣战弹窗中不再显示空消息
- AI 可同时谴责多个文明

- 允许通过触发器获得的信仰使用可触发的 unique — by SeventhM
- 海洋浮冰应再次生成 — by Ambeco

## 4.20.1

- 大幅降低内存消耗
- 地块进入文明领土时移除野蛮人营地
- 对第三方的和平/宣战声明不再被视为贸易"赠礼"
- 修复城市购买时的罕见崩溃
- 具有"迁都时迁移至新首都"属性的建筑在城市被占领时不再被摧毁
- 桌面可执行文件：最大 JVM 内存实际提升至 4GB
- 通知按顺序在 UI 中显示

By unciv-loof:
- 谴责弹窗支持可模组化的消息和音效
- 第 0 回合自动存档

## 4.20.0

By unciv-loof:
- 修复大使馆贸易逻辑 Bug
- 其他文明回应要求后弹出通知

By SeventhM:
- 新增当前单位移动力条件判断
- 修复禁用的 unique 在意想不到的地方被忽略的问题

- 工人自动化性能的理论性改进 — By Ambeco
- 修复多人游戏预览描述中的翻译 — By evanofficial（新贡献者！）
- 新增"签署和平条约时触发" unique — By PLynx01

## 4.19.19

- 删除包含地块集的模组后重置地块集设置
- AI 忽略已灭亡文明的要求/宣友

By Ambeco:
- AStar 寻路不再将河流视为多回合障碍
- 平面六角地图不再崩溃

- Bug 修复：不要在已有平民单位的城市中尝试购买传教士 — By EmperorPinguin

## 4.19.18

- 忽略免费晋升的晋升路径成本
- 允许在获得经验值之前获得免费晋升

By Ambeco:
- 模组可以有多个海洋和海岸地形
- AStar 移动经过与 Classic 相同的格子

- 新增 showDemographics 选项 — By ICanSeeForever
- 强制解散单位考虑退款能力和晋升 — By unciv-loof
- DenounceWillingness 人格特质 — by unciv-loof
- AI：只有在能创立自己宗教时才因传教而生气 — By EmperorPinguin

## 4.19.17

- 新游戏界面切换规则集不再允许零胜利类型
- 用户无法通过 "-50" 按钮提供负数金币

By unciv-loof:
- 通知显示谁跳过或退出了玩家
- 新获取的模组条目尊重当前过滤器
- 宣战 + 宣友 UI 改进

By Ambeco:
- 修复备用寻路 Bug
- 单位行动和单位触发器具有可模组化的优先级
- 消除了大多数硬编码地形

## 4.19.16

- 默认最大内存从 1GB 提升至 4GB——2026 年了，让玩家尽情发挥吧
- 间谍城市视野限制功能 — By ICanSeeForever
- 淡水自然奇观不再显示为湖泊 — By Ambeco
- 根据游戏速度调整要求和"我们爱国王日"持续时间 — By unciv-loof

## 4.19.15

- 更明确地警告大地图可能导致内存崩溃
- 规则集验证中捕获带有 occursOn 的基础地形
- 移除含有改良设施创建建筑但无城市地块的改良设施时不再崩溃
- 城市可以攻击已揭示的隐身单位

By Ambeco:
- 添加备用寻路算法
- 丛林不再生成在丘陵上
- 地图生成时忽略稀有要素放置普通地块

- 为可计数表达式添加 max()、min() 函数 — By AutumnPizazz

## 4.19.14

- 在地图上为当前提供的资源添加星标图标
- 统一下 N 次晋升与单次晋升的经验值成本
- AI 自动谴责 — By unciv-loof

By AutumnPizazz:
- 新增游戏选项隐藏胜利画面统计数据
- 将 'Set [stockpile] to [amount]' 改为 'Set [stockpile] to [countable]'

- 地图生成支持多种山脉、丘陵、冰层、雪地、湖泊和植被 — By Ambeco

## 4.19.13

- 清除被复活文明的修正器和倒计时
- 傀儡城市正确移除"由建筑标记为待改良"的标记

模组开发：
- 特定金币购买费用 unique 始终覆盖默认费用
- 放置在单位上的全局 unique 可接受单位触发条件

By unciv-loof:
- 边境扩张逻辑优化：
  - 考虑工作范围边缘的邻近加成资源
  - 不考虑未探索地块
  - 略微优先选择有争议的地块

## 4.19.12

- 被覆盖政策分支中的政策不再"残留"影响 UI
- 在资源概览中添加已库存战略资源
- 新增 "Set [stockpile] to [amount]" 触发型 unique
- 未经用户允许不自动复制模组列表下载错误到剪贴板
- 加载缺少模组的游戏时先下载所有可用模组，再通知问题
- 查找文明等效单位时，若替代单位在规则集中不存在，不再崩溃

## 4.19.11

- "单位可晋升"通知显示正确的单位名称
- 修复第三方文明的宣友外交变化
- 对累积型外交修正器添加限制，特别是针对受保护城邦的负面修正器
- 城邦任务采用"一致性随机"
- 修复伟人不创建改良设施的问题
- 当单位无法接近目标时派遣不再导致单位图片消失
- "Must not be on [amount] largest landmasses" 兼容资源 — By chenxing61

## 4.19.10

- 新增 `[cityFilter] Cities of [civFilter] Civilizations` 可计数条件 — By RobLoach
- 人口食物消耗 unique — By PLynx01
- 修复胜利画面图表对观察者的可见性和布局 — By SomeTroglodyte
- 在线游戏可自定义游戏时长 — By AubertJocelyn（新贡献者！）

---

::: tip 更多版本
以上仅收录近期版本。完整历史版本请参见 [Unciv 官方更新日志](https://github.com/yairm210/Unciv/blob/master/changelog.md)。
:::
