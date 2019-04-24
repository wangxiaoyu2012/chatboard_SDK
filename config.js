let config = {
	edition:false,
	bucket: `trainboard`,
	agoraAPPID: `ed24a5bda776459097638962e5c88e68`,

    socket:"ws://192.168.0.31:8081/websocket",
    SERVER_URL_BASE_DEMO:'http://192.168.0.31:8989/Demo',
    SERVER_URL_BASE_FILE:'http://192.168.0.31:8082/FileServer',
    SERVER_URL_BASE_WHITEBOARD:'http://192.168.0.31:8080/Chatboard',



	/*
	* 茶桌版本
	* */
	browser_title:'茶桌',
	meetingOrCurriculum:'会议',
	mail_list:'联系人',
	cloud_disk_text:'云盘',

	cloud_catalog_text:'文件',
	//登录页标题
	login_title: 'ChatBoard.',
	//登录页标题信息
	login_title_info: '登录你的ChatBoard账号',
	//登录页欢迎界面
	login_welcomePage_title: '欢迎来到茶桌ChatBoard！',
	//登录页欢迎界面公司/学校未设置
	company: '公司',
	//登录页欢迎界面职位/身份未设置
	honor: '职位',
	//登录页欢迎界面发起会议/新建课程
	login_welcomePage_openMeeting: '发起会议',
	//登录页欢迎界面发起会议/新建课程
	login_welcomePage_joinMeeting: '加入会议',
	//首页未设置身份信息警告
	homePage_personal_info_warning: '您当前使用的是默认的头像和昵称，为了更好的展示你在会议中的身份信息，请修改您的个人资料',
	//首页会议缺省提示信息
	homePage_default_text: '会议列表是空的，去发起一个会议吧！',
	//首页发起会议
	homePage_open_meeting: '发起会议',
	//首页新建会议
	homePage_create_meeting: '新建会议',
	//首页上次会议时间
	homePage_recent_meeting_time:'上次会议时间',
	//首页正在进行中会议，会议名称
	homePage_ongoing_meeting_name:'会议名称',
	//首页正在进行中会议，会议描述
	homePage_ongoing_meeting_describe:'会议描述',
	//首页正在进行中会议，会议发起人
	homePage_ongoing_meeting_originator:'会议发起人',
	//首页正在进行中会议，会议成员
	homePage_ongoing_meeting_members: '会议成员',
	//首页历史会议title
	homePage_all_meeting_title:'历史会议',
	//首页关键字相关会议
	homePage_keyword_meeting_text:'关键字相关会议',
	//首页返回查看历史会议
	homePage_back_all_meeting_text:'查看历史会议',
	//首页搜索关键字查找会议
	homePage_search_keywords:'搜索关键字查找会议',
	//会议纪要
	teaching_emphasis:'会议纪要',
	//node管理
	membersDetails:'会议成员管理',
	//云盘缺省文字
	cloud_disk_default_text:'您还没有收藏任何东西',
};

try {
    let ipc = require('electron').ipcRenderer;
    document.getElementById('minbt').addEventListener('click', () => {
        ipc.send('window-min');
    });
    document.getElementById('minbtTop').addEventListener('click', () => {
        ipc.send('window-min');
    });
    document.getElementById('closebt').addEventListener('click', () => {
        ipc.send('window-close');
    });
    document.getElementById('closebtTop').addEventListener('click', () => {
        ipc.send('window-close');
    });
} catch (e) {
}
let electron = null;
try {
    electron = require('electron');
} catch (e) {
    document.body.style.maxHeight = `${document.documentElement.clientHeight}px`;
    if(document.getElementById(`content`)) document.getElementById(`content`).style.height = `${document.documentElement.clientHeight - 30}px`;
    $(`.windowNav`).empty();
    $(`.loadingNav`).empty();
}
document.ondragenter = function (e) {
    e.preventDefault();
    e.stopPropagation();
};
document.ondragover = function (e) {
    e.preventDefault();
    e.stopPropagation();
};
