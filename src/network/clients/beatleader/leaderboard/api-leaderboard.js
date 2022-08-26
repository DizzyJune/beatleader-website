import queue from '../../../queues/queues';
import createClient from '../../generic';
import {process} from './utils/process';

const get = async ({leaderboardId, page = 1, filters = {}, priority = queue.PRIORITY.FG_HIGH, ...queueOptions} = {}) =>
	queue.BEATLEADER_API.leaderboard(leaderboardId, page, filters, priority, queueOptions);

const client = createClient(get, process);

export default client;
