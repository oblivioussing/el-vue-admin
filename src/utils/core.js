let u = {}
let ls = localStorage
let ss = sessionStorage
//添加缓存
u.setLocal = (key, value) => {
	let v = value
	v = typeof v == 'object' ? 'obj-' + JSON.stringify(v) : 'str-' + v
	ls && ls.setItem(key, v)
}
//获取缓存
u.getLocal = key => {
	let v = ls.getItem(key)
	if (v) {
		v = $core.getStorageValue(v)
		return v
	}
}
//获取值
u.getStorageValue = (v) => {
	if (v.indexOf('obj-') === 0) {
		v = v.slice(4)
		return JSON.parse(v)
	} else if (v.indexOf('str-') === 0) {
		return v.slice(4)
	}
}
//添加session
u.setSession = (key, value) => {
	let v = value
	v = typeof v == 'object' ? 'obj-' + JSON.stringify(v) : 'str-' + v
	ss.setItem(key, v)
}
//获取session
u.getSession = key => {
	let v = ss.getItem(key)
	if (v) {
		v = $core.getStorageValue(v)
		return v
	}
}
//清空某个缓存
u.rmLocal = key => {
	key && ls.removeItem(key)
}
//清空某个session
u.rmSession = key => {
	key && ss.removeItem(key)
}
//清空所有缓存
u.clearLocal = () => {
	ls.clear()
}
//清空所有session
u.clearSession = () => {
	ss.clear()
}
//时间转为刚刚、几分钟前、几小时前
u.timeRelative = (stamp) => {
	const minute = 1000 * 60
	const hour = minute * 60
	const day = hour * 24
	const halfamonth = day * 15
	const month = day * 30
	const now = new Date().getTime()
	const diffValue = now - stamp;
	if (diffValue < 0) {
		return
	}
	const monthC = diffValue / month
	const weekC = diffValue / (7 * day)
	const dayC = diffValue / day
	const hourC = diffValue / hour
	const minC = diffValue / minute
	let result;
	if (monthC >= 1) {
		result = '' + parseInt(monthC) + '月前'
	}
	else if (weekC >= 1) {
		result = '' + parseInt(weekC) + '周前'
	}
	else if (dayC >= 1) {
		result = '' + parseInt(dayC) + '天前'
	}
	else if (hourC >= 1) {
		result = '' + parseInt(hourC) + '小时前'
	}
	else if (minC >= 1) {
		result = '' + parseInt(minC) + '分钟前'
	} else {
		result = '刚刚'
	}
	return result
}

export default u

