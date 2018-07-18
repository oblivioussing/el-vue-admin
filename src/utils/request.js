import router from '../router'
import axios from 'axios'
import qs from 'qs'

(() => {
	let u = {}
	// base模块get请求
	u.getBase = (async (path, params) => {
		return await $request.get(CX_BASE_URL + path, params)
	})
	// base模块post请求
	u.postBase = (async (path, params) => {
		return await $request.post(CX_BASE_URL + path, params)
	})
	// mao模块get请求
	u.getMao = (async (path, params) => {
		return await $request.get(CX_MAO_URL + path, params)
	})
	// mao模块post请求
	u.postMao = (async (path, params) => {
		return await $request.post(CX_MAO_URL + path, params)
	})
	// get请求
	u.get = (async (path, params) => {
		const config = {
			method: 'get',
			url: path,
			params: params
		}
		return await $request.request(config)
	})
	// post请求
	u.post = (async (path, params) => {
		const config = {
			method: 'post',
			url: path,
			data: qs.stringify(params, { indices: false })
		}
		return await $request.request(config)
	})
	// 上传文件
	u.upFile = (async (path, params) => {
		const config = {
			method: 'post',
			headers: { 'Content-Type': 'multipart/form-data' },
			url: path,
			data: qs.stringify(params)
		}
		return await $request.request(config)
	})
	// 发起请求
	u.request = (config) => {
		return new Promise((resolve) => {
			config.withCredentials = true
			config.timeout = TIME_OUT
			axios(config).then(ret => {
				const resultCode = ret.data.resultCode
				const stateArr = [AUTH_FAIL, NO_LOGIN, LONGIN_EXPIRE, TOKEN_SALT_NOT_NULL]
				if (stateArr.indexOf(resultCode) >= 0) {
					router.push({ path: '/login' })
				} else if (resultCode === AUTH_FAIL) {
					router.push({ path: '*' })
				} else {
					resolve(ret.data)
				}
			}).catch(err => {
				resolve({ error: err, resultMsg: '服务器错误' })
			})
		})
	}

	window.$request = u
})()
