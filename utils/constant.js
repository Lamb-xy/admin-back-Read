const { env } = require('./env')
const UPLOAD_PATH =
	env === 'dev'
		? 'D:/source/admin-upload-ebook'
		: '/root/upload/admin-upload-ebook'

const UPLOAD_URL =
	env === 'dev'
		? 'http://127.0.0.1:80/admin-upload-ebook'
		: 'https://xiaoyangmm.top/admin-upload-ebook'

const OLD_UPLOAD_URL =
	env === 'dev'
		? 'http://127.0.0.1:80/book/res/img'
		: 'https://127.0.0.1:80/book/res/img'

module.exports = {
	CODE_ERROR: -1,
	CODE_TOKEN_EXPIRED: -2,
	CODE_SUCCESS: 0,
	PWD_SALT: 'admin_imooc_node',
	PRIVATE_KEY: 'admin_imooc_node_test_youbaobao_xyz',
	JWT_EXPIRED: 1200 * 60, // token失效时间
	UPLOAD_PATH, // 上传文件路径
	UPLOAD_URL, // 上传文件URL前缀
	MIME_TYPE_EPUB: 'application/epub+zip',
	UPDATE_TYPE_FROM_WEB: 1,
	OLD_UPLOAD_URL,
}
