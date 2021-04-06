---
title: 数据库字典
---

    

## 租户表
表名：mc_tenant
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  | 主键ID  |
| name  | varchar(255)  |  |   | 租户名称  |
| status  | tinyint(4)  | 1 |   | 租户状态[1-正常2-停用]  |
| logo  | varchar(255)  |  |   | 租户Logo地址  |
| login_background  | varchar(255)  |  |   | 登录页背景图地址  |
| url  | varchar(255)  |  |   | 网站地址  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   | 创建时间  |
| updated_at  | timestamp  | null |   | 更新时间  |
| deleted_at  | timestamp  | null |   | 删除时间  |
| copyright  | varchar(255)  |  |   | 租户版权  |
| server_ips  | json  | null |   | 服务器IPs  |


## 用户表
表名：mc_user
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| phone  | char(11)  |  |   | 手机号  |
| password  | varchar(255)  |  |   | 密码  |
| name  | varchar(255)  |  |   | 姓名  |
| gender  | tinyint(1) unsigned  | 0 |   | 性别 0未定义 1男 2女  |
| department  | varchar(255)  |  |   | 部门  |
| position  | varchar(255)  |  |   | 职务  |
| login_time  | timestamp  | null |   | 上一次登陆时间  |
| status  | tinyint(1) unsigned  | 0 |   | 状态 0未启用 1正常 2禁用  |
| tenant_id  | int(11)  | 1 |   | 租户ID(mc_tenant.id)  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |
| isSuperAdmin  | tinyint(1)  | 0 |   | 是否为超级管理员 - 0否1是  |


## 企业微信授权表
表名：mc_corp
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| name  | varchar(255)  |  |   | 企业名称  |
| wx_corpid  | char(255)  |  |   | 企业微信ID  |
| social_code  | char(255)  |  |   | 企业代码(企业统一社会信用代码)  |
| employee_secret  | char(255)  |  |   | 企业通讯录secret  |
| event_callback  | varchar(255)  |  |   | 事件回调地址  |
| contact_secret  | char(255)  |  |   | 企业外部联系人secret  |
| token  | char(255)  |  |   | 回调token  |
| encoding_aes_key  | char(255)  |  |   | 回调消息加密串  |
| tenant_id  | int(11)  | 0 |   | 租户ID  |
| created_at  | timestamp  | null |   |   |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| deleted_at  | timestamp  | null |   |   |


## 企业微信每日数据统计表
表名：mc_corp_day_data
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10) unsigned  | null | PRI  |   |
| corp_id  | int(11)  | 0 |   | 企业id  |
| add_contact_num  | int(10)  | 0 |   | 新增客户数  |
| add_room_num  | int(10)  | 0 |   | 新增社群数  |
| add_into_room_num  | int(10)  | 0 |   | 新增入群数  |
| loss_contact_num  | int(10)  | 0 |   | 流失客户数  |
| quit_room_num  | int(10)  | 0 |   | 退群数  |
| date  | timestamp  | CURRENT_TIMESTAMP |   | 日期  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |


## 菜单表
表名：mc_rbac_menu
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11)  | null | PRI  | 主键  |
| parent_id  | int(11)  | null |   | 父级ID  |
| name  | varchar(255)  |  |   | 名称  |
| level  | tinyint(4)  | 1 |   | 菜单等级【1-一级菜单2-二级菜单···】  |
| path  | varchar(255)  |  |   | ID路径【id-id-id】  |
| icon  | varchar(255)  |  |   | 图标标识  |
| status  | tinyint(4)  | 1 |   | 状态【1-启动(默认)2-禁用】  |
| link_type  | tinyint(4)  | 1 |   | 链接类型【1-内部链接(默认)2-外部链接】  |
| is_page_menu  | tinyint(4)  | 1 |   | 是否为页面菜单 1-是 2-否  |
| link_url  | varchar(255)  |  |   | 链接地址【pathinfo#method】  |
| data_permission  | tinyint(1)  | 1 |   | 数据权限 【1-启用 2不启用（查看企业下数据）】  |
| operate_id  | int(11)  | 0 |   | 操作人ID【mc_user.id】  |
| operate_name  | varchar(255)  |  |   | 操作人姓名【mc_user.name】  |
| sort  | int(11)  | 99 |   | 排序  |
| created_at  | timestamp  | null |   | 创建时间  |
| updated_at  | timestamp  | null |   | 更新时间  |
| deleted_at  | timestamp  | null |   | 删除时间  |


