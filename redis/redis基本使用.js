// 内存数据结构存储
// 可持久存储
// 支持多种数据结构
// redis-cli =>通过这个commend进行数据库连接
// 密码登录  => 查看视频，比如设置port为6379，并设置密码为。。。。


// terminal => redis-server
// set b 111 => OK      通过set来设置某个key的值
// get b => "111"       通过get来获取指定key的值
// setex c 10 1 c这个key，值为1， 10秒钟后自动删除（过期）
// gey c => 1
// get c => nil (10秒后变为nil)

// redis是基于key,value来存储的,不像mysql是有table概念的，
// 所以为了避免后面的key跟前面的key重合（覆盖）,可以在前面加一个模块（例如：session）
// set session:sessionId 123
// get session:sessionId => "123"

// KEYs *   => 查找所有的key
// DEL a    => 删除key为a的这个key
