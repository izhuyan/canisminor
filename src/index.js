import { message } from 'antd';
import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import Console from './utils/console';
import Wechat from './utils/wechat';
import './index.scss'

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
	                history: createHistory(),
	                onError(e) {
		                message.error(e.message, ERROR_MSG_DURATION);
	                }
                });

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/getBlogToc'));
app.model(require('./models/getBlogPage'));
app.model(require('./models/getProjectToc'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

// 6. Other
if (process.env.NODE_ENV !== 'development') {
	Wechat();
	Console();
}