## 角色表
表名：mc_rbac_role
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11)  | null | PRI  | 主键  |
| tenant_id  | int(11)  | null |   | 租户ID【mc_tenant.id】  |
| name  | varchar(255)  |  |   | 角色名称  |
| remarks  | varchar(255)  |  |   | 角色描述  |
| status  | tinyint(4)  | 1 |   | 状态【1-启动(默认)2-禁用】  |
| operate_id  | int(11)  | null |   | 操作人ID【mc_user.id】  |
| operate_name  | varchar(255)  |  |   | 操作人ID【mc_user.name】  |
| data_permission  | json  | null |   | 企业部门数据权限，例子[{`corpId`: `1`, `permissionType`: 1}] // 1-是(所选择企业)本用户部门 2-否 （本用户）
  |
| created_at  | timestamp  | null |   | 创建时间  |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   | 更新时间  |
| deleted_at  | timestamp  | null |   | 删除时间  |


## 角色-权限对应表
表名：mc_rbac_role_menu
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11)  | null | PRI  | 主键  |
| role_id  | int(11)  | 0 |   | 角色ID【mc_rbac_role.id】  |
| menu_id  | int(11)  | 0 |   | 菜单ID【mc_rbac_menu.id】  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   | 创建时间  |
| updated_at  | timestamp  | null |   | 更新时间  |


## 用户角色关联表
表名：mc_rbac_user_role
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11)  | null | PRI  | 主键  |
| user_id  | int(11)  | 0 |   | 用户ID【mc_user.id】  |
| role_id  | int(11)  | 0 |   | 角色ID【mc_rbac_role.id】  |
| created_at  | timestamp  | null |   | 创建时间  |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   | 更新时间  |
| deleted_at  | timestamp  | null |   | 删除时间  |


## 通讯录-员工表
表名：mc_work_employee
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| wx_user_id  | varchar(255)  |  |   | wx.userId  |
| corp_id  | int(11)  | 0 |   | 所属企业corpid（mc_corp.id）  |
| name  | varchar(255)  |  |   | 名称  |
| mobile  | char(11)  |  |   | 手机号  |
| position  | varchar(255)  |  |   | 职位信息  |
| gender  | tinyint(1) unsigned  | 0 |   | 性别。0表示未定义，1表示男性，2表示女性  |
| email  | varchar(255)  |  |   | 邮箱  |
| avatar  | varchar(255)  |  |   | 头像url  |
| thumb_avatar  | varchar(255)  |  |   | 头像缩略图  |
| telephone  | varchar(255)  |  |   | 座机  |
| alias  | varchar(255)  |  |   | 别名  |
| extattr  | json  | null |   | 扩展属性  |
| status  | tinyint(1) unsigned  | 0 |   | 激活状态: 1=已激活，2=已禁用，4=未激活，5=退出企业  |
| qr_code  | varchar(255)  |  |   | 员工二维码  |
| external_profile  | json  | null |   | 员工对外属性  |
| external_position  | varchar(255)  |  |   | 员工对外职位  |
| address  | varchar(255)  |  |   | 地址  |
| open_user_id  | char(100)  |  |   | 全局唯一id  |
| wx_main_department_id  | int(11) unsigned  | 0 |   | 微信端主部门ID  |
| main_department_id  | int(11)  | 0 |   | 主部门id(mc_work_department.id)  |
| log_user_id  | int(11) unsigned  | 0 |   | 子账户ID(mc_user.id)  |
| contact_auth  | tinyint(1)  | 2 |   | 是否配置外部联系人权限（1.是 2.否）  |
| created_at  | timestamp  | null |   |   |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| deleted_at  | timestamp  | null |   |   |


## 通讯录-部门表
表名：mc_work_department
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  | 部门ID  |
| wx_department_id  | int(11) unsigned  | 0 |   | 微信部门自增ID  |
| corp_id  | int(11) unsigned  | null |   | 企业表ID（mc_corp.id）  |
| name  | varchar(255)  |  |   | 部门名称  |
| parent_id  | int(11) unsigned  | 0 |   | 父部门ID  |
| wx_parentid  | int(11) unsigned  | null |   | 微信父部门ID  |
| order  | int(11) unsigned  | 0 |   | 排序  |
| level  | tinyint(4)  | 0 |   | 部门级别  |
| path  | varchar(255)  |   |   | 父ID路径【#id#-#id#】  |
| created_at  | timestamp  | null |   |   |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| deleted_at  | timestamp  | null |   |   |


## 通讯录-部门员工中间表
表名：mc_work_employee_department
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| employee_id  | int(11) unsigned  | 0 |   | 通讯录员工(mc_work_department.id)  |
| department_id  | int(11) unsigned  | 0 |   | 通讯录部门ID (mc_work_department.id)  |
| is_leader_in_dept  | tinyint(2)  | 0 |   | 所在的部门内是否为上级  |
| order  | int(10)  | 0 |   | 排序  |
| created_at  | timestamp  | null |   |   |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| deleted_at  | timestamp  | null |   |   |


## 通讯录-员工统计表
表名：mc_work_employee_statistic
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| corp_id  | int(10)  | null |   |   |
| employee_id  | int(10)  | null |   | 成员id (mc_work_employee.id)  |
| new_apply_cnt  | int(10)  | null |   | 发起申请数成员通过「搜索手机号」、「扫一扫」、「从微信好友中添加」、「从群聊中添加」、「添加共享、分配给我的客户」、「添加单向、双向删除好友关系的好友」、「从新的联系人推荐中添加」等渠道主动向客户发起的好友申请数量  |
| new_contact_cnt  | int(10)  | null |   | 新增客户数  |
| chat_cnt  | int(10)  | null |   | 聊天总数  |
| message_cnt  | int(10)  | null |   | 发送消息数  |
| reply_percentage  | int(10)  | null |   | 已回复聊天占比  |
| avg_reply_time  | int(10)  | null |   | 平均首次回复时长  |
| negative_feedback_cnt  | int(10)  | null |   | 删除/拉黑成员的客户数  |
| syn_time  | timestamp  | null |   | 同步时间  |
| created_at  | timestamp  | null |   |   |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| deleted_at  | timestamp  | null |   |   |


## 通讯录-员工标签表
表名：mc_work_employee_tag
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  | id  |
| wx_tagid  | int(11) unsigned  | 0 |   | 微信通许录标签 id  |
| corp_id  | int(11) unsigned  | 0 |   | 企业表ID（mc_corp.id）  |
| tag_name  | varchar(255)  |  |   | 标签名称  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| deleted_at  | timestamp  | null |   |   |


## 通讯录-员工标签中间表
表名：mc_work_employee_tag_pivot
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| employee_id  | int(11) unsigned  | null |   | 通讯录员工ID  |
| tag_id  | int(11) unsigned  | null |   | wx标签ID  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   |   |


## 渠道活码表
表名：mc_channel_code
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10) unsigned  | null | PRI  |   |
| corp_id  | int(11)  | 0 |   | 企业id  |
| group_id  | int(11)  | 0 |   | 渠道码分组id（mc_channel_code_group.id）  |
| name  | varchar(255)  |  |   | 活码名称  |
| qrcode_url  | varchar(255)  |  |   | 二维码地址  |
| wx_config_id  | varchar(255)  |  |   | 二维码凭证  |
| auto_add_friend  | tinyint(4)  | 0 |   | 自动添加好友（1.开启，2.关闭）  |
| tags  | json  | null |   | 客户标签  |
| type  | tinyint(4)  | 0 |   | 类型（1.单人，2.多人）  |
| drainage_employee  | json  | null |   | 引流成员设置  |
| welcome_message  | json  | null |   | 欢迎语设置  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 渠道活码-分组表
表名：mc_channel_code_group
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10) unsigned  | null | PRI  |   |
| corp_id  | int(11)  | null |   | 企业id  |
| name  | varchar(255)  | null |   | 分组名称  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 素材库 
表名：mc_medium
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| media_id  | varchar(255)  |  |   | 素材媒体标识[有效期3天]  |
| last_upload_time  | int(11) unsigned  | 0 |   | 上一次微信素材上传的时间戳  |
| type  | tinyint(1) unsigned  | 1 |   | 类型 1文本、2图片、3音频、4视频、5小程序、6文件素材  |
| is_sync  | tinyint(1)  | 1 |   | 是否同步素材库(1-同步2-不同步，默认:1)  |
| content  | json  | null |   | 具体内容:  |
| corp_id  | int(11) unsigned  | 0 |   | 企业表ID(mc_corp.id)  |
| medium_group_id  | int(11) unsigned  | 0 |   | 素材分组ID medium_group.id  |
| user_id  | int(11)  | 0 |   | 上传者ID  |
| user_name  | varchar(255)  |  |   | 上传者名称  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| deleted_at  | timestamp  | null |   |   |


## 素材库-分组表
表名：mc_medium_group
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| corp_id  | int(11) unsigned  | 0 |   | 企业表ID  |
| name  | varchar(255)  |  |   | 名称  |
| order  | int(11) unsigned  | 0 |   | 排序  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 客户表
表名：mc_work_contact
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| corp_id  | int(11) unsigned  | 0 |   | 企业表ID（mc_crop.id）  |
| wx_external_userid  | varchar(255)  |  |   | 外部联系人external_userid  |
| name  | varchar(255)  |  |   | 外部联系人姓名  |
| nick_name  | varchar(255)  |  |   | 外部联系人昵称  |
| avatar  | varchar(255)  |  |   | 外部联系人的头像  |
| follow_up_status  | tinyint(4)  | 0 |   | 跟进状态（1.未跟进 2.跟进中 3.已拒绝 4.已成交 5.已复购）  |
| type  | tinyint(4) unsigned  | 1 |   | 外部联系人的类型，1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户  |
| gender  | tinyint(4) unsigned  | 0 |   | 外部联系人性别 0-未知 1-男性 2-女性  |
| unionid  | varchar(255)  |  |   | 外部联系人在微信开放平台的唯一身份标识（微信unionid）  |
| position  | varchar(255)  |  |   | 外部联系人的职位，如果外部企业或用户选择隐藏职位，则不返回，仅当联系人类型是企业微信用户时有此字段
  |
| corp_name  | varchar(255)  |  |   | 外部联系人所在企业的简称，仅当联系人类型是企业微信用户时有此字段
  |
| corp_full_name  | varchar(255)  |  |   | 外部联系人所在企业的主体名称  |
| external_profile  | json  | null |   | 外部联系人的自定义展示信息  |
| business_no  | varchar(255)  |  |   | 外部联系人编号  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 客户-员工中间表
表名：mc_work_contact_employee
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| employee_id  | int(11) unsigned  | 0 |   | 通讯录表ID（work_employee.id）  |
| contact_id  | int(11) unsigned  | 0 |   | 客户表ID（work_contact.id）  |
| remark  | varchar(255)  |  |   | 员工对此外部联系人的备注  |
| description  | varchar(255)  |  |   | 员工对此外部联系人的描述  |
| remark_corp_name  | varchar(255)  |  |   | 员工对此客户备注的企业名称  |
| remark_mobiles  | json  | null |   | 员工对此客户备注的手机号码  |
| add_way  | int(11) unsigned  | null |   | 表示添加客户的来源 0-未知来源 1-扫描二维码 2-搜索手机号 3-名片分享 4-群聊 5-手机通讯录 6-微信联系人 7-来自微信的添加好友申请 8-安装第三方应用时自动添加的客服人员 9-搜索邮箱 201-内部成员共享 202-管理员/负责人分配  |
| oper_userid  | varchar(255)  |  |   | 发起添加的userid，如果成员主动添加，为成员的userid；如果是客户主动添加，则为客户的外部联系人userid；如果是内部成员共享/管理员分配，则为对应的成员/管理员userid
  |
| state  | varchar(255)  |  |   | 企业自定义的state参数，用于区分客户具体是通过哪个「联系我」添加，由企业通过创建「联系我」方式指定
  |
| corp_id  | int(11) unsigned  | 0 |   | 企业表ID（corp.id）  |
| status  | tinyint(4)  | 1 |   | 1.正常 2.删除 3.拉黑  |
| create_time  | timestamp  | CURRENT_TIMESTAMP |   | 员工添加此外部联系人的时间  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 客户-跟进记录表
表名：mc_contact_employee_process
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| corp_id  | int(11) unsigned  | 0 |   | 企业表ID（corp.id）  |
| employee_id  | int(11) unsigned  | 0 |   | 员工ID（mc_work_employee.id）  |
| contact_id  | int(11) unsigned  | 0 |   | 外部联系人ID（mc_work_contact.id）  |
| contact_process_id  | int(11) unsigned  | 0 |   | 跟进流程ID  |
| content  | text  | null |   | 跟进内容  |
| file_url  | json  | null |   | 附件地址  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 客户-互动轨迹表
表名：mc_contact_employee_track
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| employee_id  | int(11) unsigned  | 0 |   | 通讯录ID(mc_work_employee.id)  |
| contact_id  | int(11) unsigned  | 0 |   | 外部联系人ID work_contact.id  |
| event  | tinyint(4)  | 0 |   | 事件  |
| content  | varchar(255)  |  |   | 内容  |
| corp_id  | int(11) unsigned  | 0 |   | 企业表ID corp.id  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 客户跟进状态
表名：mc_contact_process
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| corp_id  | int(11) unsigned  | 0 |   | corp表id  |
| name  | varchar(255)  |  |   | 名称  |
| description  | varchar(255)  |  |   | 描述  |
| order  | int(11) unsigned  | 0 |   | 排序  |
| created_at  | timestamp  | null |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 通讯录同步时间表
表名：mc_work_update_time
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10) unsigned  | null | PRI  |   |
| corp_id  | int(11)  | 0 |   | 企业表ID（mc_crop.id）  |
| type  | tinyint(4)  | 0 |   | 类型（1.通讯录，2.客户，3.标签，4.部门 5.会放内容存档 6.企业数据）  |
| last_update_time  | timestamp  | null |   | 最后一次同步时间  |
| error_msg  | json  | null |   | 错误信息  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   |   |


## 客户-高级属性表
表名：mc_contact_field
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| name  | varchar(255)  |  |   | 字段标识 input-name  |
| label  | varchar(255)  |  |   | 字段名称 input-label  |
| type  | tinyint(1) unsigned  | 0 |   | 字段类型 input-type 0text 1radio 2 checkbox 3select 4file 5date 6dateTime 7number 8rate  |
| options  | json  | null |   | 字段可选值 input-options  |
| order  | int(11) unsigned  | 0 |   | 排序  |
| status  | tinyint(1) unsigned  | 0 |   | 状态 0不展示 1展示  |
| is_sys  | tinyint(1) unsigned  | 0 |   | 是否为系统字段 0否1是  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 客户-高级属性中间表
表名：mc_contact_field_pivot
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| contact_id  | int(11) unsigned  | 0 |   | 客户表ID（work_contact.id）  |
| contact_field_id  | int(11) unsigned  | 0 |   | 高级属性表ID(contact_field.id）  |
| value  | text  | null |   | 高级属性值  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 客户-标签表
表名：mc_work_contact_tag
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  | 企业标签ID  |
| wx_contact_tag_id  | varchar(255)  |  |   | 微信企业标签ID  |
| corp_id  | int(11) unsigned  | 0 |   | 企业表ID （mc_corp.id）  |
| name  | varchar(255)  |  |   | 标签名称  |
| order  | int(11) unsigned  | 0 |   | 排序  |
| contact_tag_group_id  | int(11) unsigned  | 0 |   | 客户标签分组ID（mc_work_contract_tag_group.id）  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 客户标签 - 分组
表名：mc_work_contact_tag_group
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| wx_group_id  | varchar(60)  |  |   | 微信企业标签分组ID  |
| corp_id  | int(11) unsigned  | 0 |   | 企业表ID （mc_corp.id）  |
| group_name  | varchar(30)  |  |   | 客户标签分组名称  |
| order  | int(11) unsigned  | 0 |   | 排序  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 客户-标签关联表
表名：mc_work_contact_tag_pivot
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| contact_id  | int(11) unsigned  | null |   | 客户表ID（work_contact.id）  |
| employee_id  | int(11)  | 0 |   | 员工表id（work_employee.id）  |
| contact_tag_id  | int(11) unsigned  | null |   | 客户标签表ID（work_contact_tag.id）  |
| type  | tinyint(4)  | 0 |   | 该成员添加此外部联系人所打标签类型, 1-企业设置, 2-用户自定义  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 客户群表
表名：mc_work_room
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10) unsigned  | null | PRI  |   |
| corp_id  | int(11) unsigned  | 0 |   | 企业表ID（mc_corp.id）  |
| wx_chat_id  | varchar(255)  |  |   | 客户群ID  |
| name  | varchar(255)  |  |   | 客户群名称  |
| owner_id  | int(11) unsigned  | 0 |   | 群主ID（work_employee.id）  |
| notice  | text  | null |   | 群公告  |
| status  | tinyint(4) unsigned  | 0 |   | 客户群状态（0 - 正常 1 - 跟进人离职 2 - 离职继承中 3 - 离职继承完成）  |
| create_time  | timestamp  | CURRENT_TIMESTAMP |   | 群创建时间  |
| room_max  | int(10)  | 0 |   | 群成员上限  |
| room_group_id  | int(11) unsigned  | 0 |   | 分组id（work_room_group.id）  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 客户群分组管理表
表名：mc_work_room_group
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10) unsigned  | null | PRI  |   |
| corp_id  | int(11) unsigned  | null |   | 企业表ID（mc_corp.id）  |
| name  | varchar(255)  | null |   | 分组名称  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 客户群-关联表
表名：mc_work_contact_room
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| wx_user_id  | varchar(255)  |  |   |   |
| contact_id  | int(11) unsigned  | 0 |   | 客户表id（work_contact.id）  |
| employee_id  | int(11) unsigned  | 0 |   | 员工ID (work_employee.id)  |
| unionid  | varchar(255)  |  |   | 仅当群成员类型是微信用户（包括企业成员未添加好友），且企业或第三方服务商绑定了微信开发者ID有此字段  |
| room_id  | int(11) unsigned  | 0 |   | 客户群表id（work_room.id）  |
| join_scene  | tinyint(1) unsigned  | 3 |   | 入群方式1 - 由成员邀请入群（直接邀请入群）2 - 由成员邀请入群（通过邀请链接入群）3 - 通过扫描群二维码入群  |
| type  | tinyint(4) unsigned  | 1 |   | 成员类型（1 - 企业成员 2 - 外部联系人）  |
| status  | tinyint(4)  | 1 |   | 成员状态。1 - 正常2 -退群  |
| join_time  | timestamp  | CURRENT_TIMESTAMP |   | 入群时间  |
| out_time  | varchar(50)  |  |   | 退群时间  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 企业应用表
表名：mc_work_agent
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10) unsigned  | null | PRI  |   |
| corp_id  | int(11)  | null |   | 企业ID  |
| wx_agent_id  | varchar(255)  |  |   | 微信应用ID  |
| wx_secret  | varchar(255)  |  |   | 微信应用secret  |
| name  | varchar(255)  |  |   | 应用名称  |
| square_logo_url  | varchar(255)  |  |   | 应用方形头像  |
| description  | varchar(255)  |  |   | 应用详情  |
| close  | tinyint(4)  | 0 |   | 应用是否被停用 0否1是  |
| redirect_domain  | varchar(255)  |  |   | 应用可信域名  |
| report_location_flag  | tinyint(4)  | 0 |   | 应用是否打开地理位置上报 0：不上报；1：进入会话上报；  |
| is_reportenter  | tinyint(4)  | 0 |   | 是否上报用户进入应用事件。0：不接收；1：接收  |
| home_url  | varchar(255)  |  |   | 应用主页url  |
| type  | tinyint(4)  | null |   | 应用类型 1-侧边栏 2-会话消息 3-工作台  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 侧边栏表
表名：mc_chat_tool
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10) unsigned  | null | PRI  |   |
| page_name  | varchar(255)  |  |   | 侧边栏页面名称  |
| page_flag  | varchar(255)  |  |   | 侧边栏页面标识  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |
| status  | tinyint(4)  | 1 |   | 状态 0否 1是  |


## 会话存档-消息表
表名：mc_work_message_1
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| corp_id  | int(11) unsigned  | 0 |   | 企业表ID （mc_corp.id）  |
| seq  | int(11) unsigned  | 0 |   | 消息的seq值，标识消息的序号  |
| msg_id  | varchar(64)  |  | UNI  | 消息唯一标识  |
| action  | tinyint(1) unsigned  | 0 |   | 消息动作，0.send(发送消息) 1.recall(撤回消息) 2.switch(切换企业日志)  |
| from  | varchar(255)  | null |   | 消息发送方id。同一企业内容为userid，非相同企业/机器人为external_userid  |
| tolist  | json  | null |   | 消息接收方列表，可能是多个，同一个企业内容为userid，非相同企业为external_userid  |
| tolist_id  | json  | null |   | 接收方ID  |
| tolist_type  | tinyint(4)  | 0 |   | 接收方类型 0通讯录 1外部联系人 2群  |
| msg_type  | tinyint(4)  | 0 |   | 文本消息类型，包括text、image、...  |
| content  | json  | null |   | 文本内容：详细见wx文档  |
| msg_time  | char(13)  | 0 |   | 消息发送时间戳，utc时间，ms单位  |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| wx_room_id  | varchar(255)  |  |   | 微信群id。如果是单聊则为空  |
| room_id  | int(11)  | 0 |   | 群ID  |


## 会话存档-信息检索表
表名：mc_work_message_index
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11)  | null | PRI  |   |
| corp_id  | int(11)  | null |   | 企业表ID  |
| to_id  | int(11)  | null |   | 接收方ID  |
| to_type  | tinyint(4)  | 0 |   | 接收方类型 0员工 1外部联系人 2群  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| from_id  | int(11)  | null |   | 发送方ID(员工ID)  |
| flag  | varchar(30)  |  |   |   |


## 会话存档-配置表
表名：mc_work_message_config
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11) unsigned  | null | PRI  |   |
| corp_id  | int(11) unsigned  | 0 |   | 企业ID  |
| chat_admin  | varchar(255)  |  |   | (会话内容)企业管理员名称  |
| chat_admin_phone  | char(11)  |  |   | (会话内容)企业管理员手机号  |
| chat_admin_idcard  | char(18)  |  |   | (会话内容)管理员身份证  |
| chat_apply_status  | tinyint(3) unsigned  | 0 |   | (会话内容)申请进度 0未申请 1填写企业信息 2添加客服提交资料 3配置后台 4完成  |
| chat_rsa_key  | json  | null |   | (会话内容)公、私钥，例如：{`public_key`: `公钥`,`private_key`: `私钥`,`version`: `版本号`}  |
| chat_secret  | varchar(255)  |  |   | (会话内容)密钥  |
| chat_status  | tinyint(1) unsigned  | 0 |   | (会话内容)存档状态 0不存储 1存储  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 智能风控-敏感词词库表
表名：mc_sensitive_word
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10) unsigned  | null | PRI  |   |
| corp_id  | int(11)  | 0 |   | 企业id  |
| name  | varchar(255)  |  |   | 敏感词名称  |
| group_id  | int(11)  | 0 |   | 智能风控分组id（mc_sensitive_word_group.id）  |
| status  | tinyint(4)  | 0 |   | 状态（1-开启，2-关闭）  |
| employee_num  | tinyint(4)  | 0 |   | 员工触发次数  |
| contact_num  | tinyint(4)  | 0 |   | 客户触发次数  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 智能风控-分组表
表名：mc_sensitive_word_group
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10)  | null | PRI  |   |
| corp_id  | int(11)  | 0 |   | 企业id  |
| user_id  | int(11)  | null |   | 用户id(mc_user.id)  |
| employee_id  | int(11)  | null |   | 员工id （mc_work_employee.id)  |
| name  | varchar(255)  |  |   | 分组名称  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 智能风控-敏感词监控表
表名：mc_sensitive_word_monitor
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10) unsigned  | null | PRI  |   |
| corp_id  | int(11)  | 0 |   | 企业id  |
| sensitive_word_id  | int(11)  | 0 |   | 敏感词词库表id(mc_sensitive_word.id)  |
| sensitive_word_name  | varchar(255)  | null |   | 敏感词词库表名称(mc_sensitive_word.name)  |
| source  | tinyint(4)  | 0 |   | 触发来源【1-客户2-员工】  |
| trigger_id  | int(11)  | 0 |   | 触发人id  |
| trigger_name  | varchar(255)  |  |   | 触发人名称  |
| trigger_time  | timestamp  | null |   | 触发时间  |
| receiver_type  | tinyint(4)  | null |   | 接收者类型【1-成员2-外部联系人3-群聊】  |
| receiver_id  | int(11)  | 0 |   | 接收者ID  |
| receiver_name  | varchar(255)  |  |   | 接收者名称  |
| work_message_id  | int(11)  | 0 |   | 触发消息ID【mc_work_message.id】  |
| chat_content  | json  | null |   | 会话内容  |
| created_at  | timestamp  | null |   |   |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| deleted_at  | timestamp  | null |   |   |


## 业务日志表
表名：mc_business_log
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10) unsigned  | null | PRI  |   |
| business_id  | int(11)  | 0 |   | 相应业务id  |
| params  | json  | null |   | 参数  |
| event  | smallint(6)  | 4 |   | 事件  |
| operation_id  | int(11)  | 0 |   | 操作人id（mc_work_employee.id）  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |


## 系统日志
表名：mc_sys_log
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(11)  | null | PRI  | 主键  |
| url_path  | varchar(255)  |  |   | 请求链接【/user/create】  |
| method  | varchar(50)  | null |   | 请求方法【get|post|put】  |
| query  | varchar(255)  |  |   | GET参数  |
| body  | json  | null |   | body参数  |
| menu_id  | int(11)  | null |   | 菜单ID【mc_rbac_menu.id】  |
| menu_name  | varchar(255)  | null |   | 菜单名称【mc_rbac_menu.name】  |
| operate_id  | int(11)  | 0 |   | 操作人ID【mc_user.id】  |
| operate_name  | varchar(255)  |  |   | 操作人姓名【mc_user.name】  |
| created_at  | timestamp  | null |   | 创建时间  |
| updated_at  | timestamp  | CURRENT_TIMESTAMP |   | 更新时间  |
| deleted_at  | timestamp  | null |   | 删除时间  |


## 插件表
表名：mc_plugin
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10)  | null | PRI  |   |
| corp_id  | int(11)  | 0 |   | 企业id  |
| name  | varchar(255)  |  |   | 插件名称  |
| version  | varchar(255)  | null |   | 版本号  |
| content  | varchar(255)  |  |   | 简介  |
| status  | tinyint(4)  | 0 |   | 状态（1-启用，2-禁用）  |
| created_at  | timestamp  | CURRENT_TIMESTAMP |   |   |
| updated_at  | timestamp  | null |   |   |
| deleted_at  | timestamp  | null |   |   |


## 数据库迁移表
表名：mc_migrations
| 字段名称  | 类型 | 默认值 | 属性 | 字段说明 |
| ------ | -------- | ----------- | ------------- |------------ |
| id  | int(10) unsigned  | null | PRI  |   |
| migration  | varchar(255)  | null |   |   |
| batch  | int(11)  | null |   |   |